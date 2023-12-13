import React, { useState, useRef, useEffect } from 'react';
import styles from './filter.module.scss';

export interface FilterProps {
  label: string;
  options: Array<any>;
  onSelect?: (selectedOption: string) => void;
  className?: string;
  iconOpen?: React.ReactNode;
  iconClose?: React.ReactNode;
}

const Filter: React.FC<FilterProps> = ({ label, options, onSelect, className, iconOpen, iconClose }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    const newSelectedOptions = new Set(selectedOptions);
    if (newSelectedOptions.has(option)) {
      newSelectedOptions.delete(option);
    } else {
      newSelectedOptions.add(option);
    }
    setSelectedOptions(newSelectedOptions);

    if (onSelect) {
      onSelect(option);
    }
  };

  const renderLabel = () => {
    const count = selectedOptions.size;
    return count === 0 ? label : `${count} filtre(s) sélectionné(s)`;
  };

  const renderIcon = () => {
    const icon = showDropdown ? iconOpen : iconClose;
    return <span className={styles['filter-icon']}>{icon}</span>;
  };

  return (
    <div className={`${styles.filter} ${className || ''}`} ref={dropdownRef}>
      <div
        className={`${styles['filter__block']} ${styles['filter__block--default']} ${selectedOptions.size > 0 ? styles['filter__block--default--filled'] : ''}`}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {renderLabel()}
        {renderIcon()}
      </div>
      {showDropdown && (
        <div className={styles['dropdown']}>
          {options.map((option, index) => (
            <div
              key={index}
              className={selectedOptions.has(option) ? styles.selected : ''}
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
