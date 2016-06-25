/**
 * Node 脚本
 *
 * 创建 pagesMapping.js 文件
 */
const fs = require('fs');
const cwd = require('process').cwd;
const resolve = require('path').resolve;
const ejs = require('ejs');

const ROOT_PATH = cwd();
const pagesPath = resolve(ROOT_PATH, './example/pages');
const files = fs.readdirSync(pagesPath);
const matchJs = /\.js$/;

let pages = [];

files.forEach((file) => {
  if (!matchJs.test(file)) return;

  let page = file.replace(matchJs, '');
  pages.push(page);
});


let template = resolve(ROOT_PATH, './example/pagesMapping.js.tpl');
template = fs.readFileSync(template, 'utf-8');
template = ejs.compile(template);

const fileName = resolve(ROOT_PATH, './example/pagesMapping.js');
let data = template({pages});
fs.writeFileSync(fileName, data);


