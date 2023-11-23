import React from 'react';

declare module './tab.module.scss' {
  const styles: {
    [key: string]: string;
  };
  export = styles;
}

export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

declare const Tab: React.FC<TabProps>;

export default Tab;
