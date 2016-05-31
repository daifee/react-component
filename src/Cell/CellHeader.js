import React, {
  Component,
  PropTypes
} from 'react';
import {classNames} from '../utils';

export default class CellHeader extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  render() {
    const {className, children, ...others} = this.props;
    const classes = classNames('cell-header', {'_user': className});

    return (
      <div className={classes} {...others}>{children}</div>
    );
  }
};
