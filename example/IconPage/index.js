import React, {
  Component
} from 'react';
import {
  IconAttention,
  Cell,
  CellBody,
  CellHeader,
  Cells,
  CellsTitle
} from '../../src';
import './style';
import Page from '../components/Page';


export default class IconPage extends Component {

  render() {
    //
    return (
      <Page title='Icon'>
        <CellsTitle>IconAttention</CellsTitle>
        <Cells>
          <Cell>
            <CellBody>
              <IconAttention />
              <IconAttention size='34px' />
              <IconAttention size='40px' className='custom' />
            </CellBody>
          </Cell>

          <Cell access={true} arrow={true}>
            <CellHeader><IconAttention size='20px' /></CellHeader>
            <CellBody>注意啦</CellBody>
          </Cell>
        </Cells>
      </Page>
    );
  }
}
