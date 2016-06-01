'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Notification;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _utils = require('../utils');

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var apiInstance = null;
// Notification 显示和隐藏动画持续时间 毫秒
// container 和 item 都需要设置 duration，而且必须相同
// 所以不能为 item 自定义 duration
var duration = 150;
var id = 0;
function getId() {
  return id++;
}

function Notification(props) {
  var type = props.type;
  var content = props.content;
  var timingFunction = props.timingFunction;
  var className = props.className;
  var style = props.style;

  var others = _objectWithoutProperties(props, ['type', 'content', 'timingFunction', 'className', 'style']);

  var classes = (0, _utils.classNames)('notification', 'notification-' + type, {
    _user: className
  });
  style = _extends({}, style, {
    transitionDuration: duration + 'ms',
    transitionTimingFunction: timingFunction
  });

  return _react2.default.createElement(
    'li',
    _extends({ className: classes, style: style }, others),
    _react2.default.createElement(
      'span',
      null,
      content
    )
  );
}

Notification.propTypes = {
  type: _react.PropTypes.oneOf(['default', 'info', 'success', 'warning', 'danger']),
  content: _react.PropTypes.string.isRequired,
  timingFunction: _react.PropTypes.string,
  className: _react.PropTypes.string,
  style: _react.PropTypes.object
};

Notification.defaultProps = {
  type: 'default',
  timingFunction: 'ease-in'
};

Notification.show = function (content, type, options) {
  apiInstance.show(content, type, options);
};

Notification.getInstance = function (container) {
  return (0, _utils.createInstance)(Notifications, container);
};

var Notifications = function (_Component) {
  _inherits(Notifications, _Component);

  function Notifications() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Notifications);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Notifications)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      zIndex: 9999,
      notifications: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Notifications, [{
    key: 'render',
    value: function render() {
      var _state = this.state;
      var zIndex = _state.zIndex;
      var notifications = _state.notifications;

      var classes = (0, _utils.classNames)('notification-container');
      var style = {
        zIndex: zIndex
      };

      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
          component: 'ul',
          transitionName: (0, _utils.classNames)('notification'),
          transitionEnterTimeout: duration,
          transitionLeaveTimeout: duration,
          className: classes,
          style: style },
        notifications.map(function (item) {
          var id = item.id;

          var others = _objectWithoutProperties(item, ['id']);

          return _react2.default.createElement(Notification, _extends({ key: id }, others));
        })
      );
    }

    // zIndex, timeout

  }, {
    key: 'show',
    value: function show(content, type) {
      var _this2 = this;

      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      var _state$notifications = _toArray(this.state.notifications);

      var notifications = _state$notifications;
      // others 赋值到 notification

      var timeout = options.timeout;
      var zIndex = options.zIndex;

      var others = _objectWithoutProperties(options, ['timeout', 'zIndex']);

      var id = getId();
      var notification = _extends({ id: id, type: type, content: content }, others);

      notifications.unshift(notification);

      var nextState = { zIndex: zIndex, notifications: notifications };

      this.setState(nextState);

      setTimeout(function () {
        _this2.hide(id);
      }, timeout || 2000);
    }
  }, {
    key: 'hide',
    value: function hide(id) {
      var notifications = this.state.notifications.filter(function (item) {
        return id !== item.id;
      });
      var nextState = _extends({}, this.state, { notifications: notifications });

      this.setState(nextState);
    }
  }]);

  return Notifications;
}(_react.Component);

apiInstance = (0, _utils.createInstance)(Notifications);