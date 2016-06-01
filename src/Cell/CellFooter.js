import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';

export default function CellFooter(props) {
  const {className, children, ...others} = props;
  const classes = classNames('cell-footer', {_user: className});

  return (
    <div {...others} className={classes}>{children}</div>
  );
}

CellFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

