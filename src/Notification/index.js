import React, {
  Component,
  PropTypes
} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {classNames, createInstance} from '../utils';
import './style';

let apiInstance = null;
// Notification 显示和隐藏动画持续时间 毫秒
// container 和 item 都需要设置 duration，而且必须相同
// 所以不能为 item 自定义 duration
let duration = 150;
let id = 0;
function getId() {
  return id++;
}


export default class Notification extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['default', 'info', 'success', 'warn', 'error']),
    content: PropTypes.string.isRequired,
    timingFunction: PropTypes.string
  };

  static defaultProps = {
    timingFunction: 'ease-in'
  };

  render() {
    const {
      type,
      content,
      timingFunction,
      className,
      ...others
    } = this.props;
    let classes = classNames('notification', `notification-${type}`, {
      _user: className
    });
    let style = {
      transitionDuration: (duration + 'ms'),
      transitionTimingFunction: timingFunction
    };

    return (
      <li className={classes} style={style} {...others}>
        <span>{content}</span>
      </li>
    );
  }

  static getInstance(container) {
    return createInstance(Notifications, container);
  }

  static show(content, type, options) {
    apiInstance.show(content, type, options);
  }
}



class Notifications extends Component {
  state = {
    zIndex: 9999,
    notifications: []
  };

  render() {
    const {
      zIndex,
      notifications
    } = this.state;
    let classes = classNames('notification-container');
    let style = {
      zIndex
    };

    return (
      <ReactCSSTransitionGroup
        component='ul'
        transitionName={classNames('notification')}
        transitionEnterTimeout={duration}
        transitionLeaveTimeout={duration}
        className={classes}
        style={style}>
        {notifications.map((item) => {
          const {id, ...others} = item;
          return (<Notification key={id} {...others} />);
        })}
      </ReactCSSTransitionGroup>
    );
  }

  show(content, type = 'default', options = {}) {
    let [...notifications] = this.state.notifications;
    // others 赋值到 notification
    let {timeout, zIndex, ...others} = options;
    let id = getId();
    let notification = {id, type, content, ...others};

    notifications.unshift(notification);

    let nextState = {...this.state, zIndex, notifications};

    this.setState(nextState);

    setTimeout(() => {
      this.hide(id);
    }, (timeout || 2000));
  }

  hide(id) {
    let notifications = this.state.notifications.filter((item) => {
      return id !== item.id;
    });
    let nextState = {...this.state, notifications};

    this.setState(nextState);
  }
}


apiInstance = createInstance(Notifications);
