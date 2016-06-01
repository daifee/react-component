'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Toast;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

var _Icon = require('../Icon');

require('./style');

var _TransitionShow = require('../TransitionShow');

var _TransitionShow2 = _interopRequireDefault(_TransitionShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var apiInstance = null;
var timer = null;

function Toast(props) {
  var show = props.show;
  var zIndex = props.zIndex;
  var duration = props.duration;
  var timingFunction = props.timingFunction;
  var style = props.style;
  var className = props.className;
  var icon = props.icon;
  var content = props.content;

  var others = _objectWithoutProperties(props, ['show', 'zIndex', 'duration', 'timingFunction', 'style', 'className', 'icon', 'content']);

  var classes = (0, _utils.classNames)('toast', { _user: className });
  style = _extends({}, style, {
    zIndex: zIndex,
    transitionDuration: duration + 'ms',
    transitionTimingFunction: timingFunction
  });

  return _react2.default.createElement(
    _TransitionShow2.default,
    {
      show: show,
      transitionName: (0, _utils.classNames)('toast'),
      duration: duration },
    _react2.default.createElement(
      'div',
      _extends({ className: classes, style: style }, others),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          matchIcon(icon),
          _react2.default.createElement(
            'p',
            null,
            content
          )
        )
      )
    )
  );
}

Toast.propTypes = _extends({}, _TransitionShow2.default.sharePropTypes, {
  icon: _react.PropTypes.string,
  content: _react.PropTypes.string
});

Toast.defaultProps = _TransitionShow2.default.shareDefaultProps;

Toast.getInstance = function (container) {
  return (0, _utils.createInstance)(ApiContainer, container);
};

Toast.show = function (icon, content, options, timeout) {
  apiInstance.show(icon, content, options, timeout);
};

Toast.hide = function () {
  apiInstance.hide();
};

Toast.showLoading = function (content, options) {
  apiInstance.showLoading(content, options);
};

Toast.hideLoading = function () {
  apiInstance.hideLoading();
};

function matchIcon(name) {
  switch (name) {
    case 'loading':
      return _react2.default.createElement(_Icon.IconLoading, null);
    case 'attention':
      return _react2.default.createElement(_Icon.IconAttention, null);
    default:
      return null;
  }
}

/**
 * 提供接口
 */

var ApiContainer = function (_Component) {
  _inherits(ApiContainer, _Component);

  function ApiContainer() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ApiContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ApiContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ApiContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(Toast, this.state);
    }
  }, {
    key: 'show',
    value: function show(icon, content) {
      var _this2 = this;

      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
      var timeout = arguments.length <= 3 || arguments[3] === undefined ? 2200 : arguments[3];

      var nexState = _extends({}, this.state, options, {
        icon: icon,
        content: content,
        show: true
      });
      this.setState(nexState);

      // 如果 icon != loading 定时隐藏
      clearTimeout(timer);
      if (icon === 'loading') return;
      timer = setTimeout(function () {
        _this2.hide();
      }, timeout);
    }
  }, {
    key: 'hide',
    value: function hide() {
      var nexState = _extends({}, this.state, { show: false });
      this.setState(nexState);
    }
  }, {
    key: 'showLoading',
    value: function showLoading() {
      var content = arguments.length <= 0 || arguments[0] === undefined ? '加载中…' : arguments[0];
      var options = arguments[1];

      this.show('loading', content, options);
    }
  }, {
    key: 'hideLoading',
    value: function hideLoading() {
      this.hide();
    }
  }]);

  return ApiContainer;
}(_react.Component);

apiInstance = (0, _utils.createInstance)(ApiContainer);