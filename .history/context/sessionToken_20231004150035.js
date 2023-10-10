"use client";

// content cart
import { createContext, useState, useEffect } from "react";

export const SessionTokenContext = createContext();

export const SessionTokenProvider = ({ children }) => {
  // check localstorage for cart
  const [sessionToken, setSessionToken] = useState("");

  // add to cart function

  return (
    <SessionTokenContext.Provider
      value={{
        sessionToken,
        setSessionToken,
      }}
    >
      {children}
    </SessionTokenContext.Provider>
  );
};
