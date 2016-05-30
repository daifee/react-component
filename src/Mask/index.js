import React, {
  Component,
  PropTypes
} from 'react';
import {classNames} from '../utils';
import './style';
import TransitionShowContainer from '../TransitionShowContainer';

export default class Mask extends TransitionShowContainer {

  transitionName = classNames('mask');

  renderMain(style) {
    const {
      // reset
      show, zIndex, duration, timingFunction,

      className,
      ...others
    } = this.props;
    let classes = classNames('mask', {_user: className});

    return (<div className={classes} {...others} style={style} />);
  }
}

