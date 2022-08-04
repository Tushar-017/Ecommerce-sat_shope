import React, { useState } from 'react'

import {ButtonContainer, Title, SignInContainer} from './SignIn.style'

import { 
  signInWithGooglePopup, 
  signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'
  import FormInput from '../form-input/FormInput'
  import CustomButton, {BUTTON_TYPE_CLASS} from '../custom-button/CustomButton'



const defaultFormFields = {email: '', password: ''}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }


  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      await signInAuthUserWithEmailAndPassword(email,password);
      resetFormFields();
    } catch (error){
      // console.log(error)
      switch(error.code){
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break;
        case 'auth/user-not-found':
          alert('user does not exist')
          break;
        default :
          console.log(error);
      } 
    }
  };


  const handleChange = (event) => {
    const {name,value} = event.target;
    setFormFields({...formFields, [name]: value})
  }

  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label='Email'
          type="email" 
          required onChange={handleChange} 
          name='email' 
          value={email} />

        <FormInput 
          label='Password'
          type="password" 
          required onChange={handleChange} 
          name='password' 
          value={password} />
        <ButtonContainer>
          <CustomButton type="submit" > Sign in </CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASS.google } >Sign in with google</CustomButton>
        </ButtonContainer>
      </form>
      
    </SignInContainer>
  )
}

export default SignIn
