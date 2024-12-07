import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { title: 'Project 1', description: 'Full-stack MERN application', link: '#' },
    { title: 'Project 2', description: 'E-commerce website', link: '#' },
    { title: 'Project 3', description: 'Portfolio website', link: '#' },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
