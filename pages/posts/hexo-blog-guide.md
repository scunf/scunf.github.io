---
title: 个人博客
date: 2026-01-16 16:27:17
updated: 2026-01-16 16:27:17
categories: JIAOCHENG
tags:
  - Hexo
  - GitHub Pages
---

## 基于 **HEXO** 的个人博客搭建教程
### 目录
- [目录](#目录)
- [参考文章](#参考文章)
- [友情链接](#友情链接)
- [基础环境配置](#基础环境配置)
- [Hexo安装](#hexo安装)
- [Hexo配置](#hexo配置)
- [Hexo主题配置](#hexo主题配置)
- [Hexo部署](#hexo部署)
- [博客书写及上传](#博客书写及上传)
- [常用命令](#常用命令)

### 参考文章:
[基于Hexo的个人博客搭建](https://blog.csdn.net/xiaochenXIHUA/article/details/154260238?ops_request_misc=%257B%2522request%255Fid%2522%253A%252241ad9eecd32cf5b4e7bd7872145163c9%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=41ad9eecd32cf5b4e7bd7872145163c9&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-154260238-null-null.142^v102^control&utm_term=%E5%9F%BA%E4%BA%8Egithub%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA&spm=1018.2226.3001.4187)
### 友情链接:
[HEXO的github](https://github.com/hexojs/hexo)
[HEXO官方安装指南](https://hexo.io/docs/#Installation)
[HEXO的主题库](https://hexo.io/themes/)

### 基础环境配置
- 准备一个文本编译器VS Code或者其他(Trae/cursor)
- 安装Node.js: [Node.js官方下载](https://nodejs.org/en/download/)
- 安装Git: [Git官方下载](https://git-scm.com/downloads)

### Hexo安装

- 安装Hexo: `npm install -g hexo-cli`

### Hexo配置

### Hexo主题配置

- 选择一个主题: 从[HEXO的主题库](https://hexo.io/themes/)选择一个你喜欢的主题, 例如: `hexo-theme-next`
- 安装主题: `npm install hexo-theme-next --save`
- 配置主题: 在博客根目录下的 `_config.yml` 文件中, 找到 `theme` 字段, 并将其值设置为你安装的主题名称, 例如: `theme: next`

### Hexo部署
- 配置github pages: 确保你有一个github账号, 并在github上创建一个新的仓库, 仓库名称为 `yourusername.github.io`, 其中 `yourusername` 是你的github用户名.
- 配置git: 确保你已经配置了git的全局用户名和邮箱, 可以使用以下命令进行配置:
  ```bash
  git config --global user.name "yourusername"
  git config --global user.email "youremail@example.com"
  ```
- 配置ssh密钥: 确保你已经配置了ssh密钥, 可以使用以下命令进行配置:
  ```bash
  ssh-keygen -t rsa -P "" -f ~/.ssh/id_rsa
  ```
- 添加ssh密钥到github: 将 `~/.ssh/id_rsa.pub` 文件的内容复制到github账号的ssh密钥设置中.

- 配置部署: 在博客根目录下的 `_config.yml` 文件中, 找到 `deploy` 字段, 并根据你选择的部署方式进行配置, 例如:
  ```yaml
  deploy:
    type: git
    repo: https://github.com/yourusername/yourusername.github.io.git
    branch: master
  ```
- 部署: `hexo deploy`

### 博客书写及上传
- 新建md文件: `hexo new "文章标题"`
- 编辑md文件: 使用你喜欢的文本编辑器打开 `source/_posts/文章标题.md` 文件, 并在文件中编写你的博客内容.
- 上传博客: `hexo deploy`

### 常用命令
- 初始化博客: `hexo init`
- 安装依赖: `npm install`
- 生成静态文件: `hexo generate`
- 启动本地服务器: `hexo server`
- 部署到GitHub Pages:
  - 安装部署插件: `npm install hexo-deployer-git --save`
  - 新建md文件: `hexo new "文章标题"`
  - 部署:
    ```bash
    hexo clean
    hexo generate
    hexo deploy
    ```
