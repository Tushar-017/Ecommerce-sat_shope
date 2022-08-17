import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
`
export const CategoryTitle = styled.h2`
   font-size: 38px;
   margin-bottom: 25px;
   text-align: center;

   @media screen and (max-width: 800px){
      font-size: 28px;
   }
`

export const CategoryContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   column-gap: 20px;
   row-gap: 50px;


   @media screen and (max-width: 800px){
      grid-template-columns: repeat(2, 1fr);
      gap: 17px;
      align-items: center;
      justify-items: center;
      padding: 10px;
   }
`




