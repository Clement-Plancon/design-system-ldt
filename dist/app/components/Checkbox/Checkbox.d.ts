import React from 'react';
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
