import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

/**
 * CellFooter UI
 * @param {object} props see CellFooter.propTypes
 */
export default function CellFooter(props) {
  let {className, children, ...others} = props;
  className = classNames('cell-footer', {_user: className});

  return (
    <div {...others} className={className}>{children}</div>
  );
}

/**
 * CellFooter 的 props
 * @type {Object}
 */
CellFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
