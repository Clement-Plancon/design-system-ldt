import React from 'react';
export interface DestructiveButtonProps {
    buttonText: string;
    buttonType: 'primary' | 'secondary' | 'tertiary';
    borderless?: boolean;
}
declare const DestructiveButton: ({ buttonText, buttonType, borderless }: DestructiveButtonProps) => React.JSX.Element;
export default DestructiveButton;
