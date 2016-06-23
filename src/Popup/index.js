import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ChildContainer from '../ChildContainer';
import './style';

/**
 * 抽屉（弹层）UI 封装动画
 * @param {object} props 传入组件的 props
 * @property {boolean} props.show 是否显示状态
 * @property {number} props.duration 动画持续时间
 * @property {string} props.timingFunction 动画类型
 * @property {string} props.direction 弹出方向
 */
export default function Popup(props) {
  let {
    show,
    duration,
    timingFunction,
    direction,
    children,
    className,
    style,
    ...others
  } = props;
  className = classNames('popup', {_user: className});
  style = {
    ...style,
    transitionDuration: (duration + 'ms'),
    transitionTimingFunction: timingFunction
  };

  return (
    <ReactCSSTransitionGroup
      COMPONENT={ChildContainer}
      transitionName={classNames('popup')}
      transitionEnterTimeout={duration}
      transitionLeaveTimeout={duration}>
      {show ? (
        <div className={className} style={style} {...others}>
          <div
            className={classNames('popup-main', `popup-main-${direction}`)}
            style={style}>
            {children}
          </div>
        </div>
      ) : null}
    </ReactCSSTransitionGroup>
  );
}

Popup.propTypes = {
  show: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  timingFunction: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
  children: PropTypes.node.isRequired
};

Popup.defaultProps = {
  show: false,
  duration: 400,
  timingFunction: 'ease',
  direction: 'bottom'
};


