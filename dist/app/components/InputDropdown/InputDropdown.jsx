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
const chevronClose = '/src/images/input-dropdown/chevron-close.svg';
const chevronOpen = '/src/images/input-dropdown/chevron-open.svg';
const InputDropdown = (_a) => {
    var { placeholder, value, onChange, error = false, disabled = false, customIcon, className, children } = _a, props = __rest(_a, ["placeholder", "value", "onChange", "error", "disabled", "customIcon", "className", "children"]);
    const [inputValue, setInputValue] = useState(value);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };
    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        onChange(newValue);
    };
    const defaultClasses = `${styles['input-dropdown-default__block']} ${styles['input-dropdown-default__block--default']}`;
    const errorClasses = error ? `${styles['input-dropdown-default-error__block']} ${styles['input-dropdown-default-error__block--default']}` : '';
    const disabledClasses = disabled ? 'disabled' : '';
    const inputClasses = `${defaultClasses} ${errorClasses} ${disabledClasses} ${className || ''}`;
    return (<div className={styles['input-dropdown']} ref={dropdownRef}>
      <div className={styles['input-wrapper']}>
        <input className={inputClasses} placeholder={placeholder} value={inputValue} onChange={handleInputChange} onClick={() => setShowDropdown(!showDropdown)} {...props} disabled={disabled}/>
        <img className={styles['input-icon']} src={showDropdown ? chevronOpen : chevronClose} alt="chevron"/>
      </div>
      {showDropdown && (<div className={styles['dropdown']}>
          {children}
        </div>)}
    </div>);
};
export default InputDropdown;
