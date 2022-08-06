import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

import {RemoveButton,Quantity,ImageContainer,CheckoutItems, Arrow, Value,BaseSpan} from './CheckoutItem.style'

const CheckoutItem = ({cartItem}) => {
   const {name,imageUrl, price,quantity} = cartItem
   const cartItems = useSelector(selectCartItems);
   const dispatch = useDispatch();


   const clearItemHandler = () => dispatch(clearItemFromCart(cartItems,cartItem));
   const addItemHandler = () => dispatch(removeItemFromCart(cartItems,cartItem));
   const removeItemHandler = () => dispatch(addItemToCart(cartItems,cartItem));
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
