import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import './style';

/**
 * Switch 开关，其实就是漂亮的 checkbox
 * 渲染 <input type="checkbox" />
 */
export default function Switch(props) {
  let {className, ...others} = props;
  className = classNames('switch', {_user: className});

  return (
    <input
      className={className}
      type='checkbox'
      {...others} />
  );
}

/**
 * props
 * @type {Object}
 */
Switch.propTypes = {
  className: PropTypes.string
};

