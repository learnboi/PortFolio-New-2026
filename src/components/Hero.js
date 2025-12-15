import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaArrowDown } from 'react-icons/fa';
import useTypewriter from '../hooks/useTypewriter';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const typedText = useTypewriter([
    'Software Developer',
    'Java Developer',
    'Android Developer',
    'Full Stack Developer',
  ], 50, 30, 2000);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/learnboi', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/chaitanya-gayakwad-8ba009208/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:contact.devchaitanya@gmail.com', label: 'Email' },
    { icon: FaGlobe, href: 'https://devchaitanya.online', label: 'Portfolio' },
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-greeting"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hero-name"
            >
              Chaitanya Gayakwad
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="hero-title"
            >
              <span>I'm a </span>
              <span className="typed-text">{typedText}</span>
              <span className="typed-cursor">|</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="hero-description"
            >
              Java & Android-focused developer with hands-on experience building real-world applications. 
              Passionate about building useful products, clean APIs, and scalable systems.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="hero-buttons"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#projects')}
                className="btn btn-primary"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="btn btn-secondary"
              >
                Get In Touch
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="hero-social"
            >
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="social-icon"
                    aria-label={link.label}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-image"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          >
            <div className="profile-image-container">
              <img
                src="/images/profile-hero.jpg"
                alt="Chaitanya Gayakwad"
                className="profile-image"
                onError={(e) => {
                  if (e.target) {
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) {
                      placeholder.style.display = 'flex';
                    }
                  }
                }}
              />
              <div className="image-placeholder" style={{ display: 'none' }}>
                <span>CG</span>
              </div>
              <div className="image-glow"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="scroll-indicator"
          onClick={() => scrollToSection('#about')}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaArrowDown />
          </motion.div>
          <span>Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

