import React, {
	PropTypes
} from 'react';
import {classNames} from '../utils';

/**
 * CellBody UI
 * @param {object} props see CellBody.propTypes
 */
export default function CellBody(props) {
  let {className, children, ...others} = props;
  className = classNames('cell-body', {_user: className});

  return (
    <div {...others} className={className}>{children}</div>
  );
}

/**
 * CellBody 的 props
 * @type {Object}
 */
CellBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
