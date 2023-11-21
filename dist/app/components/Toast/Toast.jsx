// Toast.tsx
'use client';
import React, { useState } from 'react';
import styles from './toast.module.scss';
var successIcon = '/src/images/toast/success.svg';
var errorIcon = '/src/images/toast/error.svg';
var warningIcon = '/src/images/toast/warning.svg';
var infoIcon = '/src/images/toast/information.svg';
var crossIcon = '/src/images/toast/cross.svg';
var Toast = function (_a) {
    var type = _a.type, message = _a.message, messageAction = _a.messageAction, _b = _a.className, className = _b === void 0 ? '' : _b, onClick = _a.onClick;
    var _c = useState(true), toastVisible = _c[0], setToastVisible = _c[1];
    // Si toastVisible est false, retournez null pour ne rien rendre.
    if (!toastVisible) {
        return null;
    }
    var getToastClass = function () {
        switch (type) {
            case 'success':
                return styles['toast__block--success'];
            case 'error':
                return styles['toast__block--error'];
            case 'warning':
                return styles['toast__block--warning'];
            case 'info':
                return styles['toast__block--info'];
            case 'misc':
                return styles['toast__block--misc'];
            default:
                return '';
        }
    };
    var getIconSrc = function () {
        switch (type) {
            case 'success':
                return successIcon;
            case 'error':
                return errorIcon;
            case 'warning':
                return warningIcon;
            case 'info':
                return infoIcon;
            case 'misc':
                return undefined;
            default:
                return undefined;
        }
    };
    var deleteToast = function () {
        setToastVisible(false);
    };
    return (<div className={"".concat(styles.toast__block, " ").concat(getToastClass(), " ").concat(className)} onClick={onClick}>
            <img src={getIconSrc()} alt={type} className={styles.toastIcon}/> 
            {message}
            <span className={styles['message-action']}>{messageAction}</span>
            <img src={crossIcon} alt={'cross'} className={styles.toastIcon} onClick={function () { return deleteToast(); }}/> 
        </div>);
};
export default Toast;
