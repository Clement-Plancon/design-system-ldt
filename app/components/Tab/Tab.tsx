import React, { useContext } from 'react';
import styles from './tab.module.scss';

// Définition du contexte pour les onglets
interface TabContextProps {
  activeTab: string | null;
  setActiveTab: (label: string) => void;
}

const TabContext = React.createContext<TabContextProps | null>(null);

// Composant pour le groupe d'onglets
export interface TabGroupProps {
  children: React.ReactNode;
  defaultActive?: string;
}

export const TabGroup: React.FC<TabGroupProps> = ({ defaultActive = "", children }) => {
  const [activeTab, setActiveTab] = React.useState<string>(defaultActive);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

// Définition des props pour le composant Tab
export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

export const Tab: React.FC<TabProps> = ({ label, className, ...props }) => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error("Un tab ne peut pas être utilisé sans TabGroup");
  }

  const { activeTab, setActiveTab } = context;
  const isActive = label === activeTab;
  const activeClass = isActive ? styles['active'] : ''; // Classe pour l'état actif

  return (
    <div 
      className={`${styles['tab__block']} ${styles['tab__block--default']} ${className} ${activeClass}`}
      onClick={() => setActiveTab(label)}
      {...props}
    >
      {label}
    </div>
  );
};
