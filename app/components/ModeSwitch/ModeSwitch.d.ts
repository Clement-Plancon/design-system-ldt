import React from 'react';

declare module './mode-switch.module.scss' {
  const styles: {
    [key: string]: string;
  };
  export = styles;
}

declare const ModeSwitch: React.FC;

export default ModeSwitch;
