import { useSelector } from "react-redux";

import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/category/category.selector";

import CollectionPreview  from "../../components/collection-preview/CollectionPreview";
import Spinner from "../../components/spinner/Spinner";





const CategoryPreview = () => {
   const categoriesMap = useSelector(selectCategoriesMap);
   const isLoading = useSelector(selectCategoriesIsLoading);

   return (
      <>
         {isLoading ? (<Spinner/>
            ) : (
            Object.keys(categoriesMap).map((title) => {
               const products = categoriesMap[title];
               return (
                  <CollectionPreview key={title} title={title} products={products}></CollectionPreview>
               )
            }))
         }
      </>
   )
}


export default CategoryPreview;
