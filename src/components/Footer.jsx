import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>We are a modern company building amazing web experiences.</p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <p><a href="#">Home</a></p>
        <p><a href="#about">About</a></p>
        <p><a href="#contact">Contact</a></p>
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <p>Email: sofolahankorede@gmail.com</p>
        <p>Phone: +2349097965806</p>
      </div>
      <div className="footer-bottom">
        © 2025 Website — All rights reserved.
      </div>
    </footer>
  );
}
