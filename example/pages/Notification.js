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
            content: (Math.random() * 1000).toString(),
            style: {
              height: '60px',
              lineHeight: '60px',
              textAlign: 'center'
            }
          });
        }}>notify</Button>
      </div>
    </Page>
  );
}
