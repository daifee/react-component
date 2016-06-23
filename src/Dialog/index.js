import React, {
  Component,
  PropTypes
} from 'react';
import {classNames, createInstance} from '../utils';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ChildContainer from '../ChildContainer';
import './style';

let apiInstance = null;

/**
 * 对话框按钮
 * @param {object} props 传统组件的 props
 * @property {string} props.text [description]
 * ...others
 */
function Button(props) {
  let {text, ...others} = props;
  return (
    <button {...others}>{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};


/**
 * 对话框 UI
 * @param {object} props 传入组件的 props
 * @property {string} props.title 对话框的 title
 * @property {string} props.content 对话框内容
 * @property {array} props.buttons 按钮组
 * @property {object} props.buttons[i] 按钮 see `Button`
 * @property {string} props.className 自定义样式
 * ...others
 */
export default function Dialog(props) {
  let {title, content, buttons, className, ...others} = props;
  let classes = classNames('dialog', {_user: className});

  return (
    <div className={classes} {...others}>
      <div>
        <header><strong>{title}</strong></header>
        <p>{content}</p>
        <footer>{buttons.map((button, index) => {
          return (<Button key={index} {...button} />);
        })}</footer>
      </div>
    </div>
  );
}

Dialog.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  buttons: PropTypes.array.isRequired,  // [{text: '', onClik: () => {}}]
  className: PropTypes.string
};

Dialog.defaultProps = {
  buttons: []
};

Dialog.getInstance = (container) => {
  return createInstance(ApiContainer, container);
};

Dialog.show = (props, animation) => {
  apiInstance.show(props, animation);
};


/**
 * 为 Dialog 组件提供 API 交互
 */
class ApiContainer extends Component {
  // 默认值
  static animation = {
    duration: 80,
    timingFunction: 'ease'
  };

  state = {
    show: false,
    animation: ApiContainer.animation,
    props: {}
  };

  render() {
    let {show, props, animation} = this.state;
    let {duration, timingFunction} = animation;
    let style = {
      ...props.style,
      transitionDuration: (duration + 'ms'),
      transitionTimingFunction: timingFunction
    };

    return (
      <ReactCSSTransitionGroup
        component={ChildContainer}
        transitionName={classNames('dialog')}
        transitionEnterTimeout={duration}
        transitionLeaveTimeout={duration}>
        {show ? (<Dialog {...props} style={style} />) : null}
      </ReactCSSTransitionGroup>
    );
  }

  show(props, animation) {
    // decorate
    props = this._decorateProps(props);
    animation = {...ApiContainer.animation, ...animation};

    let nextState = {
      props: {...this.state.props, ...props},
      animation: {...this.state.animation, ...animation},
      show: true
    };

    this.setState(nextState);
  }

  _decorateProps(props) {
    if (!props.buttons) {
      return props;
    }

    props.buttons.map((button) => {
      let onClick = button.onClick;
      button.onClick = (e) => {
        onClick && onClick(e);
        this.hide();
      };
    });

    return props;
  }

  hide() {
    let nextState = {...this.state, show: false};
    this.setState(nextState);
  };
}

apiInstance = createInstance(ApiContainer);



