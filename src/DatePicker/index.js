import React, {
  Component,
  PropTypes
} from 'react';
import {classNames} from '../utils';
import Select from '../Select';
import Popup from '../Popup';
import './style';


/**
 *
 * title
 *
 * yearOptions
 * monthOptions
 * dateOptions
 *
 * selectedYearIndex
 * selectedMonthIndex
 * selectedDateIndex
 *
 * onChange
 * onConfirm
 * onCancel
 */
export default function DatePicker(props) {
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
          onChange={(selectedYearIndex) => {
            onChange(selectedYearIndex, selectedMonthIndex, selectedDateIndex);
          }} />
        <Select
          options={monthOptions}
          selectedIndex={selectedMonthIndex}
          onChange={(selectedMonthIndex) => {
            onChange(selectedYearIndex, selectedMonthIndex, selectedDateIndex);
          }} />
        <Select
          options={dateOptions}
          selectedIndex={selectedDateIndex}
          onChange={(selectedDateIndex) => {
            onChange(selectedYearIndex, selectedMonthIndex, selectedDateIndex);
          }} />
      </div>
    </div>
  );
}
