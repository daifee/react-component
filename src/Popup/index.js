import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ChildContainer from '../ChildContainer';
import './style';

/**
 * 弹出层（抽屉）动画组件
 * @param {object} props see Popup.propTypes
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
      component={ChildContainer}
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

/**
 * 定义属性类型
 * @type {Object}
 * show: 是否显示
 * duration: 动画持续时间
 * timingFunction: 动画类型
 * direction: 从哪个方向出现
 */
Popup.propTypes = {
  show: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  timingFunction: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

Popup.defaultProps = {
  show: false,
  duration: 400,
  timingFunction: 'ease',
  direction: 'bottom'
};


