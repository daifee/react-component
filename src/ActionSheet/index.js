import React, {
  Component,
  PropTypes
} from 'react';
import {render} from 'react-dom';
import classNames from '../classNames';
import './style';
import TransitionShowContainer from '../TransitionShowContainer';

let apiInstance = null;
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
    callback: PropTypes.func
  };

  static defaultProps = {
    ...TransitionShowContainer.defaultProps,
    duration: 300,
    buttons: []
  };

  transitionName = classNames('action-sheet');

  renderMain(style) {
    const {
      // reset
      show, zIndex, duration, timingFunction,

      buttons,
      cancelButtonIndex,
      destroyButtonIndex,
      title,
      callback,
      className,
      ...others
    } = this.props;
    let classes = classNames('action-sheet', {_user: className});

    return (
      <div className={classes} style={style} {...others} onClick={this.click}>
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
    const {onClick} = this.props;
    hide();
    onClick && onClick();
  };

  /**
   * 显示 ActionSheet
   * @param  {Object}   options  参数选项
   *   * buttons {Array}  按钮。数组每个值是按钮名字（String）
   *   * cancelButtonIndex {Number}  第几个是取消按钮，对应 buttons 的 index
   *   * destroyButtonIndex {Number}  第二个是有“销毁”动作的按钮，对应 buttons 的 index
   *   * title {String}  标题
   * @param  {Function} callback 点击 buttons 后会执行的回调，参数为 button 的 index
   * @return {[type]}            [description]
   */
  static show(options = {}, callback) {
    // cancelButtonIndex 默认值
    let cancelButtonIndex = options.buttons.length - 1;
    let nextState = {
      cancelButtonIndex,
      ...apiInstance.state,
      ...options,
      callback,
      show: true
    };

    apiInstance.setState(nextState);
  }
}


function hide() {
  let nextState = {...apiInstance.state, show: false};

  apiInstance.setState(nextState);
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




/**
 * 提供接口
 */
class ActionSheetApi extends Component {
  state = {};

  render() {
    return (<ActionSheet {...this.state} />);
  }
}

function renderContainer() {
  const div = document.createElement('div');
  div.className = classNames('action-sheet-api-container');
  document.body.appendChild(div);

  apiInstance = render((<ActionSheetApi />), div);
}

renderContainer();
