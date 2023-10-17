import React from 'react';

declare module './tab.module.scss' {
  const styles: {
    [key: string]: string;
  };
  export = styles;
}

declare const Tab: React.FC<{ label: string }>;

export default Tab;
