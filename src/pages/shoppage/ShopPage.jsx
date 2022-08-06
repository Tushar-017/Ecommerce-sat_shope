import {useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import { setCategories } from "../../store/category/category.action";

const ShopPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      const getCategoriesMap = async () => {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(setCategories(categoriesArray ));
      }
      getCategoriesMap();
      // eslint-disable-next-line
  },[]) 

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path = ':category' element={<Category />}/>
    </Routes>
  )
}



export default ShopPage;
