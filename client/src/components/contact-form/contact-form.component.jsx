import React, { useState } from 'react'

import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import FormTextArea from '../form-text-area/form-text-area.component'
import { ContactFormContainer, TitleContainer } from './contact-form.styles'

const ContactForm = () => {
  const [messageDetails, setMessageDetails] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const { name, email, phone, message } = messageDetails

  const handleChange = e => {
    const { name, value } = e.target
    setMessageDetails({ ...messageDetails, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    alert('This site is for demonstration purposes only.')
  }

  return (
    <ContactFormContainer>
      <TitleContainer>Contact Crwn Clothing</TitleContainer>
      <span>For all store inquiries and feedback</span>
      <form
        className='sign-up-form'
        onSubmit={handleSubmit}
      >
        <FormInput
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
          label='Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='phone'
          name='phone'
          value={phone}
          onChange={handleChange}
          label='Phone Number'
        />
        <FormTextArea
          name='message'
          value={message}
          onChange={handleChange}
          label='Message'
          required
        />
        <CustomButton type='submit'>SEND</CustomButton>
      </form>
    </ContactFormContainer>
  )
}
 
export default ContactForm
