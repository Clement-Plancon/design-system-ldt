import React from 'react';
import styles from './destructive-button.module.scss';

export interface DestructiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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

const DestructiveButton = ({ buttonText, buttonType, borderless, className, ...props }: DestructiveButtonProps) => {
  const buttonStyles = generateDestructiveButtonStyles(buttonType, borderless);

  const buttonClassNames = [
    buttonStyles[`${buttonType}Block`],
    buttonStyles[`${buttonType}Default`],
    className
  ].filter(Boolean);

  // Si borderless est activé, ajoutez les styles correspondants
  if (borderless) {
    buttonClassNames.push(
      buttonStyles[`${buttonType}BorderlessDefault`]
    );
  }

  return (
    <button className={buttonClassNames.join(' ')} {...props}>
      {buttonText}
    </button>
  );
}

export default DestructiveButton;
