import React from 'react';

declare module './mode-switch.module.scss' {
  const styles: {
    [key: string]: string;
  };
  export = styles;
}

export interface ModeSwitchProps extends React.HTMLAttributes<HTMLDivElement> {}

declare const ModeSwitch: React.FC<ModeSwitchProps>;

export default ModeSwitch;
