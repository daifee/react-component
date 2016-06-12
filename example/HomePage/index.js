import React, {
  Component
} from 'react';
import {
  Cell,
  CellBody,
  Cells,
  CellsTitle
} from 'daifee-react-component';
import './style';
import Page from '../components/Page';


export default class HomePage extends Component {

  // methods
  render() {
    let {list} = this.props.route;

    list.sort((left, right) => {
      return left.name > right.name;
    });

    return (
      <Page
        title='React Component'
        subTitle='组件化开发'>
        <CellsTitle>Component</CellsTitle>
        <Cells arrow={true}>{list.map((item, index) => {
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
