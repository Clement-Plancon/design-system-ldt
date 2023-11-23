import React from 'react';
export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    error?: boolean;
    disabled?: boolean;
    customIcon?: string;
    className?: string;
}
declare const InputField: React.FC<InputFieldProps>;
export default InputField;
