'use client';
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
import React, { useState } from 'react';
import styles from './checkbox.module.scss';
var Checkbox = function (_a) {
    var label = _a.label, propChecked = _a.checked, propOnChange = _a.onChange, props = __rest(_a, ["label", "checked", "onChange"]);
    var _b = useState(propChecked || false), isChecked = _b[0], setIsChecked = _b[1];
    var handleChange = function (e) {
        if (propOnChange) {
            propOnChange(e);
        }
        setIsChecked(!isChecked);
    };
    var checkboxClasses = isChecked
        ? "".concat(styles['checkbox-checked__block'], " ").concat(styles['checkbox-checked__block--default'])
        : "".concat(styles['checkbox-unchecked__block'], " ").concat(styles['checkbox-unchecked__block--default']);
    return (<label className={styles['checkbox-label']}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} className={styles['checkbox-input']} {...props}/>
      <span className={checkboxClasses}></span>
      {label}
    </label>);
};
export default Checkbox;
