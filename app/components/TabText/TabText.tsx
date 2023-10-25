import React from 'react';
import styles from './tab-text.module.scss';

export interface TabTextProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

const TabText: React.FC<TabTextProps> = ({ label, className, ...props }) => {
  return (
    <div 
      className={`${styles['tab-text__block']} ${styles['tab-text__block--default']} ${className}`} 
      {...props}
    >
      {label}
    </div>
  );
};

export default TabText;
