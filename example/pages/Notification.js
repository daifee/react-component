import React from 'react';
import {
  Page,
  Notification,
  Button
} from 'daifee-react-component';



export default function NotificationPage() {
  return (
    <Page>
      <h1>Notification</h1>
      <div className='wrap'>
        <Button onClick={() => {
          Notification.show({
            content: Date.now()
          });
        }}>notify</Button>
      </div>
    </Page>
  );
}
