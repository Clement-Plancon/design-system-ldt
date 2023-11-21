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
var sunActiveIcon = '/src/images/mode-switch/sun-on.svg';
var moonActiveIcon = '/src/images/mode-switch/moon-on.svg';
var sunInactiveIcon = '/src/images/mode-switch/sun-off.svg';
var moonInactiveIcon = '/src/images/mode-switch/moon-off.svg';
var ModeSwitch = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var _b = useState(true), isLightMode = _b[0], setIsLightMode = _b[1];
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
    return (<div className={"mode-switch ".concat(isLightMode ? 'light-mode' : 'dark-mode', " ").concat(className)} onClick={toggleMode} {...props}>
      <img src={isLightMode ? moonActiveIcon : sunActiveIcon} alt={isLightMode ? 'Dark Mode' : 'Light Mode'}/>
    </div>);
};
export default ModeSwitch;
