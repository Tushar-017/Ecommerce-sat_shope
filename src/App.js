import  {useEffect} from 'react';
import { useDispatch } from 'react-redux';

import {Routes, Route,} from "react-router-dom";




import { checkUserSession  } from './store/user/user.action';

import './App.scss';
import Header from './components/header/Header';
import SignInUp from './pages/sign-in-up/SignInUp';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line 
  },[])

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
