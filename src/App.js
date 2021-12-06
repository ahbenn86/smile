import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { Routes, Route, useLocation } from 'react-router-dom';


function App() {
  let location = useLocation();
  return (
    <div>
      {location.pathname !== '/login' ? <Header /> : null}
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
