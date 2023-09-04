import React from "react";
import { Routes, Route } from "react-router-dom"; 
import {
  HomePage,
  JourneyPage,
  UserPage,
} from "../pages";
import NavbarComponent from ".././components/Navbar";


function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;