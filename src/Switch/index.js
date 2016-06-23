import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import './style';

/**
 * Switch 开关，其实就是漂亮的 checkbox
 */
export default function Switch(props) {
  let {checked, disabled, className, ...others} = props;
  className = classNames('switch', {_user: className});

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
 */
Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

Switch.defaultProps = {
  checked: false,
  disabled: false
};
