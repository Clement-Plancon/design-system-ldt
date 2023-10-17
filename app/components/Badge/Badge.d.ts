import React from 'react';

declare module './badge.module.scss' {
  const styles: {
    [key: string]: string;
  };
  export = styles;
}

export interface BadgeProps {
  text: string;
  badgeType: 'warning' | 'in-progress' | 'success' | 'error' | 'personnalized';
}

declare const Badge: React.FC<BadgeProps>;

export default Badge;
