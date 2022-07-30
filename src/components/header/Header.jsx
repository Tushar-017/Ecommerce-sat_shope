import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../utils/firebase/firebase';
import { signOut } from "firebase/auth";
import {Outlet} from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/catbag.svg';
import './Header.scss'

const Header = ({ currentUser }) => {
  // console.log(currentUser)
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
          (<div className='nav-link' onClick={() => signOut(auth)}>SIGN OUT</div>)
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
