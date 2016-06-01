'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Button Component
                                                                                                                                                                                                                              * @module src/Button
                                                                                                                                                                                                                              */

/**
 * 输出
 * @param {Object} props 传入的 props
 * @param {String} props.type 按钮类型
 */
function Button(props) {
  var _classNames;

  var children = props.children;
  var className = props.className;
  var type = props.type;
  var disabled = props.disabled;
  var _onTouchStart = props.onTouchStart;

  var others = _objectWithoutProperties(props, ['children', 'className', 'type', 'disabled', 'onTouchStart']);

  var href = others.href;

  var classes = (0, _utils.classNames)('btn', (_classNames = {
    '_user': className
  }, _defineProperty(_classNames, 'btn-' + type, true), _defineProperty(_classNames, 'btn-disabled', disabled), _classNames));
  var Component = href ? 'a' : 'button';

  return _react2.default.createElement(
    Component,
    _extends({
      className: classes
    }, others, {
      onTouchStart: function onTouchStart(e) {
        disabled && e.preventDefault();
        _onTouchStart && _onTouchStart(e);
      } }),
    children
  );
}

exports.default = Button;
Button.propTypes = {
  type: _react.PropTypes.oneOf(['default', 'primary', 'warn']),
  disabled: _react.PropTypes.bool,
  href: _react.PropTypes.string,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  onTouchStart: _react.PropTypes.func
};

Button.defaultProps = {
  type: 'default'
};