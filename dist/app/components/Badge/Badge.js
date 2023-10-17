import React from 'react';
import styles from './badge.module.scss';
var Badge = function (_a) {
    var text = _a.text, badgeType = _a.badgeType;
    var badgeClasses = "".concat(styles["badge-" + badgeType + '__block--default']);
    return (React.createElement("div", { className: badgeClasses }, text));
};
export default Badge;
