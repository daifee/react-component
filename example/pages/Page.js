import React from 'react';
import {
  Page,
  Notification,
  Button,
  Cells,
  Cell,
  CellBody
} from 'daifee-react-component';
import {Link} from 'react-router';

export default function PagePage() {
  return (
    <Page>
      <h1>Page</h1>

      <Cells>
        <Cell component={Link} to='/'>
          <CellBody>Home</CellBody>
        </Cell>
        <Cell arrow={false}>
          <CellBody>react-router</CellBody>
        </Cell>
      </Cells>
    </Page>
  );
}
