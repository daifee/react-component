import React from 'react';
import {
  Page,
  Cells,
  Cell,
  CellHeader,
  CellBody,
  IconAttention,
  IconCheck,
  IconLoading
} from 'daifee-react-component';


export default function IconPage() {
  return (
    <Page>
      <h1>Icon</h1>

      <Cells>
        <Cell>
          <CellHeader>
            <IconAttention size='22px' />
          </CellHeader>
          <CellBody>
            <IconAttention />
            <span>{' '}</span>
            <span>{' '}</span>
            <IconAttention size='60px' />
          </CellBody>
        </Cell>

        <Cell>
          <CellHeader>
            <IconCheck size='22px' />
          </CellHeader>
          <CellBody>
            <IconCheck />
            <span>{' '}</span>
            <span>{' '}</span>
            <IconCheck size='60px' />
          </CellBody>
        </Cell>

        <Cell>
          <CellHeader>
            <IconLoading scale={0.7} />
          </CellHeader>
          <CellBody>
            <IconLoading />
            <span>{' '}</span>
            <span>{' '}</span>
            <IconLoading scale={1.2} />
          </CellBody>
        </Cell>
      </Cells>
    </Page>
  );
}
