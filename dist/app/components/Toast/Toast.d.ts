import React from 'react';
export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'misc';
export interface ToastProps {
    type: ToastType;
    message: string;
    messageAction: string;
    className?: string;
    onClick?: () => void;
}
declare const Toast: React.FC<ToastProps>;
export default Toast;
