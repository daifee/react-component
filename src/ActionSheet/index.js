import React, {
  Component,
  PropTypes
} from 'react';
import './style';
import {classNames, createInstance} from '../utils';
import Popup from '../Popup';

let apiInstance;


/**
 * action 按钮
 * @param {object} props see Button.propTypes
 */
function Button(props) {
  const {index, children, cancel, destroy, callback} = props;
  let className = classNames('action-sheet-item', {
    'action-sheet-item-cancel': cancel,
    'action-sheet-item-destroy': destroy
  });

  return (
    <li className={className} onClick={() => callback(index)}>
      <button>{children}</button>
    </li>
  );
}

/**
 * 传入 Button 的属性
 * @type {Object}
 * index: 索引
 * children: 按钮（button）内容
 * cancel: 是取消按钮？
 * destroy: 是销毁按钮？
 * callback: 点击 action 按钮的回调，参数为对应的 action 索引
 */
Button.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  cancel: PropTypes.bool,
  destroy: PropTypes.bool,
  callback: PropTypes.func.isRequired
};

/**
 * ActionSheet UI
 * @param {object} props see ActionSheet.propTypes
 */
export default function ActionSheet(props) {
  let {
    title,
    actions,
    callback,
    cancelIndex,
    destroyIndex,
    className,
    ...others
  } = props;
  className = classNames('action-sheet', {_user: className});
  typeof cancelIndex === 'undefined' && (cancelIndex = actions.length - 1);


  return (
    <div className={className} {...others}>
      {title ? (<header>{title}</header>) : null}
      <ol>{actions.map((content, index) => {
        return (
          <Button
            key={index}
            index={index}
            cancel={cancelIndex === index}
            destroy={destroyIndex === index}
            callback={callback}>
            {content}
          </Button>
        );
      })}</ol>
    </div>
  );
}

/**
 * ActionSheet 的 props
 * @type {Object}
 * title: 标题
 * actions: 多个动作 action[0] === PropTypes.node
 * callback: 点击动作后的回调
 * cancelIndex: “取消动作”的索引
 * destroyIndex: “销毁动作”的索引
 */
ActionSheet.propTypes = {
  title: PropTypes.node,
  actions: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired,
  cancelIndex: PropTypes.number,
  destroyIndex: PropTypes.number,
  className: PropTypes.string
};

/**
 * 创建 ActionSheet 的 ApiContainer 实例
 * @param  {node} container {@see createInstance}
 * @return {PropTypes.element}           React elment 对象
 */
ActionSheet.getInstance = (container) => {
  return createInstance(ApiContainer, container);
};

/**
 * 显示全局ActionSheet
 * @param  {object} props      see ActionSheet.propTypes
 * @param  {object} popupProps {@see Popup}
 * @return {[type]}            [description]
 */
ActionSheet.show = (props, popupProps) => {
  apiInstance.show(props, popupProps);
};





class ApiContainer extends Component {
  state = {
    props: {
      actions: [],
      callback: () => {}
    },
    popupProps: {
      show: false
    }
  };

  render() {
    let {props, popupProps} = this.state;

    return (
      <Popup {...popupProps}>
        <ActionSheet {...props} />
      </Popup>
    );
  }

  show(props, popupProps) {
    let nextState = {
      props: {...this.state.props, ...props},
      popupProps: {...this.state.popupProps, ...popupProps, show: true}
    };

    this.setState(nextState);
  }

  hide() {
    let nextState = {
      ...this.state,
      popupProps: {...this.state.popupProps, show: false}
    };

    this.setState(nextState);
  }

  _decorateProps(props) {
    let callback = props.callback;
    props.callback = (index) => {
      callback && callback(index);
      this.hide();
    };
  }
}


apiInstance = createInstance(ApiContainer);
