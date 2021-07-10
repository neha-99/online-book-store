import React from 'react';
import { useState } from 'react';
export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const [name, setName] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Address:  ${name} `+"\n" + "Total Price: Rs"+ totalPrice.toFixed(2))
  }
  return (

    <aside className="col-12 col-md-4">
      <h2>Cart Items</h2>
      <hr/>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-1">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div >
              {item.qty} x Rs{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div >Items Price</div>
              <div >Rs{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div >Tax Price</div>
              <div >Rs{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div >Shipping Price</div>
              <div >
                Rs{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div >
                <strong>Total Price</strong>
              </div>
              <div >
                <strong>Rs{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row ">
            <form onSubmit={handleSubmit}>
              <label className="row col-2">
                 Address: 
              <input
                 type="text"
                 value={name}
                onChange={e => setName(e.target.value)}
              />
      </label>
      <hr/>
      <div className="row">
      <button type="submit" value="Submit" > Checkout </button>
      </div>
    </form>
            </div>
            
          </>
        )}
      </div>
      
    </aside>
    
    
  );
}