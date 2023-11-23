var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useEffect } from 'react';
const sunActiveIcon = '/src/images/mode-switch/sun-on.svg';
const moonActiveIcon = '/src/images/mode-switch/moon-on.svg';
const sunInactiveIcon = '/src/images/mode-switch/sun-off.svg';
const moonInactiveIcon = '/src/images/mode-switch/moon-off.svg';
const ModeSwitch = (_a) => {
    var { className } = _a, props = __rest(_a, ["className"]);
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
    return (<div className={`mode-switch ${isLightMode ? 'light-mode' : 'dark-mode'} ${className}`} onClick={toggleMode} {...props}>
      <img src={isLightMode ? moonActiveIcon : sunActiveIcon} alt={isLightMode ? 'Dark Mode' : 'Light Mode'}/>
    </div>);
};
export default ModeSwitch;
