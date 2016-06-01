'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = TabBar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

var _TabBarItem = require('./TabBarItem');

var _TabBarItem2 = _interopRequireDefault(_TabBarItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function TabBar(props) {
  var barColor = props.barColor;
  var lineColor = props.lineColor;
  var color = props.color;
  var selectedColor = props.selectedColor;
  var translucent = props.translucent;
  var children = props.children;
  var className = props.className;

  var others = _objectWithoutProperties(props, ['barColor', 'lineColor', 'color', 'selectedColor', 'translucent', 'children', 'className']);

  var classes = (0, _utils.classNames)('tab-bar', {
    '_user': className,
    'tab-bar-translucent': translucent
  });
  var barStyle = {
    backgroundColor: barColor
  };
  var lineStyle = {
    backgroundColor: lineColor
  };

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, others),
    _react2.default.createElement(
      'div',
      { className: (0, _utils.classNames)('tab-bar-body') },
      children
    ),
    _react2.default.createElement(
      'footer',
      { style: barStyle },
      _react2.default.createElement('div', { style: lineStyle }),
      _react2.default.createElement(
        'ul',
        null,
        children.map(function (child, index) {
          var props = _extends({}, child.props);
          delete props.children;

          return _react2.default.createElement(Button, _extends({
            key: index,
            color: color,
            selectedColor: selectedColor
          }, props));
        })
      )
    )
  );
}

TabBar.propTypes = {
  barColor: _react.PropTypes.string, // 导航条颜色
  lineColor: _react.PropTypes.string, // 线条颜色
  color: _react.PropTypes.string, // tab 内容验证
  selectedColor: _react.PropTypes.string, // tab 内容选中状态颜色
  translucent: _react.PropTypes.bool // 是否半透明
};

TabBar.defaultProps = {
  barColor: '#f7f7fa',
  lineColor: '#979797',
  color: '#888',
  selectedColor: '#09bb07',
  translucent: false
};

TabBar.Item = _TabBarItem2.default;

function Button(props) {
  var
  // from TabBar
  color = props.color;
  var selectedColor = props.selectedColor;
  var
  // from TabBarItem
  selected = props.selected;
  var icon = props.icon;
  var selectedIcon = props.selectedIcon;
  var title = props.title;
  var badge = props.badge;
  var onClick = props.onClick;
  var className = props.className;

  var others = _objectWithoutProperties(props, ['color', 'selectedColor', 'selected', 'icon', 'selectedIcon', 'title', 'badge', 'onClick', 'className']);

  var classes = (0, _utils.classNames)('tab-bar-item', {
    '_user': className,
    'tab-bar-item-selected': selected
  });
  var iconClass = selected && selectedIcon ? selectedIcon : icon;
  var style = {
    color: selected ? selectedColor : color
  };

  return _react2.default.createElement(
    'li',
    _extends({ className: classes, onClick: onClick }, others),
    _react2.default.createElement(
      'div',
      { className: (0, _utils.classNames)('tab-bar-item-label') },
      _react2.default.createElement('i', { className: iconClass, style: style }),
      typeof badge !== 'undefined' ? _react2.default.createElement(
        'span',
        null,
        badge
      ) : null
    ),
    _react2.default.createElement(
      'div',
      { className: (0, _utils.classNames)('tab-bar-item-title'), style: style },
      title
    )
  );
}

Button.propTypes = _extends({
  // from TabBar
  color: TabBar.propTypes.color,
  selectedColor: TabBar.propTypes.selectedColor
}, _TabBarItem2.default.propTypes);