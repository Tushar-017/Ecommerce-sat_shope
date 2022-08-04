import React, {useContext} from 'react'

import { CartContext } from '../../contexts/cart.context'

import CustomButton, {BUTTON_TYPE_CLASS} from '../custom-button/CustomButton'

import {Item, Footer, Name, Price} from './CollectionItem.style'

const CollectionItem = ({product}) => {
  const {name,imageUrl,price} = product;
  const { addItemToCart} = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <Item>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <CustomButton buttonType={BUTTON_TYPE_CLASS.inverted} onClick={addProductToCart}>Add to cart</CustomButton>
    </Item>
  )
}

export default CollectionItem
