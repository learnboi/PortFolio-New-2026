import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Java Development Intern',
      company: 'The Kiran Academy',
      duration: '5 Months',
      description: [
        'Hands-on training in Java Full Stack development',
        'Built backend APIs and web applications',
        'Practical exposure to Spring Boot & MVC architecture',
      ],
    },
    {
      title: 'Customer Care Executive (Contract)',
      company: 'Jio',
      duration: '',
      description: [
        'Technical & customer support experience',
        'Improved communication and problem-resolution skills',
      ],
    },
  ];

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Experience
        </motion.h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="timeline-item"
            >
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <motion.div
                className="timeline-content"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-company">{exp.company}</span>
                  {exp.duration && (
                    <span className="timeline-duration">
                      <FaCalendarAlt /> {exp.duration}
                    </span>
                  )}
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + itemIndex * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;


