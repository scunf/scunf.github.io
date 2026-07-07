![截图](./docs/screenshot.png)

---

# Robot Viewer (机器人查看器)

[![版本](https://img.shields.io/badge/version-v1.2.0-blue.svg)](https://github.com/fan-ziqi/robot_viewer)
[![许可证](https://img.shields.io/badge/license-Apache--2.0-yellow.svg)](LICENSE)
[![平台](https://img.shields.io/badge/platform-web-orange.svg)](https://github.com/fan-ziqi/robot_viewer)
[![JavaScript](https://img.shields.io/badge/language-JavaScript-f1e05a.svg)](https://github.com/fan-ziqi/robot_viewer)
[![Three.js](https://img.shields.io/badge/Three.js-0.163.0-black.svg)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.5.0-646cff.svg)](https://vitejs.dev/)
[![演示](https://img.shields.io/badge/Demo-Live-brightgreen.svg)](http://viewer.robotsfan.com/)

**Robot Viewer** 是一个基于 Web 的机器人模型与场景 3D 查看器。基于 [Three.js](https://threejs.org/) 构建，提供了直观的界面，让您无需任何安装即可在浏览器中直接可视化、编辑和仿真机器人。该工具帮助您可视化和分析机器人结构、关节以及物理属性。

**在线演示**（所有处理均在浏览器中完成——您的模型不会离开您的设备）：

[![立即体验](https://img.shields.io/badge/🎪_立即体验-viewer.robotsfan.com-brightgreen?style=for-the-badge)](http://viewer.robotsfan.com/)

## 主要功能

- **格式支持**：
  - **URDF**：统一机器人描述格式（Unified Robot Description Format）
  - **Xacro**：ROS Xacro 格式，支持宏展开和条件逻辑
  - **MJCF**：MuJoCo XML 格式
  - **USD**：通用场景描述（部分支持）
- **机器人类型**：串联机器人结构（暂不支持并联机器人）
- **可视化工具**：视觉/碰撞几何体、惯性张量、质心、坐标系、关节轴、阴影、坐标系方位显示
- **交互控制**：实时拖拽关节、调整模型姿态
- **测量工具**：测量关节与连杆之间的距离，带 3D 可视化，显示 X/Y/Z 轴投影和总距离，支持地面高度测量
- **代码编辑器**：内置 CodeMirror 编辑器，支持语法高亮和实时预览
- **物理仿真**：集成 MuJoCo 引擎，支持动力学仿真（MJCF 模型）
- **场景管理**：文件树和场景图可视化，显示层次结构

## 快速开始

本项目使用 **pnpm**，您也可以使用 **npm** 或 **yarn**。

克隆仓库并安装依赖：

```bash
git clone https://github.com/fan-ziqi/robot_viewer.git
cd robot_viewer
pnpm install
```

启动开发服务器：

```bash
pnpm run dev
```

构建生产版本：

```bash
pnpm run build
```

输出文件位于 `dist/` 目录下。

## 参与贡献

欢迎社区贡献！无论是修复 Bug、添加功能还是改进文档，都欢迎您的参与。

- **Bug 报告**：提交 [Issue](https://github.com/fan-ziqi/robot_viewer/issues) 并附上详细信息
- **功能请求**：在 [Discussions](https://github.com/fan-ziqi/robot_viewer/discussions) 中讨论想法
- **拉取请求**：提交 PR 并附上清晰的描述和测试

## 许可证

本项目基于 [Apache License 2.0](LICENSE) 许可。

## 致谢

Robot Viewer 基于开源机器人社区的卓越工作构建。本集成了几个强大的开源项目：

- **[urdf-loader](https://github.com/gkjohnson/urdf-loaders)** — 用于 Three.js 的稳健 URDF 加载器
- **[xacro-parser](https://github.com/gkjohnson/xacro-parser)** — 用于 JavaScript 的 ROS Xacro 文件格式解析器
- **[mujoco_wasm](https://github.com/zalo/mujoco_wasm)** — 编译为 WebAssembly 的 MuJoCo 物理引擎
- **[usd-viewer](https://github.com/needle-tools/usd-viewer)** — 支持丰富 USDStage 的 OpenUSD 查看器
- **[mechaverse](https://github.com/jurmy24/mechaverse)** — 通用机器人模型 3D 查看器，提供了有价值的设计灵感

特别感谢这些项目的所有维护者和贡献者的基础性工作。

本项目的部分开发借助了 [Cursor](https://cursor.sh) 的辅助。
