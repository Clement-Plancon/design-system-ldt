"use strict";
'use client';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Home;
var _react = _interopRequireDefault(require("react"));
var _Badge = _interopRequireDefault(require("./components/Badge/Badge"));
var _Button = _interopRequireDefault(require("./components/Button/Button"));
var _Checkbox = _interopRequireDefault(require("./components/Checkbox/Checkbox"));
var _DestructiveButton = _interopRequireDefault(require("./components/DestructiveButton/DestructiveButton"));
var _Tab = _interopRequireWildcard(require("./components/Tab/Tab"));
var _TabText = _interopRequireDefault(require("./components/TabText/TabText"));
var _TextArea = _interopRequireDefault(require("./components/TextArea/TextArea"));
var _Toast = _interopRequireDefault(require("./components/Toast/Toast"));
var _InputField = _interopRequireDefault(require("./components/InputField/InputField"));
var _InputDropdown = _interopRequireDefault(require("./components/InputDropdown/InputDropdown"));
var _Chip = _interopRequireWildcard(require("./components/Chip/Chip"));
var _Filter = _interopRequireDefault(require("./components/Filter/Filter"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Home() {
  return /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("h1", null, "Composant - Button"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    buttonText: "bouton primaire",
    buttonType: "primary"
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    buttonText: "bouton secondaire",
    buttonType: "secondary"
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    buttonText: "bouton tertiaire borderless",
    buttonType: "secondary",
    borderless: true
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    buttonText: "bouton tertiaire",
    buttonType: "tertiary"
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    buttonText: "bouton tertiaire borderless",
    buttonType: "tertiary",
    borderless: true
  }), /*#__PURE__*/_react["default"].createElement("h1", null, "Composant - Tab"), /*#__PURE__*/_react["default"].createElement(_Tab.TabGroup, {
    defaultActive: "Tab1"
  }, /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: "Tab1"
  }), /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: "Tab2"
  }), /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    label: "Tab3"
  })), /*#__PURE__*/_react["default"].createElement("h1", null, "Composant - TabText"), /*#__PURE__*/_react["default"].createElement(_TabText["default"], {
    label: "test"
  }), /*#__PURE__*/_react["default"].createElement("h1", null, "Composant - Destructive-button"), /*#__PURE__*/_react["default"].createElement(_DestructiveButton["default"], {
    buttonText: "bouton primaire destructif",
    buttonType: "primary"
  }), /*#__PURE__*/_react["default"].createElement(_DestructiveButton["default"], {
    buttonText: "bouton primaire destructif",
    buttonType: "secondary"
  }), /*#__PURE__*/_react["default"].createElement(_DestructiveButton["default"], {
    buttonText: "bouton primaire destructif",
    buttonType: "secondary",
    borderless: true
  }), /*#__PURE__*/_react["default"].createElement(_DestructiveButton["default"], {
    buttonText: "bouton primaire destructif",
    buttonType: "tertiary"
  }), /*#__PURE__*/_react["default"].createElement(_DestructiveButton["default"], {
    buttonText: "bouton primaire destructif",
    buttonType: "tertiary",
    borderless: true
  }), /*#__PURE__*/_react["default"].createElement("h1", null, "Composant - Badge"), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    text: "warning",
    badgeType: "warning"
  }), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    text: "in-progress",
    badgeType: "in-progress"
  }), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    text: "success",
    badgeType: "success"
  }), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    text: "error",
    badgeType: "error"
  }), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    text: "personnalized",
    badgeType: "personnalized"
  }), /*#__PURE__*/_react["default"].createElement("h1", null, "Composant - Checkbox"), /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
    label: "checkbox"
  }), /*#__PURE__*/_react["default"].createElement("h1", null, "Composant - TextArea"), /*#__PURE__*/_react["default"].createElement(_TextArea["default"], {
    value: "text area",
    onChange: function onChange(event) {
      var nouveauTexte = event;
    }
  }), /*#__PURE__*/_react["default"].createElement(_TextArea["default"], {
    value: "text area",
    error: true,
    onChange: function onChange(event) {
      var nouveauTexte = event;
    }
  }), /*#__PURE__*/_react["default"].createElement("h1", null, "Composant - Toast"), /*#__PURE__*/_react["default"].createElement(_Toast["default"], {
    messageAction: "Action",
    message: "test",
    type: "success"
  }), /*#__PURE__*/_react["default"].createElement(_Toast["default"], {
    messageAction: "Action",
    message: "test",
    type: "error"
  }), /*#__PURE__*/_react["default"].createElement(_Toast["default"], {
    messageAction: "Action",
    message: "test",
    type: "warning"
  }), /*#__PURE__*/_react["default"].createElement(_Toast["default"], {
    messageAction: "Action",
    message: "test",
    type: "info"
  }), /*#__PURE__*/_react["default"].createElement(_Toast["default"], {
    messageAction: "Action",
    message: "test",
    type: "misc"
  }), /*#__PURE__*/_react["default"].createElement("h1", null, "Composant - Input field"), /*#__PURE__*/_react["default"].createElement(_InputField["default"], {
    placeholder: "je cherche",
    value: "taper votre texte ici",
    onChange: function onChange(event) {
      var nouveauTexte = event;
    }
  }), /*#__PURE__*/_react["default"].createElement(_InputField["default"], {
    placeholder: "je cherche",
    value: "taper votre texte ici",
    error: true,
    onChange: function onChange(event) {
      var nouveauTexte = event;
    }
  }), /*#__PURE__*/_react["default"].createElement(_InputField["default"], {
    placeholder: "je cherche",
    value: "taper votre texte ici",
    disabled: true,
    onChange: function onChange(event) {
      var nouveauTexte = event;
    }
  }), /*#__PURE__*/_react["default"].createElement("h1", null, "Composant - Input Dropdown"), /*#__PURE__*/_react["default"].createElement(_InputDropdown["default"], {
    placeholder: "je cherche",
    value: "taper votre texte",
    onChange: function onChange(event) {
      var nouveauTexte = event;
    }
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    type: "checkbox",
    label: "Check me",
    id: "check1",
    name: "check1"
  })), /*#__PURE__*/_react["default"].createElement(_InputDropdown["default"], {
    error: true,
    placeholder: "je cherche",
    value: "taper votre texte",
    onChange: function onChange(event) {
      var nouveauTexte = event;
    }
  }, /*#__PURE__*/_react["default"].createElement(_Chip.RadioGroup, null, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    type: "radio",
    label: "Option 1",
    id: "option1",
    name: "group1"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    type: "radio",
    label: "Option 2",
    id: "option2",
    name: "group1"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    type: "radio",
    label: "Option 3",
    id: "option3",
    name: "group1"
  }))), /*#__PURE__*/_react["default"].createElement(_InputDropdown["default"], {
    disabled: true,
    placeholder: "je cherche",
    value: "taper votre texte",
    onChange: function onChange(event) {
      var nouveauTexte = event;
    }
  }), /*#__PURE__*/_react["default"].createElement("h1", null, "Composant - Chip"), /*#__PURE__*/_react["default"].createElement(_Chip.RadioGroup, null, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    type: "radio",
    label: "Option 1",
    id: "option1",
    name: "group1"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    type: "radio",
    label: "Option 2",
    id: "option2",
    name: "group1"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    type: "radio",
    label: "Option 3",
    id: "option3",
    name: "group1"
  })), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    type: "checkbox",
    label: "Check me",
    id: "check1",
    name: "check1"
  }), /*#__PURE__*/_react["default"].createElement("h1", null, "Composant - Filter"), /*#__PURE__*/_react["default"].createElement(_Filter["default"], {
    label: "dropdown",
    options: [/*#__PURE__*/_react["default"].createElement(_Chip["default"], {
      type: "checkbox",
      label: "Check me",
      id: "check1",
      name: "check1"
    })]
  }));
}