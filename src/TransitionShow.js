import React, {
  PropTypes
} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/**
 * TransitionShow 使子组件实现简单的“显示和隐藏”过渡动画
 * @param {object} props 传入组件的参数
 * @param {boolean} props.show=false 是否显示子组件（children）
 * @param {string} props.transitionName 实现过渡动画的 className
 * @param {number} props.duration 过渡动画持续时间
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
  show: false
};



/**
 * TransitionShow 子组件需要定义的属性
 * @type {object}
 * @property {boolean} show 显示（true）或 隐藏（false）
 * @property {number} duration 过渡动画持续时间，单位：ms
 * @property {number} zIndex 组件的 z-index 值
 * @property {string} timingFunction 过渡动画类型，CSS3 动画
 * @property {object} style 组件内联样式
 * @property {string} className 自定义 class
 */
export const sharePropTypes = TransitionShow.sharePropTypes = {
  show: TransitionShow.propTypes.show,
  duration: TransitionShow.propTypes.duration,
  zIndex: PropTypes.number,
  timingFunction: PropTypes.string,
  style: PropTypes.object,  // 通过 style 定义动画 duration/zIndex/timgFunction
  className: PropTypes.string  // 用户自定义 class，所有组件都提供的属性
};

/**
 * TransitionShow 子组件需要定义的属性 默认值
 * @type {Object}
 */
export const shareDefaultProps = TransitionShow.shareDefaultProps = {
  duration: 80,
  zIndex: 9999,
  timingFunction: 'ease',
  style: {}
};




function EmptyContainer(props) {
  return props.children[0] || null;
}
