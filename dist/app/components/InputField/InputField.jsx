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
import styles from './input-field.module.scss';
var InputField = function (_a) {
    var placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange, _b = _a.error, error = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, customIcon = _a.customIcon, className = _a.className, props = __rest(_a, ["placeholder", "value", "onChange", "error", "disabled", "customIcon", "className"]);
    var _d = useState(value), inputValue = _d[0], setInputValue = _d[1];
    var handleInputChange = function (event) {
        var newValue = event.target.value;
        setInputValue(newValue);
        onChange(newValue);
    };
    var defaultClasses = "".concat(styles['input-field-default__block'], " ").concat(styles['input-field-default__block--default']);
    var errorClasses = error ? "".concat(styles['input-field-default-error__block'], " ").concat(styles['input-field-default-error__block--default']) : '';
    var disabledClasses = disabled ? 'disabled' : ''; // Notez que c'est simplement un nom de classe
    var inputClasses = "".concat(defaultClasses, " ").concat(errorClasses, " ").concat(disabledClasses, " ").concat(className || '');
    return (<input className={inputClasses} placeholder={placeholder} value={inputValue} onChange={handleInputChange} {...props} disabled={disabled} // Ajoutez l'attribut disabled ici
    />);
};
export default InputField;
