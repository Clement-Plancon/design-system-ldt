"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _inputDropdownModule = _interopRequireDefault(require("./input-dropdown.module.scss"));
var _excluded = ["placeholder", "value", "onChange", "error", "disabled", "customIcon", "className", "children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var chevronClose = '/src/images/input-dropdown/chevron-close.svg';
var chevronOpen = '/src/images/input-dropdown/chevron-open.svg';
var InputDropdown = function InputDropdown(_ref) {
  var placeholder = _ref.placeholder,
    value = _ref.value,
    onChange = _ref.onChange,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    customIcon = _ref.customIcon,
    className = _ref.className,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(value),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showDropdown = _useState4[0],
    setShowDropdown = _useState4[1];
  var dropdownRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  var handleClickOutside = function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  var handleInputChange = function handleInputChange(event) {
    var newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };
  var defaultClasses = "".concat(_inputDropdownModule["default"]['input-dropdown-default__block'], " ").concat(_inputDropdownModule["default"]['input-dropdown-default__block--default']);
  var errorClasses = error ? "".concat(_inputDropdownModule["default"]['input-dropdown-default-error__block'], " ").concat(_inputDropdownModule["default"]['input-dropdown-default-error__block--default']) : '';
  var disabledClasses = disabled ? 'disabled' : '';
  var inputClasses = "".concat(defaultClasses, " ").concat(errorClasses, " ").concat(disabledClasses, " ").concat(className || '');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _inputDropdownModule["default"]['input-dropdown'],
    ref: dropdownRef
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _inputDropdownModule["default"]['input-wrapper']
  }, /*#__PURE__*/_react["default"].createElement("input", _extends({
    className: inputClasses,
    placeholder: placeholder,
    value: inputValue,
    onChange: handleInputChange,
    onClick: function onClick() {
      return setShowDropdown(!showDropdown);
    }
  }, props, {
    disabled: disabled
  })), /*#__PURE__*/_react["default"].createElement("img", {
    className: _inputDropdownModule["default"]['input-icon'],
    src: showDropdown ? chevronOpen : chevronClose,
    alt: "chevron"
  })), showDropdown && /*#__PURE__*/_react["default"].createElement("div", {
    className: _inputDropdownModule["default"]['dropdown']
  }, children));
};
var _default = exports["default"] = InputDropdown;