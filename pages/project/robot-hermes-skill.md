---
title: Robot Hermes Skill Framework
layout: project
date: 2026-06-08
updated: 2026-06-08
categories: project robotics
tags:
  - hermes
  - quadruped
  - stm32
  - robot-skill
  - python
top: 2
---

## 项目概览

Robot Hermes Skill Framework 是面向 ARM64 Ubuntu、Hermes AI Agent、STM32 实时控制器和 8DOF 四足机器人的控制框架。它通过四层架构分离 AI 决策、行为执行、实时调度和硬件控制。README 明确标注该项目目前是框架设计，尚未完成真实机器人可行性验证。

## 四层控制架构

```text
Hermes Agent (AI 决策，1-5s)
    | JSON invoke_skill / query_state
    v
Skill Runtime (参数验证，20Hz)
    | IPC 优先级任务队列
    v
Robot Runtime (实时调度，100Hz)
    | UART 二进制帧 + CRC16
    v
STM32 (PID / PWM / 编码器，500-1000Hz)
    |
    v
电机 / 舵机 / IMU / 编码器
```

Hermes 不能控制 PWM、PID 和电流；Skill Runtime 负责参数与生命周期，但不承担毫秒级调度；Robot Runtime 负责抢占、安全和心跳；STM32 执行底层闭环和看门狗。

## Skill 能力

框架定义了 16 个技能：

- **运动**：stand、sit、walk、trot、turn、recover。
- **传感器**：imu、encoder、camera、battery。
- **行为**：avoid、patrol、follow。
- **安全**：estop、watchdog、limit_checker。

状态机包含 BOOT、INIT、CALIBRATION、READY、STAND、WALK、TROT、TURN、RECOVER、FAULT、ESTOP 和 SHUTDOWN 等状态。

## 项目结构

```text
main.py                    # 交互、测试和 Hermes API
skill.md                   # Agent Skill 调用规范
protocol/                  # CRC16、数据帧和 JSON API
skills/                    # 运动、感知、行为和安全技能
runtime/                   # 状态机、调度、串口和运动规划
firmware/stm32/            # STM32 + FreeRTOS 参考实现
configs/default.yaml       # 默认配置
deploy.sh                  # Ubuntu 部署脚本
```

## 快速开始

项目支持 Ubuntu 20.04+ 的 ARM64 和 x86_64 环境，Python 版本为 3.8+；STM32F407 与 FreeRTOS 为可选硬件目标。

```bash
git clone https://github.com/wusi321/RobotHermesSkill.git
cd RobotHermesSkill
chmod +x deploy.sh
./deploy.sh --auto --venv
```

部署脚本负责安装 Python 和串口依赖、配置 udev 规则，并运行自动化测试。无硬件时可启动虚拟串口和交互模式：

```bash
python3 main.py
python3 main.py --test
```

连接真实串口：

```bash
python3 main.py --uart /dev/ttyACM0 --baud 921600
```

## Agent 调用接口

```bash
python3 main.py --hermes-stdin

echo '{"type":"invoke_skill","skill":"walk","params":{"speed":0.3}}' \
  | python3 main.py --hermes-stdin

echo '{"type":"query_state"}' | python3 main.py --hermes-stdin
```

Hermes 通过 JSON 调用 Skill，也可以使用“站起来”“前进”“左转”“急停”等自然语言映射。

## UART 协议与安全

数据帧结构为：

```text
HEADER(0xAA55) CMD SEQ LEN PAYLOAD CRC16 TAIL(0x0D0A)
```

指令包括心跳、状态查询、姿态设置、单关节控制、步态设置、急停、传感器数据、电机状态、确认和错误上报。安全机制覆盖心跳超时、跌倒、过流、过温、关节限位和 CRC 校验。

由于仓库尚未验证真机可行性，配置中的电流、温度、角度和心跳阈值只能视为设计默认值，不能直接作为真实硬件安全参数。

## 项目地址

GitHub: [wusi321/RobotHermesSkill](https://github.com/wusi321/RobotHermesSkill)
