import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [footerColor, setFooterColor] = useState("#910024");
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  return (
    <AppContext.Provider
      value={{
        footer: [footerColor, setFooterColor],
        modalLoad: [open, setOpen],
        modalSuccess: [openSuccess, setOpenSuccess],
        error: [openError, setOpenError],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
