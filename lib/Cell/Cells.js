'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Cells;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Cells(props) {
  var children = props.children;
  var className = props.className;
  var access = props.access;
  var arrow = props.arrow;

  var others = _objectWithoutProperties(props, ['children', 'className', 'access', 'arrow']);

  var classes = (0, _utils.classNames)('cells', {
    'cells-access': access,
    'cells-arrow': arrow,
    _user: className
  });

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, others),
    children
  );
};

Cells.propTypes = {
  children: _react.PropTypes.node.isRequired,
  className: _react.PropTypes.string,
  access: _react.PropTypes.bool,
  arrow: _react.PropTypes.bool
};