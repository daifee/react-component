import React, {
  Component,
  PropTypes
} from 'react';
import {render} from 'react-dom';
import {classNames, createInstance} from '../utils';
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
      className,
      _hide
    } = this.props;
    let classes = classNames('dialog', {_user: className});

    return (
      <div className={classes} style={style}>
        <div>
          <header><strong>{title}</strong></header>
          <p>{content}</p>
          <footer>{buttons.map((button, index) => {
            return (<Button {...button} key={index} _hide={_hide} />);
          })}</footer>
        </div>
      </div>
    );
  }

  static getInstance(container) {
    return createInstance(ApiContainer, container);
  }

  static show(title, content, buttons, options) {
    apiInstance.show(title, content, buttons, options);
  }
}


class Button extends Component {
  render() {
    const {text, ...others} = this.props;
    return (<button {...others} onClick={this.click}>{text}</button>);
  }

  click = () => {
    const {onClick, _hide} = this.props;

    _hide();
    onClick && onClick();
  };
}





class ApiContainer extends Component {
  state = {};

  render() {
    return (<Dialog {...this.state} _hide={this.hide} />);
  }

  show(title, content, buttons, options) {
    let nextState = {
      ...this.state,
      ...options,
      title,
      content,
      buttons,
      show: true
    };

    this.setState(nextState);
  }

  hide = () => {
    let nextState = {...this.state, show: false};
    this.setState(nextState);
  };
}

apiInstance = createInstance(ApiContainer);

