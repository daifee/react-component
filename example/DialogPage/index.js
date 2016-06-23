import React, {
  Component
} from 'react';
import Page from '../components/Page';
import {Button, Dialog} from 'daifee-react-component';
import './style';


export default class DialogPage extends Component {

  render() {
    //
    return (
      <Page title='Dialog'>
        <div className='main'>
          <Button type='primary' onClick={() => {
            Dialog.show({
              title: 'Dialog',
              content: '一个按钮',
              buttons: [{text: '确定'}]
            });
          }}>一个按钮</Button>
          <Button type='primary' onClick={() => {
            Dialog.show({
              title: 'Dialog',
              content: '多个按钮',
              buttons: [
                {
                  text: '取消',
                  onClick: () => {console.log('取消');}
                },
                {
                  text: '确定',
                  onClick: () => {console.log('确定');}
                }
              ]
            });
          }}>多个按钮</Button>
        </div>
      </Page>
    );
  }
}
