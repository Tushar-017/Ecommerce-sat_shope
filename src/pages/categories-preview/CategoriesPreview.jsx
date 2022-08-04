import React, {useContext} from "react";

import { CategoriesContext } from "../../contexts/categories.context"; 
import CollectionPreview  from "../../components/collection-preview/CollectionPreview";




const CategoryPreview = () => {
   const {categoriesMap} = useContext(CategoriesContext) 
   return (
      <>
         {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
               <CollectionPreview key={title} title={title} products={products}></CollectionPreview>
            )
         })}
      </>
   )
}


export default CategoryPreview;
