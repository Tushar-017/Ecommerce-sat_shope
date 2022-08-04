import React, {useContext} from 'react'
import {  Outlet } from 'react-router-dom'

import { UserContext  } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as Logo } from '../../assets/catbag.svg';
import { signOutUser } from '../../utils/firebase/firebase';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './Header.style'

const Header = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  

  return (
    <>
    <NavigationContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <NavLinks>
        <NavLink to='/shop'>SHOP</NavLink>
        <NavLink to='/shop'>CONTACT</NavLink>
        {
          currentUser ?
          (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
          : 
          (<NavLink to='/signin'>SIGN IN</NavLink>)
        }
        <CartIcon/>
      </NavLinks>
      {isCartOpen && <CartDropdown/>}
    </NavigationContainer>
    <Outlet/>
    </>
  )
}

export default Header
