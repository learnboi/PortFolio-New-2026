import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import CountUp from 'react-countup';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { number: 5, suffix: '+', label: 'Projects' },
    { number: 5, suffix: '', label: 'Months Internship' },
    { number: 100, suffix: '%', label: 'Dedicated' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-image-wrapper"
          >
            <div className="image-frame">
              <img
                src="/images/profile-about.jpg"
                alt="Chaitanya Gayakwad"
                className="about-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="image-border"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="about-text"
          >
            <p>
              I'm a Java & Android-focused developer with hands-on experience building real-world applications 
              using <strong>Java, Spring Boot, Android</strong>, and modern tools like <strong>Cursor AI</strong>. 
              I have a strong problem-solving mindset and practical exposure through internships, self-driven projects, 
              and production-ready Android apps.
            </p>
            <p>
              I'm passionate about building useful products, clean APIs, and scalable systems. Currently, I'm actively 
              building and publishing Android apps, with a strong interest in FinTech & productivity applications.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="about-location"
            >
              <FaMapMarkerAlt />
              <span>Nagpur, Maharashtra, India</span>
            </motion.div>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                  className="stat-item"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="stat-number">
                    {isInView ? (
                      <CountUp
                        start={0}
                        end={stat.number}
                        duration={2}
                        suffix={stat.suffix}
                        enableScrollSpy={false}
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

