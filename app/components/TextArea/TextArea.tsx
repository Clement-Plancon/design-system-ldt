import React, { useState } from 'react';
import styles from './text-area.module.scss';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  filled?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,  // Le gestionnaire d'événements d'origine
  error = false,
  filled = false,
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event);  // Passez l'événement complet à onChange
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
      className={`${getTextAreaClasses()} ${className || ''}`}  // Utiliser une valeur par défaut pour éviter undefined
      value={value}
      onChange={handleInputChange}  // Utilisez handleInputChange ici
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  );
};

export default TextArea;
