# Daifee-React-Component

一套决定项目 UI 风格的  react component。

---

[TOC]

## 项目目录

```text



```

## 开发

**命令脚本：**

* `npm install` 安装依赖
* `npm start` 启动本地开发服务器 localhost:8082
* `npm run lint` 检测代码
* `npm run lint:watch` 监听文件变化，持续检测代码
* `npm run esdoc` 生成（更新）文档


## 风格

* 文件名（包含目录）和标识符（变量、函数名、属性）都用使用“驼峰式”。
* 以模块为单位创建文件，如果模块为“类”则第一个字母大写。
* 每个组件定义一个目录，以组件名命名。
* 所有组件都是无状态组件。
* 某些组件为了方便使用，提供静态方法作为直接调用的接口。
* 定义组件时用到的 props 必须在 propTypes 声明，可以向组件传递任意 props。

