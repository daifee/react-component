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
  CellsTips
} from '../../src';
import './style';

export default class CellPage extends Component {

  render() {
    //
    return (
      <Page title='Cell'>
        <CellsTitle>我是 CellsTitle</CellsTitle>
        <Cells>
          <Cell><CellBody>我是最简单的 Cell CellBody</CellBody></Cell>

          <Cell>
            <CellHeader>Header</CellHeader>
            <CellBody>增加 CellHeader</CellBody>
          </Cell>

          <Cell>
            <CellHeader>Header</CellHeader>
            <CellBody>增加 CellFooter</CellBody>
            <CellFooter>Footer</CellFooter>
          </Cell>

          <Cell access={true}>
            <CellHeader>Header</CellHeader>
            <CellBody>增加 active 背景</CellBody>
            <CellFooter>Footer</CellFooter>
          </Cell>

          <Cell access={true} arrow={true}>
            <CellHeader>Header</CellHeader>
            <CellBody>增加 arrow</CellBody>
            <CellFooter>Footer</CellFooter>
          </Cell>

          <Cell access={true} arrow={true} href='//weibo.com'>
            <CellHeader>ico</CellHeader>
            <CellBody>Weibo</CellBody>
            <CellFooter>链接</CellFooter>
          </Cell>
        </Cells>
        <CellsTips>一个 cells 集合，到这里结束</CellsTips>

        <CellsTitle>在 Cells 定义 access & arrow</CellsTitle>
        <Cells arrow={true} access={true}>
          <Cell>
            <CellHeader>ic</CellHeader>
            <CellBody>Weibo</CellBody>
            <CellFooter>footer</CellFooter>
          </Cell>
          <Cell>
            <CellHeader>ic</CellHeader>
            <CellBody>Weibo 是一个不错的平台，对于所有人，当然所有驶入都有缺陷，除了我是一个换行</CellBody>
            <CellFooter>footer</CellFooter>
          </Cell>
          <Cell>
            <CellHeader>ic</CellHeader>
            <CellBody>Weibo</CellBody>
            <CellFooter>footer</CellFooter>
          </Cell>
        </Cells>
      </Page>
    );
  }
}
