import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import './style';
import TransitionShowContainer from '../TransitionShowContainer';


export default class Mask extends TransitionShowContainer {
  static propTypes = {
    ...TransitionShowContainer.propTypes,
    className: PropTypes.string
  };

  transitionName = classNames('mask');

  renderMain(protectedStyle) {
    let {
      // reset
      show, zIndex, duration, timingFunction, style,

      className,
      ...others
    } = this.props;
    let classes = classNames('mask', {_user: className});
    style = protectedStyle;

    return (<div className={classes} {...others} style={style} />);
  }
}

