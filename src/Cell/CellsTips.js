import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

/**
 * CellTips UI
 * @param {object} props see CellTips.propTypes
 */
export default function CellTips(props) {
  let {className, children, ...others} = props;
  className = classNames('cells-tips', {_user: className});

  return (
    <div {...others} className={className}>{children}</div>
  );
}

/**
 * CellTips 的 props
 * @type {Object}
 */
CellTips.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
