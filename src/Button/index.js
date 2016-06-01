/**
 * Button Component
 * @module src/Button
 */

import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import './style';


/**
 * 输出
 * @param {Object} props 传入的 props
 * @param {String} props.type 按钮类型
 */
export default function Button(props) {
  const {children, className, type, disabled, onTouchStart, ...others} = props;
  const {href} = others;
  const classes = classNames('btn', {
    '_user': className,
    [`btn-${type}`]: true,
    'btn-disabled': disabled
  });
  const Component = href ? 'a' : 'button';

  return (
    <Component
      className={classes}
      {...others}
      onTouchStart={(e) => {
        disabled && e.preventDefault();
        onTouchStart && onTouchStart(e);
      }}>
      {children}
    </Component>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'warn']),
  disabled: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  onTouchStart: PropTypes.func
};

Button.defaultProps = {
  type: 'default'
};

