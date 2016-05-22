import React, {
  Component,
  PropTypes
} from 'react';
import classNames from '../classNames';

export default class CellHeader extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
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
