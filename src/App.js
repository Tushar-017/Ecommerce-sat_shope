import React from 'react';
// import {onAuthStateChanged } from "firebase/auth";
import {
  Routes,
  Route,
} from "react-router-dom";


import './App.scss';
import Header from './components/header/Header';
import SignInUp from './pages/sign-in-up/SignInUp';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage';



function App() {

  return (
    <div>
      <Routes>
            <Route path='/' element={<Header/>}>
              <Route index element={<Homepage/>}/>
              <Route path='/shop/*' element={<ShopPage/>}/>
              <Route path='/signin' element={<SignInUp/>}/>
              <Route path='/checkout' element={<CheckoutPage/>}/>
            </Route>
      </Routes>
    </div>
  );
}

export default App;
