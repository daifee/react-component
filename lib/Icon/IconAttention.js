'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAttention;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function IconAttention(props) {
  var size = props.size;
  var className = props.className;

  var others = _objectWithoutProperties(props, ['size', 'className']);

  var classes = (0, _utils.classNames)('icon-attention', { '_user': className });
  var style = {
    height: size,
    width: size,
    fontSize: size
  };

  return _react2.default.createElement('i', _extends({ className: classes, style: style }, others));
}

IconAttention.propTypes = {
  size: _react.PropTypes.string,
  className: _react.PropTypes.string
};

IconAttention.defaultProps = {
  size: '40px'
};