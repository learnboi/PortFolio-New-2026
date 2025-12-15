import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaServer, FaMobileAlt, FaTools } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      icon: FaCode,
      title: 'Programming & Core',
      skills: [
        'Java (OOP, Collections, Generics)',
        'Java 8',
        'SQL (MySQL)',
        'Data Structures',
        'Debugging',
      ],
    },
    {
      icon: FaServer,
      title: 'Backend & APIs',
      skills: [
        'Spring Boot',
        'Spring MVC',
        'Spring Data JPA',
        'RESTful API Design',
        'Hibernate / JPA',
        'Authentication & RBAC',
      ],
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile & Frontend',
      skills: [
        'Android (Java)',
        'XML UI Design',
        'Material Design',
        'HTML',
        'CSS',
      ],
    },
    {
      icon: FaTools,
      title: 'Tools & Platforms',
      skills: [
        'Git & GitHub',
        'Firebase',
        'Cursor AI',
        'GitHub Copilot',
        'Apache Tomcat',
      ],
    },
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Skills
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="skill-category"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="skill-category-header">
                  <div className="skill-icon-wrapper">
                    <Icon />
                  </div>
                  <h3 className="skill-category-title">{category.title}</h3>
                </div>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="skill-tag"
                      whileHover={{ scale: 1.1, y: -3 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;


