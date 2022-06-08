import React from "react";
import "./Nav.css";
import { AppBar, Box, AdbIcon } from "@mui/material";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          position: "fixed",
          bgcolor: "background.paper",
        }}
      ></AppBar>
      <Box
        sx={{
          minWidth: "100vh",
          display: "flex",
        }}
      ></Box>
    </Box>
  );
}
