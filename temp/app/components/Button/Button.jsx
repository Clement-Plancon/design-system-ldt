var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styles from './button.module.scss';
function generateButtonStyles(prefix, borderless = false) {
    const baseStyles = {
        [`${prefix}Block`]: styles[`button-${prefix}__block`],
        [`${prefix}Default`]: styles[`button-${prefix}__block--default`],
    };
    if (borderless) {
        return Object.assign(Object.assign({}, baseStyles), { [`${prefix}BorderlessDefault`]: styles[`button-${prefix}-borderless__block--default`] });
    }
    return baseStyles;
}
const Button = (_a) => {
    var { buttonText, buttonType, borderless, className } = _a, props = __rest(_a, ["buttonText", "buttonType", "borderless", "className"]);
    const buttonStyles = generateButtonStyles(buttonType, borderless);
    const buttonClassNames = [
        buttonStyles[`${buttonType}Block`],
        buttonStyles[`${buttonType}Default`],
        className
    ];
    if (borderless) {
        buttonClassNames.push(buttonStyles[`${buttonType}BorderlessDefault`]);
    }
    return (<button className={buttonClassNames.join(' ')} {...props}>
      {buttonText}
    </button>);
};
export default Button;
