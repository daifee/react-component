import React, {
  Component
} from 'react';
import Page from '../components/Page';
import {DatePicker} from 'daifee-react-component';
import './style';

let yearOptions = rangeNum(2010, 2024);
let monthOptions = rangeNum(1, 12);
let dateOptions = rangeNum(1, 31);

function rangeNum(min, max) {
  let result = [];
  while (min <= max) {
    result.push(min);
    min++;
  }

  return result;
}


export default class DialogPage extends Component {

  render() {
    //
    return (
      <Page title='DatePicker'>
        <div className='main' style={{
          padding: 0
        }}>
          <DatePicker
            title='选择日期'
            yearOptions={yearOptions}
            selectedYearIndex={0}
            monthOptions={monthOptions}
            selectedMonthIndex={0}
            dateOptions={dateOptions}
            selectedDateIndex={0}
            onChange={(yearIndex, monthIndex, dateIndex) => {
              let log = yearOptions[yearIndex] + '-'
                + monthOptions[monthIndex] + '-'
                + dateOptions[dateIndex];
              console.log(log);
            }}
            onCancel={() => {
              console.log('cancel');
            }}
            onConfirm={() => {
              console.log('confirm');
            }} />
        </div>
      </Page>
    );
  }
}
