import React, { createContext, useReducer, useContext } from 'react';

// Initial cart state
const initialState = {
  cart: [],
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// Create context
const CartContext = createContext();

// Context provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state.cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easy usage
export const useCart = () => useContext(CartContext);
