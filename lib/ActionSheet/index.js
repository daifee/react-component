'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style');

var _utils = require('../utils');

var _TransitionShow = require('../TransitionShow');

var _TransitionShow2 = _interopRequireDefault(_TransitionShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var apiInstance = void 0;

var id = 0;
function getId() {
  return id++;
}

/**
 * ActionSheet 组件
 * @param {object} props 传入组件的属性
 * @param {boolean} props.show 是否显示
 * @param {number} props.zIndex z-index 值
 * @param {number} props.duration 过渡持续时间。单位：ms
 * @param {string} props.timingFunction 动画类型
 * @param {object} props.style 传入自定义 style 值
 * @param {string} props.className 传入自定义 class
 * @param {array} props.buttons 定义本组件的按钮，数组值作为按钮名
 * @param {number} props.cancelButtonIndex 第几个是"取消"按钮，会附加一个 class
 * @param {number} props.destroyButtonIndex 第几个是“危险”按钮，会附加一个 class
 * @param {string} props.title 显示的组件title
 * @param {function} props.callback 点击按钮后调用的 callback，按钮索引作为参数
 * @param {function} props.onClick 组件被点击后被调用。
 * @param {function} props._hide 组件点击后被调用（请用 onClick 代替）
 * @description 除了上面说明的属性，还可以定义任何 React 组件有效的属性。
 */
function ActionSheet(props) {
  var show = props.show;
  var zIndex = props.zIndex;
  var duration = props.duration;
  var timingFunction = props.timingFunction;
  var style = props.style;
  var className = props.className;
  var buttons = props.buttons;
  var cancelButtonIndex = props.cancelButtonIndex;
  var destroyButtonIndex = props.destroyButtonIndex;
  var title = props.title;
  var callback = props.callback;
  var _onClick = props.onClick;
  var _hide = props._hide;

  var others = _objectWithoutProperties(props, ['show', 'zIndex', 'duration', 'timingFunction', 'style', 'className', 'buttons', 'cancelButtonIndex', 'destroyButtonIndex', 'title', 'callback', 'onClick', '_hide']);

  var classes = (0, _utils.classNames)('action-sheet', { _user: className });
  typeof cancelButtonIndex === 'undefined' && (cancelButtonIndex = buttons.length - 1);
  style = _extends({}, style, {
    zIndex: zIndex,
    transitionDuration: duration + 'ms',
    transitionTimingFunction: timingFunction
  });

  return _react2.default.createElement(
    _TransitionShow2.default,
    {
      show: show,
      transitionName: (0, _utils.classNames)('action-sheet'),
      duration: duration },
    _react2.default.createElement(
      'div',
      _extends({
        className: classes,
        style: style
      }, others, {
        onClick: function onClick(e) {
          _hide && _hide();
          _onClick && _onClick(e);
        } }),
      _react2.default.createElement(
        'div',
        { className: (0, _utils.classNames)('action-sheet-main'), style: style },
        title ? _react2.default.createElement(
          'header',
          null,
          title
        ) : null,
        _react2.default.createElement(
          'ol',
          null,
          buttons.map(function (action, index) {
            return _react2.default.createElement(Button, {
              key: getId(),
              name: action,
              index: index,
              cancel: cancelButtonIndex === index,
              destroy: destroyButtonIndex === index,
              callback: callback });
          })
        )
      )
    )
  );
}

exports.default = ActionSheet;
ActionSheet.propTypes = _extends({}, _TransitionShow2.default.sharePropTypes, {
  buttons: _react.PropTypes.array,
  cancelButtonIndex: _react.PropTypes.number,
  destroyButtonIndex: _react.PropTypes.number,
  title: _react.PropTypes.string,
  callback: _react.PropTypes.func,
  onClick: _react.PropTypes.func,
  _hide: _react.PropTypes.func
});

ActionSheet.defaultProps = _extends({}, _TransitionShow2.default.shareDefaultProps, {
  duration: 250,
  buttons: []
});

ActionSheet.getInstance = function (container) {
  return (0, _utils.createInstance)(ApiContainer, container);
};

ActionSheet.show = function () {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var callback = arguments[1];

  apiInstance.show(options, callback);
};

function Button(props) {
  var name = props.name;
  var index = props.index;
  var cancel = props.cancel;
  var destroy = props.destroy;
  var callback = props.callback;

  var classes = (0, _utils.classNames)('action-sheet-item', {
    'action-sheet-item-cancel': cancel,
    'action-sheet-item-destroy': destroy
  });

  return _react2.default.createElement(
    'li',
    { className: classes, onClick: function onClick() {
        return callback(index);
      } },
    _react2.default.createElement(
      'button',
      null,
      name
    )
  );
}

Button.propTypes = {
  name: _react.PropTypes.string,
  index: _react.PropTypes.number,
  cancel: _react.PropTypes.bool,
  destroy: _react.PropTypes.bool,
  callback: _react.PropTypes.func
};

Button.defaultProps = {
  callback: function callback() {}
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
      return _react2.default.createElement(ActionSheet, _extends({}, this.state, { _hide: this.hide }));
    }
  }, {
    key: 'show',
    value: function show() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var callback = arguments[1];

      var nextState = _extends({}, options, {
        callback: callback,
        show: true
      });

      this.setState(nextState);
    }
  }]);

  return ApiContainer;
}(_react.Component);

apiInstance = (0, _utils.createInstance)(ApiContainer);