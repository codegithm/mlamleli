import { Box } from "@mui/material";
import React from "react";
import Dropdown from "./Components/Dropdown";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <Box
      sx={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Dropdown />
      <SignUp />
      <Footer />
    </Box>
  );
}

export default App;
