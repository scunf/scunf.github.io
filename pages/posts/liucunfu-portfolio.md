---
title: 刘存富的个人作品集
date: 2026-09-23 09:10:00
updated: 2026-09-23 12:30:00
categories: 个人文章
tags:
  - 作品集
  - 极客营
  - 轮足机器人
  - 强化学习
  - ROS 2
  - 嵌入式
excerpt: 面向深圳科创学院极客营入营面试的个人作品集：16DOF 四轮足全栈开源、16DOF 强化学习与 Sim2Sim、8DOF 双轮腿 RL、6DOF 全栈考核设计、Linux 包管理调度工具、电赛 H 题车载平衡滚球系统与逆向工程项目。
---

我是**刘存富**（GitHub：[wusi321](https://github.com/wusi321)），物联网工程本科生，方向是**机器人系统 / 嵌入式开发 / 具身智能**。本文是我为**深圳科创学院极客营入营面试**整理的个人作品集。

作品集按时间与难度整理了 7 个项目：从**轮足机器人从机械到真机部署的全栈开源**，到**强化学习训练与 Sim2Sim 验证工程**，再到**全栈考核体系设计**、**Linux 系统工具**、**电赛完整作品**与**逆向工程**。每个项目都配有可直接访问的仓库、图纸或实物图、以及可复现的运行入口。

> 阅读建议：先看下方个人信息与 30 秒速览表，再挑你关心的方向进入对应章节；每个章节都给出了**仓库跳转链接**。

---

<a id="me"></a>

## 个人信息

<p align="center">
  <img src="/images/portfolio/liucunfu-id-photo.jpg" alt="刘存富" width="118">
</p>

|  |  |
|---|---|
| **姓名** | 刘存富 |
| **学校 / 学院** | 山东华宇工学院 · 信息工程学院 |
| **专业 / 年级** | 物联网工程 · 2024 级本科在读（大三） |
| **技术方向** | 机器人系统 · 嵌入式开发 · 具身智能 |
| **邮箱** | [19589917063@163.com](mailto:19589917063@163.com) |
| **GitHub** | [github.com/wusi321](https://github.com/wusi321) |
| **博客** | [scunf.github.io](https://scunf.github.io) |
| **简历** | [📄 下载 PDF 简历](/files/liucunfu-resume.pdf) |

---

## 目录与速览

| # | 项目（点击跳到本文对应章节） | 我的角色 | 关键技术 | 亮点 | 仓库 |
|:-:|---|---|---|---|---|
| 1 | [16DOF 四轮足机器人全开源](#project-1) | 电控 / 机械 | SolidWorks、URDF、MuJoCo、Sim2Real | RC2026 全国一等奖（第 7 名，前 5%） | [zeitvex/RC_WheelLeg](https://github.com/zeitvex/RC_WheelLeg) |
| 2 | [16DOF 轮足强化学习与 Sim2Sim](#project-2) | 训练 / 仿真 / 验证 | mjlab、PPO、MJCF、MuJoCo | 3 类任务配置化训练 + 策略回放链路 | [wusi321/RC_Legged_Training_Simulation](https://github.com/wusi321/RC_Legged_Training_Simulation) |
| 3 | [8DOF 双轮腿强化学习](#project-3) | 独立开发 | mjlab、PPO、W&B、URDF→MJCF | 平地 / 粗糙 / 恢复三类课程 + 随机化 | [wusi321/8DOF-WheelLeg-RL](https://github.com/wusi321/8DOF-WheelLeg-RL) |
| 4 | [6DOF 双轮腿全栈考核设计](#project-4) | 独立设计 | CAD、ROS 2、C++、CAN、Vision | 150 分 12 模块的可复现工程闭环 | [wusi321/WheelLeg-FullStack-Challenge](https://github.com/wusi321/WheelLeg-FullStack-Challenge) |
| 5 | [多发行版包管理器调度工具](#project-5) | 独立开发 | Python、插件化架构、CLI | 一套命令统一 apt / pacman / dnf / snap | [wusi321/aupt](https://github.com/wusi321/aupt) |
| 6 | [电赛 H 题车载平衡滚球系统](#project-6) | 独立开发 | MaixCAM、MSPM0G3507、Web Serial | 视觉 + 主控 + 计时器 + 双 Web 台全链路 | [wusi321/2026-H-TI](https://github.com/wusi321/2026-H-TI) |
| 7 | [考试反作弊系统（逆向工程）](#project-7) | 独立开发 | PyInstaller 逆向、TCP/UDP、Win32 API | 从打包产物还原并重构完整双端系统 | [wusi321/ExamGuard](https://github.com/wusi321/ExamGuard) |

---

<a id="project-1"></a>

## 一、[16DOF 四轮足机器人全开源](https://github.com/zeitvex/RC_WheelLeg)

> 山东华宇工学院 **HYNova 战队** · RC2026 仿生足式障碍赛 · **全国一等奖，第 7 名，前 5%**

**背景与问题**：这是一支从零起步的新队伍。没有历史积累、没有成熟平台，我们需要在备赛周期内自建一整套 16DOF 串联轮足机器人——机械、硬件、固件、仿真、强化学习训练与真机部署全部自研，并最终跑通比赛任务。

**我的职责**（电控 / 机械）：

- 参与前期 **8DOF** 以及中后期 **8DOF → 16DOF** 的机械升级设计，负责**模型总装配**与**URDF 导出**；
- 负责**仿真与算法验证**，参与强化学习模型的训练优化；
- 配置 **Linux 基础部署环境**（Jetson Orin Nano 8G 平台）；
- 对接 **Odin1 视觉感知、里程计与 IMU 数据**，负责**环境建图与地图导出**。

**系统构成**：4 条轮腿，每条腿 3 个腿部关节 + 1 个驱动轮，共 **16 个执行器（RS02）**；控制路线为「强化学习训练 → MuJoCo 仿真 → Sim2Sim 验证 → Python 与 ROS 2/C++ 双线真机部署」。真机侧最终整理了 Python Sim2Real（v1/v2）与 ROS 2/C++ Sim2Real（v1/v2/v3）多版部署栈，后者把策略热路径迁移到 **50 Hz C++ 推理 + 200 Hz CAN 电机循环**，并接入 Nav2、TensorRT/ONNX 推理与里程计联调。

**开源程度**：仓库完整开源了**机械（SolidWorks 2026 源文件 + STEP）、硬件（自研电路 / BOM / 接线）、固件、软件（训练 / 仿真 / Sim2Real / 工具）、媒体资产、装配与部署文档**，并给出了整机装配入口、安全说明与版本状态（最终整理版 `v1.1.1`，MIT 协议）。这也是我们希望对起步较晚的 Robocon 队伍提供的参考。

**完赛演示视频**（仓库内文件，点击查看）：[`06_assets/videos/sim2real.mp4`](https://github.com/zeitvex/RC_WheelLeg/blob/main/06_assets/videos/sim2real.mp4) —— 完赛效果演示，1280×720 横屏、约 1 分 20 秒，与比赛实际时长接近；另有早期真机测试记录 [`early_sim2real.mp4`](https://github.com/zeitvex/RC_WheelLeg/blob/main/06_assets/videos/early_sim2real.mp4)（约 41 秒）。

### 整机总装与实机

<p align="center">
  <img src="/images/portfolio/16dof-assembly-sw.jpg" alt="16DOF 四轮足 SolidWorks 总装" width="76%">
</p>
<p align="center"><em>16DOF 轮足整机 SolidWorks 总装（源文件与 STEP 已随仓库开源）</em></p>

<p align="center">
  <img src="/images/portfolio/16dof-real.jpg" alt="16DOF 四轮足实机" width="34%">
</p>
<p align="center"><em>16DOF 实机：Jetson Orin Nano 8G 上位机 + 16 个 RS02 执行器</em></p>

### 机械结构迭代设计

从 8DOF 到 16DOF 的升级过程中，我参与了多轮结构方案迭代：把电机内嵌进腿部结构以缩短力臂、用同步带轮传递轮端动力、重新设计轮组与小腿，并在总装配阶段统一坐标系与惯量参数。

<div style="display:flex;gap:12px;justify-content:center;align-items:flex-start">
  <img src="/images/portfolio/16dof-leg-embedded-v1.jpg" alt="内嵌电机式轮腿初版设计" style="width:45%;max-width:45%;margin:0">
  <img src="/images/portfolio/16dof-calf-embedded.jpg" alt="内嵌电机式轮足小腿" style="width:45%;max-width:45%;margin:0">
</div>
<p align="center"><em>左：内嵌电机式轮腿初版设计；右：内嵌电机式轮足小腿</em></p>

<div style="display:flex;gap:12px;justify-content:center;align-items:flex-start">
  <img src="/images/portfolio/16dof-timing-pulley.jpg" alt="同步带轮传动设计" style="width:45%;max-width:45%;margin:0">
  <img src="/images/portfolio/16dof-wheel-design.jpg" alt="轮足轮组设计" style="width:45%;max-width:45%;margin:0">
</div>
<p align="center"><em>左：同步带轮传动设计；右：轮足轮组设计</em></p>

### 转接件设计

转接件是连接腿部关节与轮组 / 机身的过渡结构件，需要在**有限空间内同时满足安装孔位、走线避让、减重与刚度**四方面约束。

<p align="center">
  <img src="/images/portfolio/16dof-adapter.jpg" alt="转接件整体" width="52%">
</p>
<p align="center"><em>转接件整体轮廓：安装孔位、走线避让与减重槽设计</em></p>

### URDF 导出与惯量配置

<p align="center">
  <img src="/images/portfolio/16dof-urdf-inertia.jpg" alt="URDF 与惯量参数配置" width="64%">
</p>
<p align="center"><em>总装配后导出 URDF，并逐连杆核对质量、惯量与关节轴向，保证模型与仿真一致</em></p>

### Odin1 视觉感知、点云与建图

按分工，我负责对接 Odin1 的视觉感知、里程计与 IMU 数据，并完成比赛场地的环境建图与地图导出；下图是比赛场地雷达点云处理与导航路径规划的实际结果。

<div style="display:flex;gap:12px;justify-content:center;align-items:flex-start">
  <img src="/images/portfolio/16dof-odin-pointcloud-1.jpg" alt="Odin1 雷达点云处理" style="width:45%;max-width:45%;margin:0">
  <img src="/images/portfolio/16dof-odin-pointcloud-2.jpg" alt="Odin1 比赛场地点云处理" style="width:45%;max-width:45%;margin:0">
</div>
<p align="center"><em>Odin1 雷达点云处理与比赛场地建图结果</em></p>

<p align="center">
  <img src="/images/portfolio/16dof-navigation.jpg" alt="比赛导航路径规划" width="64%">
</p>
<p align="center"><em>基于建图结果的比赛导航路径规划</em></p>

**可验证性**：仓库同时提供 CAD 源文件、STEP、URDF、仿真工程与真机部署代码，任何人都能沿着同一条路径复现「建模 → 机器人描述 → 仿真验证 → 真机部署」。

**仓库入口**：[https://github.com/zeitvex/RC_WheelLeg](https://github.com/zeitvex/RC_WheelLeg)（队友与我的分工、安全须知、目录结构均在 README 中说明）

---

<a id="project-2"></a>

## 二、[16DOF 轮足强化学习、仿真与 Sim2Sim 开源](https://github.com/wusi321/RC_Legged_Training_Simulation)

**背景与问题**：16DOF 轮足的控制策略如果只靠人工调参，很难覆盖比赛中的粗糙地形、爬坡与限高场景。我们需要一条**可复现、可替换、可迁移**的强化学习工程链路，并且要让其他队伍能按自己的机械结构替换局部模块。

**我做了什么**：把训练工程从整机项目中抽离、整理成可独立复现的开源包，覆盖**机器人描述 → 训练任务 → 策略训练 → 仿真回放**的完整链路：

- **MJCF 机器人模型**：`wheelleg.xml`、`scene.xml` 与 STL 网格；
- **三类注册任务**：`Robot-Flat-v0`（平地）、`Robot-Rough-v0`（多障碍粗糙地形）、`Robot-Crawl-v0`（爬坡与限高）；
- **PPO 训练**：actor/critic 网络规模 `(512, 256, 128)`，**控制频率 50 Hz、物理步长 2 ms**；
- **Sim2Sim 验证**：`sim2sim.py` 与支持交互式导航的 `nav_sim2sim.py`，用同一套 MJCF 与策略权重做部署前接口检查；
- **独立 MuJoCo 调试**：`mujoco_sim/` 用于不启动完整训练框架时的模型、姿态与 MPC 调试。

**工程化设计**（我认为这是这部分最有价值的地方）：训练任务**配置化**、物理接口**统一**、部署前**Sim2Sim 检查**。具体落实为配置对象模式（`env_cfgs.py` / `rl_cfg.py` / `robot_cfg.py`）、注册表模式（`register_mjlab_task` 注册任务 ID）、组合式 MDP（奖励、命令、动作滤波、扰动、课程各自独立成模块）、Wrapper/Adapter（把 mjlab 环境适配到 RSL-RL 风格接口）与 Strategy（三类任务共用主框架、仅替换配置与地形课程）。

**鲁棒性考虑**：训练中引入摩擦、质心、编码器偏置、执行器刚度/阻尼、力矩上限、负载质量、推撞与持续外力等**随机化**，目的是缩小仿真到实机的差距；同时对腿部位置动作与轮部速度动作做**低通滤波与延迟建模**。

### 训练过程记录

<div style="display:flex;gap:12px;justify-content:center;align-items:flex-start">
  <img src="/images/portfolio/16dof-rl-training-1.jpg" alt="16DOF 强化学习训练过程" style="width:45%;max-width:45%;margin:0">
  <img src="/images/portfolio/16dof-rl-training-2.jpg" alt="16DOF 强化学习训练过程" style="width:45%;max-width:45%;margin:0">
</div>
<p align="center"><em>16DOF 轮足强化学习训练过程与策略在仿真中的表现</em></p>

**安全与边界**：文档中明确写了仿真通过不等于可以上电，真机调试必须架空机器人并确认急停链路，并列出迁移到其他机器人时必须重新核对的项（关节顺序、动作尺度、观测维度、执行器限幅等）。

**仓库入口**：[https://github.com/wusi321/RC_Legged_Training_Simulation](https://github.com/wusi321/RC_Legged_Training_Simulation)

---

<a id="project-3"></a>

## 三、[8DOF 双轮腿强化学习工程](https://github.com/wusi321/8DOF-WheelLeg-RL)

**背景与问题**：16DOF 平台之前的 8DOF 双轮腿是同一条技术路线的起点。我需要一个**独立的训练工程**，让机械、机器人描述与训练代码边界清晰，能单独迭代而不牵动整机仓库。

**我做了什么**：

- **8 个执行关节**：左右髋、大腿、膝、轮；**50 Hz 策略、200 Hz 物理仿真**；
- **观测设计**：保留速度指令、姿态、关节位置/速度与上一动作；默认**盲训**，可在环境配置中启用 height scanner / raycast critic；
- **课程体系**：
  - 基础课程：自动平衡站立、前后与横向移动、原地旋转、轮式与腿式运动切换；
  - 进阶课程：平地、斜坡、布朗 / Perlin 粗糙地形、矮墙与两种楼梯，**障碍高度统一不超过 12 cm**；
  - 恢复课程：摔倒后站起、蹲下、趴下、翻滚，恢复奖励使用**进度势函数**，避免策略在坏状态上"刷奖励"；
- **随机化**：推扰、摩擦、质量、执行器与**延迟随机化**，速度与关节速度设置上限；
- **工程链路**：SolidWorks 导出的 URDF 经 `urdf_to_mjcf.py` 规范化关节命名并转换为训练用 MJCF；训练脚本支持分段验收（先 5 iteration smoke test，再启动 `12000 iter × 2048 env` 的长训练），使用 **W&B**（项目名 `wheelleg-rl`）记录，服务器侧用 `uv` 管理环境，并提供 **Windows / Ubuntu 双平台**入口。

**训练数据记录（Weights & Biases）**：训练曲线与指标记录在 W&B 项目中 —— [wandb.ai/liucunfu2005-/mjlab](https://wandb.ai/liucunfu2005-/mjlab/workspace?nw=nwuserliucunfu2005)（若提示需要登录，可通过下方邮箱向我索取导出的曲线图）。

**为什么这样设计**：训练最容易失控的地方是"改了参数却说不清改了什么"。因此我把课程、随机化、奖励和观测拆成可配置项，并固定记录一组指标（站立高度/姿态、各轴速度跟踪、轮速跟踪、动作变化率、关节速度越界率、摔倒率、恢复成功率与耗时），让每次训练都可对比、可复盘。

### 移动训练效果（内嵌预览）

下面是该工程训练过程中录制的**移动训练视频**（原视频 2320×1440 / 60 fps / 56 秒；此处为压缩预览版，便于网页直接播放）：

<video src="/videos/8dof-rl-movement-preview.mp4" poster="/images/portfolio/8dof-video-poster.jpg" controls preload="metadata" style="width:100%;border-radius:8px"></video>

<p align="center"><em>8DOF 双轮腿强化学习策略移动训练过程</em></p>

> 原片体积约 447 MB，未随仓库托管；如需原始素材，可通过邮箱或文末的开源交流群联系我。

### 机械与机器人描述

<p align="center">
  <img src="/images/portfolio/8dof-assembly.jpg" alt="8DOF 双轮腿总装" width="52%">
</p>
<p align="center"><em>8DOF 双轮腿总装</em></p>

<p align="center">
  <img src="/images/portfolio/8dof-urdf.jpg" alt="8DOF URDF 导出验证" width="52%">
</p>
<p align="center"><em>URDF 导出后在 CAD 中核对各连杆坐标系与关节轴向，确保模型与仿真一致</em></p>

**仓库入口**：[https://github.com/wusi321/8DOF-WheelLeg-RL](https://github.com/wusi321/8DOF-WheelLeg-RL)

---

<a id="project-4"></a>

## 四、[6DOF 双轮腿全栈开发综合考核设计](https://github.com/wusi321/WheelLeg-FullStack-Challenge)

**背景与问题**：团队需要一种方式，快速判断一名后继者是否具备**从机械到控制、从仿真到通信**的完整工程能力，而不只是"会写一段代码"。于是我设计并开源了这套考核。

**我做了什么**：把全栈能力拆成 **12 个模块、满分 150 分** 的可评分体系，每个模块都给出题目、交付物与评分细则：

| 模块 | 分值 | 模块 | 分值 |
|---|--:|---|--:|
| 机械结构与 CAD | 18 | CAN 通信 | 15 |
| URDF/Xacro 机器人描述 | 12 | 视觉感知与视觉闭环 | 20 |
| ROS 2 与 Gazebo 仿真 | 25 | Git/GitHub 协作 | 10 |
| C++ 控制器 | 15 | 工程文档 | 5 |
| Ubuntu/Linux 开发环境 | 10 | AI 工具与模型使用 | 5 |
| MCU 与 IMU | 15 | **合计** | **150** |

**考核设计的核心约束**：所有模块必须使用**同一套尺寸、质量、坐标系与接口**，不允许提交互相独立的小实验——这直接对准了真实项目中"机械与模型不一致、仿真与实机脱节"的高频问题。参赛者需要建立从 **CAD → URDF/Xacro → Gazebo/ROS 2 → C++ 控制器 → Sim2Sim → MCU/CAN → Git 版本管理**的可复现闭环。

**评分与协作规范**：明确列出严重扣分项（`git add .` 一步 `final` 提交、未注明的他人代码、CAD 与 URDF 不一致、用 Python 替代核心 C++ 控制器、缺少 Sim2Sim 或缺少模块开发历史）与加分项（自动部署、自动测试、Docker、CI/CD、统一仿真/实机接口）；提交采用 `submission/<姓名>/<版本>` 分支 + Pull Request 到 `develop` 的流程，保留真实 Commit 历史。

**仓库入口**：[https://github.com/wusi321/WheelLeg-FullStack-Challenge](https://github.com/wusi321/WheelLeg-FullStack-Challenge)

---

<a id="project-5"></a>

## 五、[AUPT · 多 Linux 发行版包管理器调度工具](https://github.com/wusi321/aupt)

**背景与问题**：不同 Linux 发行版的包管理命令彼此割裂（Ubuntu 用 `apt`、Arch 用 `pacman`、CentOS 用 `dnf`、还有 `snap` / `flatpak`），换一台机器就要重新记一套命令；镜像源配置与排障也高度重复。我希望能用**一个统一入口**把这些差异屏蔽掉。

**我做了什么**（Python 独立开发）：

- **统一命令入口**：`aupt <manager?> <action> <package> [options]`，统一 `install / remove / update / upgrade / search / info / mirror / doctor / clean / config / benchmark`；
- **自动识别发行版并选择包管理器**，优先级 `apt/pacman/dnf/zypper → flatpak → snap`，同时支持强制指定（`aupt apt install nginx`）；
- **镜像源自动优化**：自动测速、选择最快镜像、改写配置并刷新索引（`aupt mirror auto / list / switch tuna`）；
- **版本控制**：支持 `aupt install gcc==9`、`aupt install python@3.10` 等写法与自动解析、fallback；
- **系统诊断**：`aupt doctor` 一键检查包管理器、网络与镜像源状态。

**工程化设计**：采用**分层 + 插件架构**（`core/` 调度与检测、`backends/` 各包管理器后端、`cli/`、`utils/`、`database/` 数据表、`plugins/` 扩展位），新增一种包管理器只需实现一个 backend；通过 `pyproject.toml` 的 `console_script` 暴露命令，提供用户级 / 系统级安装脚本与卸载脚本，并**兼容 Python 3.6 ~ 3.11+**（含 Ubuntu 18.04 等低版本系统路径）。此外专门写了**受限环境（容器 / 沙箱）使用指南**，把需要 root 的功能与不需要 root 的功能明确分开。

**兼容性验证**：已适配并测试 **Debian/Ubuntu** 与 **CentOS/RHEL**（仓库含 Ubuntu 22.04 / Python 3.10 与 CentOS 8.9 / Python 3.12 的实测截图），Fedora / Arch / openSUSE 已按同一抽象层支持、持续补充测试。

**仓库入口**：[https://github.com/wusi321/aupt](https://github.com/wusi321/aupt)

---

<a id="project-6"></a>

## 六、[2026 年全国大学生电子设计竞赛 H 题 · 车载平衡滚球运动控制系统](https://github.com/wusi321/2026-H-TI)

**背景与问题**：题面要求在车辆行驶、循迹、停车的同时，让横梁/管道上的 **1 cm 钢珠**稳定在目标位置——这是一个**视觉测量 + 车辆运动控制 + 快速位置闭环**的耦合问题，单一 MCU 很难同时兼顾实时性与算力。

**我做了什么**：以「**视觉测量 / 主控运动 / 独立计时**」三块硬件分工的方式完成整套作品，并把全部代码、文档、测试记录与设计报告开源：

| 组成部分 | 平台 | 职责 |
|---|---|---|
| 视觉测量 | MaixCAM | 采集 640×360 图像，输出钢珠位置/速度，可选 WebRTC 图传录制 |
| 主控 | MSPM0G3507 | 灰度循迹、轮速、IMU 航向、任务 2–7 状态机、钢珠位置闭环、舵机与遥测 |
| 计时器 | MSPM0G3507（独立板） | 通过 PA15 电平门控，OLED 显示比赛计时 |
| 上位机工具 | Web（Chrome/Edge） | 钢珠调参台（记录/回放/指标/仿真/参数导出）与运动轨迹台（轮速、偏航角、路径积分） |

**通信链路设计**（关键难点，全部在仓库中给出协议与帧格式）：MaixCAM → MCU 采用 **115200 8N1、20 字节二进制帧 + CRC16**；MCU → 调参台采用 9600 8N1、20 Hz 二进制遥测；运动遥测采用 32 字节 `AA 55` 帧；计时器通过 GPIO 电平门控并要求共地；图传走 HTTP/WebRTC。

**调试方法论**：仓库给出了严格的自下而上的调试顺序——先单独验证轮速与编码器方向、再验证 IMU 与灰度顺序、然后固定相机与管道完成位置标定、验证视觉帧 CRC 与超时回中、最后静态调位置闭环再做整车联调，并用调参台保存每次有效实验的遥测记录。设计报告同时提供 **LaTeX 源码**并附作品测试记录与评分表。

**仓库入口**：[https://github.com/wusi321/2026-H-TI](https://github.com/wusi321/2026-H-TI)

---

<a id="project-7"></a>

## 七、[ExamGuard · 考试反作弊系统（逆向工程）](https://github.com/wusi321/ExamGuard)

**背景与问题**：这是一次以**逆向工程**为核心的实践。起点只有一份 PyInstaller 打包的 `StudentApp.exe`，我需要从中还原程序结构、理解通信协议并重建出可运行、可扩展的双端系统。

**我做了什么**：

- 使用 `pyinstxtractor` 解包 PyInstaller 产物，补全字节码、还原源码结构，输出**详细逆向分析报告**与静态分析笔记；
- 在还原的基础上重构出完整系统：**教师端**（TCP 服务端 + Tkinter GUI + SQLite 持久化）与**学生端**（TCP 客户端 + 后台监控 + 登录界面）；
- **通信协议**：教师端监听 9527 端口，采用换行分隔的 JSON 行协议（`login` / `heartbeat` / `log_data` / `cmd_start|stop_monitor` / `alert` / `cmd_lock` / `exam_time` / `file_transfer`）；教师端每 3 秒在 9528 端口做 **UDP 广播发现**，学生端自动发现教师端；
- **监控能力**：基于 `psutil` 枚举进程、基于 **Win32 `GetForegroundWindow`** 获取前台窗口标题，并对进程做风险分级（AI 工具 / 浏览器 / 聊天软件 / 系统进程 / 其他）；
- **管控能力**：远程锁定与关闭密码、告警生成、基于 TCP 的文件传输（JSON 头 + 二进制体）、通过 `netsh advfirewall` 自动配置 Windows 防火墙规则、SQLite 记录会话 / 监控日志 / 告警 / 文件记录。

**这次实践的价值**：它把"读懂别人的代码"变成了可交付的工程能力——从二进制产物中还原协议与架构，再用规范的模块划分重新实现，这个能力直接迁移到实际工作中的遗留系统维护与协议对接。

**仓库入口**：[https://github.com/wusi321/ExamGuard](https://github.com/wusi321/ExamGuard)

---

<a id="stack"></a>

## 技术栈总览

| 方向 | 具体能力 |
|---|---|
| **机械与建模** | SolidWorks（整机装配、零件设计、减重与刚度权衡）、STEP/CAD 输出、URDF/Xacro 导出与坐标系核对、CNC 可制造性对接 |
| **仿真与训练** | MuJoCo / MJCF、**mjlab**、**PPO（RSL-RL 风格）**、课程与随机化设计、Sim2Sim 策略回放、W&B 实验记录 |
| **控制与部署** | 强化学习策略真机部署（Sim2Real）、**ROS 2 + C++**（50 Hz 策略推理 + 200 Hz CAN 电机循环）、Nav2、TensorRT/ONNX、Jetson Orin Nano |
| **嵌入式与电控** | STM32 / MSPM0G3507 / MaixCAM / ESP32、CAN、UART、I2C、SPI、IMU 与里程计接入、总线舵机、PID 与位置闭环 |
| **软件工程** | Python（CLI 工具、插件化架构、打包与安装脚本）、C/C++、Linux 环境与部署、Git 分支与 PR 流程、Docker / CI |
| **其他** | 视觉测量与标定、Web 工具（Web Serial 调参台）、逆向工程（PyInstaller 解包与协议还原）、LaTeX 技术文档 |

---

<a id="note"></a>

## 关于这份作品集

- **用途**：本文为**深圳科创学院极客营入营面试**整理的个人能力展示材料。
- **贡献边界**：项目一（16DOF 轮足全开源）与项目二属于**团队开源成果**，我在其中的角色与具体职责已在对应章节明确标注；项目三至项目七为**我个人主导开发**。
- **开源与署名**：上述仓库除团队项目外均采用 MIT 协议；引用第三方依赖、模型与素材时遵循其各自许可证。
- **可验证性**：每个仓库都提供 README、目录说明与可运行入口（安装、训练、回放、构建），论文式结论不写、可复现路径必给。

---

<a id="contact"></a>

## 联系我

- **GitHub**：[github.com/wusi321](https://github.com/wusi321)
- **邮箱**：[19589917063@163.com](mailto:19589917063@163.com)
- **简历**：[📄 下载 PDF 简历](/files/liucunfu-resume.pdf)
- **QQ 开源交流群**：767195310（也欢迎在群里交流轮足机器人、强化学习与部署问题）

以上是我在机器人方向的主要工作，欢迎通过 GitHub、邮箱或交流群与我交流，也很期待在极客营和大家一起做更硬核的东西。
