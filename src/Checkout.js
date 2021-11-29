import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';




function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
              <img className="checkout__ad" src="https://i.imgur.com/0m5n5tt.png" alt=""/> 
              {/* size is 1920x93 */}
              <div>
              <h2 className="checkout__title">
                    Your Smile Cart
                </h2>
                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
              </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
            </div>
    )
}

export default Checkout
