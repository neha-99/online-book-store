import React from 'react';
import Product from './Product';

export default function Cart(props) {
  const { products, onAdd } = props;
  return (
    <cart >
      <h2>Products</h2>
      <div className="container1">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </cart>
  );
}