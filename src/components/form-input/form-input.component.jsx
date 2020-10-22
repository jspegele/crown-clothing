import React from 'react'
import { InputGroupContainer, InputContainer, FormInputLabel } from './form-input.styles'

const FormInput = ({ handleChange, label, ...props }) => (
  <InputGroupContainer>
    <InputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel
        className={`${props.value.length ? 'shrink' : ''}l`}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </InputGroupContainer>
)
 
export default FormInput
