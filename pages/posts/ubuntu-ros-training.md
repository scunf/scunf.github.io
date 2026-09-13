---
title: 第二次培训
date: 2026-01-27 12:40:18
updated: 2026-01-27 12:40:18
categories: JIAOCHENG
tags:
  - Ubuntu
  - Linux
  - ROS
---

## 第二次寒假培训

---
### 目录
- [目录](#目录)
- [前言](#前言)
- [一些需要了解的概念](#需要了解的概念)
- [Ubuntu](#ubuntu)
- [ros](#ros)
- [闲聊](#闲聊)

### 前言
这是第二次寒假培训,我今天不给大家讲已经初步了解的单片机等,今天我拿我的**ubuntu**带大家熟悉一下linux以及上位机系统,ros,领大家敲一些终端命令  
> 为什么我要带大家了解ubuntu?
- 主流操作系统
- 服务器常用
- 上位机常用
- 和你们相关 -- 开学你们要接的项目(智元素,仿人,w2u以及其他一些机器人都是基于瑞芯微等品牌的上位机开发,集成操作系统基本是ubuntu)

### 需要了解的概念
(可能比较无聊)
- 常见指令集架构(x86,ARM)
不需要仔细了解 但是得知道
**x86**
分64位以及32位(X86-64,X86-32)
常见的PC电脑上的操作系统
你的windos11,企业服务器,
(特点就是高功耗,性能释放)
---
**ARM**
你的手机的安卓,ios,鸿蒙(???) ,上位机,下位机
(典型特点就是低电压低功耗,小型设备,性能以及能效可观)
> 为什么我要给你们提这东西?这是我在大一下学期接机器人项目下载软件遇到的实际问题,你在浏览器搜索某个软件官网下载东西,会经常看到windox版(分为x86-64位,x86-32位),linux版(x86-64,**arm64**,安卓)

- **上位机??下位机**
下位机:单片机(C51,STM32,esp32,MSPM0等等)
特点:写代码 -> 烧录 -> 运行
缺点:无法实时调试
上位机:(树莓派,香橙派,泰山派,荔枝派,RDK X5,瑞芯微,以及英伟达出的jetson nano)
特点:性能强劲,功耗低,成本高,相当于小型电脑主机or服务器
可烧录系统:ubuntu,centos,deepin等,我们接触的最多的是ubuntu(20.04)--ARM架构,删除了好多东西,只保留了基本的系统,以及一些常用的软件
算力较高:(除少数比较老版本的一些外,其余算力都可达4tops以上)
- 树莓派:4GB RAM,1.5GHz四核CPU
- 香橙派:4GB RAM,1.2GHz四核CPU
- 泰山派:4GB RAM,1.5GHz四核CPU
- 荔枝派:4GB RAM,1.2GHz四核CPU
- RDK X5:8GB RAM,2.0GHz八核CPU[淘宝链接](https://s.taobao.com/search?_input_charset=utf-8&clientPreloadId=preload_1769491151221&commend=all&ie=utf8&initiative_id=tbindexz_20170306&page=1&preLoadOrigin=https%3A%2F%2Fwww.taobao.com&q=rdk%20x5&search_type=item&source=suggest&sourceId=tb.index&spm=a21bo.jianhua%2Fa.search_downSideRecommend.d3&ssid=s5-e&suggest=0_3&suggest_query=%E8%8B%B1%E4%BC%9F%E8%BE%BE&tab=all&wq=%E8%8B%B1%E4%BC%9F%E8%BE%BE)
- 瑞芯微:4GB RAM,1.5GHz四核CPU
- jetson nano:4GB RAM,5.3GHz四核CPU[淘宝链接](https://s.taobao.com/search?_input_charset=utf-8&clientPreloadId=preload_1769491151221&commend=all&ie=utf8&initiative_id=tbindexz_20170306&page=1&preLoadOrigin=https%3A%2F%2Fwww.taobao.com&q=%E8%8B%B1%E4%BC%9F%E8%BE%BEjetson%20nano&search_type=item&source=suggest&sourceId=tb.index&spm=a21bo.jianhua%2Fa.search_downSideRecommend.d3&ssid=s5-e&suggest=0_3&suggest_query=%E8%8B%B1%E4%BC%9F%E8%BE%BE&tab=all&wq=%E8%8B%B1%E4%BC%9F%E8%BE%BE)
可以直接跑ros,以及一些小型的视觉模型(如yolov5)

### Ubuntu
友情链接:
- [ubuntu官网](https://ubuntu.com/)
- [犬小哈教程](https://www.quanxiaoha.com/)
- [犬小哈教程-linux常用命令](https://www.quanxiaoha.com/linux-command/linux-shutdown.html)
现在,请大家打开vmware虚拟机创建的ubuntu虚拟机
新建一个终端窗口(ctrl+alt+t)(也可以在ubuntu桌面点击终端图标)
插一嘴ubuntu 是一个基于Debian的Linux发行版,所以很多指令都是和Debian相关的
然后linux的终端和windows的命令行(CMD,PowerShell是windows的命令行,cmd和powershell都是windows的命令行,但是命令写法和cmd有不同,可以问ai,powershell是微软出的,功能更加强大)是不同的,linux的终端是一个文本界面,你可以在终端中输入指令,然后终端会执行这些指令,并将结果显示在终端中

```bash
sudo -i # 切换到root用户
exit # 退出root用户
sudo apt update # 更新软件源
sudo apt upgrade # 升级已安装的软件
sudo apt install 软件名 # 安装软件
sudo apt remove 软件名 # 删除软件
nano 文件名 # 编辑文件 ctrl+o写入,回车,ctrl+x退出,另一个叫vi,但是我不常用
chmod +x 文件名 # 给文件添加可执行权限
./文件名 # 执行文件
```

你们会用到的
```bash
cd 目录名 # 切换目录
ls # 查看目录下文件
pwd # 查看当前目录
mkdir 目录名 # 创建目录
rmdir 目录名 # 删除目录
ifconfig # 查看网络配置 (ip地址等) windows下使用ipconfig
sudo pip install 软件名 # 安装软件
sudo python3 python文件.py # 执行python文件
```

### ros
然后,我之前让你们在wsl安装过ros,
- [ros官网](https://www.ros.org/)
- [ros中文网](http://www.ros.org.cn/)
- [鱼香ros](https://fishros.com/)
如果,你们寒假有时间,可以去鱼香ros学习一下ros,了解一下ros的基本概念,以及一些常用的指令,工作原理

### 闲聊
我会把这个md源文件发到群里
顺便给你们分享一下发现的这个[犬小哈](https://www.quanxiaoha.com/)
