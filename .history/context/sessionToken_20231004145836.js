"use client";

// content cart
import { createContext, useState, useEffect } from "react";

export const SessionTokenContext = createContext();

export const SessionToken = ({ children }) => {
  // check localstorage for cart
  const [sessionToken, setSessionToken] = useState("");

  // add to cart function

  setSessionToken(token);

  return (
    <CartContext.Provider
      value={{
        sessionToken,
        setSessionToken,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
