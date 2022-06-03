import { Box } from "@mui/material";
import React from "react";
import Dropdown from "./Components/Dropdown";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        height: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Router>
        <Navbar />
        <Dropdown />
        <Routes>
          <Route exact path='/' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
