import React, { useState, useContext, useEffect } from 'react';
import styles from './chip.module.scss';
var RadioContext = React.createContext(undefined);
export var RadioGroup = function (_a) {
    var children = _a.children;
    var _b = useState(null), selectedId = _b[0], setSelectedId = _b[1];
    return (<RadioContext.Provider value={{ selectedId: selectedId, setSelectedId: setSelectedId }}>
        {children}
      </RadioContext.Provider>);
};
var Chip = function (_a) {
    var type = _a.type, label = _a.label, id = _a.id, name = _a.name, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    var radioContext = useContext(RadioContext);
    var _c = useState(false), isChecked = _c[0], setIsChecked = _c[1];
    useEffect(function () {
        if (type === 'radio' && radioContext && radioContext.selectedId === id) {
            setIsChecked(true);
        }
        else if (type === 'radio') {
            setIsChecked(false);
        }
    }, [radioContext, id, type]);
    var handleChange = function (event) {
        if (type === 'radio' && radioContext) {
            radioContext.setSelectedId(id);
        }
        else {
            setIsChecked(event.target.checked);
        }
    };
    var handleContainerClick = function () {
        if (disabled)
            return;
        if (type === 'radio' && radioContext) {
            radioContext.setSelectedId(id);
        }
        else {
            setIsChecked(!isChecked);
        }
    };
    var chipType = styles['chip-checkbox'];
    var chipTypeBlock = styles['chip-checkbox__block--default'];
    if (type === 'radio') {
        chipType = styles['chip-radio'];
        chipTypeBlock = styles['chip-radio__block--default'];
    }
    var isDisabled = disabled ? styles['disabled'] : '';
    var checkedClass = isChecked ? styles['checked'] : '';
    return (<div className={"".concat(chipType, " ").concat(chipTypeBlock, " ").concat(isDisabled, " ").concat(checkedClass)} onClick={handleContainerClick}>
      <label>
        <input type={type} id={id} name={name} disabled={disabled} checked={isChecked} onChange={handleChange} onClick={function (e) { return e.stopPropagation(); }}/>
        {label}
      </label>
    </div>);
};
export default Chip;
