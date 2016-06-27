import React, {
  Component,
  PropTypes
} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {classNames, createInstance} from '../utils';
import ChildContainer from '../ChildContainer';
import './style';

let apiInstance = null;

/**
 * Notification UI
 * @param {object} props see Notification.propTypes
 */
export default function Notification(props) {
  let {className, content, ...others} = props;
  className = classNames('notification', {_user: className});

  return (<div className={className} {...content} {...others}>{content}</div>);
}

Notification.propTypes = {
  className: PropTypes.string,
  content: PropTypes.node
};

Notification.show = (props, time) => {
  apiInstance.show(props, time);
};

Notification.getInstance = (container) => {
  return createInstance(ApiContainer, container);
};


//
const duration = 200;
const timingFunction = 'ease';
// ID 生成器
function getId() {
  return getId.id++;
}
getId.id = 0;

class ApiContainer extends Component {
  state = {
    notifications: []
  };

  render() {
    let {notifications} = this.state;
    let children = notifications.map((item) => {
      let {_id, style, ...others} = item;
      style = {
        ...style,
        transitionDuration: (duration + 'ms'),
        transitionTimingFunction: timingFunction
      };
      return (<Notification key={_id} {...others} />);
    });
    let className = classNames('notifications-container');

    return (
      <ReactCSSTransitionGroup
        component='div'
        className={className}
        transitionName={className}
        transitionEnterTimeout={duration}
        transitionLeaveTimeout={duration}>
        {children}
      </ReactCSSTransitionGroup>
    );
  }

  show(props, time = 3000) {
    props['_id'] = getId();

    let [...notifications] = this.state.notifications;
    notifications.push(props);
    let nextState = {notifications};
    this.setState(nextState);

    setTimeout(() => {
      this._hide(props['_id']);
    }, time);
  }

  _hide(id) {
    let notifications = this.state.notifications.filter((item) => {
      return id !== item['_id'];
    });
    let nextState = {notifications};

    this.setState(nextState);
  }
}


apiInstance = createInstance(ApiContainer);
