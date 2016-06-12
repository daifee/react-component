import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import {IconCheck} from '../Icon';
import './style';

/**
 * 选择框
 * 所有 checkbox 都有效
 * @param {object} props 传入组件的属性
 * @property {boolean} props.checked 是否选中状态
 * @property {boolean} props.disabled 是否禁止操作（当为 true 不会触发 onChange）
 */
export default function Checkbox(props) {
  let {checked, disabled, className, ...others} = props;
  className += ' ' + IconCheck.className;
  let classes = classNames('checkbox', {_user: className});

  return (
    <input
      className={classes}
      type='checkbox'
      checked={checked}
      disabled={disabled}
      {...others} />
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false
};
