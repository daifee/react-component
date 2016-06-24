import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import TabBarItem from './TabBarItem';

/**
 * TabBar UI
 * @param {object} props see TabBar.propTypes
 */
export default function TabBar(props) {
  let {
    barColor,
    lineColor,
    color,
    selectedColor,
    translucent,
    children,
    className,
    ...others
  } = props;
  className = classNames('tab-bar', {
    '_user': className,
    'tab-bar-translucent': translucent
  });
  let barStyle = {
    backgroundColor: barColor
  };
  let lineStyle = {
    backgroundColor: lineColor
  };

  return (
    <div className={className} {...others}>
      <div className={classNames('tab-bar-body')}>
        {children}
      </div>
      <footer style={barStyle}>
        <div style={lineStyle} />
        <ul>{children.map((child, index) => {
          let props = {...child.props};

          return (
            <Button
              key={index}
              color={color}
              selectedColor={selectedColor}
              {...props} />
          );
        })}</ul>
      </footer>
    </div>
  );
}

/**
 * props
 * @type {Object}
 * barColor: 导航条颜色
 * lineColor: 线条颜色
 * color: tab 内容颜色
 * translucent: 是否半透明
 */
TabBar.propTypes = {
  barColor: PropTypes.string,
  lineColor: PropTypes.string,
  color: PropTypes.string,
  selectedColor: PropTypes.string,
  translucent: PropTypes.bool
};

TabBar.defaultProps = {
  barColor: '#f7f7fa',
  lineColor: '#979797',
  color: '#888',
  selectedColor: '#09bb07',
  translucent: false
};

TabBar.Item = TabBarItem;


function Button(props) {
  let {
    // from TabBar
    color, selectedColor,
    // from TabBarItem
    selected, icon, selectedIcon, title, badge, onClick, className, ...others
  } = props;
  className = classNames('tab-bar-item', {
    '_user': className,
    'tab-bar-item-selected': selected
  });
  let iconClass = (selected && selectedIcon) ? selectedIcon : icon;
  let style = {
    color: (selected ? selectedColor : color)
  };

  return (
    <li className={className} onClick={onClick} {...others}>
      <div className={classNames('tab-bar-item-label')}>
        <i className={iconClass} style={style} />
        {typeof badge !== 'undefined' ? (<span>{badge}</span>) : null}
      </div>
      <div className={classNames('tab-bar-item-title')} style={style}>
        {title}
      </div>
    </li>
  );
}

Button.propTypes = {
  // from TabBar
  color: TabBar.propTypes.color,
  selectedColor: TabBar.propTypes.selectedColor,
  // from TabBarItem 不包含 children
  ...TabBarItem.propTypes
};
