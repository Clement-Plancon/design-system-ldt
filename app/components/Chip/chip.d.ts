import React from 'react';

// Définition des propriétés (props) que le composant Chip attend
export interface ChipProps {
  type: 'checkbox' | 'radio'; // Soit une checkbox, soit un bouton radio
  label: string;              // Étiquette à afficher à côté de l'input
  id: string;                 // Identifiant de l'input
  name: string;               // Nom de l'input (utile pour les groupes de boutons radio)
  disabled?: boolean;         // Optionnel: pour désactiver l'input
}

// Définition des propriétés (props) pour le composant RadioGroup
export interface RadioGroupProps {
  children: React.ReactNode;  // Contenu à afficher à l'intérieur du groupe (typiquement, plusieurs composants Chip)
}

// Définition du contexte pour les radios
export interface RadioContextProps {
  selectedId: string | null;                 // ID du bouton radio sélectionné ou null si aucun n'est sélectionné
  setSelectedId: (id: string | null) => void; // Fonction pour mettre à jour l'ID du bouton radio sélectionné
}

// Typage pour le contexte
export const RadioContext: React.Context<RadioContextProps | undefined>;

// Composant RadioGroup
export const RadioGroup: React.FC<RadioGroupProps>;

// Composant Chip
declare const Chip: React.FC<ChipProps>;

export default Chip;
