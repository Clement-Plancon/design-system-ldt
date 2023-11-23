import React from 'react';

declare module './tab-text.module.scss' {
  const styles: {
    [key: string]: string;
  };
  export = styles;
}

export interface TabTextProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

declare const TabText: React.FC<TabTextProps>;

export default TabText;
