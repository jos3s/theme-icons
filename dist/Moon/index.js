"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Moon = function Moon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#fff" : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "22" : _ref$size,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M22 12.9369C20.4919 14.4573 18.394 15.4 16.0742 15.4C11.4824 15.4 7.75995 11.7064 7.75995 7.15001C7.75995 4.11325 9.41348 1.45971 11.8759 0.0275166C11.6149 0.00927502 11.3513 0 11.0856 0C4.96321 0 0 4.92487 0 11C0 17.0751 4.96321 22 11.0856 22C16.5421 22 21.0778 18.0883 22 12.9369Z",
    fill: color
  }));
};

Moon.propTypes = {
  color: _propTypes.default.string,
  size: _propTypes.default.number
};
var _default = Moon;
exports.default = _default;