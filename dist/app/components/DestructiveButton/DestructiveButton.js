var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import styles from './destructive-button.module.scss';
function generateDestructiveButtonStyles(prefix, borderless) {
    var _a, _b;
    if (borderless === void 0) { borderless = false; }
    var baseStyles = (_a = {},
        _a["".concat(prefix, "Block")] = styles["destructive-button-".concat(prefix, "__block")],
        _a["".concat(prefix, "Default")] = styles["destructive-button-".concat(prefix, "__block--default")],
        _a);
    if (borderless) {
        return __assign(__assign({}, baseStyles), (_b = {}, _b["".concat(prefix, "BorderlessDefault")] = styles["destructive-button-".concat(prefix, "-borderless__block--default")], _b));
    }
    return baseStyles;
}
var DestructiveButton = function (_a) {
    var buttonText = _a.buttonText, buttonType = _a.buttonType, borderless = _a.borderless;
    var buttonStyles = generateDestructiveButtonStyles(buttonType, borderless);
    var buttonClassNames = [
        buttonStyles["".concat(buttonType, "Block")],
        buttonStyles["".concat(buttonType, "Default")],
    ];
    // Si borderless est activé, ajoutez les styles correspondants
    if (borderless) {
        buttonClassNames.push(buttonStyles["".concat(buttonType, "BorderlessDefault")]);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { className: buttonClassNames.join(' ') }, buttonText)));
};
export default DestructiveButton;
