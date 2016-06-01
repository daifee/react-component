'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TransitionShow;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
function TransitionShow(props) {
  var show = props.show;
  var transitionName = props.transitionName;
  var duration = props.duration;
  var children = props.children;


  return _react2.default.createElement(
    _reactAddonsCssTransitionGroup2.default,
    {
      component: EmptyContainer,
      transitionName: transitionName,
      transitionEnterTimeout: duration,
      transitionLeaveTimeout: duration },
    show ? children : null
  );
}

TransitionShow.propTypes = {
  show: _react.PropTypes.bool,
  transitionName: _react.PropTypes.string.isRequired,
  duration: _react.PropTypes.number.isRequired,
  children: _react.PropTypes.node
};

TransitionShow.defaultProps = {
  show: false
};

/**
 * TransitionShow 子组件要定义的属性
 * @type {Object}
 */
TransitionShow.sharePropTypes = {
  show: TransitionShow.propTypes.show,
  duration: TransitionShow.propTypes.duration,
  zIndex: _react.PropTypes.number,
  timingFunction: _react.PropTypes.string,
  style: _react.PropTypes.object, // 通过 style 定义动画 duration/zIndex/timgFunction
  className: _react.PropTypes.string // 用户自定义 class，所有组件都提供的属性
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