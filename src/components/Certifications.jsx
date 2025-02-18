// Certifications.jsx
import React from 'react';
import '../App.css';
import { FaAws, FaCloud, FaDatabase, FaLanguage, FaCode, FaNetworkWired, FaLaptopCode } from 'react-icons/fa';

function Certifications() {
  const certifications = [
    { icon: <FaAws />, title: "AWS Academy: Graduate Machine Learning Foundations" },
    { icon: <FaCloud />, title: "AWS Academy: Graduate Cloud Foundations" },
    { icon: <FaDatabase />, title: "AWS Academy: Graduate Cloud Architecting" },
    { icon: <FaLanguage />, title: "Goethe-Zertifikat A1: Start Deutsch 1" },
    { icon: <FaLanguage />, title: "Goethe-Zertifikat A1: Fit in Deutsch 1" },
    { icon: <FaLaptopCode />, title: "Programming in Java – NPTEL" },
    { icon: <FaCode />, title: "Meta Introduction to Frontend Development" },
    { icon: <FaNetworkWired />, title: "Computer Organization Architecture – NPTEL" },
    { icon: <FaNetworkWired />, title: "CISCO Network Academy Introduction to IoT" },
    { icon: <FaLaptopCode />, title: "AICTE AIML Virtual Internship" },
    { icon: <FaCode />, title: "AICTE Cloud Virtual Internship" },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <div className="cert-icon">{cert.icon}</div>
            <p className="cert-title">{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
