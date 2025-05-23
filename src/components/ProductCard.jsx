import React from 'react';
import Button from './Button';
import { useCart } from '../context/CartContext';

const ProductCard = ({ image, title, price }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    const product = { image, title, price };
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>₹{price}</p>
      <Button text='Add to Cart' onClick={handleAddToCart} />
    </div>
  );
};

export default ProductCard;
