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
  Checkbox
} from 'daifee-react-component';

export default class CellPage extends Component {
  state = {
    vip: false
  };

  render() {
    let {vip} = this.state;
    //
    return (
      <Page title='Cell'>
        <Cells>
          <Cell>
            <CellHeader><Checkbox checked={vip} onChange={this.change} /></CellHeader>
            <CellBody>家泳最帅</CellBody>
          </Cell>
          <Cell>
            <CellHeader><Checkbox disabled={true} onChange={() => {
              alert('根本无法 change');
            }} /></CellHeader>
            <CellBody>家泳是傻逼</CellBody>
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
