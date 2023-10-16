import React, { useState, useEffect } from 'react';
import sunActiveIcon from '../../src/images/mode-switch/sun-on.svg';
import moonActiveIcon from '../../src/images/mode-switch/moon-on.svg';
import sunInactiveIcon from '../../src/images/mode-switch/sun-off.svg';
import moonInactiveIcon from '../../src/images/mode-switch/moon-off.svg';
import styles from './mode-switch.module.scss';

const ModeSwitch = () => {
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
    <div className={`mode-switch ${isLightMode ? 'light-mode' : 'dark-mode'}`} onClick={toggleMode}>
      <img
        src={isLightMode ? moonActiveIcon : sunActiveIcon}
        alt={isLightMode ? 'Dark Mode' : 'Light Mode'}
      />
    </div>
  );
};

export default ModeSwitch;
