import config from './config';
import React from 'react';
import {render} from 'react-dom';

const {namespace} = config;
const hasOwn = {}.hasOwnProperty;

/**
 * 包装返回 className
 * @param  {string|object} args 要被包装的 className
 * 所有 className 都回被加上项目的 namespace 前缀。
 * 如果参数是对象，则其属性是 class 名，值为 true 则该 class 名被返回。
 * 如果参数的属性是 `_user` 则直接返回其值，不作包装
 * @return {string}         一个或多个 class。例如："class1 class2 class3"
 *
 * @example
 * let classes = classNames('dialog', {
 *   'dialog-btn': false,
 *   'dialog-title': true,
 *   '_user': 'user-class'
 * });
 * console.log(classes);
 * // 假设 namespace='rd'
 * // output: "rc-dialog rc-dialog-title user-class"
 */
export function classNames(...args) {
  let classes = [];
  let arg, argType, key;

  for (let i = 0, len = args.length; i < len; i++) {
    arg = args[i];
    argType = typeof arg;

    if (!arg) continue;

    if (argType === 'string' || argType === 'number') {
      prePush(classes, arg);
    } else if (Array.isArray(arg)) {
      classes.push(classNames.apply(null, arg));
    } else if (argType === 'object') {
      for (key in arg) {
        if (!hasOwn.call(arg, key) || !arg[key]) continue;

        // 用户传入的
        if (key === '_user') {
          classes.push(arg[key]);
        } else {
          prePush(classes, key);
        }
      }
    }
  }

  return classes.join(' ');
}

function prePush(arr, value) {
  value = `${namespace}-${value}`;
  return arr.push(value);
}


/**
 * 根据传入的 Component 创建一个实例，并渲染到 container
 * @param  {Component} Component React 组件
 * @param  {?dom} container 实例将渲染到该 dom 节点，
 * 如果缺少，内部创建 dom 节点。
 * @return {PropTypes.element}           Component 的实例
 */
export function createInstance(Component, container) {
  if (!container) {
    container = createContainer();
  }

  return render(<Component />, container);
}

/**
 * 创建一个 dom 节点，div.${namespace}-apicontainer
 * @return {dom} 节点
 */
function createContainer() {
  let div = document.createElement('div');
  div.className = classNames('api-container');
  document.body.appendChild(div);

  return div;
}


