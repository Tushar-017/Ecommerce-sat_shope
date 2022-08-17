import { useNavigate } from 'react-router-dom';

import {BackgroundImage,Body,DirectoryItemContainer} from './MenuItem.style'

const MenuItem = ({title, imageUrl, size, linkUrl}) => {
  const history = useNavigate();
  return (
    <DirectoryItemContainer 
      size={size}
      onClick={() => history(`${linkUrl}`)}>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <span>SHOP NOW</span>
      </Body>
    </DirectoryItemContainer>
  )
}

export default MenuItem
