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
const InputField = (_a) => {
    var { placeholder, value, onChange, error = false, disabled = false, customIcon, className } = _a, props = __rest(_a, ["placeholder", "value", "onChange", "error", "disabled", "customIcon", "className"]);
    const [inputValue, setInputValue] = useState(value);
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        onChange(newValue);
    };
    const defaultClasses = `${styles['input-field-default__block']} ${styles['input-field-default__block--default']}`;
    const errorClasses = error ? `${styles['input-field-default-error__block']} ${styles['input-field-default-error__block--default']}` : '';
    const disabledClasses = disabled ? 'disabled' : ''; // Notez que c'est simplement un nom de classe
    const inputClasses = `${defaultClasses} ${errorClasses} ${disabledClasses} ${className || ''}`;
    return (<input className={inputClasses} placeholder={placeholder} value={inputValue} onChange={handleInputChange} {...props} disabled={disabled} // Ajoutez l'attribut disabled ici
    />);
};
export default InputField;
