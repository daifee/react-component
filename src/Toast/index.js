import React, {
  Component,
  PropTypes
} from 'react';
import {classNames, createInstance} from '../utils';
import {
  IconAttention,
  IconLoading
} from '../Icon';
import './style';
import TransitionShowContainer from '../TransitionShowContainer';

let apiInstance = null;
let timer = null;


export default class Toast extends TransitionShowContainer {
  static propTypes = {
    ...TransitionShowContainer.propTypes,
    icon: PropTypes.string,  // icon 名称和 className（组件没有的情况）
    content: PropTypes.string
  };

  transitionName = classNames('toast');

  renderMain(protectedStyle) {
    let {
      // 过滤
      show, zIndex, duration, timingFunction, style,

      icon, content, className, ...others
    } = this.props;
    let classes = classNames('toast', {_user: className});
    style = protectedStyle;

    //
    return (
      <div className={classes} style={style} {...others} >
        <div>
          <div>
            {this.matchIcon(icon)}
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  }

  matchIcon(name) {
    switch (name) {
      case 'loading':
        return (<IconLoading />);
      case 'attention':
        return (<IconAttention />);
      default:
        return null;
    }
  }

  /**
   * API 接口（静态方法）
   */
  static getInstance(container) {
    return createInstance(ApiContainer, container);
  }

  static show(icon, content, options, timeout) {
    apiInstance.show(icon, content, options, timeout);
  }

  static hide() {
    apiInstance.hide();
  }

  static showLoading(content, options) {
    apiInstance.showLoading(content, options);
  }

  static hideLoading() {
    apiInstance.hideLoading();
  }
}




/**
 * 提供接口
 */

class ApiContainer extends Component {
  state = {};

  render() {
    return (<Toast {...this.state} />);
  }

  show(icon, content, options = {}, timeout = 2200) {
    let nexState = {
      ...this.state,
      ...options,
      icon,
      content,
      show: true
    };
    this.setState(nexState);

    // 如果 icon != loading 定时隐藏
    clearTimeout(timer);
    if (icon === 'loading') return;
    timer = setTimeout(() => {
      this.hide();
    }, timeout);
  }

  hide() {
    let nexState = {...this.state, show: false};
    this.setState(nexState);
  }

  showLoading(content = '加载中…', options) {
    this.show('loading', content, options);
  }

  hideLoading() {
    this.hide();
  }
}

apiInstance = createInstance(ApiContainer);
