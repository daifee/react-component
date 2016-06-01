'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Cell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Cell(props) {
  var children = props.children;
  var className = props.className;
  var component = props.component;
  var access = props.access;
  var arrow = props.arrow;

  var others = _objectWithoutProperties(props, ['children', 'className', 'component', 'access', 'arrow']);

  var href = others.href;

  var Component = href ? 'a' : component ? component : 'div';
  var classes = (0, _utils.classNames)('cell', {
    'cell-access': access,
    'cell-arrow': arrow,
    _user: className
  });

  return _react2.default.createElement(
    Component,
    _extends({}, others, { className: classes }),
    children
  );
}

Cell.propTypes = {
  children: _react.PropTypes.node.isRequired,
  className: _react.PropTypes.string,
  component: _react.PropTypes.string,
  href: _react.PropTypes.string,
  access: _react.PropTypes.bool,
  arrow: _react.PropTypes.bool
};