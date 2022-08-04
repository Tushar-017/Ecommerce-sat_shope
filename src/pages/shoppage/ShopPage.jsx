import React from "react";
import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";


const ShopPage = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path = ':category' element={<Category />}/>
    </Routes>
  )
}



export default ShopPage;
