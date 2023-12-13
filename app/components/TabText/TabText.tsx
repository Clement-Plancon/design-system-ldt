import React, { useContext } from 'react';
import styles from './tab-text.module.scss';

// Définition du contexte pour les onglets
interface TabTextContextProps {
  activeTab: string | null;
  setActiveTab: (label: string) => void;
}

const TabTextContext = React.createContext<TabTextContextProps | null>(null);

// Composant pour le groupe d'onglets
export interface TabTextGroupProps {
  children: React.ReactNode;
  defaultActive?: string;
}

export const TabTextGroup: React.FC<TabTextGroupProps> = ({ defaultActive = "", children }) => {
  const [activeTab, setActiveTab] = React.useState<string>(defaultActive);

  return (
    <TabTextContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabTextContext.Provider>
  );
};

// Définition des props pour le composant TabText
export interface TabTextProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
}

export const TabText: React.FC<TabTextProps> = ({ label, className, ...props }) => {
  const context = useContext(TabTextContext);

  if (!context) {
    throw new Error("Un TabText ne peut pas être utilisé sans TabTextGroup");
  }

  const { activeTab, setActiveTab } = context;
  const isActive = label === activeTab;
  const activeClass = isActive ? styles['active'] : '';

  return (
    <div 
      className={`${styles['tab-text__block']} ${styles['tab-text__block--default']} ${className} ${activeClass}`}
      onClick={() => setActiveTab(label)}
      {...props}
    >
      {label}
    </div>
  );
};
