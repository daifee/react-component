import config from './config';
import React from 'react';
import {render} from 'react-dom';

const {namespace} = config;
const hasOwn = {}.hasOwnProperty;


export function classNames() {
  let classes = [];
  let arg, argType, key;

  for (let i = 0, len = arguments.length; i < len; i++) {
    arg = arguments[i];
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



export function createInstance(Component, container) {
  if (!container) {
    container = createContainer();
  }

  return render(<Component />, container);
}

function createContainer() {
  let div = document.createElement('div');
  div.className = classNames('api-container');
  document.body.appendChild(div);

  return div;
}


