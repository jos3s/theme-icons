"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Sun = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["color", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Sun = function Sun(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "#fff" : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 22 : _ref$size,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("svg", {
    width: size,
    height: size + 1,
    viewBox: "0 0 22 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M16.5 12.0218C16.5 15.0668 14.0366 17.5336 11 17.5336C7.96337 17.5336 5.5 15.0668 5.5 12.0218C5.5 8.9767 7.96337 6.50989 11 6.50989C14.0366 6.50989 16.5 8.9767 16.5 12.0218Z",
    fill: color,
    stroke: color
  }), /*#__PURE__*/_react.default.createElement("rect", {
    width: "2.00209",
    height: "4.00374",
    rx: "1.00104",
    transform: "matrix(0.686834 -0.726814 0.725457 0.688268 15.7328 17.6151)",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.12226 16.8484C4.51231 16.4566 5.14547 16.4559 5.53647 16.8467V16.8467C5.92746 17.2375 5.92823 17.8719 5.53818 18.2637L4.12568 19.6824C3.73563 20.0742 3.10246 20.0749 2.71147 19.6841V19.6841C2.32047 19.2933 2.3197 18.6589 2.70975 18.2671L4.12226 16.8484Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M10 20.0356C10 19.4833 10.4477 19.0356 11 19.0356V19.0356C11.5523 19.0356 12 19.4833 12 20.0356V22.0435C12 22.5958 11.5523 23.0435 11 23.0435V23.0435C10.4477 23.0435 10 22.5958 10 22.0435V20.0356Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M5.54448 5.29678C5.91905 5.70331 5.89375 6.33717 5.48796 6.71255V6.71255C5.08217 7.08793 4.44955 7.06267 4.07498 6.65614L2.71809 5.1835C2.34351 4.77697 2.36882 4.14311 2.77461 3.76773V3.76773C3.1804 3.39236 3.81301 3.41761 4.18759 3.82414L5.54448 5.29678Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M1.00198 13.0237C0.448606 13.0237 4.96576e-06 12.5751 4.96576e-06 12.0218V12.0218C4.96576e-06 11.4684 0.448606 11.0198 1.00198 11.0198H2.99803C3.5514 11.0198 4 11.4684 4 12.0218V12.0218C4 12.5751 3.5514 13.0237 2.99803 13.0237H1.00198Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19.002 13.0237C18.4486 13.0237 18 12.5751 18 12.0218V12.0218C18 11.4684 18.4486 11.0198 19.002 11.0198H20.998C21.5514 11.0198 22 11.4684 22 12.0218V12.0218C22 12.5751 21.5514 13.0237 20.998 13.0237H19.002Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17.8588 7.22024C17.4588 7.60191 16.8258 7.58646 16.445 7.18573V7.18573C16.0641 6.785 16.0796 6.15074 16.4795 5.76907L17.9277 4.3872C18.3277 4.00553 18.9607 4.02098 19.3416 4.42171V4.42171C19.7225 4.82244 19.707 5.4567 19.307 5.83837L17.8588 7.22024Z",
    fill: color
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.0032 4.00794C12.0014 4.56022 11.5523 5.00648 11 5.00469V5.00469C10.4477 5.00289 10.0015 4.55373 10.0032 4.00144L10.0097 1.99354C10.0115 1.44126 10.4607 0.995 11.013 0.996794V0.996794C11.5653 0.998588 12.0115 1.44776 12.0097 2.00004L12.0032 4.00794Z",
    fill: color
  }));
};

exports.Sun = Sun;
Sun.propTypes = {
  color: _propTypes.default.string,
  size: _propTypes.default.number
};
var _default = Sun;
exports.default = _default;