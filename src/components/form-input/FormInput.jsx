import React from 'react'

import {Group, Input, FormInputLabel} from './FormInput.style'

const FormInput = ({handleChange, label, ...otherProps}) => {
  return (
    <Group>
      <Input onChange={handleChange} {...otherProps} />
      {label &&
        (<FormInputLabel 
          shrink = {otherProps.value.length}>
            {label}
        </FormInputLabel>)
      }
    </Group>
  )
}

export default FormInput
