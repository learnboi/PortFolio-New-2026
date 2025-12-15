import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaCode, FaStar, FaCodeBranch, FaFire, FaTrophy, FaSpinner } from 'react-icons/fa';
import './GithubStats.css';

const GithubStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [graphTheme, setGraphTheme] = useState('react-dark');
  const [imageErrors, setImageErrors] = useState({
    streak: false,
    activity: false,
  });
  const [imageLoading, setImageLoading] = useState({
    streak: true,
    activity: true,
  });

  const githubUsername = 'learnboi';
  const githubUrl = `https://github.com/${githubUsername}`;

  const handleImageLoad = (type) => {
    setImageLoading((prev) => ({ ...prev, [type]: false }));
  };

  const handleImageError = (type) => {
    setImageLoading((prev) => ({ ...prev, [type]: false }));
    setImageErrors((prev) => ({ ...prev, [type]: true }));
  };

  const themes = [
    { name: 'React Dark', value: 'react-dark' },
    { name: 'GitHub', value: 'github' },
    { name: 'GitHub Dark', value: 'github-dark' },
    { name: 'Merko', value: 'merko' },
  ];

  return (
    <section id="github" className="github-stats" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          GitHub Activity
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="github-content"
        >
          {/* Main Graph Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="github-graph-main"
          >
            <div className="graph-header">
              <div className="graph-header-left">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="github-icon-wrapper"
                >
                  <FaGithub />
                </motion.div>
                <div>
                  <h3>Contribution Activity</h3>
                  <p>My coding journey visualized</p>
                </div>
              </div>
              <div className="graph-theme-selector">
                <span>Theme:</span>
                <select
                  value={graphTheme}
                  onChange={(e) => setGraphTheme(e.target.value)}
                  className="theme-select"
                >
                  {themes.map((theme) => (
                    <option key={theme.value} value={theme.value}>
                      {theme.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="graph-container">
              <motion.div
                key={graphTheme}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="graph-wrapper"
              >
                {imageLoading.activity && (
                  <div className="image-loading">
                    <FaSpinner className="spinner" />
                    <p>Loading activity graph...</p>
                  </div>
                )}
                {imageErrors.activity ? (
                  <div className="image-error">
                    <FaGithub />
                    <p>Unable to load activity graph</p>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="error-link">
                      View on GitHub
                    </a>
                  </div>
                ) : (
                  <img
                    src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=${graphTheme}&area=true&hide_border=true&bg_color=0D1117&color=6366f1&line=8b5cf6&point=ffffff&radius=8`}
                    alt="GitHub Activity Graph"
                    className="activity-graph-enhanced"
                    loading="lazy"
                    onLoad={() => handleImageLoad('activity')}
                    onError={() => handleImageError('activity')}
                  />
                )}
              </motion.div>
            </div>

            <div className="graph-footer">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="github-profile-link"
              >
                <FaGithub />
                <span>View Full Profile</span>
                <FaCodeBranch />
              </a>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="github-stats-grid">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="stat-card-large streak-card"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="stat-card-header">
                <div className="stat-icon-large streak-icon">
                  <FaFire />
                </div>
                <div>
                  <h4>Contribution Streak</h4>
                  <p>Current streak & best streak</p>
                </div>
              </div>
              <div className="stat-image-container">
                {imageLoading.streak && (
                  <div className="image-loading">
                    <FaSpinner className="spinner" />
                    <p>Loading streak...</p>
                  </div>
                )}
                {imageErrors.streak ? (
                  <div className="image-error">
                    <FaFire />
                    <p>Unable to load streak</p>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="error-link">
                      View on GitHub
                    </a>
                  </div>
                ) : (
                  <img
                    src={`https://streak-stats.demolab.com/?user=${githubUsername}&theme=${graphTheme}&hide_border=true&background=0D1117&border=6366f1&ring=8b5cf6&fire=ffd700&currStreakLabel=6366f1`}
                    alt="GitHub Streak"
                    className="github-stats-img"
                    loading="lazy"
                    onLoad={() => handleImageLoad('streak')}
                    onError={() => handleImageError('streak')}
                  />
                )}
              </div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="quick-stats"
          >
            <motion.a
              href={`${githubUrl}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-stat-item"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <FaCode />
              <span>22 Repositories</span>
            </motion.a>
            <motion.a
              href={`${githubUrl}?tab=stars`}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-stat-item"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <FaStar />
              <span>14 Stars</span>
            </motion.a>
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-stat-item"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <FaTrophy />
              <span>View Achievements</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;

