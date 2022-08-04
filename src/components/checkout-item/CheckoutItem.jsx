import React, {useContext} from 'react'

import { CartContext } from '../../contexts/cart.context'

import {RemoveButton,Quantity,ImageContainer,CheckoutItems, Arrow, Value,BaseSpan} from './CheckoutItem.style'

const CheckoutItem = ({cartItem}) => {
   const {name,imageUrl, price,quantity} = cartItem

   const { clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);

   const clearItemHandler = () => clearItemFromCart(cartItem);
   const addItemHandler = () => removeItemToCart(cartItem);
   const removeItemHandler = () => addItemToCart(cartItem);
   return (
   <CheckoutItems>
      <ImageContainer>
         <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
         <Arrow onClick={addItemHandler}>
            &#10094;
         </Arrow>
         <Value>{quantity}</Value>
         <Arrow onClick={removeItemHandler}>
            &#10095;
         </Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
   </CheckoutItems>
  )
}

export default CheckoutItem
