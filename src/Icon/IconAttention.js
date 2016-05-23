import React, {
  Component,
  PropTypes
} from 'react';
import classNames from '../classNames';

const matchUnit = /(\D+)$/;

export default class IconAttention extends Component {
  static propTypes = {
    size: PropTypes.string
  };

  static defaultProps = {
    size: '40px'
  };

  render() {
    const {size, className, ...others} = this.props;
    let classes = classNames('icon-attention', {'_user': className});
    let style = {
      height: size,
      width: size,
      fontSize: size
    };

    return (
      <i className={classes} style={style} {...others} />
    );
  }
}

