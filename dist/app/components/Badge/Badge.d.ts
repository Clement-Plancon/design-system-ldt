import React from 'react';
export interface BadgeProps {
    text: string;
    badgeType: 'warning' | 'in-progress' | 'success' | 'error' | 'personnalized';
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
