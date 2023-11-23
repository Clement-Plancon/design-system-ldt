"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _destructiveButtonModule = _interopRequireDefault(require("./destructive-button.module.scss"));
var _excluded = ["buttonText", "buttonType", "borderless", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function generateDestructiveButtonStyles(prefix) {
  var _baseStyles;
  var borderless = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var baseStyles = (_baseStyles = {}, _defineProperty(_baseStyles, "".concat(prefix, "Block"), _destructiveButtonModule["default"]["destructive-button-".concat(prefix, "__block")]), _defineProperty(_baseStyles, "".concat(prefix, "Default"), _destructiveButtonModule["default"]["destructive-button-".concat(prefix, "__block--default")]), _baseStyles);
  if (borderless) {
    return _objectSpread(_objectSpread({}, baseStyles), {}, _defineProperty({}, "".concat(prefix, "BorderlessDefault"), _destructiveButtonModule["default"]["destructive-button-".concat(prefix, "-borderless__block--default")]));
  }
  return baseStyles;
}
var DestructiveButton = function DestructiveButton(_ref) {
  var buttonText = _ref.buttonText,
    buttonType = _ref.buttonType,
    borderless = _ref.borderless,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var buttonStyles = generateDestructiveButtonStyles(buttonType, borderless);
  var buttonClassNames = [buttonStyles["".concat(buttonType, "Block")], buttonStyles["".concat(buttonType, "Default")], className].filter(Boolean);

  // Si borderless est activé, ajoutez les styles correspondants
  if (borderless) {
    buttonClassNames.push(buttonStyles["".concat(buttonType, "BorderlessDefault")]);
  }
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    className: buttonClassNames.join(' ')
  }, props), buttonText);
};
var _default = exports["default"] = DestructiveButton;