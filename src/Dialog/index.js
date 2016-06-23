import React, {
  Component,
  PropTypes
} from 'react';
import {classNames, createInstance} from '../utils';
import Fade from '../Fade';
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
 * ...others
 */
export default function Dialog(props) {
  let {title, content, buttons, className, ...others} = props;
  className = classNames('dialog', {_user: className});

  return (
    <div className={className} {...others}>
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
  state = {
    props: {},
    fadeProps: {
      show: false
    }
  };

  render() {
    let {props, fadeProps} = this.state;

    return (
      <Fade {...fadeProps}>
        <Dialog {...props} />
      </Fade>
    );
  }

  show(props, fadeProps) {
    // decorate
    props = this._decorateProps(props);

    let nextState = {
      props: {...this.state.props, ...props},
      fadeProps: {...this.fadeProps, ...fadeProps, show: true}
    };

    this.setState(nextState);
  }

  hide() {
    let nextState = {
      ...this.state,
      fadeProps: {...this.fadeProps, show: false}
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
}

apiInstance = createInstance(ApiContainer);



