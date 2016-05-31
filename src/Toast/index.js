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
import TransitionShow from '../TransitionShow';

let apiInstance = null;
let timer = null;

export default function Toast(props) {
  let {
    show,
    zIndex,
    duration,
    timingFunction,
    style,
    className,
    icon,
    content,
    ...others
  } = props;
  let classes = classNames('toast', {_user: className});
  style = {
    ...style,
    zIndex,
    transitionDuration: (duration + 'ms'),
    transitionTimingFunction: timingFunction
  };

  return (
    <TransitionShow
      show={show}
      transitionName={classNames('toast')}
      duration={duration}>
      <div className={classes} style={style} {...others} >
        <div>
          <div>
            {matchIcon(icon)}
            <p>{content}</p>
          </div>
        </div>
      </div>
    </TransitionShow>
  );
}


Toast.propTypes = {
  ...TransitionShow.sharePropTypes,
  icon: PropTypes.string,
  content: PropTypes.string
};

Toast.defaultProps = TransitionShow.shareDefaultProps;


Toast.getInstance = (container) => {
  return createInstance(ApiContainer, container);
};

Toast.show = (icon, content, options, timeout) => {
  apiInstance.show(icon, content, options, timeout);
};

Toast.hide = () => {
  apiInstance.hide();
};

Toast.showLoading = (content, options) => {
  apiInstance.showLoading(content, options);
};

Toast.hideLoading = () => {
  apiInstance.hideLoading();
};


function matchIcon(name) {
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
