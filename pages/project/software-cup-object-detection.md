---
title: 软件杯目标检测 - PP-YOLOE
layout: project
date: 2026-07-06
updated: 2026-07-06
categories: project computer-vision
tags:
  - paddle-detection
  - pp-yoloe
  - object-detection
  - software-cup
  - python
top: 2
---

## 项目概览

`ruanjianbei` 是 2026 年中国软件杯大学生软件设计大赛目标检测赛道的训练工程。项目基于百度飞桨 PaddleDetection 和 PP-YOLOE 系列模型，围绕电池、电路板和火焰三个类别完成数据分析、五折训练、模型评估、预测和错误分析。

仓库当前默认分支为 `trainA`，主要训练平台为百度 AIStudio，输入尺寸为 `640x640`。

## 模型与数据

| 项目 | 配置 |
| --- | --- |
| 框架 | PaddleDetection / PaddlePaddle |
| 模型 | PP-YOLOE Small、Medium、Large 等变体 |
| 类别 | `battery`、`board`、`fire` |
| 输入尺寸 | 640 x 640 |
| 评估指标 | COCO mAP |
| 默认置信度阈值 | 0.5 |

推理预处理流程为 Resize、Normalize 和 Permute。多个模型配置用于比较推理速度、显存占用和检测精度。

## 项目结构

```text
competition/             # 原始数据集和五折划分
output_inference/        # 多版本模型推理输出
PaddleDetection/         # PaddleDetection 框架与配置
5fold.py                 # 五折交叉验证训练
analyze_bbox.py          # 边界框分析
analyze_dataset.py       # 数据集统计
autoimage.py             # 自动图像处理
error_analysis.py        # FP/FN 错误分析
evaluate.py              # 模型评估
generate_txt.py          # 标注文件生成
infer_cfg.yml            # 推理配置
main.ipynb               # 主流程 Notebook
predict.py               # 预测入口
save_infer.py            # 保存推理结果
```

## 训练流程

推荐 Python 3.8+ 和 PaddlePaddle 2.4+。先安装 PaddleDetection 依赖：

```bash
cd PaddleDetection
pip install -r requirements.txt
```

执行五折交叉验证：

```bash
python 5fold.py
```

也可以直接选择模型配置训练：

```bash
python PaddleDetection/tools/train.py \
  -c PaddleDetection/configs/competition/my_ppyoloe.yml
```

训练后运行预测和评估：

```bash
python predict.py
python evaluate.py
```

## 模型变体

| 配置 | 定位 |
| --- | --- |
| `my_ppyoloe_s.yml` | 轻量版本，侧重推理速度 |
| `my_ppyoloe.yml` | 标准版本，平衡速度与精度 |
| `my_ppyoloe_l.yml` | 大模型，侧重精度 |
| `my_ppyoloeM.yml` | 最大模型变体 |

## 工程重点

五折交叉验证用于观察模型在不同数据划分上的稳定性；`analyze_bbox.py` 和 `analyze_dataset.py` 用于检查类别分布、目标尺寸和标注质量；`error_analysis.py` 则针对假阳性与假阴性样本进行回溯。相比只保留训练脚本，这些分析工具能帮助判断问题来自模型、阈值、数据分布还是标注本身。

## 项目地址

GitHub: [wusi321/ruanjianbei](https://github.com/wusi321/ruanjianbei)
