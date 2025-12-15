import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      icon: FaGraduationCap,
      degree: 'B.Tech – Electrical Engineering',
      institution: 'RTMNU',
      duration: '2020 – 2024',
      grade: 'CGPA: 8.15',
      color: '#6366f1',
    },
    {
      icon: FaCertificate,
      degree: 'HSC (Class XII)',
      institution: 'MSBSHSE',
      duration: '',
      grade: '70.92%',
      color: '#8b5cf6',
    },
    {
      icon: FaCertificate,
      degree: 'SSC (Class X)',
      institution: 'MSBSHSE',
      duration: '',
      grade: '89.80%',
      color: '#ec4899',
    },
  ];

  return (
    <section id="education" className="education" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Education
        </motion.h2>
        
        <div className="education-grid">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="education-card"
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <motion.div
                  className="education-icon"
                  style={{ background: `linear-gradient(135deg, ${edu.color}, ${edu.color}dd)` }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon />
                </motion.div>
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                {edu.duration && <p className="education-duration">{edu.duration}</p>}
                <p className="education-grade">{edu.grade}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;


