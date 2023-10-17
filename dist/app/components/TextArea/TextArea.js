import React, { useState } from 'react';
import styles from './text-area.module.scss';
var TextArea = function (_a) {
    var value = _a.value, onChange = _a.onChange, _b = _a.error, error = _b === void 0 ? false : _b, _c = _a.filled, filled = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d;
    var _e = useState(false), isFocused = _e[0], setIsFocused = _e[1];
    var handleInputChange = function (event) {
        var newValue = event.target.value;
        onChange(newValue);
    };
    var handleFocus = function () {
        setIsFocused(true);
    };
    var handleBlur = function () {
        setIsFocused(false);
    };
    var getTextAreaClasses = function () {
        var baseClass = "".concat(styles['textarea-default__block'], " ").concat(styles['textarea-default__block--default']);
        var errorClass = "".concat(styles['textarea-default-error__block'], " ").concat(styles['textarea-default-error__block--default']);
        if (error) {
            return "".concat(errorClass, " ").concat(filled ? styles['textarea-default__block--filled'] : '');
        }
        return "".concat(baseClass, " ").concat(isFocused ? styles['textarea-default__block--default--focus'] : '', " ").concat(filled ? styles['textarea-default__block--filled'] : '');
    };
    return (React.createElement("textarea", { className: getTextAreaClasses(), value: value, onChange: handleInputChange, onFocus: handleFocus, onBlur: handleBlur, disabled: disabled }));
};
export default TextArea;
