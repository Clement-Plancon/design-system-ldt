import React from 'react';
import styles from './destructive-button.module.scss';

interface DestructiveButtonProps {
  buttonText: string;
  buttonType: 'primary' | 'secondary' | 'tertiary';
  borderless?: boolean;
}

function generateDestructiveButtonStyles(
  prefix: 'primary' | 'secondary' | 'tertiary',
  borderless: boolean = false
) {
  const baseStyles = {
    [`${prefix}Block`]: styles[`destructive-button-${prefix}__block`],
    [`${prefix}Default`]: styles[`destructive-button-${prefix}__block--default`],
  };

  if (borderless) {
    return {
      ...baseStyles,
      [`${prefix}BorderlessDefault`]: styles[`destructive-button-${prefix}-borderless__block--default`],
    };
  }

  return baseStyles;
}

const DestructiveButton = ({ buttonText, buttonType, borderless }: DestructiveButtonProps) => {
  const buttonStyles = generateDestructiveButtonStyles(buttonType, borderless);

  const buttonClassNames = [
    buttonStyles[`${buttonType}Block`],
    buttonStyles[`${buttonType}Default`],
  ];

  // Si borderless est activé, ajoutez les styles correspondants
  if (borderless) {
    buttonClassNames.push(
      buttonStyles[`${buttonType}BorderlessDefault`]
    );
  }

  return (
    <>
      <button className={buttonClassNames.join(' ')}>
        {buttonText}
      </button>
    </>
  );
}

export default DestructiveButton;
