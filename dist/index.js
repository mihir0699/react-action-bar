"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ActionBar = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("header", {
    className: "barStyles",
    style: {
      opacity: props.isVisible ? "1" : "0",
      zIndex: props.isVisible ? "-100" : "10",
      backgroundColor: props.backgroundColor ? props.backgroundColor : ""
    }
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "message"
  }, props.message ? props.message : "Unsaved changes"), /*#__PURE__*/_react.default.createElement("p", {
    className: "buttonsDiv"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: () => props.discardAction ? props.discardAction() : null
  }, props.discardTitle ? props.discardTitle : "Discard"), /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    style: {
      backgroundColor: props.primaryColor ? props.primaryColor : "#008060",
      border: "none"
    },
    onClick: () => props.primaryAction ? props.primaryAction() : null
  }, props.primaryTitle ? props.primaryTitle : "Save"))));
};

var _default = ActionBar;
exports.default = _default;
ActionBar.propTypes = {
  primaryAction: _propTypes.default.func,
  discardAction: _propTypes.default.func,
  primaryTitle: _propTypes.default.string,
  discardTitle: _propTypes.default.string,
  message: _propTypes.default.string,
  isVisible: _propTypes.default.bool,
  backgroundColor: _propTypes.default.string,
  primaryColor: _propTypes.default.string
};