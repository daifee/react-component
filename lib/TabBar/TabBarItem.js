'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TabBarItem;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TabBarItem(props) {
  var selected = props.selected;
  var children = props.children;

  var classes = (0, _utils.classNames)('tab-bar-body-item', {
    'tab-bar-body-item-selected': selected
  });

  return _react2.default.createElement(
    'div',
    { className: classes },
    children
  );
}

TabBarItem.propTypes = {
  children: _react.PropTypes.node,
  selected: _react.PropTypes.bool,
  icon: _react.PropTypes.string,
  selectedIcon: _react.PropTypes.string,
  title: _react.PropTypes.string,
  badge: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  onClick: _react.PropTypes.func,
  className: _react.PropTypes.string
};