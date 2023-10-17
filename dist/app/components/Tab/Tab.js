// Tab.tsx
import React from 'react';
import styles from './tab.module.scss';
var Tab = function (_a) {
    var label = _a.label;
    return (React.createElement("div", { className: "".concat(styles['tab__block'], " ").concat(styles['tab__block--default']) }, label));
};
export default Tab;
