/**
 * 很多组件都需要 show() 和 hide() 接口，需要过渡效果
 *
 * 抽象出父类 TransitionShowContainer
 */

import React, {
  Component,
  PropTypes
} from 'react';
import {classNames} from './utils';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class TransitionShowContainer extends Component {
  static propsTypes = {
    show: PropTypes.bool,  // 显示 or 隐藏
    zIndex: PropTypes.number,  // css 的 z-index
    duration: PropTypes.number,  // 过渡时长
    timingFunction: PropTypes.string  // 动画类型
  };

  static defaultProps = {
    zIndex: 9999,
    duration: 150,
    timingFunction: 'ease-in'
  };

  render() {
    const {
      show,
      zIndex,
      duration,
      timingFunction
    } = this.props;
    let style = {
      zIndex,
      transitionDuration: (duration + 'ms'),
      transitionTimingFunction: timingFunction
    };

    if (typeof this.transitionName !== 'string') {
      throw new ReferenceError('未定义 transitionName 属性');
    }


    return (
      <ReactCSSTransitionGroup
        component={EmptyContainer}
        transitionName={this.transitionName}
        transitionEnterTimeout={duration}
        transitionLeaveTimeout={duration}>
        {show ? this.renderMain(style) : null}
      </ReactCSSTransitionGroup>
    );
  }

  /**
   * 渲染组件主题
   * @param  {Object} style 样式
   *   * zIndex {Number}  垂直位置
   *   * transitionDuration {String}  过渡动画持续时长（单位：ms）
   *   * transitionTimingFunction  过渡动画类型
   * @return {React.element}       [description]
   */
  renderMain(style = {}) {
    return null;
  }
}

function EmptyContainer(props) {
  return props.children[0] || null;
}

