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
