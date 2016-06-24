import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import ChildContainer from '../ChildContainer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style';


const timeout = 500;
const duration = 300;
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
  return (
    <ReactCSSTransitionGroup
      component={ChildContainer}
      transitionName={classNames('page')}
      transitionEnterTimeout={timeout}
      transitionLeaveTimeout={timeout}>
      {props.children}
    </ReactCSSTransitionGroup>
  );
}

/**
 * props
 * @type {Object}
 */
Scene.propTypes = {
  children: PropTypes.node
};
