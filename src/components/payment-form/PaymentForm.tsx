import { useState, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import {BUTTON_TYPE_CLASS} from '../custom-button/CustomButton';

import { PaymentFormContainer, FormContainer, PaymentButton, PaymentInstruction} from './payment-form.style';

const PaymentForm = () => {
  const strip = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!strip || !elements){
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({amount: amount * 100}),
    }).then((res) => {
      return res.json();
    });
    console.log(response);

    const clientSecret = response.paymentIntent.client_secret;

    const cardDetails = elements.getElement(CardElement);

    if(cardDetails === null) return;

    const paymentResult = await strip.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    })
    setIsProcessingPayment(false);

    if(paymentResult.error){
      alert(paymentResult.error.message);
    }else {
      if(paymentResult.paymentIntent.status === 'succeeded'){
        alert('Payment Successful!');
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment : </h2>
        <CardElement />
        <PaymentButton 
          isLoading= {isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASS.inverted}
        >Pay Now</PaymentButton>
        <hr />
        <PaymentInstruction>
          <p>*Please use the following test credit card for payments*</p>
          4242 4242 4242 4242 - Exp: 04/24 - CVV: 24242
        </PaymentInstruction>
        <br />
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm



