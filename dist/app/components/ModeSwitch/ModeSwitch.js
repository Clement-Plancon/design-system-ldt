import React, { useState, useEffect } from 'react';
import sunActiveIcon from '../../src/images/mode-switch/sun-on.svg';
import moonActiveIcon from '../../src/images/mode-switch/moon-on.svg';
var ModeSwitch = function () {
    var _a = useState(true), isLightMode = _a[0], setIsLightMode = _a[1];
    useEffect(function () {
        // Récupérer la valeur du mode depuis le local storage lors du chargement initial de la composante.
        var storedMode = localStorage.getItem('themeMode');
        if (storedMode === 'dark') {
            setIsLightMode(false);
        }
    }, []);
    var toggleMode = function () {
        // Inverser le mode.
        setIsLightMode(function (prevMode) {
            var newMode = !prevMode;
            // Stocker le nouveau mode dans le local storage.
            localStorage.setItem('themeMode', newMode ? 'light' : 'dark');
            return newMode;
        });
    };
    return (React.createElement("div", { className: "mode-switch ".concat(isLightMode ? 'light-mode' : 'dark-mode'), onClick: toggleMode },
        React.createElement("img", { src: isLightMode ? moonActiveIcon : sunActiveIcon, alt: isLightMode ? 'Dark Mode' : 'Light Mode' })));
};
export default ModeSwitch;
