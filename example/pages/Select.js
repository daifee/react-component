import React from 'react';
import {
  Page,
  Select
} from 'daifee-react-component';


export default function SelectPage() {
  return (
    <Page>
      <h1>Select</h1>
      <Select
        options={[1,2,3,4,5,6,7,8,9,10,11,12,13]}
        selectedIndex={7}
        onChange={(index) => {
          console.log(index);
        }} />
    </Page>
  );
}
