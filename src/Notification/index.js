import React, {
  Component,
  PropTypes
} from 'react';
import {render} from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from '../classNames';
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


export default function Notification(props) {
  const {
    type,
    content,
    timingFunction,
    className,
    ...others
  } = props;
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

Notification.propTypes = {
  type: PropTypes.oneOf(['default', 'info', 'success', 'warn', 'error']),
  content: PropTypes.string.isRequired,
  timingFunction: PropTypes.string
};

Notification.defaultProps = {
  timingFunction: 'ease-in'
};

/**
 * 显示 Notification
 * @param  {String} content 显示的内容
 * @param  {String} type    告示类型
 * @param  {Object} options 可选更多参数
 *   * timeout {Number}  持续显示时长，毫秒
 *   * zIndex {Number}  在 z-index 轴位置
 *   * timingFunction {String}  显示和隐藏过渡动画类型
 * @return {[type]}         [description]
 */
Notification.show = (content, type = 'default', options = {}) => {
  let [...notifications] = apiInstance.state.notifications;
  // others 赋值到 notification
  let {timeout, zIndex, ...others} = options;
  let id = getId();
  let notification = {id, type, content, ...others};

  notifications.unshift(notification);

  let nextState = {...apiInstance.state, zIndex, notifications};

  apiInstance.setState(nextState);

  setTimeout(() => {
    hide(id);
  }, (timeout || 2000));
};

function hide(id) {
  let notifications = apiInstance.state.notifications.filter((item) => {
    return id !== item.id;
  });
  let nextState = {...apiInstance.state, notifications};

  apiInstance.setState(nextState);
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
}





function renderContainer() {
  const div = document.createElement('div');
  div.className = classNames('notification-api-container');
  document.body.appendChild(div);

  apiInstance = render((<Notifications />), div);
}

renderContainer();
