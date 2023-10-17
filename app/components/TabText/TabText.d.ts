import React from 'react';

declare module './tab-text.module.scss' {
  const styles: {
    [key: string]: string;
  };
  export = styles;
}

declare const TabText: React.FC<{ label: string }>;

export default TabText;
