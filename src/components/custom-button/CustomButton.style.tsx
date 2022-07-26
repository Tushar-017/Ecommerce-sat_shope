import styled from "styled-components";

import { SpinnerContainer } from "../spinner/Spinner.style";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.3px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Fira Sans Condensed', sans-serif;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  @media screen and (max-width: 800px){
    min-width: 155px;
    width: auto;
    height: 45px;
    letter-spacing: 0.4px;
    line-height: 40px;
    padding: 0 30px 0 30px;
    font-size: 12px;
  }
`

export const GoogleSignInButton = styled(BaseButton)`

  background-color: #4285f4;
  color: white;

  &:hover{
    background-color: #357ae8;
    border: none;
  }
`


export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`