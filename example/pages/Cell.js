import React, {
  Component
} from 'react';
import {
  Page,
  Cells,
  CellsTitle,
  CellsTips,
  Cell,
  CellHeader,
  CellBody,
  CellFooter,
  Checkbox,
  Switch
} from 'daifee-react-component';

export default function CellPage() {
  return (
    <Page>
      <h1>Cell <br /> Checkbox <br /> Switch</h1>
      <CellsTitle>CellsTitle Cells Cell</CellsTitle>
      <Cells>
        <Cell>
          <CellHeader>Header</CellHeader>
          <CellBody>Body</CellBody>
          <CellFooter>Footer</CellFooter>
        </Cell>
        <Cell access={false} arrow={false}>
          <CellHeader>Header</CellHeader>
          <CellBody>Body</CellBody>
          <CellFooter>Footer</CellFooter>
        </Cell>
        <Cell href='https://weibo.com'>
          <CellHeader>Header</CellHeader>
          <CellBody>Body</CellBody>
          <CellFooter>Footer</CellFooter>
        </Cell>
      </Cells>
      <CellsTips>CellsTips</CellsTips>

      <br />

      <CellsTitle>Checkbox</CellsTitle>
      <Cells>
        <Cell component='label' arrow={false}>
          <CellHeader><Checkbox onChange={(e) => {
            alert(e.target.checked);
          }} /></CellHeader>
          <CellBody>默认</CellBody>
        </Cell>
        <Cell component='label' arrow={false}>
          <CellHeader><Checkbox defaultChecked={true} /></CellHeader>
          <CellBody>defaultChecked</CellBody>
        </Cell>
        <Cell component='label' arrow={false}>
          <CellHeader><Checkbox disabled={true} /></CellHeader>
          <CellBody>disabled</CellBody>
        </Cell>
      </Cells>

      <br />

      <CellsTitle>Switch</CellsTitle>
      <Cells>
        <Cell access={false} arrow={false}>
          <CellBody>默认</CellBody>
          <CellFooter><Switch /></CellFooter>
        </Cell>
        <Cell access={false} arrow={false}>
          <CellBody>defaultChecked</CellBody>
          <CellFooter><Switch defaultChecked={true}  onChange={(e) => {
            alert(e.target.checked);
          }} /></CellFooter>
        </Cell>
        <Cell access={false} arrow={false}>
          <CellBody>desabled</CellBody>
          <CellFooter><Switch disabled={true} checked={true} /></CellFooter>
        </Cell>
      </Cells>
    </Page>
  );
}
