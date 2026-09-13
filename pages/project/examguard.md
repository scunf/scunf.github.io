---
title: ExamGuard - 局域网考试监控系统分析
layout: project
date: 2026-07-05
updated: 2026-07-05
categories: project security
tags:
  - examguard
  - python
  - tcp
  - reverse-engineering
  - windows
top: 2
---

## 项目概览

ExamGuard 是从 `StudentApp.exe`（PyInstaller 打包程序）反编译和整理出的局域网考试监控系统分析项目。它把教师端、学生端、通信协议、文件传输、监控日志和静态分析材料放在同一个仓库中，适合用于理解桌面程序结构、网络协议和 Windows 进程监控实现。

该项目涉及考试监控和远程控制能力，实际运行、测试或修改时必须取得明确授权，并遵守学校、组织和当地法律规定。

## 系统结构

```text
教师端
  TCP 服务端 + Tkinter 控制台 + SQLite
        |
        v
局域网 TCP/UDP 通信
        |
        v
学生端
  Tkinter 登录界面 + TCP 客户端 + 进程/窗口监控
```

仓库主要目录：

- `common/`：配置、JSON 协议、TCP 文件传输和 Windows 防火墙规则。
- `teacher/`：TCP 服务、多客户端处理、数据库、GUI 和 UDP 广播发现。
- `student/`：TCP 客户端、心跳、监控数据上报和进程/窗口监控。
- `student_mydemo/`：学生端演示或修改版本。
- `StudentApp.exe_extracted/`：PyInstaller 解包产物。
- `逆向分析报告_StudentApp.md`：详细逆向分析记录。

## 核心功能

- 教师端监听 `9527`，学生端主动连接并使用 JSON 行协议通信。
- 教师端每 3 秒在 `9528` 端口发送 UDP 广播，学生端可自动发现。
- 学生端通过 `psutil` 枚举进程，并通过 Win32 API 获取活跃窗口标题。
- 教师端可以下发远程锁定、告警和考试时间等命令。
- 支持基于 TCP 的 JSON 头加二进制体文件传输。
- 可疑进程会生成告警，教师端使用 SQLite 记录会话、日志、告警和文件记录。
- 通过 `netsh advfirewall` 自动配置 Windows 防火墙规则。

## 通信协议

协议以换行分隔 JSON 消息，主要消息类型如下：

| 消息 | 方向 | 作用 |
| --- | --- | --- |
| `login` / `login_resp` | 学生 -> 教师 | 登录认证 |
| `heartbeat` | 学生 -> 教师 | 约 3 秒一次的心跳保活 |
| `log_data` | 学生 -> 教师 | 进程列表和活跃窗口上报 |
| `cmd_start_monitor` / `cmd_stop_monitor` | 教师 -> 学生 | 启停监控 |
| `alert` | 教师 -> 学生 | 发送警告 |
| `cmd_lock` | 教师 -> 学生 | 远程锁定 |
| `exam_time` | 教师 -> 学生 | 设置考试时间段 |
| `file_transfer` | 双向 | 文件传输 |

进程分类规则将 AI 工具、浏览器和聊天软件标记为不同风险级别，同时保留系统进程和其他进程的分类。

## 快速运行

运行环境为 Python 3.10+ 和 Windows，`psutil` 为可选依赖：

```bash
pip install psutil

# 启动教师端
python teacher/app.py

# 启动学生端
python student/app.py
```

运行前应在隔离测试网络中确认端口、防火墙规则和测试账号，不能直接把未审计的程序部署到真实考试环境。

## 分析价值与限制

项目保留了从可执行文件解包到 Python 模块整理的过程，可用于研究 PyInstaller 程序的模块组织、TCP/UDP 协议、GUI 与后台监控协作方式。但反编译结果不一定等同于原始源码，权限、隐私、误报、数据保护和远程锁定风险都需要进一步审计。

## 项目地址

GitHub: [wusi321/ExamGuard](https://github.com/wusi321/ExamGuard)
