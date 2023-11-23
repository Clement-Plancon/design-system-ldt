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
const warningIcon = '/src/images/badge/warning.svg';
const inProgressIcon = '/src/images/badge/in-progress.svg';
const successIcon = '/src/images/badge/success.svg';
const errorIcon = '/src/images/badge/error.svg';
const personnalizedIcon = '/src/images/badge/personnalized.svg';
const Badge = (_a) => {
    var { text, badgeType, className } = _a, props = __rest(_a, ["text", "badgeType", "className"]);
    const badgeClasses = [
        styles[`badge-${badgeType}__block`],
        className
    ];
    const badgeClassesBlock = [
        styles[`badge-${badgeType}__block--default`],
        className
    ];
    const getIconBadgeSrc = () => {
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
    return (<div className={`${badgeClasses.join(' ')} ${badgeClassesBlock.join(' ')}`} {...props}>
      <img src={getIconBadgeSrc()} alt="icone badge"/>
      {text}
    </div>);
};
export default Badge;
