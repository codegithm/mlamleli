import React from "react";
import "./Home.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div className='home-cont'>
      <Nav />
      <div className='main-content'>
        <h1>Funeral palor</h1>
      </div>
      <Footer />
    </div>
  );
}
