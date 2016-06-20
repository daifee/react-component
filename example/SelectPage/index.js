import React, {
  Component
} from 'react';
import Page from '../components/Page';
import {
  Select
} from 'daifee-react-component';

const options = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

let options2 = options.map((value) => {
  return {
    name: (value + '天'),
    value: value
  };
});

export default class SelectPage extends Component {

  render() {
    //
    return (
      <Page title='Select'>
        <Select options={options} />
        <br />
        <Select selectedIndex={2} options={options2} onChange={this.onDay} />
      </Page>
    );
  }

  onDay = (selectedIndex) => {
    console.log(options2[selectedIndex]);
  }
}
