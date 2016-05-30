import React, {
  Component,
  PropTypes
} from 'react';
import {classNames} from '../utils';

export default class Cells extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.array
    ]).isRequired,
    className: PropTypes.string,
    access: PropTypes.bool,
    arrow: PropTypes.bool
  };

  render() {
    const {children, className, access, arrow, ...others} = this.props;
    const classes = classNames('cells', {
      'cells-access': access,
      'cells-arrow': arrow,
      _user: className
    });

    return (
      <div className={classes} {...others}>{children}</div>
    );
  }
};
