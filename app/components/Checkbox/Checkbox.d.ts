import React from 'react';

declare module './checkbox.module.scss' {
  const styles: {
    [key: string]: string;
  };
  export = styles;
}

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

declare const Checkbox: React.FC<CheckboxProps>;

export default Checkbox;
