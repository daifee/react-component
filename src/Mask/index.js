import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import './style';
import TransitionShow from '../TransitionShow';

export default function Mask(props) {
  let {
    show,
    zIndex,
    duration,
    timingFunction,
    style,
    className,
    transparent,
    ...others
  } = props;
  let classes = classNames('mask', {
    _user: className,
    'mask-transparent': transparent
  });
  style = {
    ...style,
    zIndex,
    transitionDuration: (duration + 'ms'),
    transitionTimingFunction: timingFunction
  };

  return (
    <TransitionShow
      show={show}
      transitionName={classNames('mask')}
      duration={duration}>
      <div className={classes} {...others} style={style} />
    </TransitionShow>
  );
}

Mask.propTypes = {
  ...TransitionShow.sharePropTypes,
  transparent: PropTypes.bool
};

Mask.defaultProps = TransitionShow.shareDefaultProps;
