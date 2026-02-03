import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import StatsVision from "./components/StatsVision";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      {/* Add IDs for smooth scrolling */}
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="stats">
        <StatsVision />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
