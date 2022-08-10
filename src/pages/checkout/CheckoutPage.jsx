import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item/CheckoutItem'

import {CheckoutContainer,CheckoutHeader,HeaderBlock, Total } from './CheckoutPage.style'
// import PaymentForm from '../../components/payment-form/PaymentForm';
import PaymentForm from '../../components/payment-form/PaymentForm';

const CheckoutPage = () => {
   const cartItems = useSelector(selectCartItems);
   const cartTotal = useSelector(selectCartTotal);
   return (
      <CheckoutContainer>
         <CheckoutHeader>
            <HeaderBlock>
               <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Remove</span>
            </HeaderBlock>
         </CheckoutHeader>
         {cartItems.map((cartItem) => (
               <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
         )}
         <Total>Total: ${cartTotal}</Total>
         <PaymentForm/>
      </CheckoutContainer>
   )
}

export default CheckoutPage
