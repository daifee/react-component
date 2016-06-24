import React, {
  Component,
  PropTypes
} from 'react';
import {classNames, createInstance} from '../utils';
import Select from '../Select';
import Popup from '../Popup';
import './style';

let apiInstance;
const now = new Date();

export default class DatePicker extends Component {
  static propTypes = {
    title: PropTypes.string,
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    selectedDate: PropTypes.object,
    onChange: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    className: PropTypes.string
  };

  static defaultProps = {
    minDate: now,
    maxDate: now,
    selectedDate: now
  };

  static getInstance = (container) => {
    return createInstance(ApiContainer, container);
  };

  static show = (props, popupProps) => {
    apiInstance.show(props, popupProps);
  };

  // 方便 _onChange()
  yearOptions = [];
  monthOptions = [];
  dateOptions = [];

  _cancel = () => {
    let {onCancel} = this.props;

    onCancel && onCancel();
  };

  _confirm = () => {
    let {onConfirm} = this.props;

    onConfirm && onConfirm();
  };

  _changeYear = (yearIndex) => {
    let {selectedDate} = this.props;
    let year = this.yearOptions[yearIndex].value;
    let newDate = copyDate(selectedDate);
    newDate.setFullYear(year);

    this._change(newDate);
  };

  _changeMonth = (monthIndex) => {
    let {selectedDate} = this.props;
    let month = this.monthOptions[monthIndex].value;
    let newDate = copyDate(selectedDate);
    newDate.setMonth(month - 1);  // 纠正之前的 +1

    this._change(newDate);
  };

  _changeDate = (dateIndex) => {
    let {selectedDate} = this.props;
    let date = this.dateOptions[dateIndex].value;
    let newDate = copyDate(selectedDate);
    newDate.setDate(date);

    this._change(newDate);
  };

  change(selectedDate) {
    let {onChange} = this.props;
    onChange && onChange(selectedDate);
  }

  render() {
    let {title, className, ...others} = this.props;
    let yearOptions = this.yearOptions = this.getYearOptions();
    let selectedYearIndex = this.getSelectedYearIndex(yearOptions);
    let monthOptions = this.monthOptions = this.getMonthOptions();
    let selectedMonthIndex = this.getSelectedMonthIndex(monthOptions);
    let dateOptions = this.dateOptions = this.getDateOptions();
    let selectedDateIndex = this.getSelectedDateIndex(dateOptions);

    className = classNames('date-picker', {_user: className});

    return (
      <div className={className} {...others}>
        <div className={classNames('date-picker-header')}>
          <button onClick={this._cancel}>取消</button>
          <em>{title}</em>
          <button onClick={this._confirm}>确定</button>
        </div>
        <div className={classNames('date-picker-body')}>
          <Select
            key='year'
            options={yearOptions}
            selectedIndex={selectedYearIndex}
            onChange={this._changeYear} />
          <Select
            key='month'
            options={monthOptions}
            selectedIndex={selectedMonthIndex}
            onChange={this._changeMonth} />
          <Select
            key='date'
            options={dateOptions}
            selectedIndex={selectedDateIndex}
            onChange={this._changeDate} />
        </div>
      </div>
    );
  }


  getYearOptions() {
    let {minDate, maxDate} = this.state;
    let min = minDate.getFullYear();
    let max = maxDate.getFullYear();
    let result = formatOptions(min, max, '年');

    return result;
  }

  getSelectedYearIndex(options) {
    let {selectedDate} = this.state;
    let result = indexOfOptions(options, selectedDate.getFullYear());

    return result;
  }

  getMonthOptions() {
    let {minDate, maxDate, selectedDate} = this.state;
    let min = 1;
    let max = 12;

    isSameYear(minDate, selectedDate) && (min = getMonth(minDate));
    isSameYear(maxDate, selectedDate) && (max = getMonth(maxDate));

    let result = formatOptions(min, max, '月');

    return result;
  }

  getSelectedMonthIndex(options) {
    let {selectedDate} = this.state;
    let result = indexOfOptions(options, getMonth(selectedDate));

    return result;
  }

  getDateOptions() {
    let {minDate, maxDate, selectedDate} = this.state;
    let min = 1;
    let max = getLastDate(selectedDate);

    isSameYearMonth(minDate, selectedDate) && (min = minDate.getDate());
    isSameYearMonth(maxDate, selectedDate) && (max = maxDate.getDate());

    let result = formatOptions(min, max, '日');

    return result;
  }

  getSelectedDateIndex(options) {
    let {selectedDate} = this.state;
    let result = indexOfOptions(options, selectedDate.getDate());

    return result;
  }

}



// 返回 option.value === value 的索引
function indexOfOptions(options, value) {
  let result = -1;
  for (var i = options.length - 1; i >= 0; i--) {
    if (options[i].value === value) {
      result = i;
      break;
    }
  }

  return result;
}

// 格式化 options
function formatOptions(min, max, suffix = '') {
  let result = [];

  while (min <= max) {
    result.push({
      name: (min + suffix),
      value: min
    });
    min++;
  }

  return result;
}

// 获取本月的最后一日的日期
function getLastDate(date) {
  let tmp = new Date(date.getTime());
  tmp.setDate(1);
  tmp.setMonth(tmp.getMonth() + 1);
  tmp.setDate(0);

  return tmp.getDate();
}

// 返回月份，补 +1
function getMonth(date) {
  return date.getMonth() + 1;
}

// 是否同年
function isSameYear(date1, date2) {
  return date1.getFullYear() === date2.getFullYear();
}

// 是否同年月
function isSameYearMonth(date1, date2) {
  return isSameYear(date1, date2) && date1.getMonth() === date2.getMonth();
}

// copy Date 实例
function copyDate(date) {
  let newDate = new Date(date.getTime());

  return newDate;
}



class ApiContainer extends Component {
  state = {
    popupProps: {
      show: false
    }
  };

  render() {
    let {props, popupProps} = this.state;

    return (
      <Popup {...popupProps}>
        <DatePicker {...props} />
      </Popup>
    );
  }

  show(props, popupProps) {
    props = this._decorateProps(props);

    let nextState = {
      props: {...this.state.props, ...props},
      popupProps: {...this.state.popupProps, ...popupProps, show: true}
    };

    this.setState(nextState);
  }

  hide() {
    let nextState = {
      ...this.state,
      popupProps: {...this.state.popupProps, show: false}
    };

    this.setState(nextState);
  }

  _decorateProps(props) {
    let onCancel = props.onCancel;
    let onConfirm = props.onConfirm;

    props.onCancel = () => {
      onCancel && onCancel();
      this.hide();
    };

    props.onConfirm = (date) => {
      onConfirm && onConfirm(date);
      this.hide();
    };
  }
}



apiInstance = createInstance(ApiContainer);
