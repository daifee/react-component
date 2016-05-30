import React, {
  Component,
  PropTypes
} from 'react';
import {classNames} from '../utils';

const count = 12;
const opacityUnit = 1 / (count + 13);

export default class IconLoading extends Component {
  static propTypes = {
    scale: PropTypes.number
  };

  static defaultProps = {
    scale: 1
  };

  render() {
    const {className, scale, ...others} = this.props;
    let classes = classNames('icon-loading', {_user: className});
    let leafs = [];
    let cl, rotate, style;

    for (let i = 0; i < count; i++) {
      cl = classNames('icon-loading-leaf', `icon-loading-leaf-${i}`);
      rotate = i * 30;
      style = {
        transform: (`rotate(${rotate}deg)`),
        opacity: (1 - opacityUnit * i)
      };
      leafs.push((<i key={i} className={cl} style={style} />));
    }

    //
    style = {
      transform: (`scale(${scale})`)
    };

    //
    return (
      <div className={classes} style={style} {...others}>{leafs}</div>
    );
  }
}
