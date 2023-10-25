import React from 'react';

declare module './button.module.scss' {
  const styles: {
    [key: string]: string;
  };
  export = styles;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  buttonType: 'primary' | 'secondary' | 'tertiary';
  borderless?: boolean;
}

declare const Button: React.FC<ButtonProps>;

export default Button;
