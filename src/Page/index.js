import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import ChildContainer from '../ChildContainer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style';


const timeout = 50000;
const duration = 30000;
const timingFunction = 'ease';

/**
 * Page UI
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
 * @param {object} props see Scene.propTypes
 */
function Scene(props) {
  let {className, children, ...others} = props;
  className = classNames('page-scene', {_user: className});

  return (
    <ReactCSSTransitionGroup
      component='div'
      transitionName={classNames('page')}
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
  children: PropTypes.node,
  className: PropTypes.string
};
