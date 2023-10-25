import React from 'react';
import styles from './tab.module.scss';

export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

const Tab: React.FC<TabProps> = ({ label, className, ...props }) => {
  return (
    <div 
      className={`${styles['tab__block']} ${styles['tab__block--default']} ${className}`} 
      {...props}
    >
      {label}
    </div>
  );
};

export default Tab;
