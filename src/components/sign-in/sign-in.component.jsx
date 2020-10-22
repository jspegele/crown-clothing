import React, { Component } from "react"

import { auth, signInWithGoogle } from "../../firebase/firebase.utils"
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

    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" })
    } catch (error) {
      console.log(error)
    }

    this.setState({ email: "", password: "" })
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
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
              onClick={signInWithGoogle}
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

export default SignIn
