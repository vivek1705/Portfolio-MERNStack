import React from "react";
import "../styles/About.css";
import data from "../data";

const About = () => (
  <section id="about" className="about-section">
    <h2>About</h2>
    <p>{data.briefbio}</p>
    
    {/* Skills Section */}
    <h2>Skills</h2>
    <div className="skills-cards">
      {data.skills.map((skill, index) => (
        <div key={index} className="skill-card">
          {skill}
        </div>
      ))}
    </div>
    
    {/* Experience Section */}
    <h2>Experience</h2>
    <div className="experience-section">
      <div className="experience-line"></div>
      {data.experience.map((exp, index) => (
        <div key={index} className="experience-item">
          <div className="experience-dot"></div>
          <div className="experience-details">
            <h4>{exp.role}</h4>
            <h5>{exp.company}</h5>
            <span>{exp.year}</span>
            <h6>{exp.description}</h6>
          </div>
        </div>
      ))}
    </div>
    
    {/* Education Section */}
    <h2>Education</h2>
    <div className="education-cards">
      {data.education.map((edu, index) => (
        <div key={index} className="education-card">
          <h4>{edu.degree}</h4>
          <p>{edu.institute}</p>
          <span>{edu.year}</span>
        </div>
      ))}
    </div>
  </section>
);

export default About;
