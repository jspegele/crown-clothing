import React, { Component } from "react"
import { connect } from 'react-redux'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import CustomButton from "../custom-button/custom-button.component"
import FormInput from "../form-input/form-input.component"
import {
  SignInContainer,
  TitleContainer,
  ButtonsContainer
} from "./sign-in.styles"

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { emailSignInStart } = this.props
    const { email, password } = this.state
 
    emailSignInStart(email, password)
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { googleSignInStart } = this.props
    const { email, password } = this.state
    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
