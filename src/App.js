import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Header/>
      <main>
      <Routes>
       <Route path="/*" element={<Home/>}/>
       <Route path="/checkout" element={<Checkout/>}/>
       <Route path="/login" element={<Login/>}/>
     </Routes>
      </main>
    </div>
    
  );
}

export default App;
