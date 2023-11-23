import * as React from 'react';

declare module './input-dropdown.module.scss' {
  interface InputDropdownStyles {
    'input-dropdown-default__block': string;
    'input-dropdown-default__block--default': string;
    'input-dropdown-default-error__block': string;
    'input-dropdown-default-error__block--default': string;
    'dropdown': string;
  }

  const styles: InputDropdownStyles;
  export = styles;
}

export interface InputDropdownProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  disabled?: boolean;
  customIcon?: string;
  className?: string;
  options: string[];
  onOptionSelect: (selectedOption: string) => void;
}

declare const InputDropdown: React.FC<InputDropdownProps>;

export default InputDropdown;
