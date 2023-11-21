import React, { useState, useRef, useEffect } from 'react';
import styles from './filter.module.scss';
var chevronClose = '/src/images/input-dropdown/chevron-close.svg';
var chevronOpen = '/src/images/input-dropdown/chevron-open.svg';
var Filter = function (_a) {
    var label = _a.label, options = _a.options, onSelect = _a.onSelect, className = _a.className;
    var _b = useState(false), showDropdown = _b[0], setShowDropdown = _b[1];
    var _c = useState(label), selectedLabel = _c[0], setSelectedLabel = _c[1];
    var _d = useState(false), isFilled = _d[0], setIsFilled = _d[1];
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
    var handleOptionClick = function (option) {
        if (typeof option === 'string') {
            setSelectedLabel(option);
        }
        else {
            setSelectedLabel('Selected Option'); // ou autre placeholder si l'option est un composant
        }
        if (onSelect) {
            onSelect(option);
            setIsFilled(false);
        }
        setIsFilled(true);
    };
    return (<div className={"".concat(styles.filter, " ").concat(className || '')} ref={dropdownRef}>
      <div className={"".concat(styles['filter__block'], " ").concat(styles['filter__block--default'], " ").concat(isFilled ? styles['filter__block--default--filled'] : '')} onClick={function () { return setShowDropdown(!showDropdown); }}>
        {selectedLabel}
        <img className={styles['filter-icon']} src={showDropdown ? chevronOpen : chevronClose} alt="chevron"/>
      </div>
      {showDropdown && (<div className={styles['dropdown']}>
          {options.map(function (option, index) { return (<div key={index} onClick={function () { return handleOptionClick(option); }}>
              {option}
            </div>); })}
        </div>)}
    </div>);
};
export default Filter;
