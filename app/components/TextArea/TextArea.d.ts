import React from 'react';

declare module './text-area.module.scss' {
  const styles: {
    [key: string]: string;
  };
  export = styles;
}

declare type TextAreaProps = {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  filled?: boolean;
  disabled?: boolean;
};

declare const TextArea: React.FC<TextAreaProps>;

export default TextArea;
