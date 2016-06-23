import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

/**
 * CellHeader UI
 * @param {object} props see CellHeader.propTypes
 */
export default function CellHeader(props) {
  let {className, children, ...others} = props;
  className = classNames('cell-header', {_user: className});

  return (
    <div {...others} className={className}>{children}</div>
  );
}

/**
 * CellHeader 的 props
 * @type {Object}
 */
CellHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
