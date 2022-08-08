import React from 'react';
import {  Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import { selectCurrentUser } from '../../store/user/user.selector';
import {selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';

import { ReactComponent as Logo } from '../../assets/catbag.svg';


import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './Header.style'

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  console.log(currentUser, 'current');

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
          (<NavLink to='/auth'>SIGN IN</NavLink>)
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
