import React, {
  Component,
  PropTypes
} from 'react';
import './style';
import {classNames, createInstance} from '../utils';
import TransitionShow from '../TransitionShow';

let apiInstance;

let id = 0;
function getId() {
  return id++;
}


export default function ActionSheet(props) {
  let {
    show,
    zIndex,
    duration,
    timingFunction,
    style,
    className,
    buttons,
    cancelButtonIndex,
    destroyButtonIndex,
    title,
    callback,
    onClick,
    _hide,
    ...others
  } = props;
  let classes = classNames('action-sheet', {_user: className});
  typeof cancelButtonIndex === 'undefined' && (cancelButtonIndex = buttons.length - 1);
  style = {
    ...style,
    zIndex,
    transitionDuration: (duration + 'ms'),
    transitionTimingFunction: timingFunction
  };

  return (
    <TransitionShow
      show={show}
      transitionName={classNames('action-sheet')}
      duration={duration}>
      <div
        className={classes}
        style={style}
        {...others}
        onClick={(e) => {
          _hide && _hide();
          onClick && onClick(e);
        }}>
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
    </TransitionShow>
  );
}

ActionSheet.propTypes = {
  ...TransitionShow.sharePropTypes,
  buttons: PropTypes.array,
  cancelButtonIndex: PropTypes.number,
  destroyButtonIndex: PropTypes.number,
  title: PropTypes.string,
  callback: PropTypes.func,
  onClick: PropTypes.func,
  _hide: PropTypes.func
};

ActionSheet.defaultProps = {
  ...TransitionShow.shareDefaultProps,
  duration: 250,
  buttons: []
};


ActionSheet.getInstance = (container) => {
  return createInstance(ApiContainer, container);
};


ActionSheet.show = (options = {}, callback) => {
  apiInstance.show(options, callback);
};


function Button(props) {
  const {name, index, cancel, destroy, callback} = props;
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

Button.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
  cancel: PropTypes.bool,
  destroy: PropTypes.bool,
  callback: PropTypes.func
};

Button.defaultProps = {
  callback() {}
};



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
