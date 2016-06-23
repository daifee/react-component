import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';


export default function TabBarItem(props) {
  const {selected, children} = props;
  let className = classNames('tab-bar-body-item', {
    'tab-bar-body-item-selected': selected
  });

  return (
    <div className={className}>{children}</div>
  );
}

TabBarItem.propTypes = {
  children: PropTypes.node,
  selected: PropTypes.bool,
  icon: PropTypes.string,
  selectedIcon: PropTypes.string,
  title: PropTypes.string,
  badge: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string
};
