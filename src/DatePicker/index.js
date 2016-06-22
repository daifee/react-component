import React, {
  Component,
  PropTypes
} from 'react';
import {classNames, createInstance} from '../utils';
import Select from '../Select';
import Popup from '../Popup';
import './style';

let apiInstance;

/**
 * DatePicker 组件(stateless component)
 * @param {object} props 传入组件的属性
 * @property {string} props.title 标题
 * @property {array} props.yearOptions “年”选项，对应 `Select` 组件的 `options` 属性
 * @property {number} props.selectedYearIndex 选中的“年”对应的索引，对应 `Select` 组
 * 件的 `selectedIndex` 属性
 * @property {array} props.monthOptions “月”选项，对应 `Select` 组件的 `options` 属性
 * @property {number} props.selectedMonthIndex 选中的“年”对应的索引，对应 `Select` 组
 * 件的 `selectedIndex` 属性
 * @property {array} props.dateOptions “日”选项，对应 `Select` 组件的 `options` 属性
 * @property {number} props.selectedDateIndex 选中的“年”对应的索引，对应 `Select` 组
 * 件的 `selectedIndex` 属性
 * @property {function} props.onChange 选项发生变化调用
 * @property {function} props.onConfirm 用户点击“确认”按钮
 * @property {function} props.onCancel 用户点击“取消”按钮
 * @property {string} props.className 自定义样式
 */
export default class DatePicker extends Component {
  static propTypes = {
    title: PropTypes.string,
    yearOptions: PropTypes.array.isRequired,
    selectedYearIndex: PropTypes.number,
    monthOptions: PropTypes.array.isRequired,
    selectedMonthIndex: PropTypes.number,
    dateOptions: PropTypes.array.isRequired,
    selectedDateIndex: PropTypes.number,
    onChange: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    className: PropTypes.string
  };

  static getInstance = (container) => {
    return createInstance(ApiContainer, container);
  };

  static show = (options) => {
    apiInstance.show(options);
  };

  render() {
    let {
      title,
      yearOptions,
      selectedYearIndex,
      monthOptions,
      selectedMonthIndex,
      dateOptions,
      selectedDateIndex,
      onConfirm,
      onCancel,
      className,
      ...others
    } = this.props;
    let classes = classNames('date-picker', {_user: className});

    return (
      <div className={classes} {...others}>
        <div className={classNames('date-picker-header')}>
          <button onClick={onCancel}>取消</button>
          <em>{title}</em>
          <button onClick={onConfirm}>确定</button>
        </div>
        <div className={classNames('date-picker-body')}>
          <Select
            key='year'
            options={yearOptions}
            selectedMonthIndex={selectedMonthIndex}
            selectedIndex={selectedYearIndex}
            onChange={this.changeYear} />
          <Select
            key='month'
            options={monthOptions}
            selectedIndex={selectedMonthIndex}
            onChange={this.changeMonth} />
          <Select
            key='date'
            options={dateOptions}
            selectedIndex={selectedDateIndex}
            onChange={this.changeDate} />
        </div>
      </div>
    );
  }

  changeDate = (selectedDateIndex) => {
    let {selectedYearIndex, selectedMonthIndex, onChange} = this.props;
    onChange(selectedYearIndex, selectedMonthIndex, selectedDateIndex);
  };

  changeMonth = (selectedMonthIndex) => {
    let {selectedYearIndex, selectedDateIndex, onChange} = this.props;
    onChange(selectedYearIndex, selectedMonthIndex, selectedDateIndex);
  };

  changeYear = (selectedYearIndex) => {
    let {selectedMonthIndex, selectedDateIndex, onChange} = this.props;
    onChange(selectedYearIndex, selectedMonthIndex, selectedDateIndex);
  };
}


// 当前时间
const now = new Date();

class ApiContainer extends Component {
  state = {
    show: false,
    minDate: now,
    maxDate: now,
    selectedDate: now
  };

  // 方便 _onChange()
  yearOptions = [];
  monthOptions = [];
  dateOptions = [];

