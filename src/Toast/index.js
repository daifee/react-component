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
      {typeof icon === 'string' ? mapIcon(icon) : icon}
      <p>{content}</p>
    </div>
  );
}

Toast.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.oneOf(['loading', 'attention'])
  ]),
  content: PropTypes.node.isRequired,
  className: PropTypes.string
};

Toast.defaultProps = {
  icon: null
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

Toast.showLoading = (props, fadeProps) => {
  apiInstance.showLoading(props, fadeProps);
};

Toast.hideLoading = () => {
  apiInstance.hideLoading();
};


function mapIcon(name) {
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
      props: {...this.state.props},
      fadeProps: {...this.state.fadeProps, show: true}
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
  hide(delay) {
    let nextState = {
      ...this.state,
      fadeProps: {...this.state.fadeProps, show: false}
    };

    this.setState(nextState);
  }

  showLoading(props, fadeProps) {
    props = {...props, icon: 'loading'};
    this.show(props, fadeProps);
  }

  hideLoading(delay) {
    this.hide(delay);
  }
}

apiInstance = createInstance(ApiContainer);
