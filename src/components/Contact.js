import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'contact.devchaitanya@gmail.com',
      href: 'mailto:contact.devchaitanya@gmail.com',
      color: '#3b82f6',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 8605839309',
      href: 'tel:+918605839309',
      color: '#10b981',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Nagpur, Maharashtra, India',
      href: null,
      color: '#ef4444',
    },
    {
      icon: FaGlobe,
      title: 'Portfolio',
      value: 'devchaitanya.online',
      href: 'https://devchaitanya.online',
      color: '#8b5cf6',
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/learnboi', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/chaitanya-gayakwad-8ba009208/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="contact-subtitle"
        >
          I'm always open to discussing new opportunities and interesting projects.
        </motion.p>
        
        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="contact-item"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div
                    className="contact-icon"
                    style={{ background: `linear-gradient(135deg, ${info.color}, ${info.color}dd)` }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon />
                  </motion.div>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="contact-social"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon />
                  <span>{link.label}</span>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


