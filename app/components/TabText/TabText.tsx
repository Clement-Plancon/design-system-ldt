// TabText.tsx
import React from 'react';
import styles from './tab-text.module.scss';

export interface TabTextProps {
  label: string;
}

const TabText = ({ label }: TabTextProps) => {
  return (
    <div className={`${styles['tab-text__block']} ${styles['tab-text__block--default']}`}>
      {label}
    </div>
  );
};

export default TabText;
