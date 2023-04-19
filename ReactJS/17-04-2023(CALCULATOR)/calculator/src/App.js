import "./App.css";
import React from "react";
import Calc from "./pages/Calc";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/form" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
