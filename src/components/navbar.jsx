import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      
      <div className={`hamburger-button ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`main-navbar ${menuActive ? "active" : ""}`}>
        <a href="/">MEMORIES</a>
        <a href="./events">TIMELINE</a>
        <a href="./team">PRIZE</a>
        <a href="./schedule/index.html?index=0"><h3>GDXR</h3></a>
        <a href="/">About</a>
        <a href="./events">SPONSORS</a>
        <a href="./team">FAQS</a>
      </div>
    </nav>
  );
}

export default Navbar;
