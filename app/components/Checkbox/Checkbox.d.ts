import React from 'react';

declare module './checkbox.module.scss' {
  const styles: {
    [key: string]: string;
  };
  export = styles;
}

export interface CheckboxProps {
  label: string;
}

declare const Checkbox: React.FC<CheckboxProps>;

export default Checkbox;
