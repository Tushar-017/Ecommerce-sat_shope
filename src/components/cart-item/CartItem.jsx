import React from 'react'

import {Name,ItemDetails,CartItems } from './CartItem.style'

const CartItem = ({cartItem}) => {
   const {name, quantity, imageUrl, price} = cartItem;
   return (
      <CartItems>
         <img src={imageUrl} alt={name} />
         <ItemDetails>
            <Name>{name}</Name>
            <span>{quantity} x ${price}</span>
         </ItemDetails>
      </CartItems>
   )
}

export default CartItem
