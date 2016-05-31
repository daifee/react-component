import React, {
  Component,
  PropTypes
} from 'react';
import {classNames} from '../utils';

export default class CellFooter extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  render() {
    const {className, children, ...others} = this.props;
    const classes = classNames('cell-footer', {_user: className});

    return (
      <div {...others} className={classes}>{children}</div>
    );
  }
};
