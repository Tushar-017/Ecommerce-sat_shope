import React from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/category/category.selector";

import CollectionPreview  from "../../components/collection-preview/CollectionPreview";




const CategoryPreview = () => {
   const categoriesMap = useSelector(selectCategoriesMap);
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
