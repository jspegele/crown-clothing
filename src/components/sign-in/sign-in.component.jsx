import React, { useState } from "react"
import { connect } from 'react-redux'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import CustomButton from "../custom-button/custom-button.component"
import FormInput from "../form-input/form-input.component"
import {
  SignInContainer,
  TitleContainer,
  ButtonsContainer
} from "./sign-in.styles"

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({ email: "", password: "" })
  const { email, password } = userCredentials

  const handleSubmit = async (e) => {
    e.preventDefault()
 
    emailSignInStart(email, password)
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <SignInContainer>
      <TitleContainer>I already have an account</TitleContainer>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          label="password"
          required
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
