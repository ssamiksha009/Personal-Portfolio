// Navbar.jsx
import React from 'react';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SAMIKSHA PORTFOLIO</div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#certifications">Certifications</a></li>
      </ul>
      <a href="#contact" className="navbar-contact-button">Contact</a>
    </nav>
  );
}

export default Navbar;
