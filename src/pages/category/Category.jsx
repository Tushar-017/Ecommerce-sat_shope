import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


import CollectionItem from '../../components/collection-item/CollectionItem'

import { selectCategoriesMap } from '../../store/category/category.selector'

import {CategoryTitle, CategoryContainer, Container} from './Category.style'

const Category = () => {
   const {category} = useParams(); 
   const categoriesMap = useSelector(selectCategoriesMap);
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
