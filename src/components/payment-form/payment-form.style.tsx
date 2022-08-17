import styled from 'styled-components';


import CustomButton from '../custom-button/CustomButton';

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px){
    height: 210px;
  }
  @media screen and (max-width: 650px){
    height: 170px;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;


  @media screen and (max-width: 800px){
    min-width: 450px;
  }
  @media screen and (max-width: 450px){
    min-width: 280px;
    h2{
      font-size: 16px;
    }
  }
`;

export const PaymentButton = styled(CustomButton)`
  margin-left: auto;
  margin-top: 30px;
  font-size: 14px;
`;

export const PaymentInstruction =  styled.div`
  color: red;
  font-size: 14px;
  @media screen and (max-width: 450px){
    font-size: 10px;
  }
`