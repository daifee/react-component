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
          <Cell>
            <CellBody>loading</CellBody>
            <CellFooter>
              <Switch
                checked={loading}
                onChange={(e) => {
                  this.setState({...this.state, loading: e.target.checked});
                }} />
            </CellFooter>
          </Cell>

          <Cell>
            <CellBody>attention</CellBody>
            <CellFooter>
              <Switch
                checked={attention}
                onChange={(e) => {
                  this.setState({...this.state, attention: e.target.checked});
                }} />
            </CellFooter>
          </Cell>

          <Cell>
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

        <Button onClick={() => {
          Toast.show({
            icon: 'attention',
            content: 'API 调用'
          }, {}, 2000);
        }}>调用接口</Button>

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
            icon='tips'
            content='我没有 icon' />
        ) : null}
      </Page>
    );
  }
}
