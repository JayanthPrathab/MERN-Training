import React from 'react';
import { motion } from 'framer-motion';
import '../templates/template1.css';

const template1 = () => {
  return (
    <div className="portfolio-container">
      <div>
        <h1>John Doe</h1>
        <h2>Web Developer</h2>
      </div>

      <div className="section">
        <h3>About Me</h3>
        <p>I am a passionate web developer with experience in creating dynamic and responsive websites.</p>
      </div>

      <div className="section">
        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>

      <div className="section">
        <h3>Experience</h3>
        <div className="experience-item">
          <h4>ABC Company</h4>
          <p>Frontend Developer - 2022 to 2024</p>
          <p>Developed user interfaces and collaborated with backend teams to integrate APIs.</p>
        </div>
      </div>

      <div className="section">
        <h3>Education</h3>
        <div className="education-item">
          <h4>XYZ University</h4>
          <p>Bachelor of Science in Computer Science - 2018 to 2022</p>
          <p>Graduated with honors and completed various projects on web development.</p>
        </div>
      </div>

      <div className="section">
        <h3>Projects</h3>
        <div className="projects-grid">
          <div className="project-item">
            <h4>Portfolio Website</h4>
            <p>A personal portfolio showcasing my skills and projects.</p>
            <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>Contact</h3>
        <p>Email: johndoe@example.com</p>
        <p>Phone: +1234567890</p>
      </div>
    </div>
  );
};

export default template1;
