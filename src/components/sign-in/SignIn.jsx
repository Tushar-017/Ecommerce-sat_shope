import React, { useState } from 'react'

import './SignIn.scss'
// import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import { 
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
  signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'
import FormInput from '../form-input/FormInput'



const defaultFormFields = {email: '', password: ''}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }


  const signInWithGoogle = async () => {
    const {user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      const response = await signInAuthUserWithEmailAndPassword(email,password);
      console.log(response)
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
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
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
        <div className="buttons-container">
          <CustomButton type="submit" > Sign in </CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} buttonType='google' >Sign in with google</CustomButton>
        </div>
      </form>
      
    </div>
  )
}

export default SignIn
