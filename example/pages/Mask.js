import React, {
  Component
} from 'react';
import {
  Page,
  Mask,
  Switch,
  Cells,
  Cell,
  CellBody,
  CellFooter
} from 'daifee-react-component';

export default class MaskPage extends Component {
  state = {
    show: true
  };

  render() {
    let {show} = this.state;

    return (
      <Page>
        <h1>Mask</h1>
        <Cells>
          <Cell>
            <CellBody>Mask 状态</CellBody>
            <CellFooter>
              <Switch checked={show} onChange={(e) => {
                this.setState({show: e.target.checked});
              }} />
            </CellFooter>
          </Cell>
        </Cells>

        {show ? (
          <Mask onClick={() => {
            this.setState({show: false});
          }}>
            <p>这是在 Mask 之上的内容</p>
          </Mask>
        ) : null}
      </Page>
    );
  }
}
