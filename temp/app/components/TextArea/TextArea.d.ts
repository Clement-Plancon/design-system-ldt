import React from 'react';
export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
    value: string;
    onChange: (value: string) => void;
    error?: boolean;
    filled?: boolean;
}
declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
