import React from 'react';
import { useCart } from '../context/CartContext'; // adjust the path as needed

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.title} width={100} />
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
