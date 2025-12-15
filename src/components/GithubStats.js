import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaCode, FaStar, FaCodeBranch, FaCalendarAlt, FaFire, FaTrophy } from 'react-icons/fa';
import './GithubStats.css';

const GithubStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [graphTheme, setGraphTheme] = useState('react-dark');

  const githubUsername = 'learnboi';
  const githubUrl = `https://github.com/${githubUsername}`;

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
                <img
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=${graphTheme}&area=true&hide_border=false&bg_color=transparent&color=6366f1&line=8b5cf6&point=ffffff&radius=8&custom_title=My%20GitHub%20Contributions`}
                  alt="GitHub Activity Graph"
                  className="activity-graph-enhanced"
                  loading="lazy"
                />
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
              transition={{ delay: 0.6, duration: 0.6 }}
              className="stat-card-large"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="stat-card-header">
                <div className="stat-icon-large">
                  <FaCode />
                </div>
                <div>
                  <h4>GitHub Statistics</h4>
                  <p>Overall performance metrics</p>
                </div>
              </div>
              <div className="stat-image-container">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=${graphTheme}&hide_border=false&bg_color=transparent&title_color=6366f1&icon_color=8b5cf6&text_color=ffffff&border_color=6366f1&include_all_commits=true&count_private=true`}
                  alt="GitHub Stats"
                  className="github-stats-img"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="stat-card-large"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="stat-card-header">
                <div className="stat-icon-large">
                  <FaCodeBranch />
                </div>
                <div>
                  <h4>Top Languages</h4>
                  <p>Most used programming languages</p>
                </div>
              </div>
              <div className="stat-image-container">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=${graphTheme}&hide_border=false&bg_color=transparent&title_color=6366f1&text_color=ffffff&border_color=6366f1&langs_count=8`}
                  alt="Top Languages"
                  className="github-stats-img"
                  loading="lazy"
                />
              </div>
            </motion.div>

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
                <img
                  src={`https://github-readme-streak-stats.demolab.com/?user=${githubUsername}&theme=${graphTheme}&hide_border=false&background=transparent&border=6366f1&ring=8b5cf6&fire=ffd700&currStreakLabel=6366f1`}
                  alt="GitHub Streak"
                  className="github-stats-img"
                  loading="lazy"
                />
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
              <span>21 Repositories</span>
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

