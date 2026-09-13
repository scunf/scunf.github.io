---
title: 软件杯火灾检测数据与训练工程
layout: project
date: 2026-07-05
updated: 2026-07-05
categories: project computer-vision
tags:
  - fire-detection
  - pp-yoloe
  - yolov5
  - dataset
  - python
top: 2
---

## 项目概览

`ruanjianAB` 是软件杯火灾检测赛题的本地代码和数据工程。项目使用 PaddleDetection PP-YOLOE，并保留 YOLOv5/Ultralytics 辅助流程，覆盖数据清洗、标注格式转换、训练、预标注、推理后处理、标注风格分析和可视化。

它与 `ruanjianbei` 的重点不同：后者整理了目标检测赛道的五折训练和评估入口，而该仓库集中保存 A 榜数据、补充数据、公开火灾数据集和多轮实验产物。

## 数据与目录

| 路径 | 内容 |
| --- | --- |
| `A_train/` | A 榜训练图像与 JSON 标注 |
| `A_train_out/` | 官方输出或标注结果 |
| `A_trainbu/` | A 榜补充数据 |
| `analysis_result/` | 标注风格分析结果 |
| `firedetect_public/` | 公开火灾检测数据集 |
| `bbbbbb/` | PaddleDetection、权重、数据版本和核心脚本 |
| `bbbbbb/oott/` | 多轮提交的推理结果和模型备份 |

## 数据处理工具

- `json2voc.py`：把 LabelMe JSON 转换为 Pascal VOC XML。
- `voc2coco_fire_all_local.py`：把 VOC 数据转换为 COCO，并划分训练集与验证集。
- `xml2labelme.py`：把 VOC XML 转回 LabelMe JSON。
- `fix_labelme_json.py`：修复异常的 LabelMe 标注形状。
- `delete_label_images.py`：清理图片与标注不匹配的冗余数据。

这些工具用于在 LabelMe、Pascal VOC 和 COCO 三种格式之间建立可复用的数据流，减少不同训练框架对标注格式的耦合。

## 训练与推理

- `train_yolo.py`：YOLO 训练入口，同时处理 XML 转 YOLO 和数据集划分。
- `prelabel_yolo.py`：使用已有模型对新图片进行预标注，并输出 LabelMe JSON。
- `infer_firebig.py`：从检测结果中提取最大的火点框。
- PaddleDetection 目录：提供 PP-YOLOE 模型、配置和预训练权重。

项目需要 Python 3.8+，并依赖 PaddlePaddle、PaddleDetection、YOLOv5/Ultralytics、OpenCV、NumPy、Pandas、Matplotlib 和 tqdm。

典型流程：

1. 检查并修复 LabelMe JSON 标注。
2. 将 VOC 标注转换为 COCO 格式并划分数据集。
3. 使用 PP-YOLOE 配置训练模型。
4. 使用 YOLO 预标注工具扩充或校正数据。
5. 执行推理后处理和标注风格分析。
6. 通过可视化脚本抽查边界框位置和类别。

## 分析与可视化

`analyze_annotation_style.py` 用于比较本地标注与官方标注的风格差异，`count_labels.py` 统计类别数量和小目标比例，`vis_labelme.py`、`imge_xianshi.py` 和 `vis_xml2img.py` 则把标注框绘制到图像上。

这部分工具可以发现过紧或过松的框、类别不均衡、极小目标比例异常和格式转换错误，避免直接把数据问题带入训练。

## 项目地址

GitHub: [wusi321/ruanjianAB](https://github.com/wusi321/ruanjianAB)
