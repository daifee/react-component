import React, {
  Component,
  PropTypes
} from 'react';
import {classNames, createInstance} from '../utils';
import TransitionShow from '../TransitionShow';
import './style';

let apiInstance = null;


export default function Dialog(props) {
  let {
    show,
    zIndex,
    duration,
    timingFunction,
    style,
    className,
    title,
    content,
    buttons,
    _hide,
    ...others
  } = props;
  let classes = classNames('dialog', {_user: className});
  style = {
    ...style,
    zIndex,
    transitionDuration: (duration + 'ms'),
    transitionTimingFunction: timingFunction
  };

  return (
    <TransitionShow
      show={show}
      transitionName={classNames('dialog')}
      duration={duration}>
      <div className={classes} style={style} {...others}>
        <div>
          <header><strong>{title}</strong></header>
          <p>{content}</p>
          <footer>{buttons.map((button, index) => {
            return (<Button {...button} key={index} _hide={_hide} />);
          })}</footer>
        </div>
      </div>
    </TransitionShow>
  );
}

Dialog.propTypes = {
  ...TransitionShow.sharePropTypes,
  title: PropTypes.string,
  content: PropTypes.string,
  buttons: PropTypes.array,  // [{text: '', onClik: () => {}}]
  _hide: PropTypes.func
};

Dialog.defaultProps = {
  ...TransitionShow.shareDefaultProps,
  buttons: []
};

Dialog.getInstance = (container) => {
  return createInstance(ApiContainer, container);
};

Dialog.show = (title, content, buttons, options) => {
  apiInstance.show(title, content, buttons, options);
};



function Button(props) {
  let {text, onClick, _hide, ...others} = props;
  return (
    <button
      {...others}
      onClick={(e) => {
        _hide && _hide();
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

