import React from 'react';
import styles from './badge.module.scss';

export interface BadgeProps {
  text: string;
  badgeType: 'warning' | 'in-progress' | 'success' | 'error' | 'personnalized';
}

const Badge: React.FC<BadgeProps> = ({ text, badgeType }) => {

  const badgeClasses = `${styles[`badge-` + badgeType + '__block--default']}`;
  return (
    <div className={badgeClasses}>
      {text}
    </div>
  );
};

export default Badge;
