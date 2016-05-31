import React, {
  Component,
  PropTypes
} from 'react';
import './style';
import {classNames, createInstance} from '../utils';
import TransitionShowContainer from '../TransitionShowContainer';

let apiInstance;

let id = 0;
function getId() {
  return id++;
}



export default class ActionSheet extends TransitionShowContainer {
  static propTypes = {
    ...TransitionShowContainer.propTypes,
    buttons: PropTypes.array,
    cancelButtonIndex: PropTypes.number,
    destroyButtonIndex: PropTypes.number,
    title: PropTypes.string,
    callback: PropTypes.func,
    className: PropTypes.string
  };

  static defaultProps = {
    ...TransitionShowContainer.defaultProps,
    duration: 250,
    buttons: []
  };

  transitionName = classNames('action-sheet');

  renderMain(protectedStyle) {
    let {
      // reset TransitionShowContainer
      show, zIndex, duration, timingFunction, style,

      buttons,
      cancelButtonIndex,
      destroyButtonIndex,
      title,
      callback,
      className,
      ...others
    } = this.props;
    let classes = classNames('action-sheet', {_user: className});

    style = protectedStyle;
    // 默认值
    if (typeof cancelButtonIndex === 'undefined') {
      cancelButtonIndex = buttons.length - 1;
    }

    return (
      <div
        className={classes}
        style={style}
        {...others}
        onClick={this.click}>
        <div className={classNames('action-sheet-main')} style={style}>
          {title ? (<header>{title}</header>) : null}
          <ol>{buttons.map((action, index) => {
            return (
              <Button
              key={getId()}
              name={action}
              index={index}
              cancel={cancelButtonIndex === index}
              destroy={destroyButtonIndex === index}
              callback={callback} />);
          })}</ol>
        </div>
      </div>
    );
  }

  click = () => {
    const {onClick, _hide} = this.props;
    _hide();
    onClick && onClick();
  };

  static getInstance(container) {
    return createInstance(ApiContainer, container);
  }


  static show(options = {}, callback) {
    apiInstance.show(options, callback);
  }
}


class Button extends Component {
  static propTypes = {
    name: PropTypes.string,
    index: PropTypes.number,
    cancel: PropTypes.bool,
    destroy: PropTypes.bool,
    callback: PropTypes.func
  };

  static defaultProps = {
    callback() {}
  };

  render() {
    const {name, index, cancel, destroy, callback} = this.props;
    let classes = classNames('action-sheet-item', {
      'action-sheet-item-cancel': cancel,
      'action-sheet-item-destroy': destroy
    });

    return (
      <li className={classes} onClick={() => callback(index)}>
        <button>{name}</button>
      </li>
    );
  }
}




class ApiContainer extends Component {
  state = {};

  render() {
    return (<ActionSheet {...this.state} _hide={this.hide} />);
  }

  show(options = {}, callback) {
    let nextState = {
      ...options,
      callback,
      show: true
    };

    this.setState(nextState);
  }

  hide = () => {
    let nextState = {...this.state, show: false};

    this.setState(nextState);
  }
}


apiInstance = createInstance(ApiContainer);
