---
title: Kali Linux 安全工具速查库
layout: project
date: 2026-07-05
updated: 2026-08-13
categories: project security
tags:
  - kali-linux
  - security
  - reference
  - codex-skill
top: 2
---

## 项目概览

`kali-tools` 是一套面向 Kali Linux 2025 的安全工具速查手册。仓库按信息收集、漏洞扫描、数字取证、逆向工程、网络分析等方向整理常用命令和说明，同时提供 `SKILL.md`，可以作为 Codex skill 加载。

所有工具只能在本人拥有或已获得明确授权的系统、网络和设备上使用。未经授权的扫描、口令测试、漏洞利用和流量截获可能违法。

## 内容分类

| 类别 | 典型工具 |
| --- | --- |
| 信息收集 | nmap、masscan、dnsenum、enum4linux |
| 漏洞扫描 | nikto、wpscan、sqlmap、openvas |
| 漏洞验证 | metasploit、searchsploit、msfvenom |
| 口令安全测试 | hydra、hashcat、john、crunch |
| Web 测试 | gobuster、dirb、whatweb、wfuzz |
| 无线安全 | wifite、aircrack-ng、reaver |
| 数字取证 | binwalk、foremost、volatility、autopsy |
| 逆向工程 | ghidra、radare2、objdump、strings |
| 流量分析 | wireshark、tcpdump、ettercap、bettercap |
| 代理与隧道 | proxychains、chisel、SSH tunneling |

## 仓库结构

```text
kali-tools/
├── SKILL.md                    # Codex skill 配置
├── 环境工具说明.md             # Kali 2025.4 中文工具说明
├── agents/
│   └── openai.yaml             # Agent 配置
└── references/
    ├── info-gathering.md
    ├── vuln-scanning.md
    ├── exploitation.md
    ├── password-attacks.md
    ├── web-tools.md
    ├── wireless.md
    ├── forensics.md
    ├── reverse-engineering.md
    ├── sniffing-spoofing.md
    └── proxy-tunneling.md
```

## 使用方式

`环境工具说明.md` 提供完整环境和工具清单，`references/` 则按任务拆分详细参考。实际工作时应先明确测试范围和授权边界，再打开对应分类文档，记录目标、时间窗口、允许的测试方法和停止条件。

作为 Codex skill 使用时，`SKILL.md` 定义触发范围和参考资料入口，使 Agent 可以按任务加载需要的部分，而不必把整套手册注入每一次对话。

## 设计取向

该项目的价值在于把分散的工具帮助信息整理成分类索引。它不是自动化攻击框架，也不能代替正式的渗透测试流程、风险审批、证据保全和修复验证。对于生产环境，优先使用低影响的检测方法，并在变更或验证前准备回滚方案。

## 项目地址

GitHub: [wusi321/kali-tools](https://github.com/wusi321/kali-tools)
