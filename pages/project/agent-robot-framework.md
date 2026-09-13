---
title: Agent Robot Framework
layout: project
date: 2026-06-09
updated: 2026-06-09
categories: project robotics
tags:
  - ai-agent
  - robot-framework
  - stm32
  - uart
  - can
top: 2
---

## 项目概览

Agent Robot Framework（ARF）是一个基于 Hermes Agent 与 STM32 Runtime 的机器人通用中间件框架。项目把高层智能决策和实时运动控制分开，通过统一 Robot API、协议层和传输层，把 Agent 的任务意图转换为受约束的机器人指令。

## 分层架构

```text
Hermes AI Agent          高层决策
        |
        v
Skill Runtime            技能调度与参数校验
        |
        v
Robot API Layer          统一机器人抽象
        |
        v
Protocol Layer           协议编码与解析
        |
        v
Transport Layer          UART / CAN / USB / RS485
        |
        v
STM32 Runtime            实时闭环控制
        |
        v
电机 / 传感器 / 执行器
```

核心原则是 AI 不直接操作 PWM、电流、寄存器或电机控制环。Agent 负责规划和调用技能，毫秒级实时控制下放给 STM32。

## 核心特性

- 统一 Robot API，降低上层技能与具体机器人硬件之间的耦合。
- 支持 UART、CAN、USB、RS485 等传输方式。
- Skill 热插拔和注册机制，可按机器人能力扩展行为。
- 配置驱动，便于更换机器人参数和通信接口。
- 预留用户自定义模块和协议扩展点。
- 提供 STM32 示例、环境验证和安装检查脚本。

## 环境与运行

README 给出的目标环境是 Ubuntu 22.04 ARM64、Python 3.11+、STM32 开发板和 Hermes Agent。

```bash
# 使用启动脚本
chmod +x run.sh
./run.sh

# 或手动运行
source venv/bin/activate
python main.py
```

安装后可以执行验证脚本：

```bash
python verify_installation.py
```

## 文档与模块

仓库包含配置说明、Skill 开发指南、协议规范、STM32 开发指南、快速开始、运行说明、故障排查、项目状态和交付检查表。主要实现位于 `config/`、`core/`、`protocol/`、`robot/`、`runtime/`、`skills/` 和 `transport/`。

项目当前标记为 `V0.1` 最小可运行版本，路线规划包括通用机器人框架化、实时控制增强和正式版。

## 工程边界

统一 API 可以降低软件层耦合，但不能替代具体硬件的电气安全、通信超时、限位、急停和故障恢复设计。连接真机前，需要独立验证 STM32 固件、协议字节序、单位、关节方向、控制周期和执行器限制。

## 项目地址

GitHub: [wusi321/AgentRobotFramework](https://github.com/wusi321/AgentRobotFramework)
