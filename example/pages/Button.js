import React, {
  Component
} from 'react';
import {
  Page,
  Button
} from 'daifee-react-component';


export default function ButtonPage() {

  return (
    <Page>
      <div className='wrap'>
        <h1>Button</h1>
        <Button onClick={_alert}>Default</Button>
        <Button type='primary' onClick={_alert}>Primary</Button>
        <Button type='warning' onClick={_alert}>Primary</Button>
        <Button disabled={true} onClick={_alert}>Disabled</Button>
        <Button href='https://weibo.com' onClick={_alert}>Weibo</Button>
      </div>
    </Page>
  );
}

function _alert() {
  alert(222);
}
