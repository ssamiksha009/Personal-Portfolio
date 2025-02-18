// Header.jsx
import React from 'react';
import '../App.css';
import profilePhoto from '../assets/Photo.jpg'; // Corrected path
 // Import your photo

function Header() {
  return (
    <header className="header-container">
      <div className="text-section">
        <h1 className="greeting">Hi 👋,</h1>
        <h1 className="name">I'm <span>Samiksha S</span></h1>
        <p className="intro">
          Hello! I’m Samiksha S, an aspiring software engineer with a focus on developing creative and efficient tech solutions. I’m driven by a love for learning and a desire to solve meaningful problems through technology. Explore my portfolio to see my journey!
        </p>
      </div>
      <div className="photo-section">
        <img src={profilePhoto} alt="Samiksha" className="profile-photo" />
      </div>
    </header>
  );
}

export default Header;
