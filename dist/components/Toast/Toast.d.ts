// Toast.d.ts

import { FC } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'misc';

export interface ToastProps {
    type: ToastType;
    message: string;
    messageAction: string;
    className?: string;
    onClick?: () => void;
}

declare const Toast: FC<ToastProps>;

export default Toast;
