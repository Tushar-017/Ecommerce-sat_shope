import { FC, ButtonHTMLAttributes } from 'react';

import {BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner} from './CustomButton.style'

export enum BUTTON_TYPE_CLASS {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASS.base): typeof BaseButton => (
  {
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASS.inverted]: InvertedButton
  }[buttonType]
)

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASS;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton: FC<ButtonProps>  = ({
  buttonType, 
  isLoading,
  children,
  ...otherProps
}) => {
  const Button = getButton(buttonType)
  return (
    <Button disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner/> : children }
    </Button>
  )
}

export default CustomButton
