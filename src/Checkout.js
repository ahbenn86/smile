import React from 'react';
import "./Checkout.css";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
              <img className="checkout__ad" src="https://i.imgur.com/7QOnC20.png" alt=""/> 
              {/* size is 1920x93 */}
            </div>
            <div>
                <h2 className="checkout__title">
                    Your Smile Cart
                </h2>
            </div>
            <div className="checkout__right">
                <h2>Subtotal Here</h2>
            </div>
        </div>
    )
}

export default Checkout
