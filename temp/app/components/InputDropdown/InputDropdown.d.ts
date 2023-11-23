import React from 'react';
export interface InputDropdownProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    error?: boolean;
    disabled?: boolean;
    customIcon?: string;
    className?: string;
    children?: React.ReactNode;
}
declare const InputDropdown: React.FC<InputDropdownProps>;
export default InputDropdown;
