'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();exports.default =






withTransitions;var _react = require('react');var _react2 = _interopRequireDefault(_react);var _semanticUiReact = require('semantic-ui-react');var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var OPEN_TIME = 500;var CLOSE_TIME = 1000;function withTransitions(Component) {var
    SemanticTransition = function (_React$Component) {_inherits(SemanticTransition, _React$Component);function SemanticTransition() {var _ref;var _temp, _this, _ret;_classCallCheck(this, SemanticTransition);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SemanticTransition.__proto__ || Object.getPrototypeOf(SemanticTransition)).call.apply(_ref, [this].concat(args))), _this), _this.











            state = {
                visible: false,
                time: OPEN_TIME,
                animation: 'pulse' }, _this.












            onClose = function () {
                // trigger new animation when toast is dismissed
                _this.setState(
                function (prevState) {return {
                        visible: !prevState.visible,
                        animation: _this.props.animation,
                        time: CLOSE_TIME };},

                function () {
                    setTimeout(function () {
                        if (_this.timerId) {
                            clearTimeout(_this.timerId);
                        }

                        _this.props.onClose(_this.props.toastId);
                    }, CLOSE_TIME);
                });

            }, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(SemanticTransition, [{ key: 'componentDidMount', value: function componentDidMount() {// schedule auto closing of toast
                if (this.props.time) {this.timerId = setTimeout(this.onClose, this.props.time);} // start animation as soon as toast is mounted in the dom
                this.setState({ visible: true });} }, { key: 'render', value: function render() {var _state =
                this.state,time = _state.time,visible = _state.visible,animation = _state.animation;
                var styles = {
                    marginBottom: '1em' };


                return (
                    _react2.default.createElement(_semanticUiReact.Transition, { animation: animation, duration: time, visible: visible },
                        _react2.default.createElement('div', { style: styles, role: 'presentation' },
                            _react2.default.createElement(Component, _extends({}, this.props, { onClose: this.onClose })))));



            } }]);return SemanticTransition;}(_react2.default.Component);SemanticTransition.propTypes = { toastId: _propTypes2.default.number.isRequired, onClose: _propTypes2.default.func.isRequired, animation: _propTypes2.default.string.isRequired, time: _propTypes2.default.number };SemanticTransition.defaultProps = { time: 2000 };


    return SemanticTransition;
}