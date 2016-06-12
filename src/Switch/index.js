import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import './style';

/**
 * 开关（其实就是将 checkbox 改了样式）
 * 所有 checkbox 都有效
 * @param {object} props 传入组件的属性
 * @property {boolean} props.checked 是否选中状态
 * @property {boolean} props.disabled 是否禁止操作（当为 true 不会触发 onChange）
 */
export default function Switch(props) {
  let {checked, disabled, className, ...others} = props;
  let classes = classNames('switch', {_user: className});

  return (
    <input
      className={classes}
      type='checkbox'
      checked={checked}
      disabled={disabled}
      {...others} />
  );
}

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool
};

Switch.defaultProps = {
  checked: false,
  disabled: false
};
