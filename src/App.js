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
// import {auth, createUserDocumentfromAuth} from './utils/firebase/firebase'



function App() {
  // const [userDetail, setUserDetail] = useState({currentUser : null})

  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, async user => {
  //     // setUserDetail({currentUser: user})
  //     createUserProfileDocuments(user);
  //     // console.log(user)
  //   });
  //   return () => {
  //     unSubscribe();
  //   }
  // },[])

  return (
    <div>
      <Routes>
            <Route path='/' element={<Header/>}>
              <Route index element={<Homepage/>}/>
              <Route path='/shop' element={<ShopPage/>}/>
              <Route path='/signin' element={<SignInUp/>}/>
            </Route>
      </Routes>
    </div>
  );
}

export default App;
