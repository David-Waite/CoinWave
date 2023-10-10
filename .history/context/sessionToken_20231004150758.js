"use client";

// content cart
import { createContext, useState, useEffect } from "react";

export const SessionTokenContext = createContext();

export const SessionTokenProvider = ({ children }) => {
  // check localstorage for cart
  const [sessionToken, setSessionToken] = useState("");

  const updateToken = (token) => {
    setSessionToken(token);
    // add to cart function
  };
  return (
    <SessionTokenContext.Provider
      value={{
        sessionToken,
        updateToken,
      }}
    >
      {children}
    </SessionTokenContext.Provider>
  );
};
