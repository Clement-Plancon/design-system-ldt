import React, { useState, useRef, useEffect, ReactNode } from 'react';
import styles from './filter.module.scss';
const chevronClose = '/src/images/input-dropdown/chevron-close.svg';
const chevronOpen = '/src/images/input-dropdown/chevron-open.svg';

export interface FilterProps {
  label: string;
  options: Array<string | ReactNode>;
  onSelect?: (selectedOption: string | ReactNode) => void;
  className?: string;
}

const Filter: React.FC<FilterProps> = ({ label, options, onSelect, className }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<ReactNode | string>(label);
  const [isFilled, setIsFilled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowDropdown(false);
    }
  };

  const handleOptionClick = (option: ReactNode | string) => {
    if (typeof option === 'string') {
      setSelectedLabel(option);
    } else {
      setSelectedLabel('Selected Option'); // ou autre placeholder si l'option est un composant
    }

    if (onSelect) {
      onSelect(option);
      setIsFilled(false);
    }
    setIsFilled(true);
 
  };

  return (
    <div className={`${styles.filter} ${className || ''}`} ref={dropdownRef}>
      <div
        className={`${styles['filter__block']} ${styles['filter__block--default']} ${isFilled ? styles['filter__block--default--filled'] : ''}`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {selectedLabel}
        <img className={styles['filter-icon']} src={showDropdown ? chevronOpen : chevronClose} alt="chevron" />
      </div>
      {showDropdown && (
        <div className={styles['dropdown']}>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
