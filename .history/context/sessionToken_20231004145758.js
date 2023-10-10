"use client";

// content cart
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const SessionToken = ({ children }) => {
  // check localstorage for cart
  const [sessionToken, setSessionToken] = useState("");

  // add to cart function
  const addToCart = (token) => {
    setSessionToken(token);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
