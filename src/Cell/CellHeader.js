import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

export default function CellHeader(props) {
  const {className, children, ...others} = props;
  const classes = classNames('cell-header', {'_user': className});

  return (
    <div className={classes} {...others}>{children}</div>
  );
};

CellHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
