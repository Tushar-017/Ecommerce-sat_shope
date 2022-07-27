import React, { useEffect, useState } from 'react';
import {onAuthStateChanged } from "firebase/auth";
import {
  Routes,
  Route,
} from "react-router-dom";


import './App.css';
import Header from './components/header/Header';
import SignInUp from './pages/sign-in-up/SignInUp';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import {auth} from './utils/firebase/firebase'



function App() {
  const [userDetail, setUserDetail] = useState({currentUser : null})

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      setUserDetail({currentUser: user})
      console.log(user)
    });
    return () => {
      unSubscribe();
    }
  },[])

  return (
    <div>
      <Header currentUser={userDetail.currentUser} />
      <Routes>
            <Route  path='/' element={<Homepage/>}/>
            <Route path='/shop' element={<ShopPage/>}/>
            <Route path='/signin' element={<SignInUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
