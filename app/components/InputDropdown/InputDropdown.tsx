import React, { useState, useRef, useEffect } from 'react';
import styles from './input-dropdown.module.scss';
const chevronClose = '/src/images/input-dropdown/chevron-close.svg';
const chevronOpen = '/src/images/input-dropdown/chevron-open.svg';

export interface InputDropdownProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  disabled?: boolean;
  customIcon?: string;
  className?: string;
  children?: React.ReactNode;
}

const InputDropdown: React.FC<InputDropdownProps> = ({
  placeholder,
  value,
  onChange,
  error = false,
  disabled = false,
  customIcon,
  className,
  children,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  const defaultClasses = `${styles['input-dropdown-default__block']} ${styles['input-dropdown-default__block--default']}`;
  const errorClasses = error ? `${styles['input-dropdown-default-error__block']} ${styles['input-dropdown-default-error__block--default']}` : '';
  const disabledClasses = disabled ? 'disabled' : '';
  const inputClasses = `${defaultClasses} ${errorClasses} ${disabledClasses} ${className || ''}`;

  return (
    <div className={styles['input-dropdown']} ref={dropdownRef}>
      <div className={styles['input-wrapper']}>
        <input
          className={inputClasses}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onClick={() => setShowDropdown(!showDropdown)}
          {...props}
          disabled={disabled}
        />
        <img className={styles['input-icon']} src={showDropdown ? chevronOpen : chevronClose} alt="chevron" />
      </div>
      {showDropdown && (
        <div className={styles['dropdown']}>
          {children}
        </div>
      )}
    </div>
  );
};

export default InputDropdown;
