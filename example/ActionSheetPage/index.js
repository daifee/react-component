import React, {
  Component
} from 'react';
import Page from '../components/Page';
import {Button, ActionSheet, Notification} from 'daifee-react-component';
import './style';

let actionSheet;

export default class DialogPage extends Component {

  render() {
    //
    return (
      <Page title='ActionSheet'>
        <div className='main'>
          <Button type='primary' onClick={() => {
            ActionSheet.show({
              title: '基本用例',
              buttons: ['action 1', 'action 2', 'delete', 'cancel'],
              cancelButtonIndex: 3,
              destroyButtonIndex: 2,
              zIndex: 99
            }, (index) => {
              Notification.show(`点击了第${index}个 action`, 'default', {
                zIndex: 100
              });
            });
          }}>点我</Button>

          <Button type='primary' onClick={() => {
            ActionSheet.show({
              buttons: ['action 1', 'action 2', 'cancel']
            }, (index) => {
              Notification.show(`点击了第${index}个 action`, 'default', {
                zIndex: 999999
              });
            });
          }}>最简单用例</Button>


          <Button type='primary' onClick={() => {
            actionSheet.show({
              buttons: ['action 1', 'action 2', 'cancel']
            }, (index) => {
              Notification.show(`点击了第${index}个 action`, 'default', {
                zIndex: 999999
              });
            });
          }}>页面级使用</Button>
        </div>
        <div ref='container' />
      </Page>
    );
  }

  componentDidMount() {
    actionSheet = ActionSheet.getInstance(this.refs.container);
  }
}
