import React, {
  Component,
  PropTypes
} from 'react';
import {render} from 'react-dom';
import classNames from '../classNames';
import TransitionShowContainer from '../TransitionShowContainer';
import './style';

let apiInstance = null;

export default class Dialog extends TransitionShowContainer {
  static propTypes = {
    ...TransitionShowContainer.propTypes,
    title: PropTypes.string,
    content: PropTypes.string,
    buttons: PropTypes.array  // [{text: '', onClik: () => {}}]
  };

  transitionName = classNames('dialog');

  renderMain(style) {
    const {
      // 过滤
      show,
      zIndex,
      duration,
      timingFunction,

      title,
      content,
      buttons,
      className
    } = this.props;
    let classes = classNames('dialog', {_user: className});

    return (
      <div className={classes} style={style}>
        <div>
          <header><strong>{title}</strong></header>
          <p>{content}</p>
          <footer>{buttons.map((button, index) => {
            return (<Button {...button} key={index} />);
          })}</footer>
        </div>
      </div>
    );
  }

  static hide() {
    let nextState = {...nextState, show: false};
    apiInstance.setState(nextState);
  }

  static show(title, content, buttons, options) {
    let nextState = {
      ...apiInstance.state,
      ...options,
      title,
      content,
      buttons,
      show: true
    };

    apiInstance.setState(nextState);
  }
}


class Button extends Component {
  render() {
    const {text, ...others} = this.props;
    return (<button {...others} onClick={this.click}>{text}</button>);
  }

  click = () => {
    const {onClick} = this.props;

    Dialog.hide();
    onClick && onClick();
  };
}

/**
 * 提供接口
 */
class DialogApi extends Component {
  state = {};

  render() {
    return (<Dialog {...this.state} />);
  }
}

function renderContainer() {
  const div = document.createElement('div');
  div.className = classNames('dialog-api-container');
  document.body.appendChild(div);

  apiInstance = render((<DialogApi />), div);
}

renderContainer();

