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
import React, { useContext } from 'react';
import styles from './tab.module.scss';
var TabContext = React.createContext(null);
export var TabGroup = function (_a) {
    var _b = _a.defaultActive, defaultActive = _b === void 0 ? "" : _b, children = _a.children;
    var _c = React.useState(defaultActive), activeTab = _c[0], setActiveTab = _c[1];
    return (<TabContext.Provider value={{ activeTab: activeTab, setActiveTab: setActiveTab }}>
      {children}
    </TabContext.Provider>);
};
var Tab = function (_a) {
    var label = _a.label, className = _a.className, props = __rest(_a, ["label", "className"]);
    var context = useContext(TabContext);
    if (!context) {
        throw new Error("Un tab ne peut pas être utilisé sans TabGroup");
    }
    var activeTab = context.activeTab, setActiveTab = context.setActiveTab;
    var isActive = label === activeTab;
    var activeClass = isActive ? styles['active'] : ''; // classe pour l'état actif
    return (<div className={"".concat(styles['tab__block'], " ").concat(styles['tab__block--default'], " ").concat(className, " ").concat(activeClass)} onClick={function () { return setActiveTab(label); }} {...props}>
      {label}
    </div>);
};
export default Tab;
