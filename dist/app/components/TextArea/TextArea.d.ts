import React from 'react';
export interface TextAreaProps {
    value: string;
    onChange: (value: string) => void;
    error?: boolean;
    filled?: boolean;
    disabled?: boolean;
}
declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
