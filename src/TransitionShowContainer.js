/**
 * 很多组件都需要 show() 和 hide() 接口，需要过渡效果
 *
 * 抽象出父类 TeansitionShowContainer
 */

import React, {
  Component,
  PropTypes
} from 'react';
import classNames from './classNames';
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
      transitionDuration: duration,
      transitionTimingFunction: timingFunction
    };

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


  renderMain(style = {}) {
    return null;
  }
}

function EmptyContainer(props) {
  return props.children[0] || null;
}

