import  {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import {Routes, Route,} from "react-router-dom";



import { onAuthStateChangedListener,createUserDocumentFromAuth  } from './utils/firebase/firebase';
import { setCurrentUser  } from './store/user/user.action';

import './App.scss';
import Header from './components/header/Header';
import SignInUp from './pages/sign-in-up/SignInUp';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user){
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });
    
    return unsubscribe;
  },[dispatch])

  return (
    <div>
      <Routes>
            <Route path='/' element={<Header/>}>
              <Route index element={<Homepage/>}/>
              <Route path='shop/*' element={<ShopPage/>}/>
              <Route path='auth' element={<SignInUp/>}/>
              <Route path='checkout' element={<CheckoutPage/>}/>
            </Route>
      </Routes>
    </div>
  );
}

export default App;
