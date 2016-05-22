import React, {
  Component,
  PropTypes
} from 'react';
import classNames from '../classNames';

export default class Cells extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.array
    ]).isRequired,
    className: PropTypes.string
  };

  render() {
    const {children, className, ...others} = this.props;
    const classes = classNames('cells', {_user: className});

    return (
      <div className={classes} {...others}>{children}</div>
    );
  }
};