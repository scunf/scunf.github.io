---
title: SolidWorks 机械设计与自动化工具集
layout: project
date: 2026-07-05
updated: 2026-07-05
categories: project mechanical
tags:
  - solidworks
  - cad
  - 3d-printing
  - automation
  - python
top: 2
---

## 项目概览

`myswwork` 是一个基于 SolidWorks 的机械设计与 3D 打印项目集合。仓库同时保存原始零件、装配体、STL/STEP/3MF 导出文件，以及用于批量导出和参数化建模的 SolidWorks Python 自动化工具。

## 机械设计内容

仓库中的主要模型包括：

- 无人机机身与支架系列，包括多个尺寸和迭代版本。
- 云台支架的标准版、迷你版和扩展版本。
- MC 支架 1.0、2.0。
- 激光支架 1.0、2.0。
- 篮子及电机支架装配体。
- 风扇叶、螺旋桨等练习零件。

原始设计以 `.SLDPRT` 零件和 `.SLDASM` 装配体保存，便于继续修改尺寸、材料和装配约束。`input/` 与 `.3mfwenjian/` 则用于保存适合打印或交换的导出格式。

## 目录结构

```text
myswwork/
├── *.SLDPRT / *.SLDASM   # SolidWorks 零件和装配体
├── .3mfwenjian/           # 3MF 文件
├── input/                 # STL/STEP 等打印与交换文件
└── swapi/                 # SolidWorks Python 自动化工具
    ├── sw_auto/
    │   ├── core/          # 核心逻辑
    │   ├── models/        # 数据模型
    │   ├── config/        # 配置
    │   ├── templates/     # 模板
    │   ├── utils/         # 工具函数
    │   └── main.py        # 程序入口
    └── requirements.txt
```

## swapi 自动化工具

`swapi` 通过 SolidWorks COM API 连接本机安装的 SolidWorks，用于批量导出、参数化建模等重复任务。相较于手工逐个打开和导出零件，脚本可以统一输出格式、目录和命名规则。

运行条件：

- Windows 和已安装、已注册 COM API 的 SolidWorks。
- Python 3.x。
- 与本机 SolidWorks 版本兼容的 Python 依赖。

```bash
pip install -r swapi/requirements.txt
```

## 使用注意

机械文件依赖 SolidWorks 版本、单位、材料、装配引用和外部路径。用于加工或 3D 打印前，应重新检查尺寸、公差、壁厚、安装孔、材料收缩和装配干涉；自动导出成功也不代表模型已经满足制造要求。

## 项目地址

GitHub: [wusi321/myswwork](https://github.com/wusi321/myswwork)
