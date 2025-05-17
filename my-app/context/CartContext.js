//context/CartContext
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = cake => {
    const exists = cart.find(c => c.id === cake.id);
    if (exists) {
      setCart(cart.map(c => c.id === cake.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...cake, qty: 1 }]);
    }
  };

  const increaseQty = id => {
    setCart(cart.map(c => c.id === id ? { ...c, qty: c.qty + 1 } : c));
  };

  const decreaseQty = id => {
    setCart(cart.map(c => c.id === id && c.qty > 1 ? { ...c, qty: c.qty - 1 } : c));
  };

  const removeItem = id => {
    setCart(cart.filter(c => c.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQty, decreaseQty, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
