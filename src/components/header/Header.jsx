import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../utils/firebase/firebase';
import { signOut } from "firebase/auth";

import { ReactComponent as Logo } from '../../assets/catbag.svg';
import './Header.scss'

const Header = ({ currentUser }) => {
  // console.log(currentUser)
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className="options">
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/shop'>CONTACT</Link>
        {
          currentUser ?
          (<div className='option' onClick={() => signOut(auth)}>SIGN OUT</div>)
          : 
          (<Link className='option' to='/signin'>SIGN IN</Link>)
        }
      </div>
    </div>
  )
}

export default Header
