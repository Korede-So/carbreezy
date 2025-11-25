import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./navbar.css";
import Logo from "../assets/logo.png";


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [showProfile, setShowProfile] = useState(false);
  
  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="navbar-logo">
        <a href="#">
        <img src={Logo} alt="Logo" className="logo-image" />
        </a>
      </div>

       {/* HAMBURGER MENU */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* NAVIGATION LINKS */}
      <ul className="navbar-links">
        <li><a href="#gallery">GALLERY</a></li>
        <li><a href="#offers">OFFERS</a></li>
        <li><a href="#brand">BRANDS</a></li>
        <li><a href="#about">ABOUT US</a></li>
        <li><a href="#contact">CONTACT US</a></li>
      </ul>


      {/* ICONS */}
      <div className="navbar-icons">
        <a href="#filter" className="icon-1">🔍</a>   {/* Scroll to filter/search */}
        
      </div>

       

    </nav>
  );
}
