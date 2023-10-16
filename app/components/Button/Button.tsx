import React from 'react'
import styles from './button.module.scss'

interface ButtonProps {
  buttonText: string;
  buttonType: 'primary' | 'secondary' | 'tertiary';
  borderless?: boolean;
}

function generateButtonStyles(prefix: 'primary' | 'secondary' | 'tertiary', borderless: boolean = false) {
  const baseStyles = {
    [`${prefix}Block`]: styles[`button-${prefix}__block`],
    [`${prefix}Default`]: styles[`button-${prefix}__block--default`],
  };

  if (borderless) {
    return {
      ...baseStyles,
      [`${prefix}BorderlessDefault`]: styles[`button-${prefix}-borderless__block--default`],
    };
  }

  return baseStyles;
}


const Button = ({ buttonText, buttonType, borderless }: ButtonProps) => {
  const buttonStyles = generateButtonStyles(buttonType, borderless);

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
  )
}

export default Button