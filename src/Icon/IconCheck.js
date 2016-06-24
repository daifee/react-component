import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

/**
 * IconCheck UI
 * @param {object} props see IconCheck.propTypes
 */
export default function IconCheck(props) {
  let {size, className, style, ...others} = props;
  className = classNames('icon-check', {'_user': className});
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
IconCheck.className = classNames('icon-check');


/**
 * props
 * @type {Object}
 * size: 大小
 */
IconCheck.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

IconCheck.defaultProps = {
  size: '40px'
};
