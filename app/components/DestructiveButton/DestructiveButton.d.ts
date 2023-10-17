import React from 'react';

declare module './destructive-button.module.scss' {
  const styles: {
    [key: string]: string;
  };
  export = styles;
}

export interface DestructiveButtonProps {
  buttonText: string;
  buttonType: 'primary' | 'secondary' | 'tertiary';
  borderless?: boolean;
}

declare const DestructiveButton: React.FC<DestructiveButtonProps>;

export default DestructiveButton;
