import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/home/Home";
import Counter from "./pages/counter/Counter";
import Navbar from "./components/Navbar";
import Hero from "./pages/home/components/Hero";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
