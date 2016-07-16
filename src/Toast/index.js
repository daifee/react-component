import React, {
  Component,
  PropTypes
} from 'react';
import {classNames, createInstance} from '../utils';
import {
  IconAttention,
  IconLoading
} from '../Icon';
import Fade from '../Fade';
import './style';

let apiInstance = null;

export default function Toast(props) {
  let {icon, content, className, ...others} = props;
  className = classNames('toast', {_user: className});

  return (
    <div className={className} {...others}>
      {icon ? <div>{mapIcon(icon)}</div> : null}
      <p>{content}</p>
    </div>
  );
}

Toast.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.oneOf(['loading', 'attention'])
  ]),
  content: PropTypes.node,
  className: PropTypes.string
};


Toast.getInstance = (container) => {
  createInstance(ApiContainer, container);
};

Toast.show = (props, fadeProps, time) => {
  apiInstance.show(props, fadeProps, time);
};

Toast.hide = () => {
  apiInstance.hide();
};

Toast.showLoading = (content) => {
  apiInstance.showLoading(content);
};

Toast.hideLoading = () => {
  apiInstance.hideLoading();
};

Toast.showAttention = (content, time) => {
  apiInstance.showAttention(content, time);
};


function mapIcon(icon) {
  switch (icon) {
    case 'loading':
      return (<IconLoading />);
    case 'attention':
      return (<IconAttention />);
    default:
      return icon;
  }
}


/**
 * 提供接口
 */

class ApiContainer extends Component {
  state = {
    props: {
      content: ''
    },
    fadeProps: {
      show: false
    }
  };

  render() {
    let {props, fadeProps} = this.state;

    return (
      <Fade {...fadeProps}>
        <Toast {...props} />
      </Fade>
    );
  }

  show(props, fadeProps, time) {
    let nextState = {
      props: {...this.state.props, ...props},
      fadeProps: {...this.state.fadeProps, ...fadeProps, show: true}
    };
    this.setState(nextState);

    if (typeof time === 'number') {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.hide();
      }, time);
    }
  }

  // 延时执行，单位：ms
  hide() {
    let nextState = {
      ...this.state,
      fadeProps: {...this.state.fadeProps, show: false}
    };

    this.setState(nextState);
  }

  showLoading(content = '加载中...') {
    let props = {icon: 'loading', content};
    this.show(props);
  }

  hideLoading() {
    this.hide();
  }

  showAttention(content, time = 2000) {
    let props = {icon: 'attention', content};
    this.show(props, {}, time);
  }
}

apiInstance = createInstance(ApiContainer);
