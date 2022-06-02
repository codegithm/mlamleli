import React from "react";
import { AppBar, Box, Button } from "@mui/material";
import Logo from "../assets/mlamleli.jpg";
import NavLine from "./NavLine";

function Navbar() {
  const responsiveNavCont = {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: { lg: "2rem", md: "2rem", sm: "0px", sx: "0px" },
    paddingRight: { lg: "2rem", md: "2rem", sm: "0px", sx: "0px" },
    justifyContent: "space-between",
  };
  return (
    <Box
      position='fixed'
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
          />
          <Button
            variant='contained'
            sx={{
              backgroundColor: "#8f6818",
              borderRadius: 0,
              width: 163.13,
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
