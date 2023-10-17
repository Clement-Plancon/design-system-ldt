'use client'
import React, { useState } from 'react';
import styles from './checkbox.module.scss';

interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
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
      />
      <span className={checkboxClasses}></span>
      {label}
    </label>
  );
};

export default Checkbox;
