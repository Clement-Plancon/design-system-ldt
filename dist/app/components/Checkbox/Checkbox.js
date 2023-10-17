'use client';
import React, { useState } from 'react';
import styles from './checkbox.module.scss';
var Checkbox = function (_a) {
    var label = _a.label;
    var _b = useState(false), isChecked = _b[0], setIsChecked = _b[1];
    var handleChange = function () {
        setIsChecked(!isChecked);
    };
    var checkboxClasses = isChecked
        ? "".concat(styles['checkbox-checked__block'], " ").concat(styles['checkbox-checked__block--default'])
        : "".concat(styles['checkbox-unchecked__block'], " ").concat(styles['checkbox-unchecked__block--default']);
    return (React.createElement("label", { className: styles['checkbox-label'] },
        React.createElement("input", { type: "checkbox", checked: isChecked, onChange: handleChange, className: styles['checkbox-input'] }),
        React.createElement("span", { className: checkboxClasses }),
        label));
};
export default Checkbox;
