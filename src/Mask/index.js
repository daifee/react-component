import React, {
  Component,
  PropTypes
} from 'react';
import classNames from '../classNames';
import './style';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import config from '../config';
const {namespace} = config;

export default class Mask extends Component {
  static propTypes = {
    transparent: PropTypes.bool,
    zIndex: PropTypes.number,
    show: PropTypes.bool,
    duration: PropTypes.number,
    timingFunction: PropTypes.string
  };

  static defaultProps = {
    zIndex: 99,
    transparent: false,
    show: false,
    duration: 150,
    timingFunction: 'ease-in'
  };

  render() {
    const {zIndex, transparent, duration, timingFunction, show, className, ...others} = this.props;
    let classes = classNames('mask', {
      '_user': className
    });

    let style = {
      zIndex,
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: timingFunction
    };

    return (
      <ReactCSSTransitionGroup
        component='div'
        className={`${namespace}-mask-wrap`}
        transitionName={`${namespace}-mask`}
        transitionEnterTimeout={duration}
        transitionLeaveTimeout={duration}>
        {show ? [<div key='first' className={classes} style={style} {...others} />] : []}
      </ReactCSSTransitionGroup>
    );
  }
}
