import React, { useState } from 'react'

import './SignIn.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

const SignIn = () => {
  const [details,setDetails] = useState(
    {email: '', password:''}
)

  const handleSubmit = (e) =>{
    e.preventDefault();
    setDetails({})
  }

  const handleChange = event => {
    const {value,name} = event.target;
    setDetails(prvForm => {
      return {
        ...prvForm,
        [name]: value
      }
    })
  }
  // console.log(details);

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
          type="email" 
          name='email' 
          label='email'
          value={details.email} 
          handleChange={handleChange}
          required />
        {/* <label htmlFor="email">Email</label> */}
        <FormInput 
          type="password" 
          name='password' 
          label='password'
          value={details.password}
          handleChange={handleChange}
          required />
        {/* <label htmlFor="password">Password</label> */}

        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
    </div>
  )
}

export default SignIn
