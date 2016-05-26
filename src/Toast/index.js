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
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style';

let apiInstance = null;

export default class Toast extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,  // icon 名称，如果默认不支持，可以是 className
    content: PropTypes.string.isRequired,
    show: PropTypes.bool,
    zIndex: PropTypes.number,
    duration: PropTypes.number,  // 毫秒
    timingFunction: PropTypes.string
  };

  static defaultProps = {
    zIndex: 9999,
    duration: 150,
    timingFunction: 'ease-in'
  };

  static show(icon, content, options = {}) {
    let nexState = {icon, content, ...options, show: true};
    apiInstance.setState(nexState);
  };

  static hide() {
    let nexState = {...apiInstance.state, show: false};
    apiInstance.setState(nexState);
  }

  static showLoading(content, options) {
    this.show('loading', content, options);
  }

  static hideLoading() {
    this.hide();
  }

  render() {
    const {show, duration} = this.props;
    let transitionName = classNames('toast');

    return (
      <ReactCSSTransitionGroup
        component={EmptyContainer}
        transitionName={transitionName}
        transitionEnterTimeout={duration}
        transitionLeaveTimeout={duration}>
        {show ? this.renderMain() : null}
      </ReactCSSTransitionGroup>
    );
  }

  renderMain() {
    const {
      icon,
      content,
      className,
      zIndex,
      duration,
      timingFunction,
      ...others
    } = this.props;
    let classes = classNames('toast', {_user: className});
    let style = {
      zIndex,
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: timingFunction
    };
    //
    return (
      <div key='unique' className={classes} style={style} {...others} >
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
}



function EmptyContainer(props) {
  return props.children[0] || null;
}



/**
 * 提供接口
 */

class ToastApi extends Component {
  state = {
    icon: '',
    content: ''
  };

  render() {
    //
    return (
      <Toast {...this.state} />
    );
  }
}

// 创建容器
function createContainer() {
  const div = document.createElement('div');
  div.className = classNames('toast-api-container');
  document.body.appendChild(div);

  return div;
}

apiInstance = render((<ToastApi />), createContainer());

