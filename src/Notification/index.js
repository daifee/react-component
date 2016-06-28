import React, {
  Component,
  PropTypes
} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {classNames, createInstance} from '../utils';
import Popup from '../Popup';
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

/**
 * props
 * @type {Object}
 * content: 通知内容（不限于文本）
 */
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
const duration = 300;
const timingFunction = 'ease';
// ID 生成器
function getId() {
  return getId.id++;
}
getId.id = 0;

class ApiContainer extends Component {
  state = {
    popupProps: {
      show: false,
      className: classNames('notification-popup'),
      direction: 'top'
    },
    notification: []  // 永远只有一个值的数组
  };

  timer = null;

  render() {
    let {notification, popupProps} = this.state;
    let children = notification.map((item) => {
      let {_id, style, ...others} = item;
      style = {
        ...style,
        transitionDuration: (duration + 'ms'),
        transitionTimingFunction: timingFunction
      };
      return (<Notification key={_id} style={style} {...others} />);
    });

    return (
      <Popup {...popupProps}>
        <ReactCSSTransitionGroup
          component='div'
          className={classNames('notification-container')}
          transitionName={classNames('notification')}
          transitionEnterTimeout={duration}
          transitionLeaveTimeout={duration}>
          {children}
        </ReactCSSTransitionGroup>
      </Popup>
    );
  }

  show(props, popupProps, time = 4000) {
    props['_id'] = getId();
    let notification = [props];

    let nextState = {
      notification,
      popupProps: {
        ...this.state.popupProps,
        show: true
      }
    };
    this.setState(nextState);

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this._hide();
    }, time);
  }

  _hide() {
    let nextState = {
      ...this.state,
      popupProps: {
        ...this.state.popupProps,
        show: false
      }
    };

    this.setState(nextState);
  }
}


apiInstance = createInstance(ApiContainer);
