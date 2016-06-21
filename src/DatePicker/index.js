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
 * selectedYear
 * selectedMonth
 * selectedDate
 *
 * onChange
 * onConfirm
 * onCancel
 */
export default function DatePicker(props) {
  let {
    title,
    yearOptions,
    selectedYear,
    monthOptions,
    selectedMonth,
    dateOptions,
    selectedDate,
    onChange,
    onConfirm,
    onCancel,
    className,
    ...others
  } = props;
  let classes = classNames('date-picker', {_user: className});
  let selectedYearIndex = 0;
  let selectedMonthIndex = 0;
  let selectedDateIndex = 0;

  yearOptions.map(() => {

  });


  return (
    <Popup className={classes}>
      <div>
        <button>取消</button>
        <em>{title}</em>
        <button>确定</button>
      </div>
      <div>
        <Select
          options={yearOptions}
          selectedIndex={0}
          onChange={onChange} />
        <Select
          options={monthOptions}
          selectedIndex={0}
          onChange={onChange} />
        <Select
          options={dateOptions}
          selectedIndex={0}
          onChange={onChange} />
      </div>
    </Popup>
  );
}
