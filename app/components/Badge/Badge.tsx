import React from 'react';
import styles from './badge.module.scss';
const warningIcon = '/src/images/badge/warning.svg'
const inProgressIcon = '/src/images/badge/in-progress.svg'
const successIcon = '/src/images/badge/success.svg'
const errorIcon = '/src/images/badge/error.svg'
const personnalizedIcon = '/src/images/badge/personnalized.svg'


export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  badgeType: 'warning' | 'in-progress' | 'success' | 'error' | 'personnalized';
}

const Badge: React.FC<BadgeProps> = ({ text, badgeType, className, ...props }) => {
  const badgeClasses = [
    styles[`badge-${badgeType}__block`],
    className
  ];
  const badgeClassesBlock = [
    styles[`badge-${badgeType}__block--default`],
    className
  ];

  const getIconBadgeSrc = () => {
    switch(badgeType) {
        case 'warning':
            return warningIcon;
        case 'in-progress':
            return inProgressIcon;
        case 'success':
            return successIcon;
        case 'error':
            return errorIcon;
        case 'personnalized':
            return personnalizedIcon;
        default:
            return undefined;
    }
};

  return (
    <div className={`${badgeClasses.join(' ')} ${badgeClassesBlock.join(' ')}`} {...props}>
      <img src={getIconBadgeSrc()} alt="icone badge" />
      {text}
    </div>
  );
};

export default Badge;
