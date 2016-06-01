'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CellsTitle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function CellsTitle(props) {
  var _props = this.props;
  var className = _props.className;
  var children = _props.children;

  var others = _objectWithoutProperties(_props, ['className', 'children']);

  var classes = (0, _utils.classNames)('cells-title', { _user: className });

  return _react2.default.createElement(
    'div',
    _extends({ className: classes }, others),
    children
  );
};

CellsTitle.propTypes = {
  children: _react.PropTypes.node.isRequired,
  className: _react.PropTypes.string
};