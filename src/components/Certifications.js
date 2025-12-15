import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCertificate, FaAward } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const certifications = [
    { title: 'Java Full Stack Development', issuer: 'The Kiran Academy' },
    { title: 'Spring & Spring Boot', issuer: 'LinkedIn Learning' },
    { title: 'Responsive Web Design', issuer: 'freeCodeCamp' },
    { title: 'Python Bootcamp', issuer: 'College Level' },
  ];

  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Certifications
        </motion.h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6, type: 'spring' }}
              className="cert-card"
              whileHover={{ y: -10, scale: 1.05, rotate: 5 }}
            >
              <motion.div
                className="cert-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaCertificate />
              </motion.div>
              <h4>{cert.title}</h4>
              <p>{cert.issuer}</p>
              <div className="cert-badge">
                <FaAward />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;


