import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaMoneyBillWave, FaArchive, FaUsers, FaBox, FaBriefcase } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      icon: FaMoneyBillWave,
      title: 'TimelyPay – Loan & EMI Tracker App',
      tech: 'Android (Java), Material UI',
      description: 'Built an Android app to manage EMIs from multiple loan apps in one place. Helps users track due dates, amounts, and monthly liabilities. Designed for real-life financial use cases.',
      github: '#',
      color: '#10b981',
    },
    {
      icon: FaArchive,
      title: 'Archives – All-in-One Save Later App',
      tech: 'Android (Java), Media Handling',
      description: 'Archive links, photos, videos, reels, YouTube videos, and notes. View and manage all saved content in one unified interface. Includes in-app viewing and download support.',
      github: '#',
      color: '#8b5cf6',
    },
    {
      icon: FaUsers,
      title: 'BachatGat – SHG Management App',
      tech: 'Java, Android, MySQL',
      description: 'Designed to digitize Self Help Group (SHG) savings & loan management. Admin & Member roles with payment tracking and loan status. Solves real problems in rural financial groups.',
      github: '#',
      color: '#f59e0b',
    },
    {
      icon: FaBox,
      title: 'Products Management REST API',
      tech: 'Java, Spring Boot, MySQL',
      description: 'RESTful API with CRUD operations. Clean layered architecture (Controller, Service, Repository). MySQL integration using Spring Data JPA.',
      github: '#',
      color: '#3b82f6',
    },
    {
      icon: FaBriefcase,
      title: 'Employee Management System',
      tech: 'Java, JSP, Servlets, MySQL, HTML, CSS',
      description: 'Web-based employee records system. User authentication with Admin & Employee dashboards. Deployed on Apache Tomcat.',
      github: '#',
      color: '#ef4444',
    },
  ];

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Projects
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="project-card"
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="project-icon"
                  style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)` }}
                  animate={hoveredProject === index ? { rotate: 360, scale: 1.1 } : { rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon />
                </motion.div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      if (project.github === '#') {
                        e.preventDefault();
                        alert('GitHub link will be updated with the actual repository URL. Please provide the GitHub links for each project.');
                      }
                    }}
                  >
                    <FaGithub />
                    <span>View on GitHub</span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

