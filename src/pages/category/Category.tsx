import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


import CollectionItem from '../../components/collection-item/CollectionItem'
import Spinner from '../../components/spinner/Spinner'

import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/category/category.selector'

import {CategoryTitle, CategoryContainer, Container} from './Category.style'

type CategoryRouteParams = {
   category: string;
}

const Category = () => {
   const {category} = useParams<keyof CategoryRouteParams>() as CategoryRouteParams; 
   const categoriesMap = useSelector(selectCategoriesMap);
   const isLoading = useSelector(selectCategoriesIsLoading)
   const [products, setProducts] = useState(categoriesMap[category]);


   useEffect(() => {
      setProducts(categoriesMap[category])
   },[category, categoriesMap])

   return (
      <Container>
         <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
         {isLoading ? (
            <Spinner/>
         ): (
         <CategoryContainer>
            {
               products && products.map((product) => <CollectionItem key={product.id} product={product}/>)
            }
         </CategoryContainer>
         )}
      </Container>
   )
}

export default Category
