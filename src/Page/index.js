import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import ChildContainer from '../ChildContainer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style';


const timeout = 500;
const duration = 400;
const timingFunction = 'ease';

/**
 * Page UI
 * 应该用于单页应用，配合 react-router 使用
 * @param {object} props see Page.propTypes
 */
export default function Page(props) {
  let {className, style, children, ...others} = props;
  className = classNames('page', {_user: className});
  style = {
    ...style,
    transitionDuration: (duration + 'ms'),
    transitionTimingFunction: timingFunction
  };

  return (<div className={className} style={style} {...others}>{children}</div>);
}

/**
 * props
 * @type {Object}
 */
Page.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
};

// 暴露啦
Page.Scene = Scene;


/**
 * Scene 过场动画
 * 根据 react-router 的 location.action 定义不同的过场动画
 *   * PUSH
 *   * POP
 *   * REPLACE
 * @param {object} props see Scene.propTypes
 */
function Scene(props) {
  let {className, children, action, ...others} = props;
  className = classNames('page-scene', {_user: className});
  action = action.toLowerCase();

  return (
    <ReactCSSTransitionGroup
      component='div'
      transitionName={classNames(`page-scene-${action}`)}
      transitionEnterTimeout={timeout}
      transitionLeaveTimeout={timeout}
      className={className}>
      {children}
    </ReactCSSTransitionGroup>
  );
}

/**
 * props
 * @type {Object}
 */
Scene.propTypes = {
  action: PropTypes.oneOf(['push', 'pop', 'replace', 'PUSH', 'POP', 'REPLACE']),
  children: PropTypes.node,
  className: PropTypes.string
};

Scene.defaultProps = {
  action: 'push'
};
