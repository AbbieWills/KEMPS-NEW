import React from "react";
import { Routes, Route } from "react-router-dom"; 
import {
  HomePage,
  AboutPage,
  ContactPage

} from "../pages";
import NavbarComponent from ".././components/Navbar";


function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
