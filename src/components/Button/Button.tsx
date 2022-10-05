import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Is this button isDisabled?
   */
  isDisabled?: boolean;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Type of button
   */
  type?: "button" | "submit" | "reset";
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  isDisabled = false,
  label,
  ...props
}: ButtonProps) => {
  const mode: string = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const disabled = (mode:string, isDisabled:boolean) => ( `${mode}${isDisabled?'--disable':''}` );
  return (
    <button
      type="button"
      className={['storybook-button', mode, disabled(mode, isDisabled)].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};
