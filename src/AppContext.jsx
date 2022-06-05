import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [footerColor, setFooterColor] = useState("#910024");
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  return (
    <AppContext.Provider
      value={{
        footer: [footerColor, setFooterColor],
        modalLoad: [open, setOpen],
        modalSuccess: [openSuccess, setOpenSuccess],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
