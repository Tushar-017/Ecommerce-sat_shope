import { useDispatch, useSelector } from 'react-redux';

import {addItemToCart} from '../../store/cart/cart.action';  
import {selectCartItems} from '../../store/cart/cart.selector';  

import CustomButton, {BUTTON_TYPE_CLASS} from '../custom-button/CustomButton'

import {Item, Footer, Name, Price} from './CollectionItem.style'

const CollectionItem = ({product}) => {
  const {name,imageUrl,price} = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

  const addProductToCart = () => dispatch(addItemToCart(cartItems,product));

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
