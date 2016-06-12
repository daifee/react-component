import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

/**
 * 自定义 Icon
 * @param {object} props 传入组件的属性
 * @property {string} props.size 大小
 * @property {string} props.className 自定义 class
 */
export default function IconCheck(props) {
  const {size, className, ...others} = props;
  let classes = classNames('icon-check', {'_user': className});
  let style = {
    height: size,
    width: size,
    fontSize: size
  };

  return (
    <i className={classes} style={style} {...others} />
  );
}

/**
 * 其他元素可以直接使用这个 class
 * @type {[type]}
 */
IconCheck.className = classNames('icon-check');


IconCheck.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string
};

IconCheck.defaultProps = {
  size: '40px'
};
