import React, {
  Component,
  PropTypes
} from 'react';
import {classNames} from '../utils';
import Select from '../Select';
import Popup from '../Popup';
import './style';

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

  render() {
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
    } = this.props;
    let classes = classNames('date-picker', {_user: className});

    return (
      <div className={classes}>
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
