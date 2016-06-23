import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

/**
 * CellTitle UI
 * @param {object} props see CellTitle.propTypes
 */
export default function CellTitle(props) {
  let {className, children, ...others} = props;
  className = classNames('cell-title', {_user: className});

  return (
    <div {...others} className={className}>{children}</div>
  );
}

/**
 * CellTitle 的 props
 * @type {Object}
 */
CellTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
