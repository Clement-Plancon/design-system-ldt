import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonText: string;
    buttonType: 'primary' | 'secondary' | 'tertiary';
    borderless?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
