import React from 'react';
import '../App.css';
import Photo1 from '../assets/Photo1.jpg';

function About() {
  return (
    <section className="about-section" id="about">
      {/* Left side with blue background and animated image */}
      <div className="about-left">
        <img src={Photo1} alt="Samiksha" className="about-photo" />
      </div>

      {/* Right side with animated text */}
      <div className="about-right">
        <h2>Who Am I?</h2>
        <p>
          I'm a Computer Science student passionate about web development, machine learning, and business development. My goal is to leverage technology to create innovative solutions for real-world problems.
        </p>
      </div>
    </section>
  );
}

export default About;
