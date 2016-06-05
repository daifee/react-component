import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import TransitionShow from '../TransitionShow';
import './style';

/**
 * 抽屉，从视口某个方向（direction:top/bottom/left/right）弹出一个“层”
 * 方向是上或下，width=100%;height=auto;max-height:100%;
 * 方向是左或右，width=auto;max-width=100%;height=100%;
 * 可以通过自定义 className 重置
 * @param {object} props 传入组件的属性，部分属性继承自 {@link sharePropTypes}
 * @param {string} props.direction 抽屉从这个方向弹出：[top|bottom|left|right]
 * @param {PropTypes.node} props.children 子组件（抽屉装的内容）
 */
export default function Popup(props) {
  let {
    show,
    zIndex,
    duration,
    timingFunction,
    style,
    className,
    direction,
    children,
    ...others
  } = props;
  let classes = classNames('popup', {
    '_user': className
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
      transitionName={classNames('popup')}
      duration={duration}>
      <div className={classes} style={style} {...others}>
        <div
          className={classNames('popup-main', `popup-main-${direction}`)}
          style={style}>
          {children}
        </div>
      </div>
    </TransitionShow>
  );
}

Popup.propTypes = {
  ...TransitionShow.sharePropTypes,
  direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
  children: PropTypes.node.isRequired
};

Popup.defaultProps = {
  ...TransitionShow.shareDefaultProps
};
