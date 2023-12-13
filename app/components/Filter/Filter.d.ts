import React from 'react';

export interface FilterProps {
  label: string;
  options: Array<any>;
  onSelect?: (selectedOption: string) => void;
  className?: string;
  iconOpen?: React.ReactNode;
  iconClose?: React.ReactNode;
}

// Déclaration du composant Filter avec ses props
declare const Filter: React.FC<FilterProps>;

export default Filter;
