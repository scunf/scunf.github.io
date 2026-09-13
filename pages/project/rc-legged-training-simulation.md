---
title: RC 16DOF 轮足机器人强化学习仿真
layout: project
date: 2026-09-02
updated: 2026-09-02
categories: project robotics
tags:
  - reinforcement-learning
  - mujoco
  - sim2sim
  - wheel-leg
  - python
top: 2
---

## 项目概览

`RC_Legged_Training_Simulation` 是山东华宇工学院 HYNova 战队整理的 16DOF 轮足机器人强化学习、MuJoCo 仿真和 Sim2Sim 验证工程。仓库聚焦训练、仿真和部署前接口检查；实机部署、ROS 2/C++ 控制主线和比赛任务集成位于其他项目中。

项目以 MIT 协议开源，但第三方依赖、mjlab、MuJoCo、PyTorch、CUDA、网格资源和示例策略权重仍需遵守各自许可证或授权要求。

## 工程能力

- 使用 MJCF 描述轮足机器人、场景和网格模型。
- 基于 mjlab 注册 `Robot-Flat-v0`、`Robot-Rough-v0`、`Robot-Crawl-v0` 训练任务。
- 使用 PPO 训练策略，包含 actor/critic、奖励、课程、随机化、动作滤波和扰动配置。
- 通过 `mujoco_sim/` 进行运动学、动力学和 MPC 思路调试。
- 通过 `sim2sim/` 回放策略权重，检查地形行为和部署接口。
- 提供 `model_rough.pt` 与 `model_crawl.pt` 作为本地回放和链路验证权重。

## 目录结构

```text
RC_Legged_Training_Simulation/
├─ LICENSE
├─ README.md
└─ rc_mjlab/
   ├─ pyproject.toml       # Python 依赖
   ├─ uv.lock              # 锁定依赖版本
   ├─ model_rough.pt       # Rough 示例策略
   ├─ model_crawl.pt       # Crawl 示例策略
   ├─ mjlab/               # 本地 mjlab 依赖
   ├─ mjcf/                # MJCF、场景和 STL 网格
   ├─ src/robot/           # 任务、奖励、课程和 PPO 配置
   ├─ sim2sim/             # 策略回放和地形仿真
   └─ mujoco_sim/          # 独立 MuJoCo/MPC 调试
```

## 环境与安装

推荐使用 Ubuntu 22.04、Python 3.10/3.11、NVIDIA GPU 和 `uv`。运行 MuJoCo viewer 或 Pygame 面板还需要可用的图形环境。

```bash
cd rc_mjlab
uv sync
```

依赖版本由 `pyproject.toml` 和 `uv.lock` 约束，`mjlab` 以本地 editable 依赖方式引用仓库中的实现，不能只复制某一个训练脚本运行。

## 训练与回放

```bash
cd rc_mjlab

uv run train Robot-Flat-v0
uv run train Robot-Rough-v0
uv run train Robot-Crawl-v0
uv run play Robot-Rough-v0
```

主要配置入口：

- `src/robot/config/env_cfgs.py`：观测、奖励、事件、地形和终止条件。
- `src/robot/config/rl_cfg.py`：PPO 网络、学习率、折扣因子和迭代次数。
- `src/robot/robot_cfg.py`：MJCF、执行器和物理实体配置。
- `src/robot/mdp/rewards.py`：速度、姿态、接触、能耗和动作平滑奖励。
- `src/robot/mdp/curriculums.py`：地形和速度指令课程。
- `src/robot/mdp/lowpass_actions.py`：动作滤波与延迟建模。
- `src/robot/mdp/disturbances.py`：外力和力矩扰动。

## Sim2Sim 与 MuJoCo 调试

```bash
cd rc_mjlab
uv run python sim2sim/sim2sim.py
uv run python sim2sim/nav_sim2sim.py
uv run python mujoco_sim/run.py
```

`sim2sim.py` 默认加载 `model_rough.pt`。`nav_sim2sim.py` 支持 Rough 和 Crawl 示例权重，可用于交互式导航和地形回放。运行前需要确认 MuJoCo 渲染、Pygame 和本地图形显示可用。

## 训练到部署的接口检查

训练侧主要产出策略 checkpoint 和与策略一致的输入输出约定。Sim2Sim 通过相同的 MJCF 和策略权重检查策略输入输出、地形行为、姿态稳定性和控制接口，但不能替代真机安全测试。

迁移到其他机器人时，必须重新核对：

- 观测顺序和维度；
- 动作维度、动作缩放和控制频率；
- 关节顺序、零位和方向；
- 执行器限幅、传感器配置和物理参数；
- 真机急停、架空测试和功率安全条件。

项目当前建议补充训练曲线、Sim2Sim 通过率、最大姿态角、平均速度、碰撞次数和任务完成时间等实验记录，避免把示例权重误认为实机性能承诺。

## 项目地址

GitHub: [wusi321/RC_Legged_Training_Simulation](https://github.com/wusi321/RC_Legged_Training_Simulation)
