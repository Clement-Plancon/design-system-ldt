"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _badgeModule = _interopRequireDefault(require("./badge.module.scss"));
var _excluded = ["text", "badgeType", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var warningIcon = '/src/images/badge/warning.svg';
var inProgressIcon = '/src/images/badge/in-progress.svg';
var successIcon = '/src/images/badge/success.svg';
var errorIcon = '/src/images/badge/error.svg';
var personnalizedIcon = '/src/images/badge/personnalized.svg';
var Badge = function Badge(_ref) {
  var text = _ref.text,
    badgeType = _ref.badgeType,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  var badgeClasses = [_badgeModule["default"]["badge-".concat(badgeType, "__block")], className];
  var badgeClassesBlock = [_badgeModule["default"]["badge-".concat(badgeType, "__block--default")], className];
  var getIconBadgeSrc = function getIconBadgeSrc() {
    switch (badgeType) {
      case 'warning':
        return warningIcon;
      case 'in-progress':
        return inProgressIcon;
      case 'success':
        return successIcon;
      case 'error':
        return errorIcon;
      case 'personnalized':
        return personnalizedIcon;
      default:
        return undefined;
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "".concat(badgeClasses.join(' '), " ").concat(badgeClassesBlock.join(' '))
  }, props), /*#__PURE__*/_react["default"].createElement("img", {
    src: getIconBadgeSrc(),
    alt: "icone badge"
  }), text);
};
var _default = exports["default"] = Badge;