import React, {
  Component,
  PropTypes
} from 'react';
import {render} from 'react-dom';
import classNames from '../classNames';
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

  renderMain(style) {
    const {
      // 过滤
      show,
      zIndex,
      duration,
      timingFunction,

      icon,
      content,
      className,
      ...others
    } = this.props;
    let classes = classNames('toast', {_user: className});

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

  static show(icon, content, options = {}, timeout = 2200) {
    let nexState = {
      ...apiInstance.state,
      ...options,
      icon,
      content,
      show: true
    };
    apiInstance.setState(nexState);

    // 如果 icon != loading 定时隐藏
    clearTimeout(timer);
    if (icon === 'loading') return;
    timer = setTimeout(() => {
      this.hide();
    }, timeout);
  }

  static hide() {
    let nexState = {...apiInstance.state, show: false};
    apiInstance.setState(nexState);
  }

  static showLoading(content = '加载中…', options) {
    this.show('loading', content, options);
  }

  static hideLoading() {
    this.hide();
  }
}




/**
 * 提供接口
 */

class ToastApi extends Component {
  state = {};

  render() {
    return (<Toast {...this.state} />);
  }
}

function renderContainer() {
  const div = document.createElement('div');
  div.className = classNames('toast-api-container');
  document.body.appendChild(div);
  apiInstance = render((<ToastApi />), div);
}

renderContainer();

