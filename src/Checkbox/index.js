import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import {IconCheck} from '../Icon';
import './style';

/**
 * Checkbox
 * @param {object} props see Checkbox.propTypes
 */
export default function Checkbox(props) {
  let {checked, disabled, className, ...others} = props;
  className += ' ' + IconCheck.className;
  className = classNames('checkbox', {_user: className});

  return (
    <input
      className={className}
      type='checkbox'
      checked={checked}
      disabled={disabled}
      {...others} />
  );
}

/**
 * props
 * @type {Object}
 * checked: 是否选中状态
 * disabled: 是否禁用
 */
Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

