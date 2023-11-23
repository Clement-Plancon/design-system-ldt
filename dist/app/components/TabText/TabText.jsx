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
const TabText = (_a) => {
    var { label, className } = _a, props = __rest(_a, ["label", "className"]);
    return (<div className={`${styles['tab-text__block']} ${styles['tab-text__block--default']} ${className}`} {...props}>
      {label}
    </div>);
};
export default TabText;
