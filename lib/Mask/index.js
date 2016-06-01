'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Mask;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

require('./style');

var _TransitionShow = require('../TransitionShow');

var _TransitionShow2 = _interopRequireDefault(_TransitionShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Mask(props) {
  var show = props.show;
  var zIndex = props.zIndex;
  var duration = props.duration;
  var timingFunction = props.timingFunction;
  var style = props.style;
  var className = props.className;
  var transparent = props.transparent;

  var others = _objectWithoutProperties(props, ['show', 'zIndex', 'duration', 'timingFunction', 'style', 'className', 'transparent']);

  var classes = (0, _utils.classNames)('mask', {
    _user: className,
    'mask-transparent': transparent
  });
  style = _extends({}, style, {
    zIndex: zIndex,
    transitionDuration: duration + 'ms',
    transitionTimingFunction: timingFunction
  });

  return _react2.default.createElement(
    _TransitionShow2.default,
    {
      show: show,
      transitionName: (0, _utils.classNames)('mask'),
      duration: duration },
    _react2.default.createElement('div', _extends({ className: classes }, others, { style: style }))
  );
}

Mask.propTypes = _extends({}, _TransitionShow2.default.sharePropTypes, {
  transparent: _react.PropTypes.bool
});

Mask.defaultProps = _TransitionShow2.default.shareDefaultProps;