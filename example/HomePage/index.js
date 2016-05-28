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


export default class HomePage extends Component {
  state = {
    components: [
      {name: 'Button', href: '#button'},
      {name: 'Cell', href: '#cell'},
      {name: 'Icon', href: '#icon'},
      {name: 'Mask', href: '#mask'},
      {name: 'Toast', href: '#toast'},
      {name: 'Dialog', href: '#dialog'},
      {name: 'Notification', href: '#notification'}
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
        <Cells arrow={true}>{components.map((item, index) => {
          return (
            <Cell key={index} access={true} href={item.href}>
              <CellBody>{item.name}</CellBody>
            </Cell>
          );
        })}</Cells>
      </Page>
    );
  }
}
