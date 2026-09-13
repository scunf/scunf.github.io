---
title: wusiOS - 本地 CLI Agent 控制平面
layout: project
date: 2026-09-03
updated: 2026-09-03
categories: project ai
tags:
  - agentos
  - ai-agent
  - pty
  - python
top: 2
---

## 项目概览

**wusiOS** 是一个面向本地 CLI AI Agent 的轻量控制平面。它不替代 Codex、Hermes、OpenClaw、Claude Code、Aider 等 Agent，而是位于用户、Agent 与操作系统之间，统一处理 Agent 发现、启动、终端托管、任务记录、事件观测和结果验证。

仓库中的 `AgentOS` 是监管型 Agent：它负责理解目标、补全验收条件、选择已有 Agent、生成可审计的交接提示，并提醒验证缺口；它不会直接代替业务 Agent 修改代码。当前版本为 `v0.4.0`，重点支持 Linux/POSIX 环境。

## 核心能力

- 自动发现本机可用的 CLI Agent 和对应能力。
- 使用真实 PTY 托管 Shell 或交互式 Agent，支持窗口尺寸同步和原始终端流转发。
- 创建任务、生成执行计划，并把任务、事件和会话持久化到本地。
- 记录 Agent 的输入、输出、ANSI/TUI 数据和进程退出码。
- 提取测试成功、测试失败、权限请求和完成声明等语义事件。
- 使用文件、Git 状态和自定义命令执行确定性验证。
- 通过 `WUSIOS_HOME` 隔离任务、事件和 session 数据。
- 支持 OpenAI-compatible API，也提供无 Key 的本地规则型监管模式。
- 支持可恢复会话，以及流式监管响应和服务不可用时的本地回退。

## 工作链路

```text
用户目标
   |
   v
wusiOS 任务与计划
   |
   +--> Agent Discovery --> Agent Adapter
   |                            |
   +--> Task/Event Store <-------+
   |                            |
   +--> PTY Runtime ------------+
   |
   v
文件 / Git / 命令确定性验证
```

Codex、Hermes 和 OpenClaw 使用独立 Adapter，其他 CLI 使用通用 Adapter。所有 Agent 都经过统一 Runtime 生命周期和 PTY 后端，避免把不同终端程序的启动细节暴露给上层。

## 任务状态

| 状态 | 含义 |
| --- | --- |
| `CLAIMED` | Agent 声称完成，但尚未通过验证 |
| `COMPLETED` | 进程正常退出，但没有完成声明 |
| `VERIFIED` | 确定性验证通过 |
| `FAILED` | 执行或验证失败 |
| `INTERRUPTED` | 任务被取消或进程中断 |

只有验证器通过后，任务才会进入 `VERIFIED`。这种状态划分可以避免把 Agent 的自然语言声明误当成真实验收结果。

## 快速开始

项目使用 Python 安装：

```bash
cd "/home/lcf/AgentOS/wusiOS agent"
python -m venv .venv
. .venv/bin/activate
python -m pip install .
wusios agents
```

路径中包含空格时应保留引号。安装过旧版本时，可以重新安装并刷新 Bash 命令缓存：

```bash
pip install --force-reinstall .
hash -r
wusios agents
```

常用命令：

```bash
wusios                         # 启动由 wusiOS 托管的 Shell
wusios agents                  # 发现本机 Agent
wusios run "实现登录接口并运行测试" --agent hermes --execute
wusios task list               # 查看任务列表
wusios task show <task-id>     # 查看任务详情
wusios verify <task-id>       # 执行确定性验证
wusios monitor                 # 查看语义事件
agentos                       # 启动监管对话
```

`run` 默认只创建任务和执行计划；增加 `--execute` 才会真正启动指定 Agent。每次任务的原始终端日志默认保存在 `~/.wusios/sessions/<task-id>.log`。

## AgentOS 对话

可以通过 `agentos` 或 `wusios agentos` 启动监管对话：

```text
/agents                  查看可用 Agent
/context                 查看任务、Git 和事件摘要
/config                  查看脱敏后的 API 配置
/history                 查看当前会话消息数
/sessions                列出可恢复会话
/resume <session-id>     恢复会话
/clear                   清空会话上下文
/delegate hermes <任务>  通过 PTY 启动 Hermes
/quit                    退出监管对话
```

配置 API 时可使用环境变量：

```bash
export WUSIOS_API_KEY="sk-..."
export WUSIOS_API_BASE="https://api.openai.com/v1"
export WUSIOS_MODEL="gpt-4o-mini"
agentos
```

也支持本地 Ollama 等 OpenAI-compatible 服务：

```bash
wusios config set --base-url http://localhost:11434/v1 --model qwen2.5
```

API Key 会在配置展示、事件 JSONL 和任务摘要中脱敏，配置文件默认写入 `~/.wusios/config.json` 并设置为仅用户可读。

## 验证与安全边界

项目已验证从 Agent 发现、任务创建、POSIX PTY 运行、Hermes 交互到 session 保存和事件记录的基础链路。开发过程中处理了路径空格 shebang、文件描述符限制、PTY 返回值和管道 stdin 导致交互式 Agent 自动退出等问题。

AgentOS 的 API 调用只负责监管建议，不会自动绕过权限策略或执行高风险命令。平台把文件、Git 差异和命令结果放在可选 AI Judge 之前，并计划在后续版本加入进程树监控、行为漂移检测、多 Agent DAG 和 Windows ConPTY。

## 项目地址

GitHub: [wusi321/AgentOS](https://github.com/wusi321/AgentOS)
