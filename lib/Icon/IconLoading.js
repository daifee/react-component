'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconLoading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var count = 12;
var opacityUnit = 1 / (count + 13);

function IconLoading(props) {
  var className = props.className;
  var scale = props.scale;

  var others = _objectWithoutProperties(props, ['className', 'scale']);

  var classes = (0, _utils.classNames)('icon-loading', { _user: className });
  var leafs = [];
  var cl = void 0,
      rotate = void 0,
      style = void 0;

  for (var i = 0; i < count; i++) {
    cl = (0, _utils.classNames)('icon-loading-leaf', 'icon-loading-leaf-' + i);
    rotate = i * 30;
    style = {
      transform: 'rotate(' + rotate + 'deg)',
      opacity: 1 - opacityUnit * i
    };
    leafs.push(_react2.default.createElement('i', { key: i, className: cl, style: style }));
  }

  //
  style = {
    transform: 'scale(' + scale + ')'
  };

  //
  return _react2.default.createElement(
    'div',
    _extends({ className: classes, style: style }, others),
    leafs
  );
}

IconLoading.propTypes = {
  scale: _react.PropTypes.number,
  className: _react.PropTypes.string
};
IconLoading.defaultProps = {
  scale: 1
};