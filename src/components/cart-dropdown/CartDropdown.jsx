import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context'

import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'

import './CartDropdown.scss'

const CartDropdown = () => {
   const {cartItems} = useContext(CartContext); 
   const navigate = useNavigate();

   const goToCheckoutHandler = () => {
      navigate('/checkout')
   }

   return (
      <div className='cart-dropdown-container'>
            <div className='cart-items'>
               {cartItems.map(item => (
                  <CartItem key={item.id} cartItem={item} />
               ))}
            </div>
         <CustomButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</CustomButton>
      </div>
   )
}

export default CartDropdown
