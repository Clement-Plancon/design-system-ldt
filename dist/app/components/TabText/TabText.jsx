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
import styles from './tab-text.module.scss';
var TabText = function (_a) {
    var label = _a.label, className = _a.className, props = __rest(_a, ["label", "className"]);
    return (<div className={"".concat(styles['tab-text__block'], " ").concat(styles['tab-text__block--default'], " ").concat(className)} {...props}>
      {label}
    </div>);
};
export default TabText;
