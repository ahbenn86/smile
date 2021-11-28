import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  return (
    <div>
      <CurrencyFormat
        renderText={(value) => (
          <div className="subtotal">
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
            <button>Proceed to Checkout</button>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}

export default Subtotal;
