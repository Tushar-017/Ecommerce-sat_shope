import { useDispatch, useSelector } from 'react-redux';


import {selectCartCount , selectIsCartOpen} from '../../store/cart/cart.selector'
import { setIsCartOpen} from '../../store/cart/cart.action'


import {ShoppingIcon,CartIconContainer, ItemCount} from './CartIcon.style'

const CartIcon = () => {
   const dispatch = useDispatch();

   const cartCount = useSelector(selectCartCount);
   const isCartOpen = useSelector(selectIsCartOpen);

   const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

   return (
      <CartIconContainer onClick={toggleIsCartOpen}>
         <ShoppingIcon className='shopping-icon' />
         <ItemCount className='item-count'>{cartCount}</ItemCount>
      </CartIconContainer>
   )
}

export default CartIcon
