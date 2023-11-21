// Toast.tsx
'use client'
import React, {useState} from 'react';
import styles from './toast.module.scss';

const successIcon = '/src/images/toast/success.svg';
const errorIcon = '/src/images/toast/error.svg';
const warningIcon = '/src/images/toast/warning.svg';
const infoIcon = '/src/images/toast/information.svg';
const crossIcon = '/src/images/toast/cross.svg';

export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'misc';

export interface ToastProps {
    type: ToastType;
    message: string;
    messageAction: string;
    className?: string;
    onClick?: () => void;
}
const Toast: React.FC<ToastProps> = ({ type, message, messageAction, className = '', onClick }) => {

    const [toastVisible, setToastVisible] = useState(true);

    // Si toastVisible est false, retournez null pour ne rien rendre.
    if (!toastVisible) {
        return null;
    }

    const getToastClass = () => {
        switch(type) {
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

    const getIconSrc = () => {
        switch(type) {
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
    
    const deleteToast = () => {
        setToastVisible(false);
    }

    return (
        <div 
            className={`${styles.toast__block} ${getToastClass()} ${className}`} 
            onClick={onClick}
        >
            <img src={getIconSrc()} alt={type} className={styles.toastIcon} /> 
            {message}
            <span className={styles['message-action']}>{messageAction}</span>
            <img src={crossIcon} alt={'cross'} className={styles.toastIcon} onClick={() => deleteToast()} /> 
        </div>
    );
};

export default Toast;
