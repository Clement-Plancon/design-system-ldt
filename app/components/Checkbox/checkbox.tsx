'use client'
import React, { useState } from 'react';
import styles from './checkbox.module.scss';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked: propChecked, onChange: propOnChange, ...props }) => {
  const [isChecked, setIsChecked] = useState(propChecked || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (propOnChange) {
      propOnChange(e);
    }
    setIsChecked(!isChecked);
  };

  const checkboxClasses = isChecked
    ? `${styles['checkbox-checked__block']} ${styles['checkbox-checked__block--default']}`
    : `${styles['checkbox-unchecked__block']} ${styles['checkbox-unchecked__block--default']}`;

  return (
    <label className={styles['checkbox-label']}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={styles['checkbox-input']}
        {...props}
      />
      <span className={checkboxClasses}></span>
      {label}
    </label>
  );
};

export default Checkbox;
