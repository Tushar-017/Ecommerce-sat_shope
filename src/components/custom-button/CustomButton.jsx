import React from 'react'

import {BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner} from './CustomButton.style'

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


const CustomButton = ({children, buttonType, isLoading,...otherProps}) => {
  const Button = getButton(buttonType)
  return (
    <Button disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner/> : children }
    </Button>
  )
}

export default CustomButton
