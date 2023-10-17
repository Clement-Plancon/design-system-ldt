import React, { ChangeEvent } from 'react';

declare module 'TextArea' {
  interface TextAreaProps {
    value: string;
    onChange: (value: string) => void;
    error?: boolean;
    filled?: boolean;
    disabled?: boolean;
  }

  export interface TabAreaProps {}

  const TextArea: React.FC<TextAreaProps>;

  export default TextArea;
}
