import React from "react";
import "../styles/Projects.css";
import data from "../data";

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>My Projects</h2>
    <div className="projects-grid">
      {data.projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} />
          <div className="project-details">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-tech">{project.techStack.join(", ")}</p>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link} className="view-button" target="_blank" rel="noopener noreferrer"> View 
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
