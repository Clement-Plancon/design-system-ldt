import React, { ReactNode } from 'react';
export interface FilterProps {
    label: string;
    options: Array<string | ReactNode>;
    onSelect?: (selectedOption: string | ReactNode) => void;
    className?: string;
}
declare const Filter: React.FC<FilterProps>;
export default Filter;
