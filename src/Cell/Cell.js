import React, {
	PropTypes
} from 'react';
import {classNames} from '../utils';

export default function Cell(props) {
  const {children, className, component, access, arrow, ...others} = props;
  const {href} = others;
  const Tag = href ? 'a' : (component ? component : 'div');
  const classes = classNames('cell', {
    'cell-access': access,
    'cell-arrow': arrow,
    _user: className
  });


  return (
    <Tag {...others} className={classes}>{children}</Tag>
  );
}

Cell.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.string,
  href: PropTypes.string,
  access: PropTypes.bool,
  arrow: PropTypes.bool
};
