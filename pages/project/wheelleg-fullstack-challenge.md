---
title: WheelLeg 全栈机器人综合考核
layout: project
date: 2026-08-23
updated: 2026-08-23
categories: project robotics
tags:
  - wheel-leg
  - ros2
  - gazebo
  - embedded
  - engineering
top: 2
---

## 项目概览

`WheelLeg-FullStack-Challenge` 是面向四连杆双轮腿小型机器人的全栈开发综合考核。它把机械设计、机器人描述、ROS 2 仿真、C++ 控制、Linux 开发环境、MCU/CAN 通信、视觉感知、AI 工具和 GitHub 协作放进同一个可复现工程中。

考核目标不是只完成一个孤立的仿真，而是建立从 CAD 到 URDF/Xacro、Gazebo/ROS 2、C++ 控制器、Sim2Sim、MCU、CAN，再到版本管理的工程闭环。不要求制造实体机器人，但必须提供可验证的仿真和通信演示。

## 模块与分值

| 模块 | 满分 |
| --- | ---: |
| 机械结构与 CAD | 18 |
| URDF/Xacro 机器人描述 | 12 |
| ROS 2 与 Gazebo 仿真 | 25 |
| C++ 控制器 | 15 |
| Ubuntu/Linux 开发环境 | 10 |
| MCU 与 IMU | 15 |
| CAN 通信 | 15 |
| 视觉感知与视觉闭环 | 20 |
| Git/GitHub 协作 | 10 |
| 工程文档 | 5 |
| AI 工具与模型使用 | 5 |
| **合计** | **150** |

各模块的题目、交付物和评分细则写在对应目录的 `README.md` 中，模块之间必须共享同一套尺寸、质量、坐标系和接口，不能提交互相独立的小实验。

## 目录入口

```text
mechanical/          CAD、零件和装配体
robot_description/   URDF/Xacro 机器人描述
simulation/          ROS 2 与 Gazebo 仿真
controller/          C++ 控制器
linux/               Ubuntu/Linux 开发环境
embedded/            MCU、IMU 和 CAN
vision/              视觉感知与视觉闭环
git/                 Git/GitHub 协作
docs/                总体要求、几何约束和演示说明
ai_tools/            AI 工具与使用记录
tests/               测试入口
```

轮足外形和六电机约束位于 `docs/wheelleg_geometry.md`，CAN 协议位于 `docs/can_protocol.md`，遥控器和演示输入位于 `docs/remote_control.md`。

## 推荐环境

- Ubuntu 22.04，实体机、虚拟机、x86 上位机或 ARM 开发板均可。
- ROS 2 Humble。
- Gazebo 或其他支持 ROS 2 URDF/Xacro 的仿真器。
- C++17 及以上、CMake 和 `colcon`。
- 具备 CAN 外设的 MCU，或使用 `vcan0` 虚拟 CAN。

## 推荐工作流

1. 阅读 `docs/requirements.md` 和各模块说明。
2. 先完成 CAD 与参数表，再生成 URDF/Xacro，核对两者一致。
3. 在 Gazebo/RViz 中验证模型，接入 C++ 控制器完成前进、后退、转向和跳跃。
4. 通过抽象控制接口完成 Sim2Sim，再连接 MCU、IMU 和 CAN 闭环。
5. 使用功能分支、描述性 Commit、Tag 和 Pull Request 保留真实开发历史。

## 最终交付

验收材料包括 CAD/STEP、逐零件 CNC 上传清单和平台预览截图、URDF/Xacro、ROS 2/Gazebo 工程、C++ 控制器、Linux 配置脚本、MCU 固件、视觉节点和数据、CAN 协议、遥控器说明、AI 使用记录、测试脚本、演示视频及完整 Git 历史。

仓库采用 MIT License。新增代码、模型、图片、数据和文档需要确认合法来源，并分别遵守第三方素材的原始许可证。

## 成品回传规范

完成仿真或实体成品后，可以从 `develop` 创建 `submission/<姓名>/<版本>` 分支，保留真实 Commit 历史，补充构建/烧录命令、测试日志、演示视频、CAD/URDF 一致性说明和硬件已知问题，再向 `develop` 创建 Pull Request。

## 项目地址

GitHub: [wusi321/WheelLeg-FullStack-Challenge](https://github.com/wusi321/WheelLeg-FullStack-Challenge)
