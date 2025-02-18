// Education.jsx
import React from 'react';
import '../App.css';

const Education = () => {
  return (
    <section className="education-container" id="education">
      <h2 className="education-title">Education</h2>
      <div className="background-decor-1"></div>
   <div className="background-decor-2"></div>
   <div className="background-decor-3"></div>
      <div className="timeline">
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>2009-2014</h3>
            <p>St. Britto's Academy, Chennai</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>2014-2015</h3>
            <p>St. John's Public School, Chennai</p>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="timeline-content">
            <h3>2015-2022</h3>
            <p>NPS International, Chennai</p>
            <p className="additional-info">Class 10 - 89.6%<br />Class 12 - 82.2%</p>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="timeline-content">
            <h3>2022-2026</h3>
            <p>SRM Institute of Science and Technology, Chennai</p>
            <p className="additional-info">Bachelor of Technology in Computer Science Engineering<br />CGPA - 9.02</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
