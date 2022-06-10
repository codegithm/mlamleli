import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [footerColor, setFooterColor] = useState("#910024");
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [gallery, setGallery] = useState([]);

  return (
    <AppContext.Provider
      value={{
        footer: [footerColor, setFooterColor],
        modalLoad: [open, setOpen],
        modalSuccess: [openSuccess, setOpenSuccess],
        error: [openError, setOpenError],
        galleryArr: [gallery, setGallery],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
