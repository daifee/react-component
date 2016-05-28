import React, {
  Component
} from 'react';
import Page from '../components/Page';
import {Button, Notification} from '../../src';
import './style';

export default class NotificationPage extends Component {

  render() {
    //
    return (
      <Page title='Notification'>
        <div className='main'>
          <Button onClick={() => Notification.show('告示-默认样式')}>Default</Button>
          <Button onClick={() => Notification.show('告示-info', 'info')}>Info</Button>
          <Button onClick={() => Notification.show('告示-success', 'success')}>Success</Button>
          <Button onClick={() => Notification.show('告示-error', 'error')}>Error</Button>
          <Button onClick={() => Notification.show('告示-warn', 'warn')}>Warn</Button>
        </div>
      </Page>
    );
  }
}
