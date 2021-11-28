import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';



function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
              <img className="checkout__ad" src="https://i.imgur.com/7QOnC20.png" alt=""/> 
              {/* size is 1920x93 */}
              <div>
              <h2 className="checkout__title">
                    Your Smile Cart
                </h2>
              </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
            </div>
    )
}

export default Checkout
