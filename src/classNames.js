/**
 * 实现 https://github.com/JedWatson/classnames 的功能
 *
 * 定制功能：
 *   * 所有 class 都增加 namespace
 *   * _user 属性不加 namespace
 */
import config from './config';
const {namespace} = config;

const hasOwn = {}.hasOwnProperty;

function prePush(arr, value) {
  value = `${namespace}-${value}`;
  return arr.push(value);
}

export default function classNames() {
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
        if (key === '_user' ) {
          classes.push(arg[key]);
        } else {
          prePush(classes, key);
        }
      }
    }
  }

  return classes.join(' ');
}

