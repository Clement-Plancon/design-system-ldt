import React from 'react';
export interface ButtonProps {
    buttonText: string;
    buttonType: 'primary' | 'secondary' | 'tertiary';
    borderless?: boolean;
}
declare const Button: ({ buttonText, buttonType, borderless }: ButtonProps) => React.JSX.Element;
export default Button;
