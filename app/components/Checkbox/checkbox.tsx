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
    ? `${styles['checkbox-checked']} ${styles['checkbox__block--default']}`
    : `${styles['checkbox-unchecked']} ${styles['checkbox__block--default']}`;

  return (
    <label className={checkboxClasses}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={styles['checkbox-input']}
      />
      {label}
    </label>
  );
};

export default Checkbox;
