import React, {
  Component
} from 'react';
import {
  Cell,
  CellBody,
  Cells,
  CellsTitle
} from '../../src';
import './style';
import Page from '../components/Page';

export default class Home extends Component {
  state = {
    components: [
      {name: 'Button', href: '#button'},
      {name: 'Cell', href: '#cell'}
    ]
  };

  // methods
  render() {
    let {components} = this.state;

    return (
      <Page
        title='React Component'
        subTitle='组件化开发'>
        <CellsTitle>Component</CellsTitle>
        <Cells>{components.map((item, index) => {
          return (
            <Cell key={index} href={item.href}>
              <CellBody>{item.name}</CellBody>
            </Cell>
          );
        })}</Cells>
      </Page>
    );
  }
}
