import React, {useContext} from 'react'
import { Link, Outlet } from 'react-router-dom'


import { signOutUser } from '../../utils/firebase/firebase';
import { UserContext  } from '../../contexts/user.context';
import { ReactComponent as Logo } from '../../assets/catbag.svg';


import './Header.scss'

const Header = () => {
  const {currentUser} = useContext(UserContext);
  

  return (
    <>
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className="nav-links-container">
        <Link className='nav-link' to='/shop'>SHOP</Link>
        <Link className='nav-link' to='/shop'>CONTACT</Link>
        {
          currentUser ?
          (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
          : 
          (<Link className='nav-link' to='/signin'>SIGN IN</Link>)
        }
      </div>
    </div>
    <Outlet/>
    </>
  )
}

export default Header
