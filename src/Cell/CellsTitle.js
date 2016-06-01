import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

export default function CellsTitle(props) {
  const {className, children, ...others} = this.props;
  const classes = classNames('cells-title', {_user: className});

  return (
    <div className={classes} {...others}>{children}</div>
  );
};

CellsTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
