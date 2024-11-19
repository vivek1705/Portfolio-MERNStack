// Navbar.js
import React, { useState } from "react";
import "../styles/Navbar.css";
import data from "../data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close the menu
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">{data.name}</h1>
      <button className="menu-toggle" onClick={handleMenuToggle}>
        ☰
      </button>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
  <li>
    <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick("home"); }}>
      Home
    </a>
  </li>
  <li>
    <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick("about"); }}>
      About
    </a>
  </li>
  <li>
    <a href="#projects" onClick={(e) => { e.preventDefault(); handleLinkClick("projects"); }}>
      Projects
    </a>
  </li>
  <li>
    <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick("contact"); }}>
      Contact
    </a>
  </li>
</ul>

    </nav>
  );
};

export default Navbar;
