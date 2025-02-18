import React from 'react';
import '../App.css'; // Assuming styles are integrated into App.css
import { FaTrophy, FaMedal, FaAward, FaBookOpen } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section className="achievements-container" id="achievements">
      <h2 className="achievements-title">Achievements & Research</h2>

      <div className="achievements-grid">
        <div className="achievement-card">
          <FaTrophy className="achievement-icon" />
          <h3 className="achievement-heading">1st Place</h3>
          <p className="achievement-description">
            FinMini Hackathon by Crescent Club of Finance, BS Abdur Rahman Crescent Institute of Science and Technology, Chennai.
          </p>
        </div>

        <div className="achievement-card">
          <FaMedal className="achievement-icon" />
          <h3 className="achievement-heading">3rd Place</h3>
          <p className="achievement-description">
            FinTechZAI Hackathon by the School of Computing, SRMIST, Chennai.
          </p>
        </div>

        <div className="achievement-card">
          <FaAward className="achievement-icon" />
          <h3 className="achievement-heading">Finalist</h3>
          <ul className="achievement-list">
            <li>Quantathon, IIT Madras</li>
            <li>ML Hackathon, Vishnu Institute of Technology, Andhra Pradesh</li>
          </ul>
        </div>

        <div className="achievement-card">
          <FaAward className="achievement-icon" />
          <h3 className="achievement-heading">Participation</h3>
          <ul className="achievement-list">
            <li>Flipkart Runway Season 4</li>
            <li>DSAI Hackathon, IIT Bhilai</li>
            <li>EY Technathon 4.0, organized by Ernst & Young</li>
            <li>CodeXen Hackathon, DA-IICT Gandhinagar</li>
          </ul>
        </div>

        <div className="research-card">
          <FaBookOpen className="research-icon" />
          <h3 className="research-heading">Onging Research</h3>
          <p className="research-description">
            Research paper on <strong>Cyberbullying Detection Using NLP</strong>, guided by Professor Dr. Akilandeswari P, exploring advanced machine learning models to enhance detection on social media platforms.
          </p>
        </div>

          {/* New Row for Extracurriculars */}
  <div className="second-row">
    <div className="achievement-card">
      <FaAward className="achievement-icon" />
      <h3 className="achievement-heading">Extracurriculars</h3>
      <ul className="achievement-list">
        <li>Achieved <strong>Merit</strong> status at the international level in the Spell Bee competition</li>
        <li>Completed Grades 1, 2, 3, and 5 with credits in Piano at Trinity College London</li>
        <li>Won 3rd place in the State-level Ideal Abacus competition</li>
        <li>Won 4th place in the National-level Ideal Abacus competition</li>
      </ul>
    </div>
  </div>
      </div>
    </section>
  );
};

export default Achievements;
