"use strict";
// Toast.tsx
'use client';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _toastModule = _interopRequireDefault(require("./toast.module.scss"));
var _success = _interopRequireDefault(require("../../../public/src/images/toast/success.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// Chemin relatif mis à jour
var errorIcon = '/src/images/toast/error.svg';
var warningIcon = '/src/images/toast/warning.svg';
var infoIcon = '/src/images/toast/information.svg';
var crossIcon = '/src/images/toast/cross.svg';
var Toast = function Toast(_ref) {
  var type = _ref.type,
    message = _ref.message,
    messageAction = _ref.messageAction,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    onClick = _ref.onClick;
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    toastVisible = _useState2[0],
    setToastVisible = _useState2[1];

  // Si toastVisible est false, retournez null pour ne rien rendre.
  if (!toastVisible) {
    return null;
  }
  var getToastClass = function getToastClass() {
    switch (type) {
      case 'success':
        return _toastModule["default"]['toast__block--success'];
      case 'error':
        return _toastModule["default"]['toast__block--error'];
      case 'warning':
        return _toastModule["default"]['toast__block--warning'];
      case 'info':
        return _toastModule["default"]['toast__block--info'];
      case 'misc':
        return _toastModule["default"]['toast__block--misc'];
      default:
        return '';
    }
  };
  var getIconSrc = function getIconSrc() {
    switch (type) {
      case 'success':
        return _success["default"];
      case 'error':
        return errorIcon;
      case 'warning':
        return warningIcon;
      case 'info':
        return infoIcon;
      case 'misc':
        return undefined;
      default:
        return undefined;
    }
  };
  var deleteToast = function deleteToast() {
    setToastVisible(false);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_toastModule["default"].toast__block, " ").concat(getToastClass(), " ").concat(className),
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: getIconSrc(),
    alt: type,
    className: _toastModule["default"].toastIcon
  }), message, /*#__PURE__*/_react["default"].createElement("span", {
    className: _toastModule["default"]['message-action']
  }, messageAction), /*#__PURE__*/_react["default"].createElement("img", {
    src: crossIcon,
    alt: 'cross',
    className: _toastModule["default"].toastIcon,
    onClick: function onClick() {
      return deleteToast();
    }
  }));
};
var _default = exports["default"] = Toast;