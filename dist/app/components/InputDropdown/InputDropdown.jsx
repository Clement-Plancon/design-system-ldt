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
import React, { useState, useRef, useEffect } from 'react';
import styles from './input-dropdown.module.scss';
var chevronClose = '/src/images/input-dropdown/chevron-close.svg';
var chevronOpen = '/src/images/input-dropdown/chevron-open.svg';
var InputDropdown = function (_a) {
    var placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange, _b = _a.error, error = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, customIcon = _a.customIcon, className = _a.className, children = _a.children, props = __rest(_a, ["placeholder", "value", "onChange", "error", "disabled", "customIcon", "className", "children"]);
    var _d = useState(value), inputValue = _d[0], setInputValue = _d[1];
    var _e = useState(false), showDropdown = _e[0], setShowDropdown = _e[1];
    var dropdownRef = useRef(null);
    useEffect(function () {
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    var handleClickOutside = function (event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };
    var handleInputChange = function (event) {
        var newValue = event.target.value;
        setInputValue(newValue);
        onChange(newValue);
    };
    var defaultClasses = "".concat(styles['input-dropdown-default__block'], " ").concat(styles['input-dropdown-default__block--default']);
    var errorClasses = error ? "".concat(styles['input-dropdown-default-error__block'], " ").concat(styles['input-dropdown-default-error__block--default']) : '';
    var disabledClasses = disabled ? 'disabled' : '';
    var inputClasses = "".concat(defaultClasses, " ").concat(errorClasses, " ").concat(disabledClasses, " ").concat(className || '');
    return (<div className={styles['input-dropdown']} ref={dropdownRef}>
      <div className={styles['input-wrapper']}>
        <input className={inputClasses} placeholder={placeholder} value={inputValue} onChange={handleInputChange} onClick={function () { return setShowDropdown(!showDropdown); }} {...props} disabled={disabled}/>
        <img className={styles['input-icon']} src={showDropdown ? chevronOpen : chevronClose} alt="chevron"/>
      </div>
      {showDropdown && (<div className={styles['dropdown']}>
          {children}
        </div>)}
    </div>);
};
export default InputDropdown;
