import React, {
  Component
} from 'react';
import Page from '../components/Page';
import {
  Cell,
  CellBody,
  CellFooter,
  CellHeader,
  Cells,
  CellsTitle,
  CellsTips,
  Switch
} from 'daifee-react-component';

export default class CellPage extends Component {
  state = {
    vip: false
  };

  render() {
    let {vip} = this.state;
    //
    return (
      <Page title='Switch'>
        <Cells>
          <Cell>
            <CellBody>vip</CellBody>
            <CellFooter><Switch checked={vip} onChange={this.change} /></CellFooter>
          </Cell>
          <Cell>
            <CellBody>disabled = true</CellBody>
            <CellFooter><Switch disabled={true} onChange={() => {
              alert('根本无法 change');
            }} /></CellFooter>
          </Cell>
        </Cells>
      </Page>
    );
  }

  change = () => {
    let {vip} = this.state;

    this.setState({vip: !vip});
  };
}
