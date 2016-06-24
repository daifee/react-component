import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import './style';

/**
 * Mask UI
 * @param {props} props see Mask.propTypes
 */
export default function Mask(props) {
  let {className, transparent, children, ...others} = props;
  className = classNames('mask', {
    _user: className,
    'mask-transparent': transparent
  });

  return (<div className={className} {...others}>{children}</div>);
}

/**
 * props
 * @type {Object}
 * transparent: 是否透明
 */
Mask.propTypes = {
  transparent: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};
