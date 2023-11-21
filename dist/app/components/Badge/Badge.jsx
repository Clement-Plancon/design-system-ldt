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
import React from 'react';
import styles from './badge.module.scss';
var warningIcon = '/src/images/badge/warning.svg';
var inProgressIcon = '/src/images/badge/in-progress.svg';
var successIcon = '/src/images/badge/success.svg';
var errorIcon = '/src/images/badge/error.svg';
var personnalizedIcon = '/src/images/badge/personnalized.svg';
var Badge = function (_a) {
    var text = _a.text, badgeType = _a.badgeType, className = _a.className, props = __rest(_a, ["text", "badgeType", "className"]);
    var badgeClasses = [
        styles["badge-".concat(badgeType, "__block")],
        className
    ];
    var badgeClassesBlock = [
        styles["badge-".concat(badgeType, "__block--default")],
        className
    ];
    var getIconBadgeSrc = function () {
        switch (badgeType) {
            case 'warning':
                return warningIcon;
            case 'in-progress':
                return inProgressIcon;
            case 'success':
                return successIcon;
            case 'error':
                return errorIcon;
            case 'personnalized':
                return personnalizedIcon;
            default:
                return undefined;
        }
    };
    return (<div className={"".concat(badgeClasses.join(' '), " ").concat(badgeClassesBlock.join(' '))} {...props}>
      <img src={getIconBadgeSrc()} alt="icone badge"/>
      {text}
    </div>);
};
export default Badge;
