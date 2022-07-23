import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import Homepage from './pages/homepage/Homepage';
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

function App() {
  return (
      <Routes>
            <Route  path='/' element={<Homepage/>}/>
            <Route path='/hats' element={<HatsPage/>}/>
      </Routes>
  );
}

export default App;