  _onChange = (yearIndex, monthIndex, dateIndex) => {
    let {selectedDate, onChange} = this.state;
    let year = this.yearOptions[yearIndex].value;
    let month = this.monthOptions[monthIndex].value;
    let date = this.dateOptions[dateIndex].value;

    // change
    selectedDate = new Date();
    selectedDate.setFullYear(year);
    selectedDate.setMonth(month - 1);
    selectedDate.setDate(date);

    let newState = {...this.state, selectedDate};

    this.setState(newState);

    onChange && (onChange(selectedDate));
  };

  _onConfirm = () => {
    let {selectedDate, onConfirm} = this.state;

    this.hide();

    onConfirm && onConfirm(selectedDate);
  };

  _onCancel = () => {
    let {onCancel} = this.state;

    this.hide();

    onCancel && onCancel();
  };

  render() {
    let {title, show, className, ...others} = this.state;
    let yearOptions = this.yearOptions = this.getYearOptions();
    let selectedYearIndex = this.getSelectedYearIndex(yearOptions);
    let monthOptions = this.monthOptions = this.getMonthOptions();
    let selectedMonthIndex = this.getSelectedMonthIndex(monthOptions);
    let dateOptions = this.dateOptions = this.getDateOptions();
    let selectedDateIndex = this.getSelectedDateIndex(dateOptions);

    delete others.minDate;
    delete others.maxDate;
    delete others.selectedDate;
    delete others.onChange;
    delete others.onConfirm;
    delete others.onCancel;

    return (
      <Popup
        show={show}
        className={className}
        direction='bottom'
        duration={6050}
        {...others}>
        <DatePicker
          title={title}
          yearOptions={yearOptions}
          selectedYearIndex={selectedYearIndex}
          monthOptions={monthOptions}
          selectedMonthIndex={selectedMonthIndex}
          dateOptions={dateOptions}
          selectedDateIndex={selectedDateIndex}
          onChange={this._onChange}
          onConfirm={this._onConfirm}
          onCancel={this._onCancel} />
      </Popup>
    );
  }

  show(options) {
    let newState = {...this.state, ...options, show: true};
    let time = newState.selectedDate.getTime();

    if (time < newState.minDate.getTime()) {
      newState.selectedDate = newState.minDate;
    }

    if (time > newState.maxDate.getTime()) {
      newState.selectedDate = newState.maxDate;
    }

    this.setState(newState);
  }

  hide() {
    let newState = {...this.state, show: false};
    this.setState(newState);
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


apiInstance = createInstance(ApiContainer);

// 这是一个扯淡的 wenti
/*
function DatePickerless(props) {
  let {
    title,
    yearOptions,
    selectedYearIndex,
    monthOptions,
    selectedMonthIndex,
    dateOptions,
    selectedDateIndex,
    onChange,
    onConfirm,
    onCancel,
    className,
    ...others
  } = props;
  let classes = classNames('date-picker', {_user: className});

  // 1 selectedMonthIndex 初始值为 5
  console.warn(selectedMonthIndex, selectedDateIndex);

  return (
    <div className={classes}>
      <div className={classNames('date-picker-header')}>
        <button onClick={onCancel}>取消</button>
        <em>{title}</em>
        <button onClick={onConfirm}>确定</button>
      </div>
      <div className={classNames('date-picker-body')}>
        <Select
          options={yearOptions}
          selectedIndex={selectedYearIndex}
          onChange={function (selectedYearIndex) {
            onChange(selectedYearIndex, selectedMonthIndex, selectedDateIndex);
          }} />
        <Select
          options={monthOptions}
          selectedIndex={selectedMonthIndex}
          onChange={function (selectedMonthIndex) {
            // 2. 将 selectedMonthIndex 设置为 11，并更新本组件
            onChange(selectedYearIndex, selectedMonthIndex, selectedDateIndex);
          }} />
        <Select
          options={dateOptions}
          selectedIndex={selectedDateIndex}
          onChange={function (selectedDateIndex) {
            // 3. selectedMonthIndex 已经由 5 -> 11，但执行 onChange()
            // 本作用域内的 selectedMonthIndex 还是 5。
            console.warn(selectedMonthIndex, selectedDateIndex);
            onChange(selectedYearIndex, selectedMonthIndex, selectedDateIndex);
          }} />
      </div>
    </div>
  );
}
*/
