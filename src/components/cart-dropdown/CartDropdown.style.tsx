import styled from 'styled-components'

import { BaseButton, GoogleSignInButton, InvertedButton } from '../custom-button/CustomButton.style'

export const CartDropdownContainer = styled.div`
   position: absolute;
   width: 240px;
   height: 340px;
   display: flex;
   flex-direction: column;
   padding: 20px;
   border: 1px solid black;
   background-color: white;
   top: 90px;
   right: 40px;
   z-index: 5;

   @media screen and (max-width: 800px){
      width: 200px;
      height: 280px;
   }
   @media screen and (max-width: 420px){
      padding: 8px;
      top: 70px;
      right: 35px;
   }

   ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
      margin-top: auto;
   }
`

export const EmptyMessage = styled.span`
   font-size: 18px;
   margin: 50px auto;
   @media screen and (max-width: 800px){
      font-size: 14px;
   }
`

export const CartItems = styled.div`
   height: 240px;
   display: flex;
   flex-direction: column;
   overflow: scroll;
   @media screen and (max-width: 800px){
      height: 200px;
   }
`
