import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const titleChars = "MAAZ EHSAN".split('');
  
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-lines">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="hero-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            />
          ))}
        </div>
      </div>

      <div className="hero-content container">

        <div className="hero-title-wrapper">
          <h1 className="hero-title">
            {titleChars.map((char, index) => (
              <motion.span
                key={index}
                className={char === ' ' ? 'space' : ''}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.3 + index * 0.04,
                  duration: 0.8,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="subtitle-line" />
          <span className="subtitle-text">Web Developer & Programmer</span>
          <span className="subtitle-line" />
        </motion.div>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Building digital experiences with clean code and creative vision.
          <br />
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </motion.div>

      </div>

      <div className="hero-corner hero-corner-tl" />
      <div className="hero-corner hero-corner-br" />
    </section>
  );
}
