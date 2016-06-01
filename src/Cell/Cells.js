import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

export default function Cells(props) {
  const {children, className, access, arrow, ...others} = props;
  const classes = classNames('cells', {
    'cells-access': access,
    'cells-arrow': arrow,
    _user: className
  });

  return (
    <div className={classes} {...others}>{children}</div>
  );
};

Cells.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  access: PropTypes.bool,
  arrow: PropTypes.bool
};
