// Importation des dépendances nécessaires de React et des styles du composant
import React, { useState, useContext, useEffect } from 'react';
import styles from './chip.module.scss';

// Définition des propriétés (props) que le composant Chip attend
interface ChipProps {
  type: 'checkbox' | 'radio'; // Soit une checkbox, soit un bouton radio
  label: string;              // Étiquette à afficher à côté de l'input
  id: string;                 // Identifiant de l'input
  name: string;               // Nom de l'input (utile pour les groupes de boutons radio)
  disabled?: boolean;         // Optionnel: pour désactiver l'input
}

// Définition du contexte pour les radios. Ceci est utile pour savoir quel bouton radio est actuellement sélectionné
interface RadioContextProps {
  selectedId: string | null;                 // ID du bouton radio sélectionné ou null si aucun n'est sélectionné
  setSelectedId: (id: string | null) => void; // Fonction pour mettre à jour l'ID du bouton radio sélectionné
}

// Création du contexte pour les boutons radio. Initialement, aucun bouton n'est sélectionné (undefined).
const RadioContext = React.createContext<RadioContextProps | undefined>(undefined);

// Définition des propriétés (props) pour le composant RadioGroup
interface RadioGroupProps {
  children: React.ReactNode;  // Contenu à afficher à l'intérieur du groupe (typiquement, plusieurs composants Chip)
}

// Composant RadioGroup. Il fournit un contexte aux boutons radio qu'il contient
export const RadioGroup: React.FC<RadioGroupProps> = ({ children }) => {
    // State pour garder une trace du bouton radio actuellement sélectionné
    const [selectedId, setSelectedId] = useState<string | null>(null);
    
    // Fournir le state et la fonction pour le mettre à jour au travers du contexte aux composants enfants
    return (
      <RadioContext.Provider value={{ selectedId, setSelectedId }}>
        {children}
      </RadioContext.Provider>
    );
};

// Le composant principal : Chip
const Chip: React.FC<ChipProps> = ({ type, label, id, name, disabled = false }) => {
  // Utiliser le contexte pour savoir quel bouton radio est actuellement sélectionné
  const radioContext = useContext(RadioContext);
  
  // State pour savoir si ce Chip est actuellement coché
  const [isChecked, setIsChecked] = useState(false);

  // Effet pour mettre à jour l'état isChecked en fonction du bouton radio sélectionné
  useEffect(() => {
    if (type === 'radio' && radioContext && radioContext.selectedId === id) {
      setIsChecked(true);
    } else if (type === 'radio') {
      setIsChecked(false);
    }
  }, [radioContext, id, type]);

  // Gestionnaire d'événements pour mettre à jour l'état lorsque l'input est modifié
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'radio' && radioContext) {
      radioContext.setSelectedId(id);
    } else {
      setIsChecked(event.target.checked);
    }
  };

  // Définir le style en fonction du type de Chip
  let chipType = styles['chip-checkbox'];
  let chipTypeBlock = styles['chip-checkbox__block--default'];

  if (type === 'radio') {
    chipType = styles['chip-radio'];
    chipTypeBlock = styles['chip-radio__block--default'];
  }

  // Appliquer le style pour un élément désactivé ou coché
  const isDisabled = disabled ? styles['disabled'] : '';
  const checkedClass = isChecked ? styles['checked'] : '';

  // Retourner le rendu du composant
  return (
    <div className={`${chipType} ${chipTypeBlock} ${isDisabled} ${checkedClass}`}>
      <label>
        <input
          type={type}
          id={id}
          name={name}
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
};

// Exporter le composant Chip par défaut
export default Chip;
