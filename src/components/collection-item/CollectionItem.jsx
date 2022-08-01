import React from 'react'
import CustomButton from '../custom-button/CustomButton'

import './CollectionItem.scss'

const CollectionItem = ({product}) => {
  const {name,imageUrl,price} = product;
  return (
    <div className="collection-item">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton buttonType='inverted'>Add to cart</CustomButton>
    </div>
  )
}

export default CollectionItem
