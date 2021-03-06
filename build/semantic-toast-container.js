'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _animations;var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticToast = require('./semantic-toast');var _semanticToast2 = _interopRequireDefault(_semanticToast);
var _toast = require('./toast');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/* eslint-disable no-useless-computed-key */
var animations = (_animations = {}, _defineProperty(_animations,
'top-right', 'fly left'), _defineProperty(_animations,
'top-center', 'fly down'), _defineProperty(_animations,
'top-left', 'fly right'), _defineProperty(_animations,
'bottom-right', 'fly left'), _defineProperty(_animations,
'bottom-center', 'fly up'), _defineProperty(_animations,
'bottom-left', 'fly right'), _animations);var


SemanticToastContainer = function (_Component) {_inherits(SemanticToastContainer, _Component);function SemanticToastContainer() {var _ref;var _temp, _this, _ret;_classCallCheck(this, SemanticToastContainer);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SemanticToastContainer.__proto__ || Object.getPrototypeOf(SemanticToastContainer)).call.apply(_ref, [this].concat(args))), _this), _this.



















        state = {
            toasts: [] }, _this.










        onClose = function (toastId) {
            var toast = _this.state.toasts.find(function (value) {return value.id === toastId;});

            // toast has been removed already, fixes #1
            if (!toast) {
                return;
            }

            _toast.store.remove(toast);

            if (toast.onClose) {
                toast.onClose();
            }
        }, _this.

        updateToasts = function () {
            _this.setState({
                toasts: _toast.store.data });

        }, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(SemanticToastContainer, [{ key: 'componentDidMount', value: function componentDidMount() {_toast.store.subscribe(this.updateToasts);} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {_toast.store.unsubscribe(this.updateToasts);} }, { key: 'render', value: function render()

        {var _this2 = this;var _props =
            this.props,position = _props.position,className = _props.className;
            var animation = this.props.animation || animations[position];

            return (
                _react2.default.createElement('div', { className: 'ui-alerts ' + position + ' ' + className },
                    this.state.toasts.map(function (toast) {var

                        id =






                        toast.id,_toast$type = toast.type,type = _toast$type === undefined ? 'info' : _toast$type,_toast$title = toast.title,title = _toast$title === undefined ? '' : _toast$title,_toast$description = toast.description,description = _toast$description === undefined ? '' : _toast$description,icon = toast.icon,time = toast.time,onClick = toast.onClick;
                        return (
                            _react2.default.createElement(_semanticToast2.default, {
                                key: id,
                                toastId: id,
                                type: type,
                                title: title,
                                description: description,
                                icon: icon,
                                animation: animation,
                                time: time,
                                onClick: onClick,
                                onClose: _this2.onClose }));


                    })));


        } }]);return SemanticToastContainer;}(_react.Component);SemanticToastContainer.propTypes = { position: _propTypes2.default.oneOf(['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left']), animation: _propTypes2.default.string, className: _propTypes2.default.string };SemanticToastContainer.defaultProps = { position: 'top-right', animation: null, className: '' };exports.default =


SemanticToastContainer;