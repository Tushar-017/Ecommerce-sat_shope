import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Fira Sans Condensed', sans-serif;
    padding: 20px 40px;

    @media screen and (max-width: 800px){
      padding: 15px;
    }
    @media screen and (max-width: 400px){
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;