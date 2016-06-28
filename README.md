# Daifee-React-Component


所有组件都是 stateless 组件，但为方便，某些组件提供 API 调用方式的静态方法。

---

[TOC]

## 使用前须知

源码已构建成 **UMD** 模块发布到 NPM.

> npm install -s daifee-react-component


**依赖：**

* [React](https://www.npmjs.com/package/react)
* [ReactDOM](https://www.npmjs.com/package/react-dom)
* [ReactCSSTransitionGroup](https://www.npmjs.com/package/react-addons-css-transition-group)
* [xiscroll](https://www.npmjs.com/package/xiscroll)


## 用法

建议用 webpack 构建

文档：http://daifee.github.io/react-component/doc/

### Demos

将所有依赖（包括 Daifee-React-Component）与项目源码打包为一个文件。

[访问地址](http://daifee.github.io/react-component/website/demos/)

* 源码：`/example`
* 配置：`/website/webpack.config.demos.js`

### Demos-externals

将所有依赖（包括 Daifee-React-Component）用 `<script />` 加载。

[访问地址](http://daifee.github.io/react-component/website/demos-externals/)

* 源码：`/example`
* 配置：`/website/webpack.config.demos-externals.js`


## 项目目录结构

```text

/react-component
  |-- dist  构建后的代码
  |-- doc  文档
  |-- example  开发过程中的例子（也是在线 Demos 的源码）
  |-- src  项目源码
  |-- test  测试（还没写）
  |-- website  网站（Demos 构建配置）
  |-- ...配置

```

## 开发

**命令脚本：**

* `npm install` 安装依赖
* `npm start` 启动本地开发服务器 localhost:8082
* `npm test` 测试
* `npm run lint` 检测代码
* `npm run lint:watch` 监听文件变化，持续检测代码
* `npm run build` 构建编译源码
* `npm run build:website`  构建 website 项目

## 风格

* 文件名（包含目录）和标识符（变量、函数名、属性）都用使用“驼峰式”。
* 以模块为单位创建文件，如果模块为“类”则第一个字母大写。
* 每个组件定义一个目录，以组件名命名。
* 尽量使用 stateless component
* 某些组件为了方便使用，提供静态方法作为直接调用的接口。
* 定义组件时用到的 props 必须在 propTypes 声明，可以向组件传递任意 props（React 支持就行）。


## 踩到的坑


### addComponentAsRefTo Invariant Violation

竟然是 `react-with-addons` 与 `react-dom` 加载顺序的问题 http://stackoverflow.com/questions/28519287/what-does-only-a-reactowner-can-have-refs-mean


### 构建 UMD 模块

Daifee-React-Component 依赖 react-addons-css-transition-group 将其配置为 externals

```js
// webpack.config.js

'react-addons-css-transition-group': {
  // UMD 依赖模块： root['React']['addons']['CSSTransitionGroup']
  // 项目依赖模块：module.exports = React.addons.CSSTransitionGroup;
  // 作为项目依赖模块时，root 的值不能是数组，只能是 {root: 'React.addons.CSSTransitionGroup'}
  root: ['React','addons','CSSTransitionGroup'],
  commonjs2: 'react-addons-css-transition-group',
  commonjs: 'react-addons-css-transition-group',
  amd: 'react-addons-css-transition-group'
}
```


如果项目依赖 Daifee-React-Component，并希望也将 react-addons-css-transition-group 配置为 externals，其配置却与上面不一样。

```js
// webpack.config.demos-externals.js
externals: {
  'react': 'React',
  'react-dom': 'ReactDOM',
  // 看我傻逼不？
  'react-addons-css-transition-group': 'React.addons.CSSTransitionGroup',
  'daifee-react-component': 'DaifeeReactComponent',
  'xiscroll': 'IScroll'
}

```
