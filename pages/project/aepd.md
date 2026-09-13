---
title: AEPD - AI 原生嵌入式平台设计
layout: project
date: 2026-08-26
updated: 2026-08-26
categories: project embedded
tags:
  - aepd
  - embedded-linux
  - stm32
  - rk3588
  - ai-agent
top: 2
---

## 项目概览

AEPD（AI-Native Embedded Platform Design）是一套面向 AI Agent 的嵌入式 Linux、MCU、硬件控制、编译烧录和 IoT 一体化平台设计。项目目前处于架构设计和实验验证阶段，重点不是让 Agent 直接操控硬件，而是建立一条可审查、可回滚、可验证的软硬件闭环。

## 实验基线

- ARM 主机：RK3588 开发板，运行 Ubuntu/Armbian ARM64。
- MCU 主目标：STM32H743/H753，兼容目标为 STM32F407。
- Agent：Hermes、Codex、OpenClaw 等，通过统一 Provider Adapter 接入。
- 调试烧录：独立 CMSIS-DAP/ST-LINK 和 SWD。
- ARM-MCU 通信：UART 起步，逐步验证 USB FS/HS、SPI + READY/IRQ。
- 外部接口：GPIO、ADC/DAC、I2C、SPI、UART、CAN/CAN-FD、RS-485 和 IoT 协议。

## 目标闭环

```text
自然语言需求
 -> 硬件拓扑与引脚配置
 -> 冲突和电气规则验证
 -> 驱动/代码检索
 -> 代码生成或 Runtime 动态配置
 -> 编译与静态检查
 -> 目标识别与烧录
 -> MCU 重启、通信和功能验证
 -> 审计、版本记录和失败回滚
```

平台要求 AI Agent 不直接获得 GPIO、设备节点、SWD、Flash 或电源控制权限。真实硬件操作需要经过强类型工具、Hardware Daemon、设备锁、风险审批和审计。

## 设计分工

Linux 侧负责 Agent、编译、网络、检索和编排；MCU 侧负责硬实时采样、PWM、中断和安全联锁。常见外设优先通过 MCU Runtime 动态配置，只有新增驱动或实时任务变化时才重新编译烧录。

关键设计原则包括：

1. 先使用成熟 RK3588 开发板验证软件与 MCU 闭环，再进入自研 ARM 高速核心板。
2. STM32H7 和 F407 使用独立 Target Profile，不能把 H7 的 CAN-FD 配置静默套用到 F407。
3. YAML 作为可审查的配置事实源，SQLite 作为运行状态和快速查询的派生视图。
4. SWD 使用独立调试探针保留恢复路径，不把 ARM GPIO 模拟 SWD 作为 MVP 默认方案。
5. 禁止盲扫 GPIO、SPI、UART 或未知 I2C 设备，发现流程采用安全枚举、用户声明和器件专用 probe。
6. Agent 只负责规划、代码和解释，不能绕过平台安全边界。

## 设计文档覆盖范围

主设计规范覆盖总体架构、ARM 载板、MCU 子板、电源和高速通信，也包括 GPIO/PinMux、设备发现、工程管理、数字孪生、Linux Runtime、MCU Runtime、HAL、SDK、通信协议、Agent Provider、Skill、代码索引、编译烧录、IoT、OTA、安全、测试和开源治理。

仓库还保留了多个模型对相同需求的方案输出，作为设计追溯和比较材料；最终方案会对高风险建议进行工程修正。

## 当前路线

1. 完成 RK3588 系统、工具链和独立 SWD bring-up。
2. 分别建立 STM32H7/F407 Board Profile 与最小固件。
3. 先完成无 LLM 的 UART 协议、GPIO loopback、编译烧录和恢复闭环。
4. 完成温度传感器与 OLED 的黄金路径。
5. 增加 USB、SPI、CAN 和故障注入测试。
6. 最后接入 Agent Provider，并按只读、构建、真实硬件的顺序逐级开放工具。

## 项目状态与安全

AEPD 当前主要交付系统设计规范，许可证也尚未最终确定，正式发布前还需要补充许可证文件并审查第三方依赖。项目不能直接用于医疗、汽车安全、航空、生命支持或未经评估的工业安全控制；接线、电压、功率、隔离、EMC、散热和执行器风险必须由具备资质的工程人员在真实硬件上验证。

## 项目地址

GitHub: [wusi321/AEPD](https://github.com/wusi321/AEPD)
