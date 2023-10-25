import React, { useState } from 'react';
import styles from './input-field.module.scss';

interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  disabled?: boolean;
  customIcon?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  value,
  onChange,
  error = false,
  disabled = false,
  customIcon,
  className,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  const defaultClasses = `${styles['input-field-default__block']} ${styles['input-field-default__block--default']}`;
  const errorClasses = error ? `${styles['input-field-default-error__block']} ${styles['input-field-default-error__block--default']}` : '';
  const disabledClasses = disabled ? 'disabled' : ''; // Notez que c'est simplement un nom de classe

  const inputClasses = `${defaultClasses} ${errorClasses} ${disabledClasses} ${className || ''}`;

  return (
    <input
      className={inputClasses}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
      {...props}
      disabled={disabled} // Ajoutez l'attribut disabled ici
    />
  );
};

export default InputField;
