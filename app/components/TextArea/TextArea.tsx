import React, { useState } from 'react';
import styles from './text-area.module.scss';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  filled?: boolean;
  disabled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  error = false,
  filled = false,
  disabled = false,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const getTextAreaClasses = () => {
    const baseClass = `${styles['textarea-default']} ${styles['textarea__block--default']}`;
    const errorClass = `${styles['textarea-error']} ${styles['textarea__block--error']}`;

    if (error) {
      return `${errorClass} ${filled ? styles['textarea__block--filled'] : ''} ${
        disabled ? styles['textarea-disabled'] : ''
      }`;
    }

    return `${baseClass} ${isFocused ? styles['textarea-focus'] : ''} ${
      filled ? styles['textarea__block--filled'] : ''
    } ${disabled ? styles['textarea-disabled'] : ''}`;
  };

  return (
    <textarea
      className={getTextAreaClasses()}
      value={value}
      onChange={handleInputChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
    />
  );
};

export default TextArea;
