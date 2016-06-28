import React, {
  Component,
  PropTypes
} from 'react';
import {classNames, createInstance} from '../utils';
import Fade from '../Fade';
import Mask from '../Mask';
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
  text: PropTypes.string
};

/**
 * Dialog UI
 * @param {object} props see Dialog.propTypes
 */
export default function Dialog(props) {
  let {title, content, buttons, className, maskProps, ...others} = props;
  className = classNames('dialog', {_user: className});

  return (
    <Mask {...maskProps}>
      <div className={className} {...others}>
        <header><strong>{title}</strong></header>
        <div className={classNames('dialog-body')}>{content}</div>
        <footer>{buttons.map((button, index) => {
          return (<Button key={index} {...button} />);
        })}</footer>
      </div>
    </Mask>
  );
}

/**
 * props
 * @type {Object}
 * title: 标题
 * content: 内容
 * buttons: 按钮组
 */
Dialog.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  buttons: PropTypes.array,  // [{text: '', onClik: () => {}}]
  maskProps: PropTypes.shape(Mask.propTypes),
  className: PropTypes.string
};

Dialog.defaultProps = {
  buttons: [],
  maskProps: Mask.defaultProps
};


Dialog.getInstance = (container) => {
  return createInstance(ApiContainer, container);
};

Dialog.show = (props, fadeProps) => {
  apiInstance.show(props, fadeProps);
};



/**
 * 为 Dialog 组件提供 API 交互
 */
class ApiContainer extends Component {
  state = {
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
      fadeProps: {...this.state.fadeProps, ...fadeProps, show: true}
    };

    this.setState(nextState);
  }

  hide() {
    let nextState = {
      ...this.state,
      fadeProps: {...this.state.fadeProps, show: false}
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



