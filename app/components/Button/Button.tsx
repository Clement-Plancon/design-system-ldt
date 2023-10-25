import React from 'react';
import styles from './button.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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

const Button: React.FC<ButtonProps> = ({ buttonText, buttonType, borderless, className, ...props }) => {
  const buttonStyles = generateButtonStyles(buttonType, borderless);

  const buttonClassNames = [
    buttonStyles[`${buttonType}Block`],
    buttonStyles[`${buttonType}Default`],
    className
  ];

  if (borderless) {
    buttonClassNames.push(buttonStyles[`${buttonType}BorderlessDefault`]);
  }

  return (
    <button className={buttonClassNames.join(' ')} {...props}>
      {buttonText}
    </button>
  );
}

export default Button;
