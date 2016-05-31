import React, {
  Component,
  PropTypes
} from 'react';
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

  renderMain(protectedStyle) {
    let {
      // 过滤
      show, zIndex, duration, timingFunction, style,

      title, content, buttons, className, _hide
    } = this.props;
    let classes = classNames('dialog', {_user: className});
    style = protectedStyle;

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

function Button(props) {
  let {text, onClick, _hide, ...others} = props;
  return (
    <button
      {...others}
      onClick={(e) => {
        _hide();
        onClick && onClick(e);
      }}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  _hide: PropTypes.func
};


class ApiContainer extends Component {
  state = {};

  render() {
    return (<Dialog {...this.state} _hide={this.hide} />);
  }

  show(title, content, buttons, options) {
    let nextState = {
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

