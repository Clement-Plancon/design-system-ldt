import React from 'react';

type InputFieldProps = {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  disabled?: boolean;
  customIcon?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

declare const InputField: React.FC<InputFieldProps>;

export default InputField;
