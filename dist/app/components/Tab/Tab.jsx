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
const TabContext = React.createContext(null);
export const TabGroup = ({ defaultActive = "", children }) => {
    const [activeTab, setActiveTab] = React.useState(defaultActive);
    return (<TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>);
};
const Tab = (_a) => {
    var { label, className } = _a, props = __rest(_a, ["label", "className"]);
    const context = useContext(TabContext);
    if (!context) {
        throw new Error("Un tab ne peut pas être utilisé sans TabGroup");
    }
    const { activeTab, setActiveTab } = context;
    const isActive = label === activeTab;
    const activeClass = isActive ? styles['active'] : ''; // classe pour l'état actif
    return (<div className={`${styles['tab__block']} ${styles['tab__block--default']} ${className} ${activeClass}`} onClick={() => setActiveTab(label)} {...props}>
      {label}
    </div>);
};
export default Tab;
