(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-addons-css-transition-group", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["DaifeeReactComponent"] = factory(require("react"), require("react-addons-css-transition-group"), require("react-dom"));
	else
		root["DaifeeReactComponent"] = factory(root["React"], root["React"]["addons"]["CSSTransitionGroup"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_56__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fade = exports.Page = exports.DatePicker = exports.Select = exports.ListView = exports.ScrollView = exports.Checkbox = exports.Switch = exports.Popup = exports.TabBarItem = exports.TabBar = exports.ActionSheet = exports.Notification = exports.Dialog = exports.Toast = exports.Mask = exports.Button = exports.CellsTips = exports.CellsTitle = exports.Cells = exports.CellHeader = exports.CellFooter = exports.CellBody = exports.Cell = exports.IconCheck = exports.IconLoading = exports.IconAttention = undefined;
	
	var _Icon = __webpack_require__(7);
	
	Object.defineProperty(exports, 'IconAttention', {
	  enumerable: true,
	  get: function get() {
	    return _Icon.IconAttention;
	  }
	});
	Object.defineProperty(exports, 'IconLoading', {
	  enumerable: true,
	  get: function get() {
	    return _Icon.IconLoading;
	  }
	});
	Object.defineProperty(exports, 'IconCheck', {
	  enumerable: true,
	  get: function get() {
	    return _Icon.IconCheck;
	  }
	});
	
	var _Cell = __webpack_require__(22);
	
	Object.defineProperty(exports, 'Cell', {
	  enumerable: true,
	  get: function get() {
	    return _Cell.Cell;
	  }
	});
	Object.defineProperty(exports, 'CellBody', {
	  enumerable: true,
	  get: function get() {
	    return _Cell.CellBody;
	  }
	});
	Object.defineProperty(exports, 'CellFooter', {
	  enumerable: true,
	  get: function get() {
	    return _Cell.CellFooter;
	  }
	});
	Object.defineProperty(exports, 'CellHeader', {
	  enumerable: true,
	  get: function get() {
	    return _Cell.CellHeader;
	  }
	});
	Object.defineProperty(exports, 'Cells', {
	  enumerable: true,
	  get: function get() {
	    return _Cell.Cells;
	  }
	});
	Object.defineProperty(exports, 'CellsTitle', {
	  enumerable: true,
	  get: function get() {
	    return _Cell.CellsTitle;
	  }
	});
	Object.defineProperty(exports, 'CellsTips', {
	  enumerable: true,
	  get: function get() {
	    return _Cell.CellsTips;
	  }
	});
	
	var _TabBar = __webpack_require__(34);
	
	Object.defineProperty(exports, 'TabBar', {
	  enumerable: true,
	  get: function get() {
	    return _TabBar.TabBar;
	  }
	});
	Object.defineProperty(exports, 'TabBarItem', {
	  enumerable: true,
	  get: function get() {
	    return _TabBar.TabBarItem;
	  }
	});
	
	__webpack_require__(55);
	
	var _Button2 = __webpack_require__(14);
	
	var _Button3 = _interopRequireDefault(_Button2);
	
	var _Mask2 = __webpack_require__(8);
	
	var _Mask3 = _interopRequireDefault(_Mask2);
	
	var _Toast2 = __webpack_require__(35);
	
	var _Toast3 = _interopRequireDefault(_Toast2);
	
	var _Dialog2 = __webpack_require__(25);
	
	var _Dialog3 = _interopRequireDefault(_Dialog2);
	
	var _Notification2 = __webpack_require__(30);
	
	var _Notification3 = _interopRequireDefault(_Notification2);
	
	var _ActionSheet2 = __webpack_require__(13);
	
	var _ActionSheet3 = _interopRequireDefault(_ActionSheet2);
	
	var _Popup2 = __webpack_require__(3);
	
	var _Popup3 = _interopRequireDefault(_Popup2);
	
	var _Switch2 = __webpack_require__(32);
	
	var _Switch3 = _interopRequireDefault(_Switch2);
	
	var _Checkbox2 = __webpack_require__(23);
	
	var _Checkbox3 = _interopRequireDefault(_Checkbox2);
	
	var _ScrollView2 = __webpack_require__(9);
	
	var _ScrollView3 = _interopRequireDefault(_ScrollView2);
	
	var _ListView2 = __webpack_require__(29);
	
	var _ListView3 = _interopRequireDefault(_ListView2);
	
	var _Select2 = __webpack_require__(10);
	
	var _Select3 = _interopRequireDefault(_Select2);
	
	var _DatePicker2 = __webpack_require__(24);
	
	var _DatePicker3 = _interopRequireDefault(_DatePicker2);
	
	var _Page2 = __webpack_require__(31);
	
	var _Page3 = _interopRequireDefault(_Page2);
	
	var _Fade2 = __webpack_require__(6);
	
	var _Fade3 = _interopRequireDefault(_Fade2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Button = _Button3.default;
	exports.Mask = _Mask3.default;
	exports.Toast = _Toast3.default;
	exports.Dialog = _Dialog3.default;
	exports.Notification = _Notification3.default;
	exports.ActionSheet = _ActionSheet3.default;
	exports.Popup = _Popup3.default;
	exports.Switch = _Switch3.default;
	exports.Checkbox = _Checkbox3.default;
	exports.ScrollView = _ScrollView3.default;
	exports.ListView = _ListView3.default;
	exports.Select = _Select3.default;
	exports.DatePicker = _DatePicker3.default;
	exports.Page = _Page3.default;
	exports.Fade = _Fade3.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.classNames = classNames;
	exports.createInstance = createInstance;
	
	var _config = __webpack_require__(36);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(56);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var namespace = _config2.default.namespace;
	
	var hasOwn = {}.hasOwnProperty;
	
	/**
	 * 包装返回 className
	 * @param  {string|object} args 要被包装的 className
	 * 所有 className 都回被加上项目的 namespace 前缀。
	 * 如果参数是对象，则其属性是 class 名，值为 true 则该 class 名被返回。
	 * 如果参数的属性是 `_user` 则直接返回其值，不作包装
	 * @return {string}         一个或多个 class。例如："class1 class2 class3"
	 *
	 * @example
	 * let classes = classNames('dialog', {
	 *   'dialog-btn': false,
	 *   'dialog-title': true,
	 *   '_user': 'user-class'
	 * });
	 * console.log(classes);
	 * // 假设 namespace='rd'
	 * // output: "rc-dialog rc-dialog-title user-class"
	 */
	function classNames() {
	  var classes = [];
	  var arg = void 0,
	      argType = void 0,
	      key = void 0;
	
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  for (var i = 0, len = args.length; i < len; i++) {
	    arg = args[i];
	    argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
	
	    if (!arg) continue;
	
	    if (argType === 'string' || argType === 'number') {
	      prePush(classes, arg);
	    } else if (Array.isArray(arg)) {
	      classes.push(classNames.apply(null, arg));
	    } else if (argType === 'object') {
	      for (key in arg) {
	        if (!hasOwn.call(arg, key) || !arg[key]) continue;
	
	        // 用户传入的
	        if (key === '_user') {
	          classes.push(arg[key]);
	        } else {
	          prePush(classes, key);
	        }
	      }
	    }
	  }
	
	  return classes.join(' ');
	}
	
	function prePush(arr, value) {
	  value = namespace + '-' + value;
	  return arr.push(value);
	}
	
	/**
	 * 根据传入的 Component 创建一个实例，并渲染到 container
	 * @param  {Component} Component React 组件
	 * @param  {node} container 实例将渲染到该 dom 节点，
	 * 如果缺少，内部创建 dom 节点。
	 * @return {PropTypes.element}           Component 的实例
	 */
	function createInstance(Component, container) {
	  if (!container) {
	    container = createContainer();
	  }
	
	  return (0, _reactDom.render)(_react2.default.createElement(Component, null), container);
	}
	
	/**
	 * 创建一个 dom 节点，div.${namespace}-apicontainer
	 * @return {dom} 节点
	 */
	function createContainer() {
	  var div = document.createElement('div');
	  div.className = classNames('api-container');
	  document.body.appendChild(div);
	
	  return div;
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = Popup;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(4);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _ChildContainer = __webpack_require__(5);
	
	var _ChildContainer2 = _interopRequireDefault(_ChildContainer);
	
	__webpack_require__(49);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * 弹出层（抽屉）动画组件
	 * @param {object} props see Popup.propTypes
	 */
	function Popup(props) {
	  var show = props.show;
	  var duration = props.duration;
	  var timingFunction = props.timingFunction;
	  var direction = props.direction;
	  var children = props.children;
	  var className = props.className;
	  var style = props.style;
	
	  var others = _objectWithoutProperties(props, ['show', 'duration', 'timingFunction', 'direction', 'children', 'className', 'style']);
	
	  className = (0, _utils.classNames)('popup', { _user: className });
	  style = _extends({}, style, {
	    transitionDuration: duration + 'ms',
	    transitionTimingFunction: timingFunction
	  });
	
	  return _react2.default.createElement(
	    _reactAddonsCssTransitionGroup2.default,
	    {
	      component: _ChildContainer2.default,
	      transitionName: (0, _utils.classNames)('popup'),
	      transitionEnterTimeout: duration,
	      transitionLeaveTimeout: duration },
	    show ? _react2.default.createElement(
	      'div',
	      _extends({ className: className, style: style }, others),
	      _react2.default.createElement(
	        'div',
	        {
	          className: (0, _utils.classNames)('popup-main', 'popup-main-' + direction),
	          style: style },
	        children
	      )
	    ) : null
	  );
	}
	
	/**
	 * 定义属性类型
	 * @type {Object}
	 * show: 是否显示
	 * duration: 动画持续时间
	 * timingFunction: 动画类型
	 * direction: 从哪个方向出现
	 */
	Popup.propTypes = {
	  show: _react.PropTypes.bool.isRequired,
	  duration: _react.PropTypes.number.isRequired,
	  timingFunction: _react.PropTypes.string.isRequired,
	  direction: _react.PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
	  children: _react.PropTypes.node.isRequired,
	  className: _react.PropTypes.string,
	  style: _react.PropTypes.object
	};
	
	Popup.defaultProps = {
	  show: false,
	  duration: 400,
	  timingFunction: 'ease',
	  direction: 'bottom'
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ChildContainer;
	//
	
	function ChildContainer(props) {
	  return props.children[0] ? props.children[0] : null;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = Fade;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(4);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _ChildContainer = __webpack_require__(5);
	
	var _ChildContainer2 = _interopRequireDefault(_ChildContainer);
	
	var _utils = __webpack_require__(2);
	
	__webpack_require__(43);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * 淡入淡出动画组件
	 * @param {object} props see Fade.propTypes
	 */
	function Fade(props) {
	  var show = props.show;
	  var duration = props.duration;
	  var timingFunction = props.timingFunction;
	  var children = props.children;
	  var style = props.style;
	  var className = props.className;
	
	  var others = _objectWithoutProperties(props, ['show', 'duration', 'timingFunction', 'children', 'style', 'className']);
	
	  style = _extends({}, style, {
	    transitionDuration: duration + 'ms',
	    transitionTimingFunction: timingFunction
	  });
	  className = (0, _utils.classNames)('fade', { _user: className });
	
	  return _react2.default.createElement(
	    _reactAddonsCssTransitionGroup2.default,
	    {
	      component: _ChildContainer2.default,
	      transitionName: (0, _utils.classNames)('fade'),
	      transitionEnterTimeout: duration,
	      transitionLeaveTimeout: duration },
	    show ? _react2.default.createElement(
	      props.component,
	      _extends({ style: style, className: className }, others),
	      children
	    ) : null
	  );
	}
	
	/**
	 * 定义属性类型
	 * @type {Object}
	 * show: 是否显示（淡入 or 淡出）
	 * duration: 动画持续时间
	 * timingFunction: 动画类型
	 * component: 包裹 children 的组件
	 */
	Fade.propTypes = {
	  show: _react.PropTypes.bool,
	  duration: _react.PropTypes.number,
	  timingFunction: _react.PropTypes.string,
	  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	  className: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  children: _react.PropTypes.node
	};
	
	Fade.defaultProps = {
	  show: false,
	  duration: 80,
	  timingFunction: 'ease',
	  component: 'span'
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IconCheck = exports.IconLoading = exports.IconAttention = undefined;
	
	__webpack_require__(44);
	
	var _IconAttention2 = __webpack_require__(26);
	
	var _IconAttention3 = _interopRequireDefault(_IconAttention2);
	
	var _IconLoading2 = __webpack_require__(28);
	
	var _IconLoading3 = _interopRequireDefault(_IconLoading2);
	
	var _IconCheck2 = __webpack_require__(27);
	
	var _IconCheck3 = _interopRequireDefault(_IconCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.IconAttention = _IconAttention3.default;
	exports.IconLoading = _IconLoading3.default;
	exports.IconCheck = _IconCheck3.default;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = Mask;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	__webpack_require__(46);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * Mask UI
	 * @param {props} props see Mask.propTypes
	 */
	function Mask(props) {
	  var className = props.className;
	  var transparent = props.transparent;
	  var children = props.children;
	
	  var others = _objectWithoutProperties(props, ['className', 'transparent', 'children']);
	
	  className = (0, _utils.classNames)('mask', {
	    _user: className,
	    'mask-transparent': transparent
	  });
	
	  return _react2.default.createElement(
	    'div',
	    _extends({ className: className }, others),
	    children
	  );
	}
	
	/**
	 * props
	 * @type {Object}
	 * transparent: 是否透明
	 */
	Mask.propTypes = {
	  transparent: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _xiscroll = __webpack_require__(12);
	
	var _xiscroll2 = _interopRequireDefault(_xiscroll);
	
	var _utils = __webpack_require__(2);
	
	__webpack_require__(50);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * ScrollView UI
	 * @param {object} props see static propTypes
	 */
	
	var ScrollView = function (_Component) {
	  _inherits(ScrollView, _Component);
	
	  function ScrollView() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ScrollView);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ScrollView)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.iscroller = null, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	  /**
	   * props
	   * @type {Object}
	   * iscrollOptions: 配置 iscroll
	   * width: 定义组件宽度
	   * height: 定义组件高度
	   */
	
	
	  // IScroll 实例
	
	
	  _createClass(ScrollView, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var className = _props.className;
	      var children = _props.children;
	      var style = _props.style;
	
	      var others = _objectWithoutProperties(_props, ['width', 'height', 'className', 'children', 'style']);
	
	      className = (0, _utils.classNames)('scroll-view', { _user: className });
	      style = _extends({}, style, { width: width, height: height });
	
	      return _react2.default.createElement(
	        'div',
	        _extends({ ref: 'wrapper', className: className, style: style }, others),
	        _react2.default.createElement(
	          'div',
	          { className: (0, _utils.classNames)('scroll-view-scroller') },
	          children
	        )
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var iscrollOptions = this.props.iscrollOptions;
	      var wrapper = this.refs.wrapper;
	
	      this.iscroller = new _xiscroll2.default(wrapper, _extends({
	        probeType: 2,
	        mouseWheel: true
	      }, iscrollOptions));
	
	      wrapper.addEventListener('touchmove', function (e) {
	        e.preventDefault();
	      });
	    }
	  }]);
	
	  return ScrollView;
	}(_react.Component);
	
	ScrollView.propTypes = {
	  iscrollOptions: _react.PropTypes.object,
	  width: _react.PropTypes.string,
	  height: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  style: _react.PropTypes.object
	};
	ScrollView.defaultProps = {
	  width: '100%',
	  height: '300px'
	};
	exports.default = ScrollView;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	var _xiscroll = __webpack_require__(12);
	
	var _xiscroll2 = _interopRequireDefault(_xiscroll);
	
	__webpack_require__(51);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var height = 34;
	var maskStyle = { height: height * 3 + 'px' };
	var optionStyle = {
	  height: height + 'px',
	  lineHeight: height + 'px'
	};
	
	/**
	 * Select UI
	 * @param {object} props see static propTypes
	 */
	
	var Select = function (_Component) {
	  _inherits(Select, _Component);
	
	  function Select() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, Select);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Select)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.iscroller = null, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	  /**
	   * props
	   * @type {Object}
	   * options: 选项
	   * selectedIndex: 选中项的索引
	   * onChange: 监听 selectedIndex 改变，参数是 [selectedIndex]
	   * iscrollOptions: 配置 iscroll
	   */
	
	
	  // iscroll 实例
	
	
	  _createClass(Select, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var options = _props.options;
	      var className = _props.className;
	      var style = _props.style;
	
	      var others = _objectWithoutProperties(_props, ['options', 'className', 'style']);
	
	      className = (0, _utils.classNames)('select', { _user: className });
	      style = _extends({}, style, { height: height * 7 + 'px' });
	      // fill
	      options = ['', '', ''].concat(options).concat(['', '', '']);
	
	      return _react2.default.createElement(
	        'div',
	        _extends({ ref: 'wrapper', className: className, style: style }, others),
	        _react2.default.createElement(
	          'ul',
	          { className: (0, _utils.classNames)('select-options') },
	          options.map(function (option, index) {
	            var name = (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' ? option.name : option;
	            var key = index + '@-@' + name;
	
	            return _react2.default.createElement(
	              'li',
	              { key: key, style: optionStyle },
	              name
	            );
	          })
	        ),
	        _react2.default.createElement('div', { style: maskStyle, className: (0, _utils.classNames)('select-mask-top') }),
	        _react2.default.createElement('div', { style: maskStyle, className: (0, _utils.classNames)('select-mask-bottom') })
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      var _props2 = this.props;
	      var iscrollOptions = _props2.iscrollOptions;
	      var onChange = _props2.onChange;
	      var wrapper = this.refs.wrapper;
	      // fuck a bug
	
	      setTimeout(function () {
	        _this2.iscroller = new _xiscroll2.default(wrapper, _extends({
	          probeType: 2 }, iscrollOptions));
	
	        _this2.iscroller.on('scrollEnd', function () {
	          var index = Math.abs(_this2.iscroller.y / height);
	          onChange && onChange(index);
	        });
	
	        // 通过 hookNewY 修改滚动位置
	        _this2.iscroller.hookNewY = function (newY) {
	          // Math.ceil(-8.74) = -8
	          // 所以已经 -1 了
	          var index = Math.ceil(newY / height);
	
	          if (Math.abs(_this2.iscroller.distY) > height / 2) {
	            if (_this2.iscroller.directionY === 1) {
	              index -= 1;
	            }
	          }
	
	          newY = index * height;
	
	          return newY;
	        };
	
	        _this2.resetPosition();
	
	        // 阻止默认事件
	        wrapper.addEventListener('touchmove', function (e) {
	          e.preventDefault();
	        });
	      }, 0);
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return true;
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.iscroller.refresh();
	      this.resetPosition();
	    }
	  }, {
	    key: 'resetPosition',
	    value: function resetPosition() {
	      var selectedIndex = this.props.selectedIndex;
	      // 定位到指定的 selectIndex
	
	      this.iscroller.scrollTo(0, -selectedIndex * height);
	    }
	  }]);
	
	  return Select;
	}(_react.Component);
	
	Select.propTypes = {
	  options: _react.PropTypes.array.isRequired,
	  selectedIndex: _react.PropTypes.number,
	  onChange: _react.PropTypes.func,
	  iscrollOptions: _react.PropTypes.object,
	  className: _react.PropTypes.string,
	  style: _react.PropTypes.object
	};
	Select.defaultProps = {
	  selectedIndex: 0
	};
	exports.default = Select;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TabBarItem;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function TabBarItem(props) {
	  var selected = props.selected;
	  var children = props.children;
	
	  var className = (0, _utils.classNames)('tab-bar-body-item', {
	    'tab-bar-body-item-selected': selected
	  });
	
	  return _react2.default.createElement(
	    'div',
	    { className: className },
	    children
	  );
	}
	
	TabBarItem.propTypes = {
	  children: _react.PropTypes.node,
	  selected: _react.PropTypes.bool,
	  icon: _react.PropTypes.string,
	  selectedIcon: _react.PropTypes.string,
	  title: _react.PropTypes.string,
	  badge: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  onClick: _react.PropTypes.func,
	  className: _react.PropTypes.string
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
	(function (window, document, Math) {
	var rAF = window.requestAnimationFrame	||
		window.webkitRequestAnimationFrame	||
		window.mozRequestAnimationFrame		||
		window.oRequestAnimationFrame		||
		window.msRequestAnimationFrame		||
		function (callback) { window.setTimeout(callback, 1000 / 60); };
	
	var utils = (function () {
		var me = {};
	
		var _elementStyle = document.createElement('div').style;
		var _vendor = (function () {
			var vendors = ['t', 'webkitT', 'MozT', 'msT', 'OT'],
				transform,
				i = 0,
				l = vendors.length;
	
			for ( ; i < l; i++ ) {
				transform = vendors[i] + 'ransform';
				if ( transform in _elementStyle ) return vendors[i].substr(0, vendors[i].length-1);
			}
	
			return false;
		})();
	
		function _prefixStyle (style) {
			if ( _vendor === false ) return false;
			if ( _vendor === '' ) return style;
			return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
		}
	
		me.getTime = Date.now || function getTime () { return new Date().getTime(); };
	
		me.extend = function (target, obj) {
			for ( var i in obj ) {
				target[i] = obj[i];
			}
		};
	
		me.addEvent = function (el, type, fn, capture) {
			el.addEventListener(type, fn, !!capture);
		};
	
		me.removeEvent = function (el, type, fn, capture) {
			el.removeEventListener(type, fn, !!capture);
		};
	
		me.prefixPointerEvent = function (pointerEvent) {
			return window.MSPointerEvent ?
				'MSPointer' + pointerEvent.charAt(7).toUpperCase() + pointerEvent.substr(8):
				pointerEvent;
		};
	
		me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
			var distance = current - start,
				speed = Math.abs(distance) / time,
				destination,
				duration;
	
			deceleration = deceleration === undefined ? 0.0006 : deceleration;
	
			destination = current + ( speed * speed ) / ( 2 * deceleration ) * ( distance < 0 ? -1 : 1 );
			duration = speed / deceleration;
	
			if ( destination < lowerMargin ) {
				destination = wrapperSize ? lowerMargin - ( wrapperSize / 2.5 * ( speed / 8 ) ) : lowerMargin;
				distance = Math.abs(destination - current);
				duration = distance / speed;
			} else if ( destination > 0 ) {
				destination = wrapperSize ? wrapperSize / 2.5 * ( speed / 8 ) : 0;
				distance = Math.abs(current) + destination;
				duration = distance / speed;
			}
	
			return {
				destination: Math.round(destination),
				duration: duration
			};
		};
	
		var _transform = _prefixStyle('transform');
	
		me.extend(me, {
			hasTransform: _transform !== false,
			hasPerspective: _prefixStyle('perspective') in _elementStyle,
			hasTouch: 'ontouchstart' in window,
			hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
			hasTransition: _prefixStyle('transition') in _elementStyle
		});
	
		/*
		This should find all Android browsers lower than build 535.19 (both stock browser and webview)
		- galaxy S2 is ok
	    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
	    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S3 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S4 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	   - galaxy S5 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	   - galaxy S6 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	  */
		me.isBadAndroid = (function() {
			var appVersion = window.navigator.appVersion;
			// Android browser is not a chrome browser.
			if (/Android/.test(appVersion) && !(/Chrome\/\d/.test(appVersion))) {
				var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
				if(safariVersion && typeof safariVersion === "object" && safariVersion.length >= 2) {
					return parseFloat(safariVersion[1]) < 535.19;
				} else {
					return true;
				}
			} else {
				return false;
			}
		})();
	
		me.extend(me.style = {}, {
			transform: _transform,
			transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
			transitionDuration: _prefixStyle('transitionDuration'),
			transitionDelay: _prefixStyle('transitionDelay'),
			transformOrigin: _prefixStyle('transformOrigin')
		});
	
		me.hasClass = function (e, c) {
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
			return re.test(e.className);
		};
	
		me.addClass = function (e, c) {
			if ( me.hasClass(e, c) ) {
				return;
			}
	
			var newclass = e.className.split(' ');
			newclass.push(c);
			e.className = newclass.join(' ');
		};
	
		me.removeClass = function (e, c) {
			if ( !me.hasClass(e, c) ) {
				return;
			}
	
			var re = new RegExp("(^|\\s)" + c + "(\\s|$)", 'g');
			e.className = e.className.replace(re, ' ');
		};
	
		me.offset = function (el) {
			var left = -el.offsetLeft,
				top = -el.offsetTop;
	
			// jshint -W084
			while (el = el.offsetParent) {
				left -= el.offsetLeft;
				top -= el.offsetTop;
			}
			// jshint +W084
	
			return {
				left: left,
				top: top
			};
		};
	
		me.preventDefaultException = function (el, exceptions) {
			for ( var i in exceptions ) {
				if ( exceptions[i].test(el[i]) ) {
					return true;
				}
			}
	
			return false;
		};
	
		me.extend(me.eventType = {}, {
			touchstart: 1,
			touchmove: 1,
			touchend: 1,
	
			mousedown: 2,
			mousemove: 2,
			mouseup: 2,
	
			pointerdown: 3,
			pointermove: 3,
			pointerup: 3,
	
			MSPointerDown: 3,
			MSPointerMove: 3,
			MSPointerUp: 3
		});
	
		me.extend(me.ease = {}, {
			quadratic: {
				style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				fn: function (k) {
					return k * ( 2 - k );
				}
			},
			circular: {
				style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',	// Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
				fn: function (k) {
					return Math.sqrt( 1 - ( --k * k ) );
				}
			},
			back: {
				style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				fn: function (k) {
					var b = 4;
					return ( k = k - 1 ) * k * ( ( b + 1 ) * k + b ) + 1;
				}
			},
			bounce: {
				style: '',
				fn: function (k) {
					if ( ( k /= 1 ) < ( 1 / 2.75 ) ) {
						return 7.5625 * k * k;
					} else if ( k < ( 2 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;
					} else if ( k < ( 2.5 / 2.75 ) ) {
						return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;
					} else {
						return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;
					}
				}
			},
			elastic: {
				style: '',
				fn: function (k) {
					var f = 0.22,
						e = 0.4;
	
					if ( k === 0 ) { return 0; }
					if ( k == 1 ) { return 1; }
	
					return ( e * Math.pow( 2, - 10 * k ) * Math.sin( ( k - f / 4 ) * ( 2 * Math.PI ) / f ) + 1 );
				}
			}
		});
	
		me.tap = function (e, eventName) {
			var ev = document.createEvent('Event');
			ev.initEvent(eventName, true, true);
			ev.pageX = e.pageX;
			ev.pageY = e.pageY;
			e.target.dispatchEvent(ev);
		};
	
		me.click = function (e) {
			var target = e.target,
				ev;
	
			if ( !(/(SELECT|INPUT|TEXTAREA)/i).test(target.tagName) ) {
				// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
				// initMouseEvent is deprecated.
				ev = document.createEvent(window.MouseEvent ? 'MouseEvents' : 'Event');
				ev.initEvent('click', true, true);
				ev.view = e.view || window;
				ev.detail = 1;
				ev.screenX = target.screenX || 0;
				ev.screenY = target.screenY || 0;
				ev.clientX = target.clientX || 0;
				ev.clientY = target.clientY || 0;
				ev.ctrlKey = !!e.ctrlKey;
				ev.altKey = !!e.altKey;
				ev.shiftKey = !!e.shiftKey;
				ev.metaKey = !!e.metaKey;
				ev.button = 0;
				ev.relatedTarget = null;
				ev._constructed = true;
				target.dispatchEvent(ev);
			}
		};
	
		me.getRect = function(el) {
			if (el instanceof SVGElement) {
				var rect = el.getBoundingClientRect();
				return {
					top : rect.top,
					left : rect.left,
					width : rect.width,
					height : rect.height
				};
			} else {
				return {
					top : el.offsetTop,
					left : el.offsetLeft,
					width : el.offsetWidth,
					height : el.offsetHeight
				};
			}
		};
	
		return me;
	})();
	function IScroll (el, options) {
		this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
		this.scroller = this.wrapper.children[0];
		this.scrollerStyle = this.scroller.style;		// cache style for better performance
	
		this.options = {
	
			resizeScrollbars: true,
	
			mouseWheelSpeed: 20,
	
			snapThreshold: 0.334,
	
	// INSERT POINT: OPTIONS
			disablePointer : !utils.hasPointer,
			disableTouch : utils.hasPointer || !utils.hasTouch,
			disableMouse : utils.hasPointer || utils.hasTouch,
			startX: 0,
			startY: 0,
			scrollY: true,
			directionLockThreshold: 5,
			momentum: true,
	
			bounce: true,
			bounceTime: 600,
			bounceEasing: '',
	
			preventDefault: true,
			preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },
	
			HWCompositing: true,
			useTransition: true,
			useTransform: true,
			bindToWrapper: typeof window.onmousedown === "undefined"
		};
	
		for ( var i in options ) {
			this.options[i] = options[i];
		}
	
		// Normalize options
		this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';
	
		this.options.useTransition = utils.hasTransition && this.options.useTransition;
		this.options.useTransform = utils.hasTransform && this.options.useTransform;
	
		this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
		this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
	
		// If you want eventPassthrough I have to lock one of the axes
		this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
		this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;
	
		// With eventPassthrough we also need lockDirection mechanism
		this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
		this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
	
		this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
	
		this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
	
		if ( this.options.tap === true ) {
			this.options.tap = 'tap';
		}
	
		// https://github.com/cubiq/iscroll/issues/1029
		if (!this.options.useTransition && !this.options.useTransform) {
			if(!(/relative|absolute/i).test(this.scrollerStyle.position)) {
				this.scrollerStyle.position = "relative";
			}
		}
	
		if ( this.options.shrinkScrollbars == 'scale' ) {
			this.options.useTransition = false;
		}
	
		this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
	
		if ( this.options.probeType == 3 ) {
			this.options.useTransition = false;	}
	
	// INSERT POINT: NORMALIZATION
	
		// Some defaults
		this.x = 0;
		this.y = 0;
		this.directionX = 0;
		this.directionY = 0;
		this._events = {};
	
	// INSERT POINT: DEFAULTS
	
		this._init();
		this.refresh();
	
		this.scrollTo(this.options.startX, this.options.startY);
		this.enable();
	}
	
	IScroll.prototype = {
		version: '5.2.0',
	
		_init: function () {
			this._initEvents();
	
			if ( this.options.scrollbars || this.options.indicators ) {
				this._initIndicators();
			}
	
			if ( this.options.mouseWheel ) {
				this._initWheel();
			}
	
			if ( this.options.snap ) {
				this._initSnap();
			}
	
			if ( this.options.keyBindings ) {
				this._initKeys();
			}
	
	// INSERT POINT: _init
	
		},
	
		destroy: function () {
			this._initEvents(true);
			clearTimeout(this.resizeTimeout);
	 		this.resizeTimeout = null;
			this._execEvent('destroy');
		},
	
		_transitionEnd: function (e) {
			if ( e.target != this.scroller || !this.isInTransition ) {
				return;
			}
	
			this._transitionTime();
			if ( !this.resetPosition(this.options.bounceTime) ) {
				this.isInTransition = false;
				this._execEvent('scrollEnd');
			}
		},
	
		_start: function (e) {
			// React to left mouse button only
			if ( utils.eventType[e.type] != 1 ) {
			  // for button property
			  // http://unixpapa.com/js/mouse.html
			  var button;
		    if (!e.which) {
		      /* IE case */
		      button = (e.button < 2) ? 0 :
		               ((e.button == 4) ? 1 : 2);
		    } else {
		      /* All others */
		      button = e.button;
		    }
				if ( button !== 0 ) {
					return;
				}
			}
	
			if ( !this.enabled || (this.initiated && utils.eventType[e.type] !== this.initiated) ) {
				return;
			}
	
			if ( this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}
	
			var point = e.touches ? e.touches[0] : e,
				pos;
	
			this.initiated	= utils.eventType[e.type];
			this.moved		= false;
			this.distX		= 0;
			this.distY		= 0;
			this.directionX = 0;
			this.directionY = 0;
			this.directionLocked = 0;
	
			this.startTime = utils.getTime();
	
			if ( this.options.useTransition && this.isInTransition ) {
				this._transitionTime();
				this.isInTransition = false;
				pos = this.getComputedPosition();
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this._execEvent('scrollEnd');
			} else if ( !this.options.useTransition && this.isAnimating ) {
				this.isAnimating = false;
				this._execEvent('scrollEnd');
			}
	
			this.startX    = this.x;
			this.startY    = this.y;
			this.absStartX = this.x;
			this.absStartY = this.y;
			this.pointX    = point.pageX;
			this.pointY    = point.pageY;
	
			this._execEvent('beforeScrollStart');
		},
	
		_move: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}
	
			if ( this.options.preventDefault ) {	// increases performance on Android? TODO: check!
				e.preventDefault();
			}
	
			var point		= e.touches ? e.touches[0] : e,
				deltaX		= point.pageX - this.pointX,
				deltaY		= point.pageY - this.pointY,
				timestamp	= utils.getTime(),
				newX, newY,
				absDistX, absDistY;
	
			this.pointX		= point.pageX;
			this.pointY		= point.pageY;
	
			this.distX		+= deltaX;
			this.distY		+= deltaY;
			absDistX		= Math.abs(this.distX);
			absDistY		= Math.abs(this.distY);
	
			// We need to move at least 10 pixels for the scrolling to initiate
			if ( timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10) ) {
				return;
			}
	
			// If you are scrolling in one direction lock the other
			if ( !this.directionLocked && !this.options.freeScroll ) {
				if ( absDistX > absDistY + this.options.directionLockThreshold ) {
					this.directionLocked = 'h';		// lock horizontally
				} else if ( absDistY >= absDistX + this.options.directionLockThreshold ) {
					this.directionLocked = 'v';		// lock vertically
				} else {
					this.directionLocked = 'n';		// no lock
				}
			}
	
			if ( this.directionLocked == 'h' ) {
				if ( this.options.eventPassthrough == 'vertical' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'horizontal' ) {
					this.initiated = false;
					return;
				}
	
				deltaY = 0;
			} else if ( this.directionLocked == 'v' ) {
				if ( this.options.eventPassthrough == 'horizontal' ) {
					e.preventDefault();
				} else if ( this.options.eventPassthrough == 'vertical' ) {
					this.initiated = false;
					return;
				}
	
				deltaX = 0;
			}
	
			deltaX = this.hasHorizontalScroll ? deltaX : 0;
			deltaY = this.hasVerticalScroll ? deltaY : 0;
	
			newX = this.x + deltaX;
			newY = this.y + deltaY;
	
			// Slow down if outside of the boundaries
			if ( newX > 0 || newX < this.maxScrollX ) {
				newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
			}
			if ( newY > 0 || newY < this.maxScrollY ) {
				newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
			}
	
			this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
			this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
	
			if ( !this.moved ) {
				this._execEvent('scrollStart');
			}
	
			this.moved = true;
	
			this._translate(newX, newY);
	
	/* REPLACE START: _move */
			if ( timestamp - this.startTime > 300 ) {
				this.startTime = timestamp;
				this.startX = this.x;
				this.startY = this.y;
	
				if ( this.options.probeType == 1 ) {
					this._execEvent('scroll');
				}
			}
	
			if ( this.options.probeType > 1 ) {
				this._execEvent('scroll');
			}
	/* REPLACE END: _move */
	
		},
	
		_end: function (e) {
			if ( !this.enabled || utils.eventType[e.type] !== this.initiated ) {
				return;
			}
	
			this._execEvent('touchEnd');
	
			if ( this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException) ) {
				e.preventDefault();
			}
	
			var point = e.changedTouches ? e.changedTouches[0] : e,
				momentumX,
				momentumY,
				duration = utils.getTime() - this.startTime,
				newX = Math.round(this.x),
				newY = Math.round(this.y),
				distanceX = Math.abs(newX - this.startX),
				distanceY = Math.abs(newY - this.startY),
				time = 0,
				easing = '';
	
			this.isInTransition = 0;
			this.initiated = 0;
			this.endTime = utils.getTime();
	
			// reset if we are outside of the boundaries
			if ( this.resetPosition(this.options.bounceTime) ) {
				return;
			}
	
			this.scrollTo(newX, newY);	// ensures that the last position is rounded
	
			// we scrolled less than 10 pixels
			if ( !this.moved ) {
				if ( this.options.tap ) {
					utils.tap(e, this.options.tap);
				}
	
				if ( this.options.click ) {
					utils.click(e);
				}
	
				this._execEvent('scrollCancel');
				return;
			}
	
			if ( this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100 ) {
				this._execEvent('flick');
				return;
			}
	
			// start momentum animation if needed
			if ( this.options.momentum && duration < 300 ) {
				momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: newX, duration: 0 };
				momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: newY, duration: 0 };
				newX = momentumX.destination;
				newY = momentumY.destination;
				time = Math.max(momentumX.duration, momentumY.duration);
				this.isInTransition = 1;
			}
	
	
			if ( this.options.snap ) {
				var snap = this._nearestSnap(newX, newY);
				this.currentPage = snap;
				time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(newX - snap.x), 1000),
							Math.min(Math.abs(newY - snap.y), 1000)
						), 300);
				newX = snap.x;
				newY = snap.y;
	
				this.directionX = 0;
				this.directionY = 0;
				easing = this.options.bounceEasing;
			}
	
	// INSERT POINT: _end
			if (this.hookNewY) {
				newY = this.hookNewY(newY);
				time === 0 && (time = 10);
			}
	
			if ( newX != this.x || newY != this.y ) {
				// change easing function when scroller goes out of the boundaries
				if ( newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY ) {
					easing = utils.ease.quadratic;
				}
	
				this.scrollTo(newX, newY, time, easing);
				return;
			}
	
			this._execEvent('scrollEnd');
		},
	
		_resize: function () {
			var that = this;
	
			clearTimeout(this.resizeTimeout);
	
			this.resizeTimeout = setTimeout(function () {
				that.refresh();
			}, this.options.resizePolling);
		},
	
		resetPosition: function (time) {
			var x = this.x,
				y = this.y;
	
			time = time || 0;
	
			if ( !this.hasHorizontalScroll || this.x > 0 ) {
				x = 0;
			} else if ( this.x < this.maxScrollX ) {
				x = this.maxScrollX;
			}
	
			if ( !this.hasVerticalScroll || this.y > 0 ) {
				y = 0;
			} else if ( this.y < this.maxScrollY ) {
				y = this.maxScrollY;
			}
	
			if ( x == this.x && y == this.y ) {
				return false;
			}
	
			this.scrollTo(x, y, time, this.options.bounceEasing);
	
			return true;
		},
	
		disable: function () {
			this.enabled = false;
		},
	
		enable: function () {
			this.enabled = true;
		},
	
		refresh: function () {
			utils.getRect(this.wrapper);		// Force reflow
	
			this.wrapperWidth	= this.wrapper.clientWidth;
			this.wrapperHeight	= this.wrapper.clientHeight;
	
			var rect = utils.getRect(this.scroller);
	/* REPLACE START: refresh */
	
			this.scrollerWidth	= rect.width;
			this.scrollerHeight	= rect.height;
	
			this.maxScrollX		= this.wrapperWidth - this.scrollerWidth;
			this.maxScrollY		= this.wrapperHeight - this.scrollerHeight;
	
	/* REPLACE END: refresh */
	
			this.hasHorizontalScroll	= this.options.scrollX && this.maxScrollX < 0;
			this.hasVerticalScroll		= this.options.scrollY && this.maxScrollY < 0;
	
			if ( !this.hasHorizontalScroll ) {
				this.maxScrollX = 0;
				this.scrollerWidth = this.wrapperWidth;
			}
	
			if ( !this.hasVerticalScroll ) {
				this.maxScrollY = 0;
				this.scrollerHeight = this.wrapperHeight;
			}
	
			this.endTime = 0;
			this.directionX = 0;
			this.directionY = 0;
	
			this.wrapperOffset = utils.offset(this.wrapper);
	
			this._execEvent('refresh');
	
			this.resetPosition();
	
	// INSERT POINT: _refresh
	
		},
	
		on: function (type, fn) {
			if ( !this._events[type] ) {
				this._events[type] = [];
			}
	
			this._events[type].push(fn);
		},
	
		off: function (type, fn) {
			if ( !this._events[type] ) {
				return;
			}
	
			var index = this._events[type].indexOf(fn);
	
			if ( index > -1 ) {
				this._events[type].splice(index, 1);
			}
		},
	
		_execEvent: function (type) {
			if ( !this._events[type] ) {
				return;
			}
	
			var i = 0,
				l = this._events[type].length;
	
			if ( !l ) {
				return;
			}
	
			for ( ; i < l; i++ ) {
				this._events[type][i].apply(this, [].slice.call(arguments, 1));
			}
		},
	
		scrollBy: function (x, y, time, easing) {
			x = this.x + x;
			y = this.y + y;
			time = time || 0;
	
			this.scrollTo(x, y, time, easing);
		},
	
		scrollTo: function (x, y, time, easing) {
			easing = easing || utils.ease.circular;
	
			if (this.offsetX) {
				x += this.offsetX;
			}
	
			if (this.offsetY) {
				y += this.offsetY;
			}
	
			this.isInTransition = this.options.useTransition && time > 0;
			var transitionType = this.options.useTransition && easing.style;
			if ( !time || transitionType ) {
					if(transitionType) {
						this._transitionTimingFunction(easing.style);
						this._transitionTime(time);
					}
				this._translate(x, y);
			} else {
				this._animate(x, y, time, easing.fn);
			}
		},
	
		scrollToElement: function (el, time, offsetX, offsetY, easing) {
			el = el.nodeType ? el : this.scroller.querySelector(el);
	
			if ( !el ) {
				return;
			}
	
			var pos = utils.offset(el);
	
			pos.left -= this.wrapperOffset.left;
			pos.top  -= this.wrapperOffset.top;
	
			// if offsetX/Y are true we center the element to the screen
			var elRect = utils.getRect(el);
			var wrapperRect = utils.getRect(this.wrapper);
			if ( offsetX === true ) {
				offsetX = Math.round(elRect.width / 2 - wrapperRect.width / 2);
			}
			if ( offsetY === true ) {
				offsetY = Math.round(elRect.height / 2 - wrapperRect.height / 2);
			}
	
			pos.left -= offsetX || 0;
			pos.top  -= offsetY || 0;
	
			pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
			pos.top  = pos.top  > 0 ? 0 : pos.top  < this.maxScrollY ? this.maxScrollY : pos.top;
	
			time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x-pos.left), Math.abs(this.y-pos.top)) : time;
	
			this.scrollTo(pos.left, pos.top, time, easing);
		},
	
		_transitionTime: function (time) {
			if (!this.options.useTransition) {
				return;
			}
			time = time || 0;
			var durationProp = utils.style.transitionDuration;
			if(!durationProp) {
				return;
			}
	
			this.scrollerStyle[durationProp] = time + 'ms';
	
			if ( !time && utils.isBadAndroid ) {
				this.scrollerStyle[durationProp] = '0.0001ms';
				// remove 0.0001ms
				var self = this;
				rAF(function() {
					if(self.scrollerStyle[durationProp] === '0.0001ms') {
						self.scrollerStyle[durationProp] = '0s';
					}
				});
			}
	
	
			if ( this.indicators ) {
				for ( var i = this.indicators.length; i--; ) {
					this.indicators[i].transitionTime(time);
				}
			}
	
	
	// INSERT POINT: _transitionTime
	
		},
	
		_transitionTimingFunction: function (easing) {
			this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
	
	
			if ( this.indicators ) {
				for ( var i = this.indicators.length; i--; ) {
					this.indicators[i].transitionTimingFunction(easing);
				}
			}
	
	
	// INSERT POINT: _transitionTimingFunction
	
		},
	
		_translate: function (x, y) {
			if ( this.options.useTransform ) {
	
	/* REPLACE START: _translate */
	
				this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
	
	/* REPLACE END: _translate */
	
			} else {
				x = Math.round(x);
				y = Math.round(y);
				this.scrollerStyle.left = x + 'px';
				this.scrollerStyle.top = y + 'px';
			}
	
			this.x = x;
			this.y = y;
	
	
		if ( this.indicators ) {
			for ( var i = this.indicators.length; i--; ) {
				this.indicators[i].updatePosition();
			}
		}
	
	
	// INSERT POINT: _translate
	
		},
	
		_initEvents: function (remove) {
			var eventType = remove ? utils.removeEvent : utils.addEvent,
				target = this.options.bindToWrapper ? this.wrapper : window;
	
			eventType(window, 'orientationchange', this);
			eventType(window, 'resize', this);
	
			if ( this.options.click ) {
				eventType(this.wrapper, 'click', this, true);
			}
	
			if ( !this.options.disableMouse ) {
				eventType(this.wrapper, 'mousedown', this);
				eventType(target, 'mousemove', this);
				eventType(target, 'mousecancel', this);
				eventType(target, 'mouseup', this);
			}
	
			if ( utils.hasPointer && !this.options.disablePointer ) {
				eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
				eventType(target, utils.prefixPointerEvent('pointermove'), this);
				eventType(target, utils.prefixPointerEvent('pointercancel'), this);
				eventType(target, utils.prefixPointerEvent('pointerup'), this);
			}
	
			if ( utils.hasTouch && !this.options.disableTouch ) {
				eventType(this.wrapper, 'touchstart', this);
				eventType(target, 'touchmove', this);
				eventType(target, 'touchcancel', this);
				eventType(target, 'touchend', this);
			}
	
			eventType(this.scroller, 'transitionend', this);
			eventType(this.scroller, 'webkitTransitionEnd', this);
			eventType(this.scroller, 'oTransitionEnd', this);
			eventType(this.scroller, 'MSTransitionEnd', this);
		},
	
		getComputedPosition: function () {
			var matrix = window.getComputedStyle(this.scroller, null),
				x, y;
	
			if ( this.options.useTransform ) {
				matrix = matrix[utils.style.transform].split(')')[0].split(', ');
				x = +(matrix[12] || matrix[4]);
				y = +(matrix[13] || matrix[5]);
			} else {
				x = +matrix.left.replace(/[^-\d.]/g, '');
				y = +matrix.top.replace(/[^-\d.]/g, '');
			}
	
			return { x: x, y: y };
		},
	
		_initIndicators: function () {
			var interactive = this.options.interactiveScrollbars,
				customStyle = typeof this.options.scrollbars != 'string',
				indicators = [],
				indicator;
	
			var that = this;
	
			this.indicators = [];
	
			if ( this.options.scrollbars ) {
				// Vertical scrollbar
				if ( this.options.scrollY ) {
					indicator = {
						el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenX: false
					};
	
					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}
	
				// Horizontal scrollbar
				if ( this.options.scrollX ) {
					indicator = {
						el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
						interactive: interactive,
						defaultScrollbars: true,
						customStyle: customStyle,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenY: false
					};
	
					this.wrapper.appendChild(indicator.el);
					indicators.push(indicator);
				}
			}
	
			if ( this.options.indicators ) {
				// TODO: check concat compatibility
				indicators = indicators.concat(this.options.indicators);
			}
	
			for ( var i = indicators.length; i--; ) {
				this.indicators.push( new Indicator(this, indicators[i]) );
			}
	
			// TODO: check if we can use array.map (wide compatibility and performance issues)
			function _indicatorsMap (fn) {
				if (that.indicators) {
					for ( var i = that.indicators.length; i--; ) {
						fn.call(that.indicators[i]);
					}
				}
			}
	
			if ( this.options.fadeScrollbars ) {
				this.on('scrollEnd', function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});
	
				this.on('scrollCancel', function () {
					_indicatorsMap(function () {
						this.fade();
					});
				});
	
				this.on('scrollStart', function () {
					_indicatorsMap(function () {
						this.fade(1);
					});
				});
	
				this.on('beforeScrollStart', function () {
					_indicatorsMap(function () {
						this.fade(1, true);
					});
				});
			}
	
	
			this.on('refresh', function () {
				_indicatorsMap(function () {
					this.refresh();
				});
			});
	
			this.on('destroy', function () {
				_indicatorsMap(function () {
					this.destroy();
				});
	
				delete this.indicators;
			});
		},
	
		_initWheel: function () {
			utils.addEvent(this.wrapper, 'wheel', this);
			utils.addEvent(this.wrapper, 'mousewheel', this);
			utils.addEvent(this.wrapper, 'DOMMouseScroll', this);
	
			this.on('destroy', function () {
				clearTimeout(this.wheelTimeout);
				this.wheelTimeout = null;
				utils.removeEvent(this.wrapper, 'wheel', this);
				utils.removeEvent(this.wrapper, 'mousewheel', this);
				utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
			});
		},
	
		_wheel: function (e) {
			if ( !this.enabled ) {
				return;
			}
	
			e.preventDefault();
	
			var wheelDeltaX, wheelDeltaY,
				newX, newY,
				that = this;
	
			if ( this.wheelTimeout === undefined ) {
				that._execEvent('scrollStart');
			}
	
			// Execute the scrollEnd event after 400ms the wheel stopped scrolling
			clearTimeout(this.wheelTimeout);
			this.wheelTimeout = setTimeout(function () {
				if(!that.options.snap) {
					that._execEvent('scrollEnd');
				}
				that.wheelTimeout = undefined;
			}, 400);
	
			if ( 'deltaX' in e ) {
				if (e.deltaMode === 1) {
					wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
					wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
				} else {
					wheelDeltaX = -e.deltaX;
					wheelDeltaY = -e.deltaY;
				}
			} else if ( 'wheelDeltaX' in e ) {
				wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
				wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
			} else if ( 'wheelDelta' in e ) {
				wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
			} else if ( 'detail' in e ) {
				wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
			} else {
				return;
			}
	
			wheelDeltaX *= this.options.invertWheelDirection;
			wheelDeltaY *= this.options.invertWheelDirection;
	
			if ( !this.hasVerticalScroll ) {
				wheelDeltaX = wheelDeltaY;
				wheelDeltaY = 0;
			}
	
			if ( this.options.snap ) {
				newX = this.currentPage.pageX;
				newY = this.currentPage.pageY;
	
				if ( wheelDeltaX > 0 ) {
					newX--;
				} else if ( wheelDeltaX < 0 ) {
					newX++;
				}
	
				if ( wheelDeltaY > 0 ) {
					newY--;
				} else if ( wheelDeltaY < 0 ) {
					newY++;
				}
	
				this.goToPage(newX, newY);
	
				return;
			}
	
			newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
			newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
	
			this.directionX = wheelDeltaX > 0 ? -1 : wheelDeltaX < 0 ? 1 : 0;
			this.directionY = wheelDeltaY > 0 ? -1 : wheelDeltaY < 0 ? 1 : 0;
	
			if ( newX > 0 ) {
				newX = 0;
			} else if ( newX < this.maxScrollX ) {
				newX = this.maxScrollX;
			}
	
			if ( newY > 0 ) {
				newY = 0;
			} else if ( newY < this.maxScrollY ) {
				newY = this.maxScrollY;
			}
	
			this.scrollTo(newX, newY, 0);
	
			if ( this.options.probeType > 1 ) {
				this._execEvent('scroll');
			}
	
	// INSERT POINT: _wheel
		},
	
		_initSnap: function () {
			this.currentPage = {};
	
			if ( typeof this.options.snap == 'string' ) {
				this.options.snap = this.scroller.querySelectorAll(this.options.snap);
			}
	
			this.on('refresh', function () {
				var i = 0, l,
					m = 0, n,
					cx, cy,
					x = 0, y,
					stepX = this.options.snapStepX || this.wrapperWidth,
					stepY = this.options.snapStepY || this.wrapperHeight,
					el,
					rect;
	
				this.pages = [];
	
				if ( !this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight ) {
					return;
				}
	
				if ( this.options.snap === true ) {
					cx = Math.round( stepX / 2 );
					cy = Math.round( stepY / 2 );
	
					while ( x > -this.scrollerWidth ) {
						this.pages[i] = [];
						l = 0;
						y = 0;
	
						while ( y > -this.scrollerHeight ) {
							this.pages[i][l] = {
								x: Math.max(x, this.maxScrollX),
								y: Math.max(y, this.maxScrollY),
								width: stepX,
								height: stepY,
								cx: x - cx,
								cy: y - cy
							};
	
							y -= stepY;
							l++;
						}
	
						x -= stepX;
						i++;
					}
				} else {
					el = this.options.snap;
					l = el.length;
					n = -1;
	
					for ( ; i < l; i++ ) {
						rect = utils.getRect(el[i]);
						if ( i === 0 || rect.left <= utils.getRect(el[i-1]).left ) {
							m = 0;
							n++;
						}
	
						if ( !this.pages[m] ) {
							this.pages[m] = [];
						}
	
						x = Math.max(-rect.left, this.maxScrollX);
						y = Math.max(-rect.top, this.maxScrollY);
						cx = x - Math.round(rect.width / 2);
						cy = y - Math.round(rect.height / 2);
	
						this.pages[m][n] = {
							x: x,
							y: y,
							width: rect.width,
							height: rect.height,
							cx: cx,
							cy: cy
						};
	
						if ( x > this.maxScrollX ) {
							m++;
						}
					}
				}
	
				this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
	
				// Update snap threshold if needed
				if ( this.options.snapThreshold % 1 === 0 ) {
					this.snapThresholdX = this.options.snapThreshold;
					this.snapThresholdY = this.options.snapThreshold;
				} else {
					this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
					this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
				}
			});
	
			this.on('flick', function () {
				var time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(this.x - this.startX), 1000),
							Math.min(Math.abs(this.y - this.startY), 1000)
						), 300);
	
				this.goToPage(
					this.currentPage.pageX + this.directionX,
					this.currentPage.pageY + this.directionY,
					time
				);
			});
		},
	
		_nearestSnap: function (x, y) {
			if ( !this.pages.length ) {
				return { x: 0, y: 0, pageX: 0, pageY: 0 };
			}
	
			var i = 0,
				l = this.pages.length,
				m = 0;
	
			// Check if we exceeded the snap threshold
			if ( Math.abs(x - this.absStartX) < this.snapThresholdX &&
				Math.abs(y - this.absStartY) < this.snapThresholdY ) {
				return this.currentPage;
			}
	
			if ( x > 0 ) {
				x = 0;
			} else if ( x < this.maxScrollX ) {
				x = this.maxScrollX;
			}
	
			if ( y > 0 ) {
				y = 0;
			} else if ( y < this.maxScrollY ) {
				y = this.maxScrollY;
			}
	
			for ( ; i < l; i++ ) {
				if ( x >= this.pages[i][0].cx ) {
					x = this.pages[i][0].x;
					break;
				}
			}
	
			l = this.pages[i].length;
	
			for ( ; m < l; m++ ) {
				if ( y >= this.pages[0][m].cy ) {
					y = this.pages[0][m].y;
					break;
				}
			}
	
			if ( i == this.currentPage.pageX ) {
				i += this.directionX;
	
				if ( i < 0 ) {
					i = 0;
				} else if ( i >= this.pages.length ) {
					i = this.pages.length - 1;
				}
	
				x = this.pages[i][0].x;
			}
	
			if ( m == this.currentPage.pageY ) {
				m += this.directionY;
	
				if ( m < 0 ) {
					m = 0;
				} else if ( m >= this.pages[0].length ) {
					m = this.pages[0].length - 1;
				}
	
				y = this.pages[0][m].y;
			}
	
			return {
				x: x,
				y: y,
				pageX: i,
				pageY: m
			};
		},
	
		goToPage: function (x, y, time, easing) {
			easing = easing || this.options.bounceEasing;
	
			if ( x >= this.pages.length ) {
				x = this.pages.length - 1;
			} else if ( x < 0 ) {
				x = 0;
			}
	
			if ( y >= this.pages[x].length ) {
				y = this.pages[x].length - 1;
			} else if ( y < 0 ) {
				y = 0;
			}
	
			var posX = this.pages[x][y].x,
				posY = this.pages[x][y].y;
	
			time = time === undefined ? this.options.snapSpeed || Math.max(
				Math.max(
					Math.min(Math.abs(posX - this.x), 1000),
					Math.min(Math.abs(posY - this.y), 1000)
				), 300) : time;
	
			this.currentPage = {
				x: posX,
				y: posY,
				pageX: x,
				pageY: y
			};
	
			this.scrollTo(posX, posY, time, easing);
		},
	
		next: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;
	
			x++;
	
			if ( x >= this.pages.length && this.hasVerticalScroll ) {
				x = 0;
				y++;
			}
	
			this.goToPage(x, y, time, easing);
		},
	
		prev: function (time, easing) {
			var x = this.currentPage.pageX,
				y = this.currentPage.pageY;
	
			x--;
	
			if ( x < 0 && this.hasVerticalScroll ) {
				x = 0;
				y--;
			}
	
			this.goToPage(x, y, time, easing);
		},
	
		_initKeys: function (e) {
			// default key bindings
			var keys = {
				pageUp: 33,
				pageDown: 34,
				end: 35,
				home: 36,
				left: 37,
				up: 38,
				right: 39,
				down: 40
			};
			var i;
	
			// if you give me characters I give you keycode
			if ( typeof this.options.keyBindings == 'object' ) {
				for ( i in this.options.keyBindings ) {
					if ( typeof this.options.keyBindings[i] == 'string' ) {
						this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
					}
				}
			} else {
				this.options.keyBindings = {};
			}
	
			for ( i in keys ) {
				this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
			}
	
			utils.addEvent(window, 'keydown', this);
	
			this.on('destroy', function () {
				utils.removeEvent(window, 'keydown', this);
			});
		},
	
		_key: function (e) {
			if ( !this.enabled ) {
				return;
			}
	
			var snap = this.options.snap,	// we are using this alot, better to cache it
				newX = snap ? this.currentPage.pageX : this.x,
				newY = snap ? this.currentPage.pageY : this.y,
				now = utils.getTime(),
				prevTime = this.keyTime || 0,
				acceleration = 0.250,
				pos;
	
			if ( this.options.useTransition && this.isInTransition ) {
				pos = this.getComputedPosition();
	
				this._translate(Math.round(pos.x), Math.round(pos.y));
				this.isInTransition = false;
			}
	
			this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;
	
			switch ( e.keyCode ) {
				case this.options.keyBindings.pageUp:
					if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
						newX += snap ? 1 : this.wrapperWidth;
					} else {
						newY += snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.pageDown:
					if ( this.hasHorizontalScroll && !this.hasVerticalScroll ) {
						newX -= snap ? 1 : this.wrapperWidth;
					} else {
						newY -= snap ? 1 : this.wrapperHeight;
					}
					break;
				case this.options.keyBindings.end:
					newX = snap ? this.pages.length-1 : this.maxScrollX;
					newY = snap ? this.pages[0].length-1 : this.maxScrollY;
					break;
				case this.options.keyBindings.home:
					newX = 0;
					newY = 0;
					break;
				case this.options.keyBindings.left:
					newX += snap ? -1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.up:
					newY += snap ? 1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.right:
					newX -= snap ? -1 : 5 + this.keyAcceleration>>0;
					break;
				case this.options.keyBindings.down:
					newY -= snap ? 1 : 5 + this.keyAcceleration>>0;
					break;
				default:
					return;
			}
	
			if ( snap ) {
				this.goToPage(newX, newY);
				return;
			}
	
			if ( newX > 0 ) {
				newX = 0;
				this.keyAcceleration = 0;
			} else if ( newX < this.maxScrollX ) {
				newX = this.maxScrollX;
				this.keyAcceleration = 0;
			}
	
			if ( newY > 0 ) {
				newY = 0;
				this.keyAcceleration = 0;
			} else if ( newY < this.maxScrollY ) {
				newY = this.maxScrollY;
				this.keyAcceleration = 0;
			}
	
			this.scrollTo(newX, newY, 0);
	
			this.keyTime = now;
		},
	
		_animate: function (destX, destY, duration, easingFn) {
			var that = this,
				startX = this.x,
				startY = this.y,
				startTime = utils.getTime(),
				destTime = startTime + duration;
	
			function step () {
				var now = utils.getTime(),
					newX, newY,
					easing;
	
				if ( now >= destTime ) {
					that.isAnimating = false;
					that._translate(destX, destY);
	
					if ( !that.resetPosition(that.options.bounceTime) ) {
						that._execEvent('scrollEnd');
					}
	
					return;
				}
	
				now = ( now - startTime ) / duration;
				easing = easingFn(now);
				newX = ( destX - startX ) * easing + startX;
				newY = ( destY - startY ) * easing + startY;
				that._translate(newX, newY);
	
				if ( that.isAnimating ) {
					rAF(step);
				}
	
				if ( that.options.probeType == 3 ) {
					that._execEvent('scroll');
				}
			}
	
			this.isAnimating = true;
			step();
		},
	
		handleEvent: function (e) {
			switch ( e.type ) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
				case 'orientationchange':
				case 'resize':
					this._resize();
					break;
				case 'transitionend':
				case 'webkitTransitionEnd':
				case 'oTransitionEnd':
				case 'MSTransitionEnd':
					this._transitionEnd(e);
					break;
				case 'wheel':
				case 'DOMMouseScroll':
				case 'mousewheel':
					this._wheel(e);
					break;
				case 'keydown':
					this._key(e);
					break;
				case 'click':
					if ( this.enabled && !e._constructed ) {
						e.preventDefault();
						e.stopPropagation();
					}
					break;
			}
		}
	};
	function createDefaultScrollbar (direction, interactive, type) {
		var scrollbar = document.createElement('div'),
			indicator = document.createElement('div');
	
		if ( type === true ) {
			scrollbar.style.cssText = 'position:absolute;z-index:9999';
			indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
		}
	
		indicator.className = 'iScrollIndicator';
	
		if ( direction == 'h' ) {
			if ( type === true ) {
				scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
				indicator.style.height = '100%';
			}
			scrollbar.className = 'iScrollHorizontalScrollbar';
		} else {
			if ( type === true ) {
				scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
				indicator.style.width = '100%';
			}
			scrollbar.className = 'iScrollVerticalScrollbar';
		}
	
		scrollbar.style.cssText += ';overflow:hidden';
	
		if ( !interactive ) {
			scrollbar.style.pointerEvents = 'none';
		}
	
		scrollbar.appendChild(indicator);
	
		return scrollbar;
	}
	
	function Indicator (scroller, options) {
		this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
		this.wrapperStyle = this.wrapper.style;
		this.indicator = this.wrapper.children[0];
		this.indicatorStyle = this.indicator.style;
		this.scroller = scroller;
	
		this.options = {
			listenX: true,
			listenY: true,
			interactive: false,
			resize: true,
			defaultScrollbars: false,
			shrink: false,
			fade: false,
			speedRatioX: 0,
			speedRatioY: 0
		};
	
		for ( var i in options ) {
			this.options[i] = options[i];
		}
	
		this.sizeRatioX = 1;
		this.sizeRatioY = 1;
		this.maxPosX = 0;
		this.maxPosY = 0;
	
		if ( this.options.interactive ) {
			if ( !this.options.disableTouch ) {
				utils.addEvent(this.indicator, 'touchstart', this);
				utils.addEvent(window, 'touchend', this);
			}
			if ( !this.options.disablePointer ) {
				utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
			}
			if ( !this.options.disableMouse ) {
				utils.addEvent(this.indicator, 'mousedown', this);
				utils.addEvent(window, 'mouseup', this);
			}
		}
	
		if ( this.options.fade ) {
			this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
			var durationProp = utils.style.transitionDuration;
			if(!durationProp) {
				return;
			}
			this.wrapperStyle[durationProp] = utils.isBadAndroid ? '0.0001ms' : '0ms';
			// remove 0.0001ms
			var self = this;
			if(utils.isBadAndroid) {
				rAF(function() {
					if(self.wrapperStyle[durationProp] === '0.0001ms') {
						self.wrapperStyle[durationProp] = '0s';
					}
				});
			}
			this.wrapperStyle.opacity = '0';
		}
	}
	
	Indicator.prototype = {
		handleEvent: function (e) {
			switch ( e.type ) {
				case 'touchstart':
				case 'pointerdown':
				case 'MSPointerDown':
				case 'mousedown':
					this._start(e);
					break;
				case 'touchmove':
				case 'pointermove':
				case 'MSPointerMove':
				case 'mousemove':
					this._move(e);
					break;
				case 'touchend':
				case 'pointerup':
				case 'MSPointerUp':
				case 'mouseup':
				case 'touchcancel':
				case 'pointercancel':
				case 'MSPointerCancel':
				case 'mousecancel':
					this._end(e);
					break;
			}
		},
	
		destroy: function () {
			if ( this.options.fadeScrollbars ) {
				clearTimeout(this.fadeTimeout);
				this.fadeTimeout = null;
			}
			if ( this.options.interactive ) {
				utils.removeEvent(this.indicator, 'touchstart', this);
				utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
				utils.removeEvent(this.indicator, 'mousedown', this);
	
				utils.removeEvent(window, 'touchmove', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
				utils.removeEvent(window, 'mousemove', this);
	
				utils.removeEvent(window, 'touchend', this);
				utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
				utils.removeEvent(window, 'mouseup', this);
			}
	
			if ( this.options.defaultScrollbars ) {
				this.wrapper.parentNode.removeChild(this.wrapper);
			}
		},
	
		_start: function (e) {
			var point = e.touches ? e.touches[0] : e;
	
			e.preventDefault();
			e.stopPropagation();
	
			this.transitionTime();
	
			this.initiated = true;
			this.moved = false;
			this.lastPointX	= point.pageX;
			this.lastPointY	= point.pageY;
	
			this.startTime	= utils.getTime();
	
			if ( !this.options.disableTouch ) {
				utils.addEvent(window, 'touchmove', this);
			}
			if ( !this.options.disablePointer ) {
				utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
			}
			if ( !this.options.disableMouse ) {
				utils.addEvent(window, 'mousemove', this);
			}
	
			this.scroller._execEvent('beforeScrollStart');
		},
	
		_move: function (e) {
			var point = e.touches ? e.touches[0] : e,
				deltaX, deltaY,
				newX, newY,
				timestamp = utils.getTime();
	
			if ( !this.moved ) {
				this.scroller._execEvent('scrollStart');
			}
	
			this.moved = true;
	
			deltaX = point.pageX - this.lastPointX;
			this.lastPointX = point.pageX;
	
			deltaY = point.pageY - this.lastPointY;
			this.lastPointY = point.pageY;
	
			newX = this.x + deltaX;
			newY = this.y + deltaY;
	
			this._pos(newX, newY);
	
	
			if ( this.scroller.options.probeType == 1 && timestamp - this.startTime > 300 ) {
				this.startTime = timestamp;
				this.scroller._execEvent('scroll');
			} else if ( this.scroller.options.probeType > 1 ) {
				this.scroller._execEvent('scroll');
			}
	
	
	// INSERT POINT: indicator._move
	
			e.preventDefault();
			e.stopPropagation();
		},
	
		_end: function (e) {
			if ( !this.initiated ) {
				return;
			}
	
			this.initiated = false;
	
			e.preventDefault();
			e.stopPropagation();
	
			utils.removeEvent(window, 'touchmove', this);
			utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
			utils.removeEvent(window, 'mousemove', this);
	
			if ( this.scroller.options.snap ) {
				var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
	
				var time = this.options.snapSpeed || Math.max(
						Math.max(
							Math.min(Math.abs(this.scroller.x - snap.x), 1000),
							Math.min(Math.abs(this.scroller.y - snap.y), 1000)
						), 300);
	
				if ( this.scroller.x != snap.x || this.scroller.y != snap.y ) {
					this.scroller.directionX = 0;
					this.scroller.directionY = 0;
					this.scroller.currentPage = snap;
					this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
				}
			}
	
			if ( this.moved ) {
				this.scroller._execEvent('scrollEnd');
			}
		},
	
		transitionTime: function (time) {
			time = time || 0;
			var durationProp = utils.style.transitionDuration;
			if(!durationProp) {
				return;
			}
	
			this.indicatorStyle[durationProp] = time + 'ms';
	
			if ( !time && utils.isBadAndroid ) {
				this.indicatorStyle[durationProp] = '0.0001ms';
				// remove 0.0001ms
				var self = this;
				rAF(function() {
					if(self.indicatorStyle[durationProp] === '0.0001ms') {
						self.indicatorStyle[durationProp] = '0s';
					}
				});
			}
		},
	
		transitionTimingFunction: function (easing) {
			this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
		},
	
		refresh: function () {
			this.transitionTime();
	
			if ( this.options.listenX && !this.options.listenY ) {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
			} else if ( this.options.listenY && !this.options.listenX ) {
				this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
			} else {
				this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
			}
	
			if ( this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ) {
				utils.addClass(this.wrapper, 'iScrollBothScrollbars');
				utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');
	
				if ( this.options.defaultScrollbars && this.options.customStyle ) {
					if ( this.options.listenX ) {
						this.wrapper.style.right = '8px';
					} else {
						this.wrapper.style.bottom = '8px';
					}
				}
			} else {
				utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
				utils.addClass(this.wrapper, 'iScrollLoneScrollbar');
	
				if ( this.options.defaultScrollbars && this.options.customStyle ) {
					if ( this.options.listenX ) {
						this.wrapper.style.right = '2px';
					} else {
						this.wrapper.style.bottom = '2px';
					}
				}
			}
	
			utils.getRect(this.wrapper);	// force refresh
	
			if ( this.options.listenX ) {
				this.wrapperWidth = this.wrapper.clientWidth;
				if ( this.options.resize ) {
					this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
					this.indicatorStyle.width = this.indicatorWidth + 'px';
				} else {
					this.indicatorWidth = this.indicator.clientWidth;
				}
	
				this.maxPosX = this.wrapperWidth - this.indicatorWidth;
	
				if ( this.options.shrink == 'clip' ) {
					this.minBoundaryX = -this.indicatorWidth + 8;
					this.maxBoundaryX = this.wrapperWidth - 8;
				} else {
					this.minBoundaryX = 0;
					this.maxBoundaryX = this.maxPosX;
				}
	
				this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && (this.maxPosX / this.scroller.maxScrollX));
			}
	
			if ( this.options.listenY ) {
				this.wrapperHeight = this.wrapper.clientHeight;
				if ( this.options.resize ) {
					this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
					this.indicatorStyle.height = this.indicatorHeight + 'px';
				} else {
					this.indicatorHeight = this.indicator.clientHeight;
				}
	
				this.maxPosY = this.wrapperHeight - this.indicatorHeight;
	
				if ( this.options.shrink == 'clip' ) {
					this.minBoundaryY = -this.indicatorHeight + 8;
					this.maxBoundaryY = this.wrapperHeight - 8;
				} else {
					this.minBoundaryY = 0;
					this.maxBoundaryY = this.maxPosY;
				}
	
				this.maxPosY = this.wrapperHeight - this.indicatorHeight;
				this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && (this.maxPosY / this.scroller.maxScrollY));
			}
	
			this.updatePosition();
		},
	
		updatePosition: function () {
			var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0,
				y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
	
			if ( !this.options.ignoreBoundaries ) {
				if ( x < this.minBoundaryX ) {
					if ( this.options.shrink == 'scale' ) {
						this.width = Math.max(this.indicatorWidth + x, 8);
						this.indicatorStyle.width = this.width + 'px';
					}
					x = this.minBoundaryX;
				} else if ( x > this.maxBoundaryX ) {
					if ( this.options.shrink == 'scale' ) {
						this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
						this.indicatorStyle.width = this.width + 'px';
						x = this.maxPosX + this.indicatorWidth - this.width;
					} else {
						x = this.maxBoundaryX;
					}
				} else if ( this.options.shrink == 'scale' && this.width != this.indicatorWidth ) {
					this.width = this.indicatorWidth;
					this.indicatorStyle.width = this.width + 'px';
				}
	
				if ( y < this.minBoundaryY ) {
					if ( this.options.shrink == 'scale' ) {
						this.height = Math.max(this.indicatorHeight + y * 3, 8);
						this.indicatorStyle.height = this.height + 'px';
					}
					y = this.minBoundaryY;
				} else if ( y > this.maxBoundaryY ) {
					if ( this.options.shrink == 'scale' ) {
						this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
						this.indicatorStyle.height = this.height + 'px';
						y = this.maxPosY + this.indicatorHeight - this.height;
					} else {
						y = this.maxBoundaryY;
					}
				} else if ( this.options.shrink == 'scale' && this.height != this.indicatorHeight ) {
					this.height = this.indicatorHeight;
					this.indicatorStyle.height = this.height + 'px';
				}
			}
	
			this.x = x;
			this.y = y;
	
			if ( this.scroller.options.useTransform ) {
				this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
			} else {
				this.indicatorStyle.left = x + 'px';
				this.indicatorStyle.top = y + 'px';
			}
		},
	
		_pos: function (x, y) {
			if ( x < 0 ) {
				x = 0;
			} else if ( x > this.maxPosX ) {
				x = this.maxPosX;
			}
	
			if ( y < 0 ) {
				y = 0;
			} else if ( y > this.maxPosY ) {
				y = this.maxPosY;
			}
	
			x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
			y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
	
			this.scroller.scrollTo(x, y);
		},
	
		fade: function (val, hold) {
			if ( hold && !this.visible ) {
				return;
			}
	
			clearTimeout(this.fadeTimeout);
			this.fadeTimeout = null;
	
			var time = val ? 250 : 500,
				delay = val ? 0 : 300;
	
			val = val ? '1' : '0';
	
			this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';
	
			this.fadeTimeout = setTimeout((function (val) {
				this.wrapperStyle.opacity = val;
				this.visible = +val;
			}).bind(this, val), delay);
		}
	};
	
	IScroll.utils = utils;
	
	if ( typeof module != 'undefined' && module.exports ) {
		module.exports = IScroll;
	} else if ( true ) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () { return IScroll; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.IScroll = IScroll;
	}
	
	})(window, document, Math);


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = ActionSheet;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(37);
	
	var _utils = __webpack_require__(2);
	
	var _Popup = __webpack_require__(3);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var apiInstance = void 0;
	
	/**
	 * action 按钮
	 * @param {object} props see Button.propTypes
	 */
	function Button(props) {
	  var index = props.index;
	  var children = props.children;
	  var cancel = props.cancel;
	  var destroy = props.destroy;
	  var callback = props.callback;
	
	  var className = (0, _utils.classNames)('action-sheet-item', {
	    'action-sheet-item-cancel': cancel,
	    'action-sheet-item-destroy': destroy
	  });
	
	  return _react2.default.createElement(
	    'li',
	    { className: className, onClick: function onClick() {
	        return callback(index);
	      } },
	    _react2.default.createElement(
	      'button',
	      null,
	      children
	    )
	  );
	}
	
	/**
	 * 传入 Button 的属性
	 * @type {Object}
	 * index: 索引
	 * children: 按钮（button）内容
	 * cancel: 是取消按钮？
	 * destroy: 是销毁按钮？
	 * callback: 点击 action 按钮的回调，参数为对应的 action 索引
	 */
	Button.propTypes = {
	  index: _react.PropTypes.number.isRequired,
	  children: _react.PropTypes.node.isRequired,
	  cancel: _react.PropTypes.bool,
	  destroy: _react.PropTypes.bool,
	  callback: _react.PropTypes.func.isRequired
	};
	
	/**
	 * ActionSheet UI
	 * @param {object} props see ActionSheet.propTypes
	 */
	function ActionSheet(props) {
	  var title = props.title;
	  var actions = props.actions;
	  var callback = props.callback;
	  var cancelIndex = props.cancelIndex;
	  var destroyIndex = props.destroyIndex;
	  var className = props.className;
	
	  var others = _objectWithoutProperties(props, ['title', 'actions', 'callback', 'cancelIndex', 'destroyIndex', 'className']);
	
	  className = (0, _utils.classNames)('action-sheet', { _user: className });
	  typeof cancelIndex === 'undefined' && (cancelIndex = actions.length - 1);
	
	  return _react2.default.createElement(
	    'div',
	    _extends({ className: className }, others),
	    title ? _react2.default.createElement(
	      'header',
	      null,
	      title
	    ) : null,
	    _react2.default.createElement(
	      'ol',
	      null,
	      actions.map(function (content, index) {
	        return _react2.default.createElement(
	          Button,
	          {
	            key: index,
	            index: index,
	            cancel: cancelIndex === index,
	            destroy: destroyIndex === index,
	            callback: callback },
	          content
	        );
	      })
	    )
	  );
	}
	
	/**
	 * ActionSheet 的 props
	 * @type {Object}
	 * title: 标题
	 * actions: 多个动作 action[0] === PropTypes.node
	 * callback: 点击动作后的回调
	 * cancelIndex: “取消动作”的索引
	 * destroyIndex: “销毁动作”的索引
	 */
	ActionSheet.propTypes = {
	  title: _react.PropTypes.node,
	  actions: _react.PropTypes.array.isRequired,
	  callback: _react.PropTypes.func.isRequired,
	  cancelIndex: _react.PropTypes.number,
	  destroyIndex: _react.PropTypes.number,
	  className: _react.PropTypes.string
	};
	
	/**
	 * 创建 ActionSheet 的 ApiContainer 实例
	 * @param  {node} container {@see createInstance}
	 * @return {PropTypes.element}           React elment 对象
	 */
	ActionSheet.getInstance = function (container) {
	  return (0, _utils.createInstance)(ApiContainer, container);
	};
	
	/**
	 * 显示全局ActionSheet
	 * @param  {object} props      see ActionSheet.propTypes
	 * @param  {object} popupProps {@see Popup}
	 * @return {[type]}            [description]
	 */
	ActionSheet.show = function (props, popupProps) {
	  apiInstance.show(props, popupProps);
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
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ApiContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      props: {
	        actions: [],
	        callback: function callback() {}
	      },
	      popupProps: {
	        show: false
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(ApiContainer, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var props = _state.props;
	      var popupProps = _state.popupProps;
	
	
	      return _react2.default.createElement(
	        _Popup2.default,
	        popupProps,
	        _react2.default.createElement(ActionSheet, props)
	      );
	    }
	  }, {
	    key: 'show',
	    value: function show(props, popupProps) {
	      props = this._decorateProps(props);
	
	      var nextState = {
	        props: _extends({}, this.state.props, props),
	        popupProps: _extends({}, this.state.popupProps, popupProps, { show: true })
	      };
	
	      this.setState(nextState);
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var nextState = _extends({}, this.state, {
	        popupProps: _extends({}, this.state.popupProps, { show: false })
	      });
	
	      this.setState(nextState);
	    }
	  }, {
	    key: '_decorateProps',
	    value: function _decorateProps(props) {
	      var _this2 = this;
	
	      var callback = props.callback;
	      props.callback = function (index) {
	        callback && callback(index);
	        _this2.hide();
	      };
	
	      return props;
	    }
	  }]);
	
	  return ApiContainer;
	}(_react.Component);
	
	apiInstance = (0, _utils.createInstance)(ApiContainer);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = Button;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	__webpack_require__(38);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * Button UI
	 * @param {object} props see Button.propTypes
	 */
	function Button(props) {
	  var _classNames;
	
	  var type = props.type;
	  var disabled = props.disabled;
	  var href = props.href;
	  var children = props.children;
	  var className = props.className;
	
	  var others = _objectWithoutProperties(props, ['type', 'disabled', 'href', 'children', 'className']);
	
	  className = (0, _utils.classNames)('btn', (_classNames = {
	    '_user': className
	  }, _defineProperty(_classNames, 'btn-' + type, true), _defineProperty(_classNames, 'btn-disabled', disabled), _classNames));
	  var Component = href ? 'a' : 'button';
	
	  return _react2.default.createElement(
	    Component,
	    _extends({
	      className: className,
	      disabled: disabled,
	      href: href
	    }, others),
	    children
	  );
	}
	
	/**
	 * Button 的 props
	 * @type {Object}
	 * type: 按钮类型
	 * disable: 是否禁用？如果定义了 href 属性，此属性无效
	 * href: 超链接，使用 <a />
	 */
	Button.propTypes = {
	  type: _react.PropTypes.oneOf(['default', 'primary', 'warning']),
	  disabled: _react.PropTypes.bool,
	  href: _react.PropTypes.string,
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string
	};
	
	Button.defaultProps = {
	  type: 'default'
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = Cell;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * Cell UI
	 * @param {object} props see Cell.propTypes
	 */
	function Cell(props) {
	  var children = props.children;
	  var className = props.className;
	  var href = props.href;
	  var access = props.access;
	  var arrow = props.arrow;
	  var component = props.component;
	
	  var others = _objectWithoutProperties(props, ['children', 'className', 'href', 'access', 'arrow', 'component']);
	
	  className = (0, _utils.classNames)('cell', {
	    'cell-access': access,
	    'cell-arrow': arrow,
	    _user: className
	  });
	
	  var Component = component ? component : href ? 'a' : 'div';
	
	  return _react2.default.createElement(
	    Component,
	    _extends({}, others, { href: href, className: className }),
	    children
	  );
	}
	
	/**
	 * Cell 的 props
	 * @type {Object}
	 * component: 渲染的组件
	 * href: 超链接
	 * access: 是否有交互状态
	 * arrow: 是否有箭头
	 *
	 */
	Cell.propTypes = {
	  component: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	  href: _react.PropTypes.string,
	  access: _react.PropTypes.bool,
	  arrow: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string
	};
	
	Cell.defaultProps = {
	  access: true,
	  arrow: true
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = CellBody;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * CellBody UI
	 * @param {object} props see CellBody.propTypes
	 */
	function CellBody(props) {
	  var className = props.className;
	  var children = props.children;
	
	  var others = _objectWithoutProperties(props, ['className', 'children']);
	
	  className = (0, _utils.classNames)('cell-body', { _user: className });
	
	  return _react2.default.createElement(
	    'div',
	    _extends({}, others, { className: className }),
	    children
	  );
	}
	
	/**
	 * CellBody 的 props
	 * @type {Object}
	 */
	CellBody.propTypes = {
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = CellFooter;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * CellFooter UI
	 * @param {object} props see CellFooter.propTypes
	 */
	function CellFooter(props) {
	  var className = props.className;
	  var children = props.children;
	
	  var others = _objectWithoutProperties(props, ['className', 'children']);
	
	  className = (0, _utils.classNames)('cell-footer', { _user: className });
	
	  return _react2.default.createElement(
	    'div',
	    _extends({}, others, { className: className }),
	    children
	  );
	}
	
	/**
	 * CellFooter 的 props
	 * @type {Object}
	 */
	CellFooter.propTypes = {
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = CellHeader;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * CellHeader UI
	 * @param {object} props see CellHeader.propTypes
	 */
	function CellHeader(props) {
	  var className = props.className;
	  var children = props.children;
	
	  var others = _objectWithoutProperties(props, ['className', 'children']);
	
	  className = (0, _utils.classNames)('cell-header', { _user: className });
	
	  return _react2.default.createElement(
	    'div',
	    _extends({}, others, { className: className }),
	    children
	  );
	}
	
	/**
	 * CellHeader 的 props
	 * @type {Object}
	 */
	CellHeader.propTypes = {
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = Cells;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * Cells UI
	 * @param {object} props see Cells.propTypes
	 */
	function Cells(props) {
	  var className = props.className;
	  var children = props.children;
	
	  var others = _objectWithoutProperties(props, ['className', 'children']);
	
	  className = (0, _utils.classNames)('cells', { _user: className });
	
	  return _react2.default.createElement(
	    'div',
	    _extends({}, others, { className: className }),
	    children
	  );
	}
	
	/**
	 * Cells 的 props
	 * @type {Object}
	 */
	Cells.propTypes = {
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = CellTips;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * CellTips UI
	 * @param {object} props see CellTips.propTypes
	 */
	function CellTips(props) {
	  var className = props.className;
	  var children = props.children;
	
	  var others = _objectWithoutProperties(props, ['className', 'children']);
	
	  className = (0, _utils.classNames)('cells-tips', { _user: className });
	
	  return _react2.default.createElement(
	    'div',
	    _extends({}, others, { className: className }),
	    children
	  );
	}
	
	/**
	 * CellTips 的 props
	 * @type {Object}
	 */
	CellTips.propTypes = {
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = CellTitle;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * CellTitle UI
	 * @param {object} props see CellTitle.propTypes
	 */
	function CellTitle(props) {
	  var className = props.className;
	  var children = props.children;
	
	  var others = _objectWithoutProperties(props, ['className', 'children']);
	
	  className = (0, _utils.classNames)('cells-title', { _user: className });
	
	  return _react2.default.createElement(
	    'div',
	    _extends({}, others, { className: className }),
	    children
	  );
	}
	
	/**
	 * CellTitle 的 props
	 * @type {Object}
	 */
	CellTitle.propTypes = {
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CellsTips = exports.CellsTitle = exports.Cells = exports.CellHeader = exports.CellFooter = exports.CellBody = exports.Cell = undefined;
	
	__webpack_require__(39);
	
	var _Cell2 = __webpack_require__(15);
	
	var _Cell3 = _interopRequireDefault(_Cell2);
	
	var _CellBody2 = __webpack_require__(16);
	
	var _CellBody3 = _interopRequireDefault(_CellBody2);
	
	var _CellFooter2 = __webpack_require__(17);
	
	var _CellFooter3 = _interopRequireDefault(_CellFooter2);
	
	var _CellHeader2 = __webpack_require__(18);
	
	var _CellHeader3 = _interopRequireDefault(_CellHeader2);
	
	var _Cells2 = __webpack_require__(19);
	
	var _Cells3 = _interopRequireDefault(_Cells2);
	
	var _CellsTitle2 = __webpack_require__(21);
	
	var _CellsTitle3 = _interopRequireDefault(_CellsTitle2);
	
	var _CellsTips2 = __webpack_require__(20);
	
	var _CellsTips3 = _interopRequireDefault(_CellsTips2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Cell = _Cell3.default;
	exports.CellBody = _CellBody3.default;
	exports.CellFooter = _CellFooter3.default;
	exports.CellHeader = _CellHeader3.default;
	exports.Cells = _Cells3.default;
	exports.CellsTitle = _CellsTitle3.default;
	exports.CellsTips = _CellsTips3.default;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = Checkbox;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	var _Icon = __webpack_require__(7);
	
	__webpack_require__(40);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * Checkbox
	 * 渲染 <input type="checkbox" />
	 * @param {object} props see Checkbox.propTypes
	 */
	function Checkbox(props) {
	  var checked = props.checked;
	  var disabled = props.disabled;
	  var className = props.className;
	
	  var others = _objectWithoutProperties(props, ['checked', 'disabled', 'className']);
	
	  className += ' ' + _Icon.IconCheck.className;
	  className = (0, _utils.classNames)('checkbox', { _user: className });
	
	  return _react2.default.createElement('input', _extends({
	    className: className,
	    type: 'checkbox',
	    checked: checked,
	    disabled: disabled
	  }, others));
	}
	
	/**
	 * props
	 * @type {Object}
	 * checked: 是否选中状态
	 * disabled: 是否禁用
	 */
	Checkbox.propTypes = {
	  checked: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  className: _react.PropTypes.string
	};
	
	Checkbox.defaultProps = {
	  className: ''
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	var _Select = __webpack_require__(10);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Popup = __webpack_require__(3);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	__webpack_require__(41);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var apiInstance = void 0;
	var now = new Date();
	
	var DatePicker = function (_Component) {
	  _inherits(DatePicker, _Component);
	
	  function DatePicker() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, DatePicker);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DatePicker)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.yearOptions = [], _this.monthOptions = [], _this.dateOptions = [], _this._cancel = function () {
	      var _this$props = _this.props;
	      var onCancel = _this$props.onCancel;
	      var selectedDate = _this$props.selectedDate;
	
	
	      onCancel && onCancel(selectedDate);
	    }, _this._confirm = function () {
	      var _this$props2 = _this.props;
	      var onConfirm = _this$props2.onConfirm;
	      var selectedDate = _this$props2.selectedDate;
	
	
	      onConfirm && onConfirm(selectedDate);
	    }, _this._changeYear = function (yearIndex) {
	      var selectedDate = _this.props.selectedDate;
	
	      var year = _this.yearOptions[yearIndex].value;
	      var newDate = copyDate(selectedDate);
	      newDate.setFullYear(year);
	
	      _this._change(newDate);
	    }, _this._changeMonth = function (monthIndex) {
	      var selectedDate = _this.props.selectedDate;
	
	      var month = _this.monthOptions[monthIndex].value - 1; // 纠正 getMonth() 的 +1
	      var newDate = copyDate(selectedDate);
	      newDate.setMonth(month);
	
	      // 当前 3-31
	      // 调动月份，值为2，上面结果变为 3-2
	      // 所以这里要校正
	      if (newDate.getMonth() > month) {
	        newDate.setDate(1);
	        newDate.setMonth(month);
	        newDate.setDate(getLastDate(newDate));
	      }
	
	      _this._change(newDate);
	    }, _this._changeDate = function (dateIndex) {
	      var selectedDate = _this.props.selectedDate;
	
	      var date = _this.dateOptions[dateIndex].value;
	      var newDate = copyDate(selectedDate);
	      newDate.setDate(date);
	
	      _this._change(newDate);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  // 方便 _onChange()
	
	
	  _createClass(DatePicker, [{
	    key: '_change',
	    value: function _change(selectedDate) {
	      var onChange = this.props.onChange;
	
	      onChange && onChange(selectedDate);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var title = _props.title;
	      var className = _props.className;
	
	      var others = _objectWithoutProperties(_props, ['title', 'className']);
	
	      var yearOptions = this.yearOptions = this.getYearOptions();
	      var selectedYearIndex = this.getSelectedYearIndex(yearOptions);
	      var monthOptions = this.monthOptions = this.getMonthOptions();
	      var selectedMonthIndex = this.getSelectedMonthIndex(monthOptions);
	      var dateOptions = this.dateOptions = this.getDateOptions();
	      var selectedDateIndex = this.getSelectedDateIndex(dateOptions);
	
	      className = (0, _utils.classNames)('date-picker', { _user: className });
	
	      return _react2.default.createElement(
	        'div',
	        _extends({ className: className }, others),
	        _react2.default.createElement(
	          'div',
	          { className: (0, _utils.classNames)('date-picker-header') },
	          _react2.default.createElement(
	            'button',
	            { onClick: this._cancel },
	            '取消'
	          ),
	          _react2.default.createElement(
	            'em',
	            null,
	            title
	          ),
	          _react2.default.createElement(
	            'button',
	            { onClick: this._confirm },
	            '确定'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: (0, _utils.classNames)('date-picker-body') },
	          _react2.default.createElement(_Select2.default, {
	            key: 'year',
	            options: yearOptions,
	            selectedIndex: selectedYearIndex,
	            onChange: this._changeYear }),
	          _react2.default.createElement(_Select2.default, {
	            key: 'month',
	            options: monthOptions,
	            selectedIndex: selectedMonthIndex,
	            onChange: this._changeMonth }),
	          _react2.default.createElement(_Select2.default, {
	            key: 'date',
	            options: dateOptions,
	            selectedIndex: selectedDateIndex,
	            onChange: this._changeDate })
	        )
	      );
	    }
	  }, {
	    key: 'getYearOptions',
	    value: function getYearOptions() {
	      var _props2 = this.props;
	      var minDate = _props2.minDate;
	      var maxDate = _props2.maxDate;
	
	      var min = minDate.getFullYear();
	      var max = maxDate.getFullYear();
	      var result = formatOptions(min, max, '年');
	
	      return result;
	    }
	  }, {
	    key: 'getSelectedYearIndex',
	    value: function getSelectedYearIndex(options) {
	      var selectedDate = this.props.selectedDate;
	
	      var result = indexOfOptions(options, selectedDate.getFullYear());
	
	      return result;
	    }
	  }, {
	    key: 'getMonthOptions',
	    value: function getMonthOptions() {
	      var _props3 = this.props;
	      var minDate = _props3.minDate;
	      var maxDate = _props3.maxDate;
	      var selectedDate = _props3.selectedDate;
	
	      var min = 1;
	      var max = 12;
	
	      isSameYear(minDate, selectedDate) && (min = getMonth(minDate));
	      isSameYear(maxDate, selectedDate) && (max = getMonth(maxDate));
	
	      var result = formatOptions(min, max, '月');
	
	      return result;
	    }
	  }, {
	    key: 'getSelectedMonthIndex',
	    value: function getSelectedMonthIndex(options) {
	      var selectedDate = this.props.selectedDate;
	
	      var result = indexOfOptions(options, getMonth(selectedDate));
	
	      return result;
	    }
	  }, {
	    key: 'getDateOptions',
	    value: function getDateOptions() {
	      var _props4 = this.props;
	      var minDate = _props4.minDate;
	      var maxDate = _props4.maxDate;
	      var selectedDate = _props4.selectedDate;
	
	      var min = 1;
	      var max = getLastDate(selectedDate);
	
	      isSameYearMonth(minDate, selectedDate) && (min = minDate.getDate());
	      isSameYearMonth(maxDate, selectedDate) && (max = maxDate.getDate());
	
	      var result = formatOptions(min, max, '日');
	
	      return result;
	    }
	  }, {
	    key: 'getSelectedDateIndex',
	    value: function getSelectedDateIndex(options) {
	      var selectedDate = this.props.selectedDate;
	
	      var result = indexOfOptions(options, selectedDate.getDate());
	
	      return result;
	    }
	  }]);
	
	  return DatePicker;
	}(_react.Component);
	
	// 返回 option.value === value 的索引
	
	
	DatePicker.propTypes = {
	  title: _react.PropTypes.string,
	  minDate: _react.PropTypes.object,
	  maxDate: _react.PropTypes.object,
	  selectedDate: _react.PropTypes.object,
	  onChange: _react.PropTypes.func,
	  onConfirm: _react.PropTypes.func,
	  onCancel: _react.PropTypes.func,
	  className: _react.PropTypes.string
	};
	DatePicker.defaultProps = {
	  minDate: now,
	  maxDate: now,
	  selectedDate: now
	};
	
	DatePicker.getInstance = function (container) {
	  return (0, _utils.createInstance)(ApiContainer, container);
	};
	
	DatePicker.show = function (props, popupProps) {
	  apiInstance.show(props, popupProps);
	};
	
	exports.default = DatePicker;
	function indexOfOptions(options, value) {
	  var result = -1;
	  for (var i = options.length - 1; i >= 0; i--) {
	    if (options[i].value === value) {
	      result = i;
	      break;
	    }
	  }
	
	  return result;
	}
	
	// 格式化 options
	function formatOptions(min, max) {
	  var suffix = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
	
	  var result = [];
	
	  while (min <= max) {
	    result.push({
	      name: min + suffix,
	      value: min
	    });
	    min++;
	  }
	
	  return result;
	}
	
	// 获取本月的最后一日的日期
	function getLastDate(date) {
	  var tmp = new Date(date.getTime());
	  tmp.setDate(1);
	  tmp.setMonth(tmp.getMonth() + 1);
	  tmp.setDate(0);
	
	  return tmp.getDate();
	}
	
	// 返回月份，补 +1
	function getMonth(date) {
	  return date.getMonth() + 1;
	}
	
	// 是否同年
	function isSameYear(date1, date2) {
	  return date1.getFullYear() === date2.getFullYear();
	}
	
	// 是否同年月
	function isSameYearMonth(date1, date2) {
	  return isSameYear(date1, date2) && date1.getMonth() === date2.getMonth();
	}
	
	// copy Date 实例
	function copyDate(date) {
	  var newDate = new Date(date.getTime());
	
	  return newDate;
	}
	
	var ApiContainer = function (_Component2) {
	  _inherits(ApiContainer, _Component2);
	
	  function ApiContainer() {
	    var _Object$getPrototypeO2;
	
	    var _temp2, _this2, _ret2;
	
	    _classCallCheck(this, ApiContainer);
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(ApiContainer)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this2), _this2.state = {
	      popupProps: {
	        show: false
	      }
	    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
	  }
	
	  _createClass(ApiContainer, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var props = _state.props;
	      var popupProps = _state.popupProps;
	
	
	      return _react2.default.createElement(
	        _Popup2.default,
	        popupProps,
	        _react2.default.createElement(DatePicker, props)
	      );
	    }
	  }, {
	    key: 'show',
	    value: function show(props, popupProps) {
	      props = this._decorateProps(props);
	
	      var nextState = {
	        props: _extends({}, this.state.props, props),
	        popupProps: _extends({}, this.state.popupProps, popupProps, { show: true })
	      };
	
	      this.setState(nextState);
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var nextState = _extends({}, this.state, {
	        popupProps: _extends({}, this.state.popupProps, { show: false })
	      });
	
	      this.setState(nextState);
	    }
	  }, {
	    key: '_decorateProps',
	    value: function _decorateProps(props) {
	      var _this3 = this;
	
	      var onCancel = props.onCancel;
	      var onConfirm = props.onConfirm;
	      var onChange = props.onChange;
	
	      props.onChange = function (selectedDate) {
	        onChange && onChange(onChange);
	
	        // update state.props
	        var nextState = _extends({}, _this3.state, {
	          props: _extends({}, _this3.state.props, {
	            selectedDate: selectedDate
	          })
	        });
	
	        _this3.setState(nextState);
	      };
	
	      props.onCancel = function (selectedDate) {
	        onCancel && onCancel(selectedDate);
	        _this3.hide();
	      };
	
	      props.onConfirm = function (selectedDate) {
	        onConfirm && onConfirm(selectedDate);
	        _this3.hide();
	      };
	
	      return props;
	    }
	  }]);
	
	  return ApiContainer;
	}(_react.Component);
	
	apiInstance = (0, _utils.createInstance)(ApiContainer);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = Dialog;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	var _Fade = __webpack_require__(6);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	var _Mask = __webpack_require__(8);
	
	var _Mask2 = _interopRequireDefault(_Mask);
	
	__webpack_require__(42);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var apiInstance = null;
	
	/**
	 * 对话框按钮
	 * @param {object} props 传统组件的 props
	 * @property {string} props.text [description]
	 * ...others
	 */
	function Button(props) {
	  var text = props.text;
	
	  var others = _objectWithoutProperties(props, ['text']);
	
	  return _react2.default.createElement(
	    'button',
	    others,
	    text
	  );
	}
	
	Button.propTypes = {
	  text: _react.PropTypes.string
	};
	
	/**
	 * Dialog UI
	 * @param {object} props see Dialog.propTypes
	 */
	function Dialog(props) {
	  var title = props.title;
	  var content = props.content;
	  var buttons = props.buttons;
	  var className = props.className;
	  var maskProps = props.maskProps;
	
	  var others = _objectWithoutProperties(props, ['title', 'content', 'buttons', 'className', 'maskProps']);
	
	  className = (0, _utils.classNames)('dialog', { _user: className });
	
	  return _react2.default.createElement(
	    _Mask2.default,
	    maskProps,
	    _react2.default.createElement(
	      'div',
	      _extends({ className: className }, others),
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
	        'div',
	        { className: (0, _utils.classNames)('dialog-body') },
	        content
	      ),
	      _react2.default.createElement(
	        'footer',
	        null,
	        buttons.map(function (button, index) {
	          return _react2.default.createElement(Button, _extends({ key: index }, button));
	        })
	      )
	    )
	  );
	}
	
	/**
	 * props
	 * @type {Object}
	 * title: 标题
	 * content: 内容
	 * buttons: 按钮组
	 */
	Dialog.propTypes = {
	  title: _react.PropTypes.string,
	  content: _react.PropTypes.node,
	  buttons: _react.PropTypes.array, // [{text: '', onClik: () => {}}]
	  maskProps: _react.PropTypes.shape(_Mask2.default.propTypes),
	  className: _react.PropTypes.string
	};
	
	Dialog.defaultProps = {
	  buttons: [],
	  maskProps: _Mask2.default.defaultProps
	};
	
	Dialog.getInstance = function (container) {
	  return (0, _utils.createInstance)(ApiContainer, container);
	};
	
	Dialog.show = function (props, fadeProps) {
	  apiInstance.show(props, fadeProps);
	};
	
	/**
	 * 为 Dialog 组件提供 API 交互
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
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ApiContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      fadeProps: {
	        show: false
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(ApiContainer, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var props = _state.props;
	      var fadeProps = _state.fadeProps;
	
	
	      return _react2.default.createElement(
	        _Fade2.default,
	        fadeProps,
	        _react2.default.createElement(Dialog, props)
	      );
	    }
	  }, {
	    key: 'show',
	    value: function show(props, fadeProps) {
	      // decorate
	      props = this._decorateProps(props);
	
	      var nextState = {
	        props: _extends({}, this.state.props, props),
	        fadeProps: _extends({}, this.state.fadeProps, fadeProps, { show: true })
	      };
	
	      this.setState(nextState);
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      var nextState = _extends({}, this.state, {
	        fadeProps: _extends({}, this.state.fadeProps, { show: false })
	      });
	      this.setState(nextState);
	    }
	  }, {
	    key: '_decorateProps',
	    value: function _decorateProps(props) {
	      var _this2 = this;
	
	      if (!props.buttons) {
	        return props;
	      }
	
	      props.buttons.map(function (button) {
	        var onClick = button.onClick;
	        button.onClick = function (e) {
	          onClick && onClick(e);
	          _this2.hide();
	        };
	      });
	
	      return props;
	    }
	  }]);
	
	  return ApiContainer;
	}(_react.Component);
	
	apiInstance = (0, _utils.createInstance)(ApiContainer);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = IconAttention;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * IconAttention UI
	 * @param {object} props see IconAttention.propTypes
	 */
	function IconAttention(props) {
	  var size = props.size;
	  var className = props.className;
	  var style = props.style;
	
	  var others = _objectWithoutProperties(props, ['size', 'className', 'style']);
	
	  className = (0, _utils.classNames)('icon-attention', { '_user': className });
	  style = _extends({}, style, {
	    height: size,
	    width: size,
	    fontSize: size
	  });
	
	  return _react2.default.createElement('i', _extends({ className: className, style: style }, others));
	}
	
	/**
	 * 其他元素可以直接使用这个 class
	 * @type {string}
	 */
	IconAttention.className = (0, _utils.classNames)('icon-attention');
	
	/**
	 * props
	 * @type {Object}
	 * size: 大小
	 */
	IconAttention.propTypes = {
	  size: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  style: _react.PropTypes.object
	};
	
	IconAttention.defaultProps = {
	  size: '40px'
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = IconCheck;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * IconCheck UI
	 * @param {object} props see IconCheck.propTypes
	 */
	function IconCheck(props) {
	  var size = props.size;
	  var className = props.className;
	  var style = props.style;
	
	  var others = _objectWithoutProperties(props, ['size', 'className', 'style']);
	
	  className = (0, _utils.classNames)('icon-check', { '_user': className });
	  style = _extends({}, style, {
	    height: size,
	    width: size,
	    fontSize: size
	  });
	
	  return _react2.default.createElement('i', _extends({ className: className, style: style }, others));
	}
	
	/**
	 * 其他元素可以直接使用这个 class
	 * @type {string}
	 */
	IconCheck.className = (0, _utils.classNames)('icon-check');
	
	/**
	 * props
	 * @type {Object}
	 * size: 大小
	 */
	IconCheck.propTypes = {
	  size: _react.PropTypes.string,
	  className: _react.PropTypes.string,
	  style: _react.PropTypes.object
	};
	
	IconCheck.defaultProps = {
	  size: '40px'
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = IconLoading;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * IconLoading UI
	 * @param {object} props see IconLoading.propTypes
	 */
	function IconLoading(props) {
	  var scale = props.scale;
	  var className = props.className;
	  var style = props.style;
	
	  var others = _objectWithoutProperties(props, ['scale', 'className', 'style']);
	
	  var leafs = createLeafs();
	  className = (0, _utils.classNames)('icon-loading', { _user: className });
	  style = _extends({}, style, {
	    transform: 'scale(' + scale + ')'
	  });
	
	  return _react2.default.createElement(
	    'div',
	    _extends({ className: className, style: style }, others),
	    leafs
	  );
	}
	
	/**
	 * props
	 * @type {Object}
	 * scale: 缩放，影响视图大小
	 */
	IconLoading.propTypes = {
	  scale: _react.PropTypes.number,
	  className: _react.PropTypes.string,
	  style: _react.PropTypes.object
	};
	
	IconLoading.defaultProps = {
	  scale: 1
	};
	
	var count = 12;
	var opacityUnit = 1 / (count + 13);
	
	function createLeafs() {
	  var leafs = [];
	  var className = void 0,
	      rotate = void 0,
	      style = void 0;
	
	  for (var i = 0; i < count; i++) {
	    className = (0, _utils.classNames)('icon-loading-leaf', 'icon-loading-leaf-' + i);
	    rotate = i * 30;
	    style = {
	      transform: 'rotate(' + rotate + 'deg)',
	      opacity: 1 - opacityUnit * i
	    };
	    leafs.push(_react2.default.createElement('i', { key: i, className: className, style: style }));
	  }
	
	  return leafs;
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	__webpack_require__(45);
	
	var _ScrollView = __webpack_require__(9);
	
	var _ScrollView2 = _interopRequireDefault(_ScrollView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * ListView UI
	 * @param {object} props see static propTypes
	 */
	
	var ListView = function (_Component) {
	  _inherits(ListView, _Component);
	
	  function ListView() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ListView);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ListView)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.iscroller = null, _this._refreshIscroller = function () {
	      _this.iscroller.refresh();
	    }, _this._onLoadMore = function () {
	      var _this$props = _this.props;
	      var loadMoreState = _this$props.loadMoreState;
	      var onLoadMore = _this$props.onLoadMore;
	
	
	      if (loadMoreState === 'loading' || loadMoreState === 'end') {
	        return;
	      }
	
	      onLoadMore();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  /**
	   * props
	   * @type {Object}
	   * data: 数据
	   * renderRow: 渲染每行数据，参数是 [data[index], index]
	   * shouldRefreshIscroller: 是否需要 refresh iscroll，参数是 [props.data, nextProps.data]
	   * renderRefresh: 渲染下拉刷新交互组件，参数是 [refreshState]
	   * offsetRefresh: 下拉距离超过该值，应该改变 refreshState
	   * refreshState: 下拉刷新状态
	   * onNormalRefresh: 告知父组件应该将 refreshState 设置为 normal
	   * onReadyRefresh: 告知父组件应该将 refreshState 设置为 ready
	   * onRefresh: 告知父组件应该将 refreshState 设置为 loading
	   * renderLoadMore: 渲染加载更多的交互组件
	   * offsetLoadMore: ListView 底部距离视口距离小于该值，应该改变 loadMoreState
	   * onLoadMore: 告知父组件应该将 loadMoreState 设置为 loading
	   */
	
	
	  // iscroll 实例
	
	
	  _createClass(ListView, [{
	    key: 'scrollToTop',
	    value: function scrollToTop() {
	      this.iscroller.scrollTo(0, 0, 600);
	    }
	
	    // 点击按钮刷新，需要滚动到顶部
	
	  }, {
	    key: 'scrollToRefresh',
	    value: function scrollToRefresh() {
	      this.iscroller.offsetY = this.props.offsetRefresh;
	      this.scrollToTop();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var data = _props.data;
	      var renderRow = _props.renderRow;
	      var renderRefresh = _props.renderRefresh;
	      var refreshState = _props.refreshState;
	      var renderLoadMore = _props.renderLoadMore;
	      var loadMoreState = _props.loadMoreState;
	      var className = _props.className;
	      var shouldRefreshIscroller = _props.shouldRefreshIscroller;
	
	      var others = _objectWithoutProperties(_props, ['data', 'renderRow', 'renderRefresh', 'refreshState', 'renderLoadMore', 'loadMoreState', 'className', 'shouldRefreshIscroller']);
	
	      className = (0, _utils.classNames)('list-view', { _user: className });
	
	      return _react2.default.createElement(
	        _ScrollView2.default,
	        _extends({
	          ref: 'scrollView',
	          className: className,
	          height: '100%',
	          width: '100%'
	        }, others),
	        _react2.default.createElement(
	          'div',
	          { className: (0, _utils.classNames)('list-view-refresh') },
	          renderRefresh(refreshState)
	        ),
	        _react2.default.createElement(
	          List,
	          {
	            data: data,
	            shouldRefreshIscroller: shouldRefreshIscroller,
	            refreshIscroller: this._refreshIscroller },
	          _react2.default.createElement(
	            'div',
	            { className: (0, _utils.classNames)('list-view-list') },
	            data.map(renderRow)
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          {
	            className: (0, _utils.classNames)('list-view-load-more'),
	            onClick: this._onLoadMore },
	          renderLoadMore(loadMoreState)
	        )
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.iscroller = this.refs.scrollView.iscroller;
	
	      this._bindLoadMore();
	      this._bindRefresh();
	
	      // 刷新 iscroller，每次 data 变化都要在 List 组件内执行这个刷新
	      this._refreshIscroller();
	      // 如果 refreshState=loading 需要设置 iscroller.offsetY
	      this._updateOffsetY();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._updateOffsetY();
	    }
	  }, {
	    key: '_updateOffsetY',
	    value: function _updateOffsetY() {
	      var _props2 = this.props;
	      var offsetRefresh = _props2.offsetRefresh;
	      var refreshState = _props2.refreshState;
	
	
	      this.iscroller.offsetY = refreshState === 'loading' ? offsetRefresh : 0;
	    }
	  }, {
	    key: '_bindLoadMore',
	    value: function _bindLoadMore() {
	      var _this2 = this;
	
	      var offsetLoadMore = this.props.offsetLoadMore;
	
	      var iscroller = this.iscroller;
	
	      iscroller.on('scroll', function () {
	        // 判断距离
	        if (iscroller.maxScrollY - iscroller.y > offsetLoadMore) {
	          _this2._onLoadMore();
	        }
	      });
	    }
	  }, {
	    key: '_bindRefresh',
	    value: function _bindRefresh() {
	      var _this3 = this;
	
	      var _props3 = this.props;
	      var offsetRefresh = _props3.offsetRefresh;
	      var onReadyRefresh = _props3.onReadyRefresh;
	      var onNormalRefresh = _props3.onNormalRefresh;
	      var onRefresh = _props3.onRefresh;
	
	      var iscroller = this.iscroller;
	
	      iscroller.on('scroll', function () {
	        var refreshState = _this3.props.refreshState;
	
	        var y = iscroller.y;
	
	        if (y < 0 || refreshState === 'loading') {
	          return;
	        }
	
	        // 下拉距离超过 offsetRefresh 激活状态
	        if (iscroller.y > offsetRefresh) {
	          refreshState !== 'ready' && onReadyRefresh();
	        } else {
	          refreshState !== 'normal' && onNormalRefresh();
	        }
	      });
	
	      iscroller.on('touchEnd', function () {
	        var refreshState = _this3.props.refreshState;
	
	
	        if (refreshState !== 'ready') {
	          return;
	        }
	
	        onRefresh();
	      });
	    }
	  }]);
	
	  return ListView;
	}(_react.Component);
	
	// 这一切都是为了调用 this.props.refreshIscroller();
	
	
	ListView.propTypes = {
	  data: _react.PropTypes.array.isRequired,
	  renderRow: _react.PropTypes.func.isRequired,
	  shouldRefreshIscroller: _react.PropTypes.func.isRequired,
	  renderRefresh: _react.PropTypes.func,
	  offsetRefresh: _react.PropTypes.number,
	  refreshState: _react.PropTypes.oneOf(['none', 'normal', 'ready', 'loading']),
	  onNormalRefresh: _react.PropTypes.func,
	  onReadyRefresh: _react.PropTypes.func,
	  onRefresh: _react.PropTypes.func,
	  renderLoadMore: _react.PropTypes.func,
	  offsetLoadMore: _react.PropTypes.number,
	  loadMoreState: _react.PropTypes.oneOf(['none', 'normal', 'loading', 'end', 'fail']),
	  onLoadMore: _react.PropTypes.func,
	  className: _react.PropTypes.string
	};
	ListView.defaultProps = {
	  offsetRefresh: 60,
	  offsetLoadMore: 6,
	  refreshState: 'none',
	  loadMoreState: 'none',
	  renderRefresh: renderRefresh,
	  renderLoadMore: renderLoadMore
	};
	ListView.renderRefresh = renderRefresh;
	ListView.renderLoadMore = renderLoadMore;
	exports.default = ListView;
	
	var List = function (_Component2) {
	  _inherits(List, _Component2);
	
	  function List() {
	    _classCallCheck(this, List);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
	  }
	
	  _createClass(List, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.shouldRefreshIscroller(this.props.data, nextProps.data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;
	
	
	      return children.length === 0 ? null : children;
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var refreshIscroller = this.props.refreshIscroller;
	      // 为了调用这个方法才抽象出 List 组件的
	
	      refreshIscroller();
	    }
	  }]);
	
	  return List;
	}(_react.Component);
	
	List.propTypes = {
	  data: _react.PropTypes.array.isRequired,
	  shouldRefreshIscroller: _react.PropTypes.func.isRequired,
	  refreshIscroller: _react.PropTypes.func.isRequired,
	  children: _react.PropTypes.node.isRequired
	};
	
	
	function renderRefresh(status) {
	  switch (status) {
	    case 'none':
	      return null;
	    case 'normal':
	      return _react2.default.createElement(
	        'p',
	        null,
	        '下拉刷新'
	      );
	    case 'ready':
	      return _react2.default.createElement(
	        'p',
	        null,
	        '松手即可刷新'
	      );
	    case 'loading':
	      return _react2.default.createElement(
	        'p',
	        null,
	        '加载中...'
	      );
	  }
	
	  return null;
	}
	
	function renderLoadMore(status) {
	  switch (status) {
	    case 'none':
	      return null;
	    case 'normal':
	      return _react2.default.createElement(
	        'p',
	        null,
	        '点击，加载更多'
	      );
	    case 'loading':
	      return _react2.default.createElement(
	        'p',
	        null,
	        '加载中...'
	      );
	    case 'end':
	      return _react2.default.createElement(
	        'p',
	        null,
	        '没有数据了'
	      );
	    case 'fail':
	      return _react2.default.createElement(
	        'p',
	        null,
	        '加载失败，请点击重新加载'
	      );
	  }
	
	  return null;
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = Notification;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(4);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _utils = __webpack_require__(2);
	
	var _Popup = __webpack_require__(3);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	__webpack_require__(47);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var apiInstance = null;
	
	/**
	 * Notification UI
	 * @param {object} props see Notification.propTypes
	 */
	function Notification(props) {
	  var className = props.className;
	  var content = props.content;
	
	  var others = _objectWithoutProperties(props, ['className', 'content']);
	
	  className = (0, _utils.classNames)('notification', { _user: className });
	
	  return _react2.default.createElement(
	    'div',
	    _extends({ className: className }, content, others),
	    content
	  );
	}
	
	/**
	 * props
	 * @type {Object}
	 * content: 通知内容（不限于文本）
	 */
	Notification.propTypes = {
	  className: _react.PropTypes.string,
	  content: _react.PropTypes.node
	};
	
	Notification.show = function (props, time) {
	  apiInstance.show(props, time);
	};
	
	Notification.getInstance = function (container) {
	  return (0, _utils.createInstance)(ApiContainer, container);
	};
	
	//
	var duration = 300;
	var timingFunction = 'ease';
	// ID 生成器
	function getId() {
	  return getId.id++;
	}
	getId.id = 0;
	
	var ApiContainer = function (_Component) {
	  _inherits(ApiContainer, _Component);
	
	  function ApiContainer() {
	    var _Object$getPrototypeO;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ApiContainer);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ApiContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      popupProps: {
	        show: false,
	        className: (0, _utils.classNames)('notification-popup'),
	        direction: 'top'
	      },
	      notification: [] // 永远只有一个值的数组
	    }, _this.timer = null, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(ApiContainer, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var notification = _state.notification;
	      var popupProps = _state.popupProps;
	
	      var children = notification.map(function (item) {
	        var _id = item._id;
	        var style = item.style;
	
	        var others = _objectWithoutProperties(item, ['_id', 'style']);
	
	        style = _extends({}, style, {
	          transitionDuration: duration + 'ms',
	          transitionTimingFunction: timingFunction
	        });
	        return _react2.default.createElement(Notification, _extends({ key: _id, style: style }, others));
	      });
	
	      return _react2.default.createElement(
	        _Popup2.default,
	        popupProps,
	        _react2.default.createElement(
	          _reactAddonsCssTransitionGroup2.default,
	          {
	            component: 'div',
	            className: (0, _utils.classNames)('notification-container'),
	            transitionName: (0, _utils.classNames)('notification'),
	            transitionEnterTimeout: duration,
	            transitionLeaveTimeout: duration },
	          children
	        )
	      );
	    }
	  }, {
	    key: 'show',
	    value: function show(props, popupProps) {
	      var _this2 = this;
	
	      var time = arguments.length <= 2 || arguments[2] === undefined ? 4000 : arguments[2];
	
	      props['_id'] = getId();
	      var notification = [props];
	
	      var nextState = {
	        notification: notification,
	        popupProps: _extends({}, this.state.popupProps, {
	          show: true
	        })
	      };
	      this.setState(nextState);
	
	      clearTimeout(this.timer);
	      this.timer = setTimeout(function () {
	        _this2._hide();
	      }, time);
	    }
	  }, {
	    key: '_hide',
	    value: function _hide() {
	      var nextState = _extends({}, this.state, {
	        popupProps: _extends({}, this.state.popupProps, {
	          show: false
	        })
	      });
	
	      this.setState(nextState);
	    }
	  }]);
	
	  return ApiContainer;
	}(_react.Component);
	
	apiInstance = (0, _utils.createInstance)(ApiContainer);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = Page;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	var _ChildContainer = __webpack_require__(5);
	
	var _ChildContainer2 = _interopRequireDefault(_ChildContainer);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(4);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	__webpack_require__(48);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var timeout = 500;
	var duration = 400;
	var timingFunction = 'ease';
	
	/**
	 * Page UI
	 * 应该用于单页应用，配合 react-router 使用
	 * @param {object} props see Page.propTypes
	 */
	function Page(props) {
	  var className = props.className;
	  var style = props.style;
	  var children = props.children;
	
	  var others = _objectWithoutProperties(props, ['className', 'style', 'children']);
	
	  className = (0, _utils.classNames)('page', { _user: className });
	  style = _extends({}, style, {
	    transitionDuration: duration + 'ms',
	    transitionTimingFunction: timingFunction
	  });
	
	  return _react2.default.createElement(
	    'div',
	    _extends({ className: className, style: style }, others),
	    children
	  );
	}
	
	/**
	 * props
	 * @type {Object}
	 */
	Page.propTypes = {
	  style: _react.PropTypes.object,
	  className: _react.PropTypes.string,
	  children: _react.PropTypes.node
	};
	
	// 暴露啦
	Page.Scene = Scene;
	
	/**
	 * Scene 过场动画
	 * 根据 react-router 的 location.action 定义不同的过场动画
	 *   * PUSH
	 *   * POP
	 *   * REPLACE
	 * @param {object} props see Scene.propTypes
	 */
	function Scene(props) {
	  var className = props.className;
	  var children = props.children;
	  var action = props.action;
	
	  var others = _objectWithoutProperties(props, ['className', 'children', 'action']);
	
	  className = (0, _utils.classNames)('page-scene', { _user: className });
	  action = action.toLowerCase();
	
	  return _react2.default.createElement(
	    _reactAddonsCssTransitionGroup2.default,
	    {
	      component: 'div',
	      transitionName: (0, _utils.classNames)('page-scene-' + action),
	      transitionEnterTimeout: timeout,
	      transitionLeaveTimeout: timeout,
	      className: className },
	    children
	  );
	}
	
	/**
	 * props
	 * @type {Object}
	 */
	Scene.propTypes = {
	  action: _react.PropTypes.oneOf(['push', 'pop', 'replace', 'PUSH', 'POP', 'REPLACE']),
	  children: _react.PropTypes.node,
	  className: _react.PropTypes.string
	};
	
	Scene.defaultProps = {
	  action: 'push'
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = Switch;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	__webpack_require__(52);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * Switch 开关，其实就是漂亮的 checkbox
	 * 渲染 <input type="checkbox" />
	 */
	function Switch(props) {
	  var className = props.className;
	
	  var others = _objectWithoutProperties(props, ['className']);
	
	  className = (0, _utils.classNames)('switch', { _user: className });
	
	  return _react2.default.createElement('input', _extends({
	    className: className,
	    type: 'checkbox'
	  }, others));
	}
	
	/**
	 * props
	 * @type {Object}
	 */
	Switch.propTypes = {
	  className: _react.PropTypes.string
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = TabBar;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	var _TabBarItem = __webpack_require__(11);
	
	var _TabBarItem2 = _interopRequireDefault(_TabBarItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	/**
	 * TabBar UI
	 * @param {object} props see TabBar.propTypes
	 */
	function TabBar(props) {
	  var barColor = props.barColor;
	  var lineColor = props.lineColor;
	  var color = props.color;
	  var selectedColor = props.selectedColor;
	  var translucent = props.translucent;
	  var children = props.children;
	  var className = props.className;
	
	  var others = _objectWithoutProperties(props, ['barColor', 'lineColor', 'color', 'selectedColor', 'translucent', 'children', 'className']);
	
	  className = (0, _utils.classNames)('tab-bar', {
	    '_user': className,
	    'tab-bar-translucent': translucent
	  });
	  var barStyle = {
	    backgroundColor: barColor
	  };
	  var lineStyle = {
	    backgroundColor: lineColor
	  };
	
	  return _react2.default.createElement(
	    'div',
	    _extends({ className: className }, others),
	    _react2.default.createElement(
	      'div',
	      { className: (0, _utils.classNames)('tab-bar-body') },
	      children
	    ),
	    _react2.default.createElement(
	      'footer',
	      { style: barStyle },
	      _react2.default.createElement('div', { style: lineStyle }),
	      _react2.default.createElement(
	        'ul',
	        null,
	        children.map(function (child, index) {
	          var props = _extends({}, child.props);
	
	          return _react2.default.createElement(Button, _extends({
	            key: index,
	            color: color,
	            selectedColor: selectedColor
	          }, props));
	        })
	      )
	    )
	  );
	}
	
	/**
	 * props
	 * @type {Object}
	 * barColor: 导航条颜色
	 * lineColor: 线条颜色
	 * color: tab 内容颜色
	 * translucent: 是否半透明
	 */
	TabBar.propTypes = {
	  barColor: _react.PropTypes.string,
	  lineColor: _react.PropTypes.string,
	  color: _react.PropTypes.string,
	  selectedColor: _react.PropTypes.string,
	  translucent: _react.PropTypes.bool
	};
	
	TabBar.defaultProps = {
	  barColor: '#f7f7fa',
	  lineColor: '#979797',
	  color: '#888',
	  selectedColor: '#09bb07',
	  translucent: false
	};
	
	TabBar.Item = _TabBarItem2.default;
	
	function Button(props) {
	  var
	  // from TabBar
	  color = props.color;
	  var selectedColor = props.selectedColor;
	  var
	  // from TabBarItem
	  selected = props.selected;
	  var icon = props.icon;
	  var selectedIcon = props.selectedIcon;
	  var title = props.title;
	  var badge = props.badge;
	  var onClick = props.onClick;
	  var className = props.className;
	
	  var others = _objectWithoutProperties(props, ['color', 'selectedColor', 'selected', 'icon', 'selectedIcon', 'title', 'badge', 'onClick', 'className']);
	
	  className = (0, _utils.classNames)('tab-bar-item', {
	    '_user': className,
	    'tab-bar-item-selected': selected
	  });
	  var iconClass = selected && selectedIcon ? selectedIcon : icon;
	  var style = {
	    color: selected ? selectedColor : color
	  };
	
	  return _react2.default.createElement(
	    'li',
	    _extends({ className: className, onClick: onClick }, others),
	    _react2.default.createElement(
	      'div',
	      { className: (0, _utils.classNames)('tab-bar-item-label') },
	      _react2.default.createElement('i', { className: iconClass, style: style }),
	      typeof badge !== 'undefined' ? _react2.default.createElement(
	        'span',
	        null,
	        badge
	      ) : null
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: (0, _utils.classNames)('tab-bar-item-title'), style: style },
	      title
	    )
	  );
	}
	
	Button.propTypes = _extends({
	  // from TabBar
	  color: TabBar.propTypes.color,
	  selectedColor: TabBar.propTypes.selectedColor
	}, _TabBarItem2.default.propTypes);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TabBarItem = exports.TabBar = undefined;
	
	__webpack_require__(53);
	
	var _TabBar2 = __webpack_require__(33);
	
	var _TabBar3 = _interopRequireDefault(_TabBar2);
	
	var _TabBarItem2 = __webpack_require__(11);
	
	var _TabBarItem3 = _interopRequireDefault(_TabBarItem2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.TabBar = _TabBar3.default;
	exports.TabBarItem = _TabBarItem3.default;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = Toast;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(2);
	
	var _Icon = __webpack_require__(7);
	
	var _Fade = __webpack_require__(6);
	
	var _Fade2 = _interopRequireDefault(_Fade);
	
	__webpack_require__(54);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var apiInstance = null;
	
	function Toast(props) {
	  var icon = props.icon;
	  var content = props.content;
	  var className = props.className;
	
	  var others = _objectWithoutProperties(props, ['icon', 'content', 'className']);
	
	  className = (0, _utils.classNames)('toast', { _user: className });
	
	  return _react2.default.createElement(
	    'div',
	    _extends({ className: className }, others),
	    icon ? _react2.default.createElement(
	      'div',
	      null,
	      mapIcon(icon)
	    ) : null,
	    _react2.default.createElement(
	      'p',
	      null,
	      content
	    )
	  );
	}
	
	Toast.propTypes = {
	  icon: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.oneOf(['loading', 'attention'])]),
	  content: _react.PropTypes.node.isRequired,
	  className: _react.PropTypes.string
	};
	
	Toast.getInstance = function (container) {
	  (0, _utils.createInstance)(ApiContainer, container);
	};
	
	Toast.show = function (props, fadeProps, time) {
	  apiInstance.show(props, fadeProps, time);
	};
	
	Toast.hide = function () {
	  apiInstance.hide();
	};
	
	Toast.showLoading = function (props, fadeProps) {
	  apiInstance.showLoading(props, fadeProps);
	};
	
	Toast.hideLoading = function () {
	  apiInstance.hideLoading();
	};
	
	function mapIcon(icon) {
	  switch (icon) {
	    case 'loading':
	      return _react2.default.createElement(_Icon.IconLoading, null);
	    case 'attention':
	      return _react2.default.createElement(_Icon.IconAttention, null);
	    default:
	      return icon;
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
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ApiContainer)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      props: {
	        content: ''
	      },
	      fadeProps: {
	        show: false
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(ApiContainer, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var props = _state.props;
	      var fadeProps = _state.fadeProps;
	
	
	      return _react2.default.createElement(
	        _Fade2.default,
	        fadeProps,
	        _react2.default.createElement(Toast, props)
	      );
	    }
	  }, {
	    key: 'show',
	    value: function show(props, fadeProps, time) {
	      var _this2 = this;
	
	      var nextState = {
	        props: _extends({}, this.state.props, props),
	        fadeProps: _extends({}, this.state.fadeProps, { show: true })
	      };
	      this.setState(nextState);
	
	      if (typeof time === 'number') {
	        clearTimeout(this.timer);
	        this.timer = setTimeout(function () {
	          _this2.hide();
	        }, time);
	      }
	    }
	
	    // 延时执行，单位：ms
	
	  }, {
	    key: 'hide',
	    value: function hide(delay) {
	      var nextState = _extends({}, this.state, {
	        fadeProps: _extends({}, this.state.fadeProps, { show: false })
	      });
	
	      this.setState(nextState);
	    }
	  }, {
	    key: 'showLoading',
	    value: function showLoading(props, fadeProps) {
	      props = _extends({}, props, { icon: 'loading' });
	      this.show(props, fadeProps);
	    }
	  }, {
	    key: 'hideLoading',
	    value: function hideLoading(delay) {
	      this.hide(delay);
	    }
	  }]);
	
	  return ApiContainer;
	}(_react.Component);
	
	apiInstance = (0, _utils.createInstance)(ApiContainer);

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 配置文件
	 */
	
	/**
	 * @type {object} 配置数据对象
	 * @property {string} config.namespace='daifee-rc' 用于 css 的命名空间，
	 * 如要修改，必须同时修改 ./variables.scss 文件的 $namespace
	 */
	var config = {
	  namespace: 'daifee-rc'
	};
	
	exports.default = config;

/***/ },
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 38 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 39 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 40 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 41 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 42 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 43 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 44 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 45 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 46 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 47 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 48 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 49 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 50 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 51 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 52 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 53 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 54 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 55 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_56__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map