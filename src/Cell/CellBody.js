import React, {
	PropTypes
} from 'react';
import {classNames} from '../utils';


export default function CellBody(props) {
  const {className, children, ...others} = props;
  const classes = classNames('cell-body', {_user: className});

  return (
    <div {...others} className={classes}>{children}</div>
  );
}

CellBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
