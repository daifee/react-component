import React, {
  Component,
  PropTypes
} from 'react';
import classNames from '../classNames';
import {
  IconAttention,
  IconLoading
} from '../Icon';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './style';

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

