"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RadioGroup = void 0;
var _react = _interopRequireWildcard(require("react"));
var _chipModule = _interopRequireDefault(require("./chip.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var RadioContext = /*#__PURE__*/_react["default"].createContext(undefined);
var RadioGroup = exports.RadioGroup = function RadioGroup(_ref) {
  var children = _ref.children;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedId = _useState2[0],
    setSelectedId = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement(RadioContext.Provider, {
    value: {
      selectedId: selectedId,
      setSelectedId: setSelectedId
    }
  }, children);
};
var Chip = function Chip(_ref2) {
  var type = _ref2.type,
    label = _ref2.label,
    id = _ref2.id,
    name = _ref2.name,
    _ref2$disabled = _ref2.disabled,
    disabled = _ref2$disabled === void 0 ? false : _ref2$disabled;
  var radioContext = (0, _react.useContext)(RadioContext);
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isChecked = _useState4[0],
    setIsChecked = _useState4[1];
  (0, _react.useEffect)(function () {
    if (type === 'radio' && radioContext && radioContext.selectedId === id) {
      setIsChecked(true);
    } else if (type === 'radio') {
      setIsChecked(false);
    }
  }, [radioContext, id, type]);
  var handleChange = function handleChange(event) {
    if (type === 'radio' && radioContext) {
      radioContext.setSelectedId(id);
    } else {
      setIsChecked(event.target.checked);
    }
  };
  var handleContainerClick = function handleContainerClick() {
    if (disabled) return;
    if (type === 'radio' && radioContext) {
      radioContext.setSelectedId(id);
    } else {
      setIsChecked(!isChecked);
    }
  };
  var chipType = _chipModule["default"]['chip-checkbox'];
  var chipTypeBlock = _chipModule["default"]['chip-checkbox__block--default'];
  if (type === 'radio') {
    chipType = _chipModule["default"]['chip-radio'];
    chipTypeBlock = _chipModule["default"]['chip-radio__block--default'];
  }
  var isDisabled = disabled ? _chipModule["default"]['disabled'] : '';
  var checkedClass = isChecked ? _chipModule["default"]['checked'] : '';
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(chipType, " ").concat(chipTypeBlock, " ").concat(isDisabled, " ").concat(checkedClass),
    onClick: handleContainerClick
  }, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("input", {
    type: type,
    id: id,
    name: name,
    disabled: disabled,
    checked: isChecked,
    onChange: handleChange,
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }), label));
};
var _default = exports["default"] = Chip;