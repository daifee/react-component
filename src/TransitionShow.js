import React, {
  PropTypes
} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


/**
 * TransitionShow 使子组件实现简单的“显示和隐藏”过渡动画
 * @param {object} props 传入组件的参数
 * @param {boolean} [props.show=false] 是否显示子组件（children）
 * @param {string} props.transitionName 实现过渡动画的 className
 * @param {number} [props.duration=80] 过渡动画持续时间
 * @param {PropTypes.node} props.children 子组件
 * @return {PropTypes.element} React element
 *
 * @example
 * function Dialog(props) {
 *   let {show, duration} = props;
 *
 *   return (
 *     <TranstionShow show={show} transitionName='dialog'>
 *       <div>啥班</div>
 *     </TransitionShow>
 *   );
 * }
 */
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

TransitionShow.defaultProps = {
  show: false,
  duration: 80
};


/**
 * TransitionShow 子组件要定义的属性
 * @type {Object}
 */
TransitionShow.sharePropTypes = {
  show: TransitionShow.propTypes.show,
  duration: TransitionShow.propTypes.duration,
  zIndex: PropTypes.number,
  timingFunction: PropTypes.string,
  style: PropTypes.object,  // 通过 style 定义动画 duration/zIndex/timgFunction
  className: PropTypes.string  // 用户自定义 class，所有组件都提供的属性
};

/**
 * TranstionShow 子组件要定义的默认属性
 * @type {Object}
 */
TransitionShow.shareDefaultProps = {
  duration: 80,
  zIndex: 9999,
  timingFunction: 'ease-in',
  style: {}
};




function EmptyContainer(props) {
  return props.children[0] || null;
}
