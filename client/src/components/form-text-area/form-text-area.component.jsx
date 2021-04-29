import React from 'react'
import { TextAreaGroupContainer, TextAreaContainer, FormInputLabel } from './form-text-area.styles'

const FormInput = ({ handleChange, label, ...props }) => {
  const {value, ...remainingProps} = props;
  return (
    <TextAreaGroupContainer>
      <TextAreaContainer rows="4" onChange={handleChange} {...remainingProps}>
        {value}
      </TextAreaContainer>
      {label ? (
        <FormInputLabel
          className={props.value.length ? 'shrink' : ''}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </TextAreaGroupContainer>
  )
}
 
export default FormInput
