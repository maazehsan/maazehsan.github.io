import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import './About.css';

const stats = [
  { value: 'CS50', label: 'Harvard Certified' },
  { value: '20+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
  { value: '1000+', label: 'Hours Coded' },
];

const aboutImages = [
  `${import.meta.env.BASE_URL}images/about1.jpeg`,
  `${import.meta.env.BASE_URL}images/about2.png`,
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % aboutImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Left Column - Main Content */}
          <div className="about-main">
            <motion.div
              className="section-label"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span>About</span>
            </motion.div>

            <motion.h2
              className="about-title display-large"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              Building<br />
              <span className="title-outline">Digital</span><br />
              Experiences
            </motion.h2>

            <motion.div
              className="about-description"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p>
                Hey there! I'm Maaz, a passionate web developer who transforms ideas into 
                reality through clean code and elegant design. With expertise in Django 
                and modern frontend technologies, I craft web applications that are not 
                just functional—but delightful to use.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. Let's collaborate and build something incredible.
              </p>
            </motion.div>

            <motion.div
              className="about-signature"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="signature-line" />
              <span>Maaz Ehsan</span>
            </motion.div>
          </div>

          {/* Right Column - Stats */}
          <div className="about-stats">
            <motion.div
              className="stats-header"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="stats-year">2025</span>
              <span className="stats-label">Current Stats</span>
            </motion.div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <span className="stat-index">0{index + 1}</span>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="about-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <div className="visual-frame">
                <div className="visual-content">
                  <motion.img
                    key={currentImage}
                    src={aboutImages[currentImage]}
                    alt="Maaz Ehsan"
                    className="visual-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div className="visual-corners">
                  <span /><span /><span /><span />
                </div>
                <div className="visual-nav">
                  <button className="visual-nav-btn" onClick={prevImage} aria-label="Previous image">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6"/>
                    </svg>
                  </button>
                  <span className="visual-nav-indicator">
                    {currentImage + 1} / {aboutImages.length}
                  </span>
                  <button className="visual-nav-btn" onClick={nextImage} aria-label="Next image">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
