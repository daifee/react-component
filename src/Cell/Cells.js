import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

/**
 * Cells UI
 * @param {object} props see Cells.propTypes
 */
export default function Cells(props) {
  let {className, children, ...others} = props;
  className = classNames('cells', {_user: className});

  return (
    <div {...others} className={className}>{children}</div>
  );
}

/**
 * Cells 的 props
 * @type {Object}
 */
Cells.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
