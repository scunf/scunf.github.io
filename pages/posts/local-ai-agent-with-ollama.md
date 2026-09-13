---
title: 基于ollama的本地AIAgent
date: 2026-01-06 02:00:24
updated: 2026-01-06 02:00:24
categories: MYPROJECT
tags:
  - ollama
  - AI
---

## 基于Ollama的本地Agent

---
一直觉得**Trae, Cursor, Claude**等软件非常不错,但是又想搞个本地的,调用本地部署的模型无限用,我看到了Ollama,以及python调用的ollama方法,便创建了此项目  
项目的终点可能是一个VScode的扩展,或者一个软件,但是我一个人,毕竟精力有限

本项目通过python的ollama库，实现本地级别的ollama安装模型调用，能够进行文件阅读，对话，以及图片识别并输出，全过程在本地进行，但是项目还未完善缺陷较多，正在优化更新

[Github项目地址](https://github.com/wusi321/ollama_ai/)

```markdown
ollama_ai/
├── README.md
├── requirements.txt           #requirements.txt
├── main.py                  # 程序入口
│
├── config/
│   ├── __init__.py
│   └── settings.py          # 模型名、参数、路径等
│
├── core/
│   ├── __init__.py
│   ├── ollama_client.py     # Ollama 通信封装（核心）
│   └── prompt_builder.py    # Prompt 构造逻辑
│
├── services/
│   ├── __init__.py
│   ├── code_service.py      # 代码分析
│   ├── image_service.py     # 图片分析
│   └── chat_service.py      # 纯对话
│
├── utils/
│   ├── __init__.py
│   ├── file_loader.py       # 读文件、读工程
│   ├── logger.py
│   └── text_splitter.py     # 长文本切分
│
├── data/
│   ├── sample_code.c
│   └── board.jpg
│
└── tests/
    └── test_code_service.py

```
