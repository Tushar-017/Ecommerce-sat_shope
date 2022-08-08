import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import {SignUpContainer} from './SignUp.style'
import { signUpStart } from '../../store/user/user.action'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword:''
}

const SignUp = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password,confirmPassword } = formFields; 
  const dispatch = useDispatch();


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password !== confirmPassword) {
      alert('password do not match')
      return; 
    }

    try{
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    }catch(error){
      if(error.code === 'auth/email-already-in-use'){
        alert('cannot create user, email already exist')
      } else{
        console.log('user creation encounter an error' , error);
      }
    }

  }

  const handleChange = (event) => {
    const {name,value} = event.target;
    setFormFields({...formFields, [name]: value})
  }

  return (
    <SignUpContainer>
      <h2>Don't have an account</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput 
          label='Display Name'
          type="text" 
          required onChange={handleChange} 
          name='displayName' 
          value={displayName} />

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

        <FormInput 
          label='Confirm Password'
          type="password" 
          required onChange={handleChange} 
          value={confirmPassword} 
          name='confirmPassword' />
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  )
}

export default SignUp
