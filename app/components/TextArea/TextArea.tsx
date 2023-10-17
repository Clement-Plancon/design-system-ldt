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
    const baseClass = `${styles['textarea-default__block']} ${styles['textarea-default__block--default']}`;
    const errorClass =  `${styles['textarea-default-error__block']} ${styles['textarea-default-error__block--default']}`;

    if (error) {
      return `${errorClass} ${filled ? styles['textarea-default__block--filled'] : ''}`;
    }

    return `${baseClass} ${isFocused ? styles['textarea-default__block--default--focus'] : ''} ${
      filled ? styles['textarea-default__block--filled'] : ''}`;
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
