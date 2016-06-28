import React, {
  Component
} from 'react';
import {
  Page,
  Dialog,
  Button
} from 'daifee-react-component';

export default class ApiContainer extends Component {
  state = {
    show: true
  };

  instance = null;

  render() {
    let {show} = this.state;

    return (
      <Page>
        <div className='wrap'>
          <h1>ApiContainer</h1>
          <p>
            为了方便使用，很多组件都提供静态方法（“接口”）调用。其实现方式是，为该组件定义一个
            ApiContainer 组件，import 该组件时就渲染到页面，返回的实例用“接口”封装使用。
            这种方式，ApiContainer 被渲染到一个新建的 div 中。
          </p>
          <p>
            这种组件必须有一个接口创建（getInstance(container)）新的 ApiContainer 实例，
            并渲染到特定的 DOM 节点中。返回 ApiContainer 实例。
          </p>

          <Button onClick={() => {
            this.instance.show({
              title: 'API',
              content: '直接调用静态方法',
              buttons: [{text: '取消'}, {text: '确定'}]
            });
          }}>Dialog.show()</Button>

          <div ref='container'></div>
        </div>
      </Page>
    );
  }

  componentDidMount() {
    this.instance = Dialog.getInstance(this.refs.container);
  }
}
