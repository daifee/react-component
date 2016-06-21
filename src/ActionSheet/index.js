import React, {
  Component,
  PropTypes
} from 'react';
import './style';
import {classNames, createInstance} from '../utils';
import TransitionShow from '../TransitionShow';
import Popup from '../Popup';

let apiInstance;

let id = 0;
function getId() {
  return id++;
}

/**
 * ActionSheet 组件
 * 动画效果使用 `Popup` 组件 {@link Popup}
 * @param {object} props 传入组件的属性
 * @param {array} props.buttons 定义本组件的按钮，数组值作为按钮名
 * @param {number} props.cancelButtonIndex 第几个是"取消"按钮，会附加一个 class
 * @param {number} props.destroyButtonIndex 第几个是“危险”按钮，会附加一个 class
 * @param {string} props.title 显示的组件title
 * @param {function} props.callback 点击按钮后调用的 callback，按钮索引作为参数
 * @param {function} props.onClick 组件被点击后被调用。
 * @param {function} props._hide 组件点击后被调用（请用 onClick 代替）
 * @description 除了上面说明的属性，还可以定义任何 React 组件有效的属性。
 */
export default function ActionSheet(props) {
  let {
    buttons,
    cancelButtonIndex,
    destroyButtonIndex,
    title,
    callback,
    onClick,
    className,
    _hide,
    ...others
  } = props;
  let classes = classNames('action-sheet', {_user: className});
  typeof cancelButtonIndex === 'undefined' && (cancelButtonIndex = buttons.length - 1);


  return (
    <Popup
      direction='bottom'
      onClick={(e) => {
        _hide && _hide();
        onClick && onClick(e);
      }}
      className={classes}
      {...others}>
      <div className={classNames('action-sheet-main')}>
        {title ? (<header>{title}</header>) : null}
        <ol>{buttons.map((button, index) => {
          return (
            <Button
              key={getId()}
              name={button}
              index={index}
              cancel={cancelButtonIndex === index}
              destroy={destroyButtonIndex === index}
              callback={callback} />);
        })}</ol>
      </div>
    </Popup>
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
