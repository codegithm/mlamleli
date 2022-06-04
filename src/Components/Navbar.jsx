import React, { useContext, useState } from "react";
import { AppBar, Box, Button } from "@mui/material";
import Logo from "../assets/mlamleli.jpg";
import NavLine from "./NavLine";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
function Navbar() {
  const { footer } = useContext(AppContext);
  const [footerColor, setFooterColor] = footer;
  const [orientationChange, setOrientationChange] = useState(
    window.innerHeight > 400
  );
  const navigate = useNavigate();
  const responsiveNavCont = {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: { lg: "2rem", md: "2rem", sm: "0px", sx: "0px" },
    paddingRight: { lg: "2rem", md: "2rem", sm: "0px", sx: "0px" },
    justifyContent: "space-between",
  };

  window.addEventListener("orientationchange", () => {
    setOrientationChange(!orientationChange);
  });
  return (
    <Box
      position={orientationChange ? "fixed" : "absolute"}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        zIndex: 100,
      }}
    >
      <AppBar
        position='stikcy'
        sx={{
          backgroundColor: "#fff",
          minHeigh: 104,
          height: 104,
        }}
      >
        <Box sx={responsiveNavCont}>
          <Box
            component='img'
            alt='Logo'
            src={Logo}
            sx={{
              width: 232,
              height: 100,
            }}
            onClick={() => {
              navigate("/");
              setFooterColor("#910024");
            }}
          />
          <Button
            variant='contained'
            sx={{
              backgroundColor: "#8f6818",
              borderRadius: 0,
              width: 163.13,
            }}
            onClick={() => {
              navigate("/signin");
              setFooterColor("#910024");
            }}
          >
            Member Login
          </Button>
        </Box>
      </AppBar>
      <NavLine />
    </Box>
  );
}

export default Navbar;
