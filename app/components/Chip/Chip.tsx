import React, { useState, useContext, useEffect } from 'react';
import styles from './chip.module.scss';

export interface ChipProps {
  type: 'checkbox' | 'radio';
  label: string;
  id: string;
  name: string;
  disabled?: boolean;
}

interface RadioContextProps {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

interface RadioGroupProps {
  children: React.ReactNode;
}

const RadioContext = React.createContext<RadioContextProps | undefined>(undefined);

export const RadioGroup: React.FC<RadioGroupProps> = ({ children }) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    return (
      <RadioContext.Provider value={{ selectedId, setSelectedId }}>
        {children}
      </RadioContext.Provider>
    );
};

const Chip: React.FC<ChipProps> = ({ type, label, id, name, disabled = false }) => {
  const radioContext = useContext(RadioContext);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (type === 'radio' && radioContext && radioContext.selectedId === id) {
      setIsChecked(true);
    } else if (type === 'radio') {
      setIsChecked(false);
    }
  }, [radioContext, id, type]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'radio' && radioContext) {
      radioContext.setSelectedId(id);
    } else {
      setIsChecked(event.target.checked);
    }
  };

  const handleContainerClick = () => {
    if(disabled) return;
    if (type === 'radio' && radioContext) {
      radioContext.setSelectedId(id);
    } else {
      setIsChecked(!isChecked);
    }
  };

  let chipType = styles['chip-checkbox'];
  let chipTypeBlock = styles['chip-checkbox__block--default'];

  if (type === 'radio') {
    chipType = styles['chip-radio'];
    chipTypeBlock = styles['chip-radio__block--default'];
  }

  const isDisabled = disabled ? styles['disabled'] : '';
  const checkedClass = isChecked ? styles['checked'] : '';

  return (
    <div 
      className={`${chipType} ${chipTypeBlock} ${isDisabled} ${checkedClass}`}
      onClick={handleContainerClick}
    >
      <label>
        <input
          type={type}
          id={id}
          name={name}
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
          onClick={e => e.stopPropagation()}
        />
        {label}
      </label>
    </div>
  );
};

export default Chip;
