import React from 'react';
interface TabGroupProps {
    children: React.ReactNode;
    defaultActive?: string;
}
export declare const TabGroup: React.FC<TabGroupProps>;
export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
}
declare const Tab: React.FC<TabProps>;
export default Tab;
