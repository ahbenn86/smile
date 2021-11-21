import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route,} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <main>
      <BrowserRouter>
      <Routes>
       <Route path="/*" element={<Home/>}/>
       <Route path="/checkout" element={<Checkout/>}/>
     </Routes>
     </BrowserRouter>
      </main>
    </div>
    
  );
}

export default App;
