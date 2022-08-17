import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../store/cart/cart.selector';

import {CartDropdownContainer,EmptyMessage, CartItems} from './CartDropdown.style'
import { useCallback } from 'react';

const CartDropdown = () => {
   const cartItems = useSelector(selectCartItems); 
   const navigate = useNavigate();

   const goToCheckoutHandler = useCallback(() => {
      navigate('/checkout')
   },[])

   return (
      <CartDropdownContainer>
            <CartItems>
               {
                  cartItems.length ? (cartItems.map(item => (
                     <CartItem key={item.id} cartItem={item} />
                  ))) 
                  : (<EmptyMessage>Your cart is empty</EmptyMessage>)
               }
            </CartItems>
         <CustomButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CustomButton>
      </CartDropdownContainer>
   )
}

export default CartDropdown
