import React from 'react';
export interface ChipProps {
    type: 'checkbox' | 'radio';
    label: string;
    id: string;
    name: string;
    disabled?: boolean;
}
interface RadioGroupProps {
    children: React.ReactNode;
}
export declare const RadioGroup: React.FC<RadioGroupProps>;
declare const Chip: React.FC<ChipProps>;
export default Chip;
