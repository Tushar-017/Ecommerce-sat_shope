import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const CollectionPreviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 0;

  @media screen and (max-width: 800px){
    align-items: center;
    justify-items: center;
  }
`
export const TitleContainer = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  @media screen and (max-width: 800px){
    display: flex;
    justify-content: center;
  }
`
export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 800px){
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }
`


