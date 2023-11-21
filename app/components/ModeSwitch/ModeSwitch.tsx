import React, { useState, useEffect } from 'react';
const sunActiveIcon = '/src/images/mode-switch/sun-on.svg';
const moonActiveIcon = '/src/images/mode-switch/moon-on.svg';
const sunInactiveIcon = '/src/images/mode-switch/sun-off.svg';
const moonInactiveIcon = '/src/images/mode-switch/moon-off.svg';
import styles from './mode-switch.module.scss';

export interface ModeSwitchProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModeSwitch: React.FC<ModeSwitchProps> = ({ className, ...props }) => {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    // Récupérer la valeur du mode depuis le local storage lors du chargement initial de la composante.
    const storedMode = localStorage.getItem('themeMode');
    if (storedMode === 'dark') {
      setIsLightMode(false);
    }
  }, []);

  const toggleMode = () => {
    // Inverser le mode.
    setIsLightMode((prevMode) => {
      const newMode = !prevMode;
      // Stocker le nouveau mode dans le local storage.
      localStorage.setItem('themeMode', newMode ? 'light' : 'dark');
      return newMode;
    });
  };

  return (
    <div 
      className={`mode-switch ${isLightMode ? 'light-mode' : 'dark-mode'} ${className}`} 
      onClick={toggleMode}
      {...props}
    >
      <img
        src={isLightMode ? moonActiveIcon : sunActiveIcon}
        alt={isLightMode ? 'Dark Mode' : 'Light Mode'}
      />
    </div>
  );
};

export default ModeSwitch;
