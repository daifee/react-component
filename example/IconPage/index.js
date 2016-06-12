import React, {
  Component
} from 'react';
import {
  IconAttention,
  IconLoading,
  IconCheck,
  Cell,
  CellBody,
  CellHeader,
  CellFooter,
  Cells,
  CellsTitle
} from 'daifee-react-component';
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

          <Cell>
            <CellBody>
              <IconCheck />
              <IconCheck />
              <IconCheck size='60px' />
            </CellBody>
          </Cell>
          <Cell access={true}>
            <CellBody>选中了我</CellBody>
            <CellFooter><IconCheck size='20px' /></CellFooter>
          </Cell>
        </Cells>
      </Page>
    );
  }
}
