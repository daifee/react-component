import React, {
  Component
} from 'react';
import {
  Page,
  Toast,
  Cells,
  Cell,
  CellBody,
  CellFooter,
  Switch,
  Button
} from 'daifee-react-component';

export default class ToastPage extends Component {
  state = {
    loading: false,
    attention: false,
    tips: false
  };

  render() {
    let {loading, attention, tips} = this.state;

    return (
      <Page>
        <h1>Toast</h1>
        <Cells>
          <Cell arrow={false}>
            <CellBody>loading</CellBody>
            <CellFooter>
              <Switch
                checked={loading}
                onChange={(e) => {
                  this.setState({...this.state, loading: e.target.checked});
                }} />
            </CellFooter>
          </Cell>

          <Cell arrow={false}>
            <CellBody>attention</CellBody>
            <CellFooter>
              <Switch
                checked={attention}
                onChange={(e) => {
                  this.setState({...this.state, attention: e.target.checked});
                }} />
            </CellFooter>
          </Cell>

          <Cell arrow={false}>
            <CellBody>tips</CellBody>
            <CellFooter>
              <Switch
                checked={tips}
                onChange={(e) => {
                  this.setState({...this.state, tips: e.target.checked});
                }} />
            </CellFooter>
          </Cell>
        </Cells>

        <br />
        <br />

        <div className='wrap'>
          <Button onClick={() => {
            Toast.show({
              icon: 'attention',
              content: 'API 调用'
            }, null, 3000);
          }}>调用接口</Button>

          <Button onClick={() => {
            Toast.showAttention('shortcut');
          }}>sortcut api</Button>

          <Button onClick={() => {
            Toast.showLoading();

            setTimeout(() => Toast.hide(), 2000);
          }}>showLoading</Button>
        </div>


        {loading ? (
          <Toast
            icon='loading'
            content='加载中...' />
        ) : null}

        {attention ? (
          <Toast
            icon='attention'
            content='注意啦！' />
        ) : null}

        {tips ? (
          <Toast
            content='我没有 icon' />
        ) : null}
      </Page>
    );
  }
}
