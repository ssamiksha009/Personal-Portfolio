// Projects.jsx
import React from 'react';
import '../App.css';
import weatherimage from '../assets/weatherimg.jpg';
import potholeimage from '../assets/potholeimg.jpg';
import agroimage from '../assets/agroimg.jpg';
import spendimage from '../assets/spendimg.jpg';


function Projects() {
  const projects = [
    {
      name: "Weather Dashboard",
      description: "A responsive web application that provides users with real-time weather information and a 5-day forecast for any city. The app utilizes the OpenWeatherMap API to fetch weather data and is built using React.js. The application features an intuitive user interface with search functionality, allowing users to easily find weather updates for any location worldwide.",
      githubLink: "https://github.com/ssamiksha009/Weather-Dashboard",
      image: weatherimage // Replace with actual project image or remove
    },
    {
      name: "Pothole detection using rCNN",
      description: "System that allows users to capture images of potholes using their smartphones. This system will analyze the images using advanced deep learning techniques to quickly identify potholes, prioritize images that are most likely to contain them, and send real-time alerts to local authorities with location maps.",
      githubLink: "https://github.com/ssamiksha009/Pothole-detection-using-rCNN",
      image: potholeimage
    },
    {
      name: "AgroFarm",
      description: "A database management system supporting farmers with an intuitive interface. The system allows farmers to easily track crop yields, manage inventory, and monitor market prices in real-time. It also provides data-driven insights and personalized recommendations to optimize farming practices and increase profitability.",
      githubLink: "https://github.com/ssamiksha009/Farm-Management-System-DBMS",
      image: agroimage
    },
    {
      name: "SpendSense",
      description: "An innovative financial management platform designed to help users gain control over their finances by offering intuitive expense tracking, personalized insights, and visually compelling data representations, enabling smarter decision-making and improved financial well-being.",
      githubLink: "https://github.com/ssamiksha009/SpendSense",
      image: spendimage
    }
  ];

  return (
    <section id="projects" className="projects-container">
      <h2 className="projects-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.image && <img src={project.image} alt={project.name} className="project-image" />}
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
