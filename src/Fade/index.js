import React, {
  PropTypes
} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ChildContainer from '../ChildContainer';
import {classNames} from '../utils';
import './style';

/**
 * 淡入淡出动画组件
 * @param {object} props see Fade.propTypes
 */
export default function Fade(props) {
  let {
    show,
    duration,
    timingFunction,
    children,
    style,
    className,
    ...others
  } = props;
  style = {
    ...style,
    transitionDuration: (duration + 'ms'),
    transitionTimingFunction: timingFunction
  };
  className = classNames('fade', {_user: className});

  return (
    <ReactCSSTransitionGroup
      component={ChildContainer}
      transitionName={classNames('fade')}
      transitionEnterTimeout={duration}
      transitionLeaveTimeout={duration}>
      {show ? (
        <props.component style={style} className={className} {...others}>
          {children}
        </props.component>
      ) : null}
    </ReactCSSTransitionGroup>
  );
}

/**
 * 定义属性类型
 * @type {Object}
 * show: 是否显示（淡入 or 淡出）
 * duration: 动画持续时间
 * timingFunction: 动画类型
 * component: 包裹 children 的组件
 */
Fade.propTypes = {
  show: PropTypes.bool,
  duration: PropTypes.number,
  timingFunction: PropTypes.string,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};

Fade.defaultProps = {
  show: false,
  duration: 80,
  timingFunction: 'ease',
  component: 'span'
};
