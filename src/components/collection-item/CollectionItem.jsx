import React, {useContext} from 'react'

import { CartContext } from '../../contexts/cart.context'

import CustomButton from '../custom-button/CustomButton'

import './CollectionItem.scss'

const CollectionItem = ({product}) => {
  const {name,imageUrl,price} = product;
  const { addItemToCart} = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="collection-item">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton buttonType='inverted' onClick={addProductToCart}>Add to cart</CustomButton>
    </div>
  )
}

export default CollectionItem
