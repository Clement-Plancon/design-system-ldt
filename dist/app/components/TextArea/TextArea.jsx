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
const TextArea = (_a) => {
    var { value, onChange, error = false, filled = false, className } = _a, props = __rest(_a, ["value", "onChange", "error", "filled", "className"]);
    const [textAreaValue, setTextAreaValue] = useState(value);
    useEffect(() => {
        setTextAreaValue(value); // S'assurer que la valeur est synchronisée avec la prop value
    }, [value]);
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setTextAreaValue(newValue);
        onChange(newValue);
    };
    const getTextAreaClasses = () => {
        const baseClass = `${styles['textarea-default__block']} ${styles['textarea-default__block--default']}`;
        const errorClass = `${styles['textarea-default-error__block']} ${styles['textarea-default-error__block--default']}`;
        if (error) {
            return `${errorClass} ${filled ? styles['textarea-default__block--filled'] : ''}`;
        }
        return `${baseClass} ${filled ? styles['textarea-default__block--filled'] : ''}`;
    };
    return (<textarea className={`${getTextAreaClasses()} ${className || ''}`} value={textAreaValue} onChange={handleInputChange} {...props}/>);
};
export default TextArea;
