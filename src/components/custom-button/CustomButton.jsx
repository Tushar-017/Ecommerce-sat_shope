import React from 'react'

import {BaseButton, GoogleSignInButton, InvertedButton} from './CustomButton.style'

export const BUTTON_TYPE_CLASS = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) => (
  {
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASS.inverted]: InvertedButton
  }[buttonType]
)


const CustomButton = ({children, buttonType, ...otherProps}) => {
  const Button = getButton(buttonType)
  return (
    <Button {...otherProps}>
      {children }
    </Button>
  )
}

export default CustomButton
