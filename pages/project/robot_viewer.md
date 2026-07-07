---
title: Robot Viewer - 机器人模型 3D 查看器
layout: project
date: 2026-07-07
updated: 2026-07-07
categories: project robot
tags:
  - robot
  - three.js
  - 3d-viewer
  - urdf
top: 2
---

## Robot Viewer (机器人模型 3D 查看器)

**Robot Viewer** 是一个基于 Web 的机器人模型与场景 3D 查看器，基于 [Three.js](https://threejs.org/) 构建，支持在浏览器中直接可视化、编辑和仿真机器人模型。

<div style="text-align:center;margin:20px 0;">
  <a href="/robot_viewer/" target="_blank" style="display:inline-block;padding:12px 28px;background:#0a84ff;color:#fff;border-radius:8px;text-decoration:none;font-size:16px;font-weight:500;">
    🚀 打开 Robot Viewer
  </a>
</div>

### 支持的格式

| 格式 | 说明 |
|------|------|
| **URDF** | 统一机器人描述格式 |
| **Xacro** | ROS Xacro 格式，支持宏展开和条件逻辑 |
| **MJCF** | MuJoCo XML 格式 |
| **USD** | 通用场景描述（部分支持） |

### 主要功能

- **可视化工具**：视觉/碰撞几何体、惯性张量、质心、坐标系、关节轴、阴影
- **交互控制**：实时拖拽关节、调整模型姿态
- **测量工具**：关节/连杆距离测量，3D 可视化，地面高度测量
- **代码编辑器**：内置 CodeMirror 编辑器，实时编辑和预览
- **物理仿真**：集成 MuJoCo 引擎，支持动力学仿真
- **场景管理**：文件树和场景图可视化
- **并联机构**：支持约束可视化（connect/weld/joint coupling）

### 项目地址

GitHub: [github.com/fan-ziqi/robot_viewer](https://github.com/fan-ziqi/robot_viewer)

<div style="text-align:center;margin:30px 0;">
  <a href="/robot_viewer/" target="_blank" style="display:inline-block;padding:12px 28px;background:#0a84ff;color:#fff;border-radius:8px;text-decoration:none;font-size:16px;font-weight:500;">
    🚀 立即体验 Robot Viewer
  </a>
</div>
