'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Dialog;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

var _TransitionShow = require('../TransitionShow');

var _TransitionShow2 = _interopRequireDefault(_TransitionShow);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var apiInstance = null;

function Dialog(props) {
  var show = props.show;
  var zIndex = props.zIndex;
  var duration = props.duration;
  var timingFunction = props.timingFunction;
  var style = props.style;
  var className = props.className;
  var title = props.title;
  var content = props.content;
  var buttons = props.buttons;
  var _hide = props._hide;

  var others = _objectWithoutProperties(props, ['show', 'zIndex', 'duration', 'timingFunction', 'style', 'className', 'title', 'content', 'buttons', '_hide']);

  var classes = (0, _utils.classNames)('dialog', { _user: className });
  style = _extends({}, style, {
    zIndex: zIndex,
    transitionDuration: duration + 'ms',
    transitionTimingFunction: timingFunction
  });

  return _react2.default.createElement(
    _TransitionShow2.default,
    {
      show: show,
      transitionName: (0, _utils.classNames)('dialog'),
      duration: duration },
    _react2.default.createElement(
      'div',
      _extends({ className: classes, style: style }, others),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'strong',
            null,
            title
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          content
        ),
        _react2.default.createElement(
          'footer',
          null,
          buttons.map(function (button, index) {
            return _react2.default.createElement(Button, _extends({}, button, { key: index, _hide: _hide }));
          })
        )
      )
    )
  );
}

Dialog.propTypes = _extends({}, _TransitionShow2.default.sharePropTypes, {
  title: _react.PropTypes.string,
  content: _react.PropTypes.string,
  buttons: _react.PropTypes.array, // [{text: '', onClik: () => {}}]
  _hide: _react.PropTypes.func
});

Dialog.defaultProps = _extends({}, _TransitionShow2.default.shareDefaultProps, {
  buttons: []
});

Dialog.getInstance = function (container) {
  return (0, _utils.createInstance)(ApiContainer, container);
};

Dialog.show = function (title, content, buttons, options) {
  apiInstance.show(title, content, buttons, options);
};

function Button(props) {
  var text = props.text;
  var _onClick = props.onClick;
  var _hide = props._hide;

  var others = _objectWithoutProperties(props, ['text', 'onClick', '_hide']);

  return _react2.default.createElement(
    'button',
    _extends({}, others, {
      onClick: function onClick(e) {
        _hide && _hide();
        _onClick && _onClick(e);
      } }),
    text
  );
}

Button.propTypes = {
  text: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  _hide: _react.PropTypes.func
};

var ApiContainer = function (_Component) {
  _inherits(ApiContainer, _Component);

  function ApiContainer() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ApiContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ApiContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _this.hide = function () {
      var nextState = _extends({}, _this.state, { show: false });
      _this.setState(nextState);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ApiContainer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(Dialog, _extends({}, this.state, { _hide: this.hide }));
    }
  }, {
    key: 'show',
    value: function show(title, content, buttons, options) {
      var nextState = _extends({}, options, {
        title: title,
        content: content,
        buttons: buttons,
        show: true
      });

      this.setState(nextState);
    }
  }]);

  return ApiContainer;
}(_react.Component);

apiInstance = (0, _utils.createInstance)(ApiContainer);