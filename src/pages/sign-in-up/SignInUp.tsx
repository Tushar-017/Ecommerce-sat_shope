import {Authentication} from './SignInUp.style'
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
