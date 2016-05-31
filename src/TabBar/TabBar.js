import React, {
  PropTypes
} from 'react';
import {classNames} from '../utils';
import TabBarItem from './TabBarItem';

export default function TabBar(props) {
  const {
    barColor,
    lineColor,
    color,
    selectedColor,
    translucent,
    children,
    className,
    ...others
  } = props;
  let classes = classNames('tab-bar', {
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
    <div className={classes} {...others}>
      <div className={classNames('tab-bar-body')}>
        {children}
      </div>
      <footer style={barStyle}>
        <div style={lineStyle} />
        <ul>{children.map((child, index) => {
          let props = {...child.props};
          delete props.children;

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

TabBar.propTypes = {
  barColor: PropTypes.string,  // 导航条颜色
  lineColor: PropTypes.string,  // 线条颜色
  color: PropTypes.string,  // tab 内容验证
  selectedColor: PropTypes.string,  // tab 内容选中状态颜色
  translucent: PropTypes.bool  // 是否半透明
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
  const {
    // from TabBar
    color, selectedColor,
    // from TabBarItem
    selected, icon, selectedIcon, title, badge, onClick, className, ...others
  } = props;
  let classes = classNames('tab-bar-item', {
    '_user': className,
    'tab-bar-item-selected': selected
  });
  let iconClass = (selected && selectedIcon) ? selectedIcon : icon;
  let style = {
    color: (selected ? selectedColor : color)
  };

  return (
    <li className={classes} onClick={onClick} {...others}>
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
