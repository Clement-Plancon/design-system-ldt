// TabText.tsx
import React from 'react';
import styles from './tab-text.module.scss';
var TabText = function (_a) {
    var label = _a.label;
    return (React.createElement("div", { className: "".concat(styles['tab-text__block'], " ").concat(styles['tab-text__block--default']) }, label));
};
export default TabText;
