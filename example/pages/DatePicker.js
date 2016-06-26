import React, {
  Component
} from 'react';
import {
  Page,
  DatePicker,
  Button
} from 'daifee-react-component';

function format(date) {
  let result = date.getFullYear() + '-'
    + (date.getMonth() + 1) + '-'
    + date.getDate();
  return result;
}

export default class DatePickerPage extends Component {
  constructor(props) {
    super(props);

    let minDate = new Date(0);
    let maxDate = new Date();
    maxDate.setFullYear(2116);
    let selectedDate = new Date();


    this.state = {
      minDate,
      maxDate,
      selectedDate,
      temp: selectedDate
    };
  }


  render() {
    let {minDate, maxDate, selectedDate, temp} = this.state;

    return (
      <Page>
        <h1>
          DatePicker
          <br />
          {format(selectedDate)}
        </h1>
        <DatePicker
          title={format(temp)}
          minDate={minDate}
          maxDate={maxDate}
          selectedDate={temp}
          onChange={this.change}
          onCancel={this.cancel}
          onConfirm={this.confirm} />

        <br />
        <br />

        <div className='wrap'>
          <Button onClick={() => {
            DatePicker.show({
              title: '选择日期',
              minDate: minDate,
              maxDate: maxDate,
              selectedDate: selectedDate,
              onCancel: this.cancel,
              onConfirm: this.confirm
            });
          }}>{format(selectedDate)}</Button>
        </div>
      </Page>
    );
  }

  change = (selectedDate) => {
    let nextState = {...this.state, temp: selectedDate};
    this.setState(nextState);
  };

  cancel = () => {
    alert('cancel');
  };

  confirm = (selectedDate) => {
    let nextState = {...this.state, selectedDate};
    this.setState(nextState);
  };
}
