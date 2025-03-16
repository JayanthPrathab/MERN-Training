import React, { useState } from "react";
import { motion } from "framer-motion";
import "./template4.css";

const sections = [
  { name: "About", content: "A passionate developer skilled in web and IoT design." },
  { name: "Projects", content: "Showcasing innovative projects like FarmXpert, AI Traffic System, and more." },
  { name: "Skills", content: "Expertise in React, Machine Learning, Embedded Systems, and Full-stack Development." },
  { name: "Resume", content: "Click a section to view details." },
];

const resumeDetails = {
  Experience: [
    "Worked on multiple hackathon projects",
    "AI-based systems development",
    "Full-stack web applications"
  ],
  Education: "Pursuing ECE at St. Joseph's Institute of Technology.",
  Certifications: ["LeetCode 100-day Challenge", "CodeChef Linked List Certification", "and more."],
};

export default function Template4() {
  const [selectedSection, setSelectedSection] = useState(null);
  
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Name</h1>
      <div className="portfolio-grid">
        {sections.map((section) => (
          <motion.div
            key={section.name}
            whileHover={{ scale: 1.05 }}
            className="portfolio-card"
            onClick={() => section.name === "Resume" && setSelectedSection(null)}
          >
            <div className="card">
              <div className="card-content">
                <h2 className="card-title">{section.name}</h2>
                <p className="card-text">{section.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedSection && (
        <motion.div
          className="resume-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="resume-title">{selectedSection}</h3>
          {Array.isArray(resumeDetails[selectedSection]) ? (
            <div className="experience-list">
              {resumeDetails[selectedSection].map((item, index) => (
                <div key={index} className="experience-item">{item}</div>
              ))}
            </div>
          ) : (
            <p>{resumeDetails[selectedSection]}</p>
          )}
        </motion.div>
      )}

      <div className="resume-buttons">
        {Object.keys(resumeDetails).map((section) => (
          <button key={section} className="resume-button" onClick={() => setSelectedSection(section)}>
            {section}
          </button>
        ))}
      </div>
    </div>
  );
}
