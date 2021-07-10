import Header from './Header';
import Cart from './Cart';
import Basket from './Basket';
import data from '../data';
import { useState } from 'react';
function Item() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  
  return (
    
      <div className="container">
          <div className="row mt-2">
        <Cart products={products} onAdd={onAdd}></Cart>
        
       <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          
        ></Basket>
      </div>
      </div>
   
  );
}

export default Item;