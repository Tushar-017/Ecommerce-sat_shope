import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


import CollectionItem from '../../components/collection-item/CollectionItem'

import { CategoriesContext } from '../../contexts/categories.context'

import {CategoryTitle, CategoryContainer, Container} from './Category.style'

const Category = () => {
   const {category} = useParams(); 
   const { categoriesMap} = useContext(CategoriesContext);
   const [products, setProducts] = useState(categoriesMap[category]);


   useEffect(() => {
      setProducts(categoriesMap[category])
   },[category, categoriesMap])

   return (
      <Container>
         <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
         <CategoryContainer>
            {
               products && products.map((product) => <CollectionItem key={product.id} product={product}/>)
            }
         </CategoryContainer>
         
      </Container>
   )
}

export default Category
