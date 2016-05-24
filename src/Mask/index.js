import React, {
  Component,
  PropTypes
} from 'react';
import classNames from '../classNames';
import './style';

export default class Mask extends Component {
  static propTypes = {
    transparent: PropTypes.bool,
    show: PropTypes.bool,
    zIndex: PropTypes.number
  };

  static defaultProps = {
    zIndex: 99
  };

  render() {
    const {zIndex, transparent, show, className, ...others} = this.props;
    let classes = classNames('mask', {
      '_user': className,
      'mask-show': show,
      'mask-transparent': transparent
    });

    let style = {zIndex};

    return (<div className={classes} {...others} style={style} />);
  }
}
