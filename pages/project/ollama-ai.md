---
title: Ollama 本地 AI Agent
layout: project
date: 2026-01-06
updated: 2026-01-06
categories: project ai
tags:
  - ollama
  - ai-agent
  - local-ai
  - python
top: 2
---

## 项目概览

`ollama_ai` 是一个基于 Python Ollama 客户端的本地 AI Agent 实验项目。目标是在本机模型上完成文本对话、文件读取、代码分析和图片识别，数据和模型调用过程尽量保留在本地。

项目目前仍处于早期阶段，README 也明确说明功能和工程结构尚未完善。

## 计划能力

- 连接本机 Ollama 服务并管理模型调用。
- 提供普通文本对话。
- 读取代码文件或工程并进行分析。
- 调用支持视觉输入的本地模型分析图片。
- 对较长文本进行切分并构造模型提示词。
- 记录运行日志，并通过测试用例验证主要服务。

## 目录设计

```text
ollama_ai/
├── README.md
├── requirements.txt
├── main.py                    # 程序入口
├── config/
│   └── settings.py           # 模型名、参数和路径
├── core/
│   ├── ollama_client.py      # Ollama 通信封装
│   └── prompt_builder.py     # Prompt 构造
├── services/
│   ├── code_service.py       # 代码分析
│   ├── image_service.py      # 图片分析
│   └── chat_service.py       # 文本对话
├── utils/
│   ├── file_loader.py        # 文件与工程读取
│   ├── logger.py
│   └── text_splitter.py      # 长文本切分
├── data/                     # 示例代码和图片
└── tests/                    # 测试
```

这种分层方式将 Ollama 通信、提示词构造、业务服务和文件工具分开，后续可替换模型、调整上下文策略或增加新的输入类型。

## 环境准备

可以先创建独立 Conda 环境：

```bash
conda create -n ollama python=3.10
conda activate ollama
pip install -r requirements.txt
```

运行前还需要在本机安装并启动 Ollama，并下载项目配置中使用的模型。视觉输入需要选择支持图片理解的模型。

## 项目边界

“本地运行”并不自动等于完全隔离：依赖安装、模型下载和外部链接仍可能使用网络。允许 Agent 读取工程文件时，还应限制根目录、文件大小、二进制文件和敏感配置，并明确禁止把密钥、凭据或私人数据写入日志。

项目后续可以继续补充流式输出、上下文窗口管理、结构化工具调用、权限确认、文件写入隔离和端到端测试。

## 项目地址

GitHub: [wusi321/ollama_ai](https://github.com/wusi321/ollama_ai)
