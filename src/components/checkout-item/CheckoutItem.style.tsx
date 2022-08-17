import styled from 'styled-components'



export const CheckoutItems = styled.div`
   width: 100%;
   display: flex;
   min-height: 100px;
   border-bottom: 1px solid darkgrey;
   padding: 15px 0;
   font-size: 20px;
   align-items: center;
   @media screen and (max-width: 800px){
      font-size: 13px;
   }
   @media screen and (max-width: 560px){
      font-size: 12px;
   }
`

export const ImageContainer = styled.div`
   width: 23%;
   padding-right: 15px;

   img {
      width: 100%;
      height: 100%;
   }
`

export const BaseSpan = styled.span`
   width: 23%;
`;

export const Quantity = styled(BaseSpan)`
   display: flex;
`;

export const Arrow = styled.div`
   cursor: pointer;
`;

export const Value = styled.span`
   margin: 0 10px;
   @media screen and (max-width: 580px){
      margin: 0 7px;
   }
`

export const RemoveButton = styled.div`
   padding-left: 12px;
   cursor: pointer;
`
