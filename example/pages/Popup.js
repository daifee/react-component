import React, {
  Component
} from 'react';
import {
  Page,
  Switch,
  Cells,
  Cell,
  CellBody,
  CellFooter,
  Button,
  Popup
} from 'daifee-react-component';


export default class PopupPage extends Component {
  state = {
    top: false,
    right: false,
    bottom: false,
    left: false,
    login: false
  };

  render() {
    let {top, right, bottom, left, login} = this.state;

    return (
      <Page>
        <h1>Popup</h1>

        <Cells>
          <Cell arrow={false} access={false}>
            <CellBody>Popup top</CellBody>
            <CellFooter>
              <Switch checked={top} onChange={(e) => {
                this.setState({...this.state, top: e.target.checked});
              }} />
            </CellFooter>
          </Cell>

          <Cell arrow={false} access={false}>
            <CellBody>Popup right</CellBody>
            <CellFooter>
              <Switch checked={right} onChange={(e) => {
                this.setState({...this.state, right: e.target.checked});
              }} />
            </CellFooter>
          </Cell>

          <Cell arrow={false} access={false}>
            <CellBody>Popup bottom</CellBody>
            <CellFooter>
              <Switch checked={bottom} onChange={(e) => {
                this.setState({...this.state, bottom: e.target.checked});
              }} />
            </CellFooter>
          </Cell>

          <Cell arrow={false} access={false}>
            <CellBody>Popup left</CellBody>
            <CellFooter>
              <Switch checked={left} onChange={(e) => {
                this.setState({...this.state, left: e.target.checked});
              }} />
            </CellFooter>
          </Cell>

          <Cell arrow={false} access={false}>
            <CellBody>Popup login</CellBody>
            <CellFooter>
              <Switch checked={login} onChange={(e) => {
                this.setState({...this.state, login: e.target.checked});
              }} />
            </CellFooter>
          </Cell>
        </Cells>

        <Popup
          show={top}
          direction='top'
          onClick={this._hide}>
          <h2>top</h2>
          <p>fjaio放假爱偶奇偶</p>
          <p>fjaio放假爱偶奇偶</p>
          <p>fjaio放假爱偶奇偶</p>
        </Popup>

        <Popup
          show={right}
          direction='right'
          onClick={this._hide}>
          <h2>right</h2>
          <p>fjaio放假爱偶奇偶</p>
          <p>fjaio放假爱偶奇偶</p>
          <p>fjaio放假爱偶奇偶</p>
        </Popup>

        <Popup
          show={bottom}
          direction='bottom'
          onClick={this._hide}>
          <h2>bottom</h2>
          <p>fjaio放假爱偶奇偶</p>
          <p>fjaio放假爱偶奇偶</p>
          <p>fjaio放假爱偶奇偶</p>
        </Popup>

        <Popup
          show={left}
          direction='left'
          onClick={this._hide}>
          <h2>left</h2>
          <p>fjaio放假爱偶奇偶</p>
          <p>fjaio放假爱偶奇偶</p>
          <p>fjaio放假爱偶奇偶</p>
        </Popup>

        <Popup
          show={login}
          direction='bottom'
          style={{
            height: '100%'
          }}>
          <h1>Login</h1>
          <div className='wrap'>
            <Button onClick={this._hide}>取消</Button>
          </div>
        </Popup>
      </Page>
    );
  }

  _hide = () => {
    this.setState({top: false, right: false, bottom: false, left: false, login: false});
  };
}
