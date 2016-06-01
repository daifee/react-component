import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

export default function CellsTips(props) {
  const {className, children, ...others} = props;
  const classes = classNames('cells-tips', {_user: className});

  return (
    <div className={classes} {...others}>{children}</div>
  );
};

CellsTips.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
