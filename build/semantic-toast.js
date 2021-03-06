'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _semanticUiReact = require('semantic-ui-react');
var _withTransition = require('./with-transition');var _withTransition2 = _interopRequireDefault(_withTransition);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var icons = {
    info: 'announcement',
    success: 'checkmark',
    error: 'remove',
    warning: 'warning circle' };


function SemanticToast(props) {var
    type = props.type,title = props.title,description = props.description,onClose = props.onClose,onClick = props.onClick;
    var icon = props.icon || icons[type];

    var onDismiss = function onDismiss(e) {
        e.stopPropagation();
        onClose();
    };

    return (
        _react2.default.createElement(_semanticUiReact.Message, _extends({}, _defineProperty({},
        type, true), {
            onClick: onClick,
            onDismiss: onDismiss,
            header: title,
            content: description,
            icon: icon,
            floating: true })));


}

SemanticToast.propTypes = {
    type: _propTypes2.default.oneOf(['info', 'success', 'error', 'warning']).isRequired,
    title: _propTypes2.default.string.isRequired,
    description: _propTypes2.default.string.isRequired,
    icon: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
    onClick: _propTypes2.default.func,
    onClose: _propTypes2.default.func };


SemanticToast.defaultProps = {
    onClick: undefined,
    onClose: undefined,
    icon: undefined };exports.default =


(0, _withTransition2.default)(SemanticToast);