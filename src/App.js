import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/header/Header';
import SignInUp from './pages/sign-in-up/SignInUp';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import './App.css';



function App() {
  return (
    <div>
      <Header/>
      <Routes>
            <Route  path='/' element={<Homepage/>}/>
            <Route path='/shop' element={<ShopPage/>}/>
            <Route path='/signin' element={<SignInUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
