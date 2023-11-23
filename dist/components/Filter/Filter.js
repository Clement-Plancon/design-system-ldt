"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _filterModule = _interopRequireDefault(require("./filter.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var chevronClose = '/src/images/input-dropdown/chevron-close.svg';
var chevronOpen = '/src/images/input-dropdown/chevron-open.svg';
var Filter = function Filter(_ref) {
  var label = _ref.label,
    options = _ref.options,
    onSelect = _ref.onSelect,
    className = _ref.className;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showDropdown = _useState2[0],
    setShowDropdown = _useState2[1];
  var _useState3 = (0, _react.useState)(label),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedLabel = _useState4[0],
    setSelectedLabel = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isFilled = _useState6[0],
    setIsFilled = _useState6[1];
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
  var handleOptionClick = function handleOptionClick(option) {
    if (typeof option === 'string') {
      setSelectedLabel(option);
    } else {
      setSelectedLabel('Selected Option'); // ou autre placeholder si l'option est un composant
    }

    if (onSelect) {
      onSelect(option);
      setIsFilled(false);
    }
    setIsFilled(true);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_filterModule["default"].filter, " ").concat(className || ''),
    ref: dropdownRef
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_filterModule["default"]['filter__block'], " ").concat(_filterModule["default"]['filter__block--default'], " ").concat(isFilled ? _filterModule["default"]['filter__block--default--filled'] : ''),
    onClick: function onClick() {
      return setShowDropdown(!showDropdown);
    }
  }, selectedLabel, /*#__PURE__*/_react["default"].createElement("img", {
    className: _filterModule["default"]['filter-icon'],
    src: showDropdown ? chevronOpen : chevronClose,
    alt: "chevron"
  })), showDropdown && /*#__PURE__*/_react["default"].createElement("div", {
    className: _filterModule["default"]['dropdown']
  }, options.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      onClick: function onClick() {
        return handleOptionClick(option);
      }
    }, option);
  })));
};
var _default = exports["default"] = Filter;