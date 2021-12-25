import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { Routes, Route, useLocation } from 'react-router-dom';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { useStateValue } from './StateProvider';

const auth = getAuth()

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      console.log('THE USER IS >>>', user);

      if (user){
        dispatch({
          type: 'SET_USER',
          user: user
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  let location = useLocation();
  return (
    <div>
      {location.pathname !== '/login' ? <Header /> : null}
      <main>
      <Routes>
       <Route path="/*" element={<Home/>}/>
       <Route path="/checkout" element={<Checkout/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/payment" element={<Payment/>}/>
     </Routes>
      </main>
    </div>
    
  );
}

export default App;
