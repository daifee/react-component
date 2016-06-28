import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

/**
 * IconAttention UI
 * @param {object} props see IconAttention.propTypes
 */
export default function IconAttention(props) {
  let {size, className, style, ...others} = props;
  className = classNames('icon-attention', {'_user': className});
  style = {
    ...style,
    height: size,
    width: size,
    fontSize: size
  };

  return (
    <i className={className} style={style} {...others} />
  );
}

/**
 * 其他元素可以直接使用这个 class
 * @type {string}
 */
IconAttention.className = classNames('icon-attention');

/**
 * props
 * @type {Object}
 * size: 大小
 */
IconAttention.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

IconAttention.defaultProps = {
  size: '40px'
};
