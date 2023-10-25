import React, { useState } from 'react';
import styles from './input-dropdown.module.scss';

interface InputDropdownProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  disabled?: boolean;
  customIcon?: string;
  className?: string;
  options: string[]; // Les options à afficher dans le dropdown
  onOptionSelect: (selectedOption: string) => void; // Gère la sélection d'une option
}

const InputDropdown: React.FC<InputDropdownProps> = ({
  placeholder,
  value,
  onChange,
  error = false,
  disabled = false,
  customIcon,
  className,
  options = [],
  onOptionSelect,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  const defaultClasses = `${styles['input-dropdown-default__block']} ${styles['input-dropdown-default__block--default']}`;
  const errorClasses = error ? `${styles['input-dropdown-default-error__block']} ${styles['input-dropdown-default-error__block--default']}` : '';
  const disabledClasses = disabled ? 'disabled' : ''; // Notez que c'est simplement un nom de classe

  const inputClasses = `${defaultClasses} ${errorClasses} ${disabledClasses} ${className || ''}`;

  return (
    <div className="input-dropdown">
      <input
        className={inputClasses}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        {...props}
        disabled={disabled}
      />
      {(
        <select
          className={styles['dropdown']}
          onChange={(e) => {
            const selectedOption = e.target.value;
            onOptionSelect?.(selectedOption);
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default InputDropdown;
