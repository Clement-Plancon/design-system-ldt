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
import React, { useState, useEffect } from 'react';
import styles from './text-area.module.scss';
var TextArea = function (_a) {
    var value = _a.value, onChange = _a.onChange, _b = _a.error, error = _b === void 0 ? false : _b, _c = _a.filled, filled = _c === void 0 ? false : _c, className = _a.className, props = __rest(_a, ["value", "onChange", "error", "filled", "className"]);
    var _d = useState(value), textAreaValue = _d[0], setTextAreaValue = _d[1];
    useEffect(function () {
        setTextAreaValue(value); // S'assurer que la valeur est synchronisée avec la prop value
    }, [value]);
    var handleInputChange = function (event) {
        var newValue = event.target.value;
        setTextAreaValue(newValue);
        onChange(newValue);
    };
    var getTextAreaClasses = function () {
        var baseClass = "".concat(styles['textarea-default__block'], " ").concat(styles['textarea-default__block--default']);
        var errorClass = "".concat(styles['textarea-default-error__block'], " ").concat(styles['textarea-default-error__block--default']);
        if (error) {
            return "".concat(errorClass, " ").concat(filled ? styles['textarea-default__block--filled'] : '');
        }
        return "".concat(baseClass, " ").concat(filled ? styles['textarea-default__block--filled'] : '');
    };
    return (<textarea className={"".concat(getTextAreaClasses(), " ").concat(className || '')} value={textAreaValue} onChange={handleInputChange} {...props}/>);
};
export default TextArea;
