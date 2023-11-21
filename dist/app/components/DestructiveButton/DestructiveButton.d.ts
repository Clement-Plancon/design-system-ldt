import React from 'react';
export interface DestructiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonText: string;
    buttonType: 'primary' | 'secondary' | 'tertiary';
    borderless?: boolean;
}
declare const DestructiveButton: ({ buttonText, buttonType, borderless, className, ...props }: DestructiveButtonProps) => React.JSX.Element;
export default DestructiveButton;
