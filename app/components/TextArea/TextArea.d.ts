import React from 'react';

declare module './text-area.module.scss' {
  const styles: {
    [key: string]: string;
  };
  export = styles;
}

export interface TextAreaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: boolean;
  filled?: boolean;
  disabled?: boolean;
}

declare const TextArea: React.FC<TextAreaProps>;

export default TextArea;
