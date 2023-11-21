import React, { useState, useEffect } from 'react';
import styles from './text-area.module.scss';

export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  filled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  error = false,
  filled = false,
  className,
  ...props
}) => {
  const [textAreaValue, setTextAreaValue] = useState(value);

  useEffect(() => {
    setTextAreaValue(value);  // S'assurer que la valeur est synchronisée avec la prop value
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setTextAreaValue(newValue);
    onChange(newValue);
  };

  const getTextAreaClasses = () => {
    const baseClass = `${styles['textarea-default__block']} ${styles['textarea-default__block--default']}`;
    const errorClass =  `${styles['textarea-default-error__block']} ${styles['textarea-default-error__block--default']}`;

    if (error) {
      return `${errorClass} ${filled ? styles['textarea-default__block--filled'] : ''}`;
    }

    return `${baseClass} ${filled ? styles['textarea-default__block--filled'] : ''}`;
  };

  return (
    <textarea
      className={`${getTextAreaClasses()} ${className || ''}`}
      value={textAreaValue}
      onChange={handleInputChange}
      {...props}
    />
  );
};

export default TextArea;
