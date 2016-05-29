import React, {
  Component,
  PropTypes
} from 'react';
import classNames from '../classNames';
import './style';


export default class TabBar extends Component {
  static propTypes = {
    barColor: PropTypes.string,  // 导航条颜色
    lineColor: PropTypes.string,  // 线条颜色
    color: PropTypes.string,  // tab 内容验证
    selectedColor: PropTypes.string,  // tab 内容选中状态颜色
    translucent: PropTypes.bool  // 是否半透明
  };

  static defaultProps = {
    barColor: '#f7f7fa',
    lineColor: '#979797',
    color: '#888',
    selectedColor: '#09bb07',
    translucent: false
  };

  render() {
    const {
      barColor,
      lineColor,
      children,
      translucent,
      className,
      ...others
    } = this.props;
    let classes = classNames('tab-bar', {
      '_user': className,
      'tab-bar-translucent': translucent
    });
    let barStyle = {
      backgroundColor: barColor
    };
    let lineStyle = {
      backgroundColor: lineStyle
    };

    return (
      <div className={classes}>
        <div className={classNames('tab-bar-body')}>
          {children}
        </div>
        <footer style={barStyle}>
          <div style={lineStyle} />
          <ul>{children.map((child, index) => {
            const {children, ...props} = child.props;
            return (
              <Tab
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
}

class TabBarItem extends Component {
  static propTypes = {
    selected: PropTypes.bool,
    icon: PropTypes.string,
    selectedIcon: PropTypes.string,
    title: PropTypes.string,
    badge: PropTypes.oneTypeOf([
      PropTypes.string,
      PropTypes.number
    ]),
    onClick: PropTypes.func,
    className: PropTypes.string
  };

  render() {
    const {
      selected,
      children
    } = this.props;
    let classes = classNames('tab-bar-body-item', {
      'tab-bar-body-item-selected': selected
    });

    return (
      <div className={classes}>{children}</div>
    );
  }
}



class Tab extends Component {
  static propTypes = {
    ...TabBarItem.propTypes,
    color: TabBar.propTypes.color,
    selectedColor: TabBar.propTypes.selectedColor
  };

  render() {
    const {
      selected,
      icon,
      selectedIcon,
      title,
      badge,
      color,
      selectedColor,
      onClick,
      className
    } = this.props;
    let classes = classNames('tab-bar-item', {
      '_user': className,
      'tab-bar-item-selected': selected
    });
    let iconClass = (selected && selectedIcon) ? selectedIcon : icon;
    let style = {
      color: (selected ? selectedColor : color)
    };

    return (
      <li className={classes} onClick={onClick}>
        <div className={classNames('tab-bar-item-label')}>
          <i className={iconClass} style={style} />
          {badge ? (<span>{badge}</span>) : null}
        </div>
        <div className={classNames('tab-bar-item-title')} style={style}>
          {title}
        </div>
      </li>
    );
  }
}
