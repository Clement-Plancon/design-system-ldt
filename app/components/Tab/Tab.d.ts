import React from 'react';

declare module './tab.module.scss' {
  const styles: {
    [key: string]: string;
  };
  export = styles;
}
export interface TabProps {}

declare const Tab: React.FC<{ label: string }>;

export default Tab;
