import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [footerColor, setFooterColor] = useState("#910024");

  return (
    <AppContext.Provider
      value={{
        footer: [footerColor, setFooterColor],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
