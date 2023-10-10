"use client";

// content cart
import { createContext, useState } from "react";

export const SessionTokenContext = createContext();

export const SessionTokenProvider = ({ children }) => {
  // check localstorage for cart
  const [sessionToken, setSessionToken] = useState("hi");

  const updateToken = (token) => {
    setSessionToken(token);
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
