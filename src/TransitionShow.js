import React, {
  PropTypes
} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default function TransitionShow(props) {
  let {show, transitionName, duration, children} = props;

  return (
    <ReactCSSTransitionGroup
      component={EmptyContainer}
      transitionName={transitionName}
      transitionEnterTimeout={duration}
      transitionLeaveTimeout={duration}>
      {show ? children : null}
    </ReactCSSTransitionGroup>
  );
}

TransitionShow.propTypes = {
  show: PropTypes.bool,
  transitionName: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  children: PropTypes.node
};


TransitionShow.sharePropTypes = {
  show: TransitionShow.propTypes.show,  // 显示 or 隐藏
  duration: TransitionShow.propTypes.duration,  // 过渡时长
  zIndex: PropTypes.number,  // css 的 z-index
  timingFunction: PropTypes.string,  // 动画类型
  style: PropTypes.object,
  className: PropTypes.string
};

TransitionShow.shareDefaultProps = {
  duration: 80,
  zIndex: 9999,
  timingFunction: 'ease-in',
  style: {}
};




function EmptyContainer(props) {
  return props.children[0] || null;
}
