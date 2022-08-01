import React, {useContext} from "react";

import { ProductsContext } from "../../contexts/products.context";
import CollectionItem from "../../components/collection-item/CollectionItem";

import './ShopPage.scss'


const ShopPage = () => {
  const {products} = useContext(ProductsContext) 
  return (
    <div className="products-container">
      {products.map((product) => (
        <CollectionItem key={product.id} product={product}/>
      ))}
    </div>
  )
}



export default ShopPage
