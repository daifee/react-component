import React, {
  Component
} from 'react';
import {
  Page,
  Dialog,
  Button,
  Switch,
  Cells,
  Cell,
  CellBody,
  CellFooter
} from 'daifee-react-component';

export default class DialogPage extends Component {
  state = {
    show: true
  };

  render() {
    let {show} = this.state;

    return (
      <Page>
        <h1>Dialog</h1>
        <Cells>
          <Cell>
            <CellBody>Dialog 状态</CellBody>
            <CellFooter>
              <Switch checked={show} onChange={(e) => {
                this.setState({show: e.target.checked});
              }} />
            </CellFooter>
          </Cell>
        </Cells>

        {show ? (
          <Dialog
            title='UI'
            content='渲染UI'
            buttons={[{
              text: '取消',
              onClick: () => {
                this.setState({show: !show});
              }
            }]} />
        ) : null}

        <br />
        <br />

        <div className='wrap'>
          <Button onClick={() => {
            Dialog.show({
              title: 'API',
              content: '直接调用静态方法',
              buttons: [{text: '取消'}, {text: '确定'}]
            });
          }}>Dialog.show()</Button>
        </div>
      </Page>
    );
  }
}
