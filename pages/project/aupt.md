---
title: AUPT - 统一 Linux 包管理调度工具
layout: project
date: 2026-05-17
updated: 2026-05-17
categories: project linux
tags:
  - aupt
  - linux
  - package-manager
  - python
top: 2
---

## AUPT (Advanced Unified Package Tool)

AUPT 是一个统一的 Linux 包管理调度工具，核心目标：**统一命令入口 + 自动识别发行版 + 自动选择包管理器**。

### 基础功能

- 自动识别 Linux 发行版
- 自动调用系统对应包管理器
- 支持统一安装 / 卸载 / 更新 / 升级命令

```bash
aupt install vim
aupt remove gcc
aupt update
aupt upgrade
```

### 指定包管理器

支持用户强制指定工具：

```bash
aupt apt install nginx
aupt pacman install git
aupt snap install code
```

### 自动包管理器选择策略

默认优先级：`apt/pacman/dnf/zypper → flatpak → snap`

流程：先查询系统原生包管理器（apt/pacman/dnf/zypper），若不存在则 fallback 到 flatpak，最后尝试 snap。

### 版本控制支持

```bash
aupt install gcc==9
aupt install python@3.10
```

支持指定版本安装、自动解析版本、自动 fallback。

### 镜像源自动优化

```bash
aupt mirror auto
aupt mirror list
aupt mirror switch tuna
```

支持自动测速镜像源、自动选择最快镜像、自动修改配置、自动更新索引。

### 包搜索与信息查询

```bash
aupt search redis
aupt info nodejs
```

### 系统诊断

```bash
aupt doctor
```

用于检测包管理器状态、网络状态、镜像源状态。

### 系统架构

采用 **分层架构 + 插件架构**：

```text
aupt
├── core/                 # 核心调度与检测
│   ├── dispatcher.py
│   ├── distro_detector.py
│   ├── package_resolver.py
│   ├── mirror_manager.py
│   └── config_manager.py
├── backends/             # 各包管理器后端
│   ├── apt_backend.py
│   ├── pacman_backend.py
│   ├── dnf_backend.py
│   ├── snap_backend.py
│   ├── flatpak_backend.py
│   └── zypper_backend.py
├── cli/                  # 命令行接口
│   ├── parser.py
│   └── commands.py
├── utils/                # 工具集
├── database/             # 数据文件
└── plugins/              # 插件目录
```

### 安装方式

```bash
git clone git@github.com:wusi321/aupt.git
cd ~/aupt
chmod +x scripts/install.sh scripts/uninstall.sh
./scripts/install.sh
```

或直接使用 pip：

```bash
cd ~/aupt
python3 -m pip install --user .
```

安装完成后即可全局使用 `aupt` 命令。

### 项目地址

GitHub: [github.com/wusi321/aupt](https://github.com/wusi321/aupt)
