#!/usr/bin/env node

const {execSync} = require('child_process');
const path = require('path');
const ROOT_PATH = path.resolve(__dirname, '..');

// 需要用到的第三方库
const reactPath = path.resolve(ROOT_PATH, './node_modules/react/dist/');
const reactDomPath = path.resolve(ROOT_PATH, './node_modules/react-dom/dist/');
const xiscrollPath = path.resolve(ROOT_PATH, './node_modules/xiscroll/build/');
const distPath = path.resolve(ROOT_PATH, './dist/');

// 目标路径
const externalPath = path.resolve(ROOT_PATH, './website/externals/');

// 执行 copy 命令
execSync(`cp -R ${reactPath} ${externalPath}`);
execSync(`cp -R ${reactDomPath} ${externalPath}`);
execSync(`cp -R ${xiscrollPath} ${externalPath}`);
execSync(`cp -R ${distPath} ${externalPath}`);

// webpack 编译
execSync(`cd ${ROOT_PATH}`);
execSync('npm run doc');
execSync('npm run build:website-demos');
execSync('npm run build:website-demos-externals');
