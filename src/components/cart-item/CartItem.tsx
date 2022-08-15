import { FC } from 'react'

import {Name,ItemDetails,CartItems } from './CartItem.style'

import { CartItem as TCartItem } from '../../store/cart/cart.types';

type CartItemProps = {
   cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
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
