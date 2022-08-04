import React from 'react'

import {Authentication} from './SignInUp.style.jsx'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/sign-up/SignUp'

const SignInUp = () => {
  return (
    <Authentication>
      <SignIn />
      <SignUp />
    </Authentication>
  )
}

export default SignInUp
