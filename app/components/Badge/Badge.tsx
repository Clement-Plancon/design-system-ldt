import React from 'react';
import styles from './badge.module.scss';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  badgeType: 'warning' | 'in-progress' | 'success' | 'error' | 'personnalized';
}

const Badge: React.FC<BadgeProps> = ({ text, badgeType, className, ...props }) => {
  const badgeClasses = [
    styles[`badge-${badgeType}__block--default`],
    className
  ];

  return (
    <div className={badgeClasses.join(' ')} {...props}>
      {text}
    </div>
  );
};

export default Badge;
