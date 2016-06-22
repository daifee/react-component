import React, {
  Component
} from 'react';
import Page from '../components/Page';
import {DatePicker, Button} from 'daifee-react-component';
import './style';

function rangeNum(min, max) {
  let result = [];
  while (min <= max) {
    result.push(min);
    min++;
  }

  return result;
}


function getMaxDate() {
  let now = new Date();
  now.setFullYear(now.getFullYear() + 7);

  return now;
}


class DateButton extends Component {
  constructor(props) {
    super(props);

    let minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 2);
    let maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() + 10);
    maxDate.setMonth(9);
    maxDate.setDate(22);
    let selectedDate = new Date();

    this.state = {
      minDate,
      maxDate,
      selectedDate
    };
  }

  render() {
    let {selectedDate} = this.state;
    let dateString = selectedDate.getFullYear() + '-'
      + selectedDate.getMonth() + '-'
      + selectedDate.getDate();

    return (
      <div style={{padding: '16px'}}>
        <Button onClick={this._selectDate}>{dateString}</Button>
      </div>
    );
  }

  _selectDate = () => {
    let {minDate, maxDate, selectedDate} = this.state;

    DatePicker.show({
      minDate,
      maxDate,
      selectedDate,
      onChange: this._changeDate
    });
  };

  _changeDate = (selectedDate) => {
    let newState = {...this.state, selectedDate};
    this.setState(newState);
  };
}


export default class DialogPage extends Component {
  state = {
    minDate: new Date(),
    maxDate: getMaxDate(),
    selectedDate: new Date()
  };

  getYearOptions() {
    let {minDate, maxDate} = this.state;
    return rangeNum(minDate.getFullYear(), maxDate.getFullYear());
  }

  getSelectedYearIndex(years) {
    let {selectedDate} = this.state;
    let year = selectedDate.getFullYear();

    return years.indexOf(year);
  }

  getMonthOptions() {
    return rangeNum(1, 12);
  }

  getSelectedMonthIndex(months) {
    let {selectedDate} = this.state;
    let month = selectedDate.getMonth() + 1;

    return months.indexOf(month);
  }

  getDateOptions() {
    let {selectedDate} = this.state;
    selectedDate = new Date(selectedDate.getTime());
    selectedDate.setDate(1);  // 1-31 + 1 = 2-31 = 3-1
    selectedDate.setMonth(selectedDate.getMonth() + 1);
    selectedDate.setDate(0);
    let max = selectedDate.getDate();

    return rangeNum(1, max);
  }

  getSelectedDateIndex(dates) {
    let {selectedDate} = this.state;
    let date = selectedDate.getDate();

    return dates.indexOf(date);
  }


  render() {
    let yearOptions = this.getYearOptions();
    let selectedYearIndex = this.getSelectedYearIndex(yearOptions);
    let monthOptions = this.getMonthOptions();
    let selectedMonthIndex = this.getSelectedMonthIndex(monthOptions);
    let dateOptions = this.getDateOptions();
    let selectedDateIndex = this.getSelectedDateIndex(dateOptions);

    let dateString = yearOptions[selectedYearIndex] + '-'
      + monthOptions[selectedMonthIndex] + '-'
      + dateOptions[selectedDateIndex];

    return (
      <Page title='DatePicker'>
        <div className='main' style={{
          padding: 0
        }}>
          <DatePicker
            title={dateString}
            yearOptions={yearOptions}
            selectedYearIndex={selectedYearIndex}
            monthOptions={monthOptions}
            selectedMonthIndex={selectedMonthIndex}
            dateOptions={dateOptions}
            selectedDateIndex={selectedDateIndex}
            onChange={(yearIndex, monthIndex, dateIndex) => {
              this.changeSelectedDate(yearOptions, yearIndex, monthOptions, monthIndex, dateOptions, dateIndex)
            }}
            onCancel={() => {
              console.log('cancel');
            }}
            onConfirm={() => {
              console.log('confirm');
            }} />
        </div>
        <DateButton />
      </Page>
    );
  }

  changeSelectedDate(yearOptions, yearIndex, monthOptions, monthIndex, dateOptions, dateIndex) {
    let year = yearOptions[yearIndex];
    let month = monthOptions[monthIndex];
    let date = dateOptions[dateIndex];
    let d = new Date();
    d.setFullYear(year);
    d.setDate(1);  // 防止 31
    d.setMonth(month);  // +1
    d.setDate(0);
    let max = d.getDate();
    if (max < date) {
      date = max;
    }

    let selectedDate = new Date();
    selectedDate.setFullYear(year);
    selectedDate.setMonth(month - 1);
    selectedDate.setDate(date);

    this.setState({...this.state, selectedDate});
  }
}
