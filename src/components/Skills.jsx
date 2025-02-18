// Skills.jsx
import React from 'react';
import '../App.css';

function Skills() {
  return (
    <section id="skills" className="skills-container">
      <h2 className="skills-title">What I Bring to the Table</h2>
      <p className="skills-subtitle">Mastering the Art of Technology and Collaboration</p>
      <div className="skills-grid">
        <div className="skill-item">
          <div className="skill-icon">🐍</div>
          <h3>Python Programming</h3>
          <p>Proficient in Python for developing dynamic applications and performing data analysis with libraries like NumPy and Pandas.</p>
        </div>
        <div className="skill-item">
          <div className="skill-icon">🤖</div>
          <h3>Machine Learning Frameworks</h3>
          <p>Skilled in using TensorFlow, PyTorch, and scikit-learn to build and train machine learning models.</p>
        </div>
        <div className="skill-item">
          <div className="skill-icon">🌐</div>
          <h3>Web Development</h3>
          <p>Experienced in creating responsive and user-friendly web applications using HTML, CSS, JavaScript, and frameworks like React and Flask.</p>
        </div>
        <div className="skill-item">
          <div className="skill-icon">📈</div>
          <h3>Data Visualization</h3>
          <p>Adept at creating insightful visualizations using tools like Matplotlib and Streamlit to interpret complex data.</p>
        </div>
        <div className="skill-item">
          <div className="skill-icon">💡</div>
          <h3>Problem-Solving and Teamwork</h3>
          <p>Strong ability to analyze problems and work collaboratively in teams to deliver innovative solutions during hackathons and projects.</p>
        </div>
        <div className="skill-item">
          <div className="skill-icon">🔍</div>
          <h3>Research and Analytical Skills</h3>
          <p>Experienced in conducting in-depth research and deriving actionable insights, as demonstrated by ongoing research on cyberbullying detection.</p>
        </div>
        <div className="skill-item">
          <div className="skill-icon">🤝</div>
          <h3>Communication Skills</h3>
          <p>Strong verbal and written communication abilities to articulate ideas clearly and collaborate with diverse teams.</p>
        </div>
        <div className="skill-item">
          <div className="skill-icon">🗂️</div>
          <h3>Project Management</h3>
          <p>Skilled in planning, organizing, and delivering projects within stipulated timelines while maintaining quality.</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
