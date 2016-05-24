import React, {
  Component
} from 'react';
import {
  IconAttention,
  IconLoading,
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
        <CellsTitle>Icons</CellsTitle>
        <Cells>
          <Cell access={true} arrow={true}>
            <CellHeader><IconAttention size='20px' /></CellHeader>
            <CellBody>CellHeader 应该是一个 icon</CellBody>
          </Cell>
          <Cell>
            <CellBody>
              <IconAttention />
              <IconAttention size='34px' />
              <IconAttention size='40px' className='custom-attention' />
            </CellBody>
          </Cell>

          <Cell>
            <CellBody>
              <IconLoading />
              <IconLoading className='custom-loading' />
              <IconLoading scale={0.8} />
            </CellBody>
          </Cell>
        </Cells>
      </Page>
    );
  }
}
