// Tab.tsx
import React from 'react';
import styles from './tab.module.scss';

interface TabProps {
  label: string;
}

const Tab = ({ label }: TabProps) => {
  return (
    <div className={`${styles['tab__block']} ${styles['tab__block--default']}`}>
      {label}
    </div>
  );
};

export default Tab;
