import  {useEffect, lazy, Suspense} from 'react';
import { useDispatch } from 'react-redux';

import {Routes, Route,} from "react-router-dom";


import { checkUserSession  } from './store/user/user.action';
import Spinner from './components/spinner/Spinner';

import { GlobalStyle } from './global.styles';

const Homepage = lazy(() => import('./pages/homepage/Homepage'));
const SignInUp = lazy(() => import('./pages/sign-in-up/SignInUp'));
const Header = lazy(() => import('./components/header/Header'));
const ShopPage = lazy(() => import('./pages/shoppage/ShopPage'));
const CheckoutPage = lazy(() => import('./pages/checkout/CheckoutPage'));


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line 
  },[])

  return (
    <div>
      <GlobalStyle/>
      <Suspense fallback={<Spinner/>}>
        <Routes>
              <Route path='/' element={<Header/>}>
                <Route index element={<Homepage/>}/>
                <Route path='shop/*' element={<ShopPage/>}/>
                <Route path='auth' element={<SignInUp/>}/>
                <Route path='checkout' element={<CheckoutPage/>}/>
              </Route>
        </Routes>
      </Suspense>
      
    </div>
  );
}

export default App;
