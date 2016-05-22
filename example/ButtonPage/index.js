import React, {
  Component
} from 'react';
import {Button} from '../../src';
import './style.scss';
import Page from '../components/Page';

export default class ButtonPage extends Component {

  render() {
    return (
      <Page title='Button'>
        <div className='btn-group'>
          <Button>按钮</Button>
          <Button disabled={true}>按钮</Button>
          <Button type='primary'>按钮</Button>
          <Button type='primary' disabled={true}>按钮</Button>
          <Button type='warn'>按钮</Button>
          <Button type='warn' disabled={true}>按钮</Button>
          <Button href='http://weibo.com' type='warn'>weibo</Button>
          <Button href='http://weibo.com' type='warn' disabled={true}>weibo</Button>
        </div>
      </Page>
    );
  }
}
