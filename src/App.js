import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import './App.css';



function App() {
  return (
      <Routes>
            <Route  path='/' element={<Homepage/>}/>
            <Route path='/shop' element={<ShopPage/>}/>
      </Routes>
  );
}

export default App;
