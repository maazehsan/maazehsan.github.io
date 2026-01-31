import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Certifications.css';

const certifications = [
  {
    id: '01',
    title: 'CS50 Python',
    subtitle: 'Python Programming',
    org: 'Harvard University',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    id: '02',
    title: 'CS50 Web Programming',
    subtitle: 'Web Development with Python & JavaScript',
    org: 'Harvard University',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    id: '03',
    title: 'Django Development',
    subtitle: 'Full-Stack Web Applications',
    org: 'Professional Track',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    id: '04',
    title: 'Frontend Development',
    subtitle: 'React & Modern JavaScript',
    org: 'Professional Track',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="container">
        <div className="cert-header">
          <div className="cert-header-left">
            <motion.div
              className="section-label"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span>Credentials</span>
            </motion.div>
            
            <motion.h2
              className="display-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Professional<br />
              <span className="text-accent">Certifications</span>
            </motion.h2>
          </div>

          <motion.p
            className="cert-header-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Validated expertise through rigorous coursework and hands-on projects 
            from world-renowned institutions.
          </motion.p>
        </div>

        <div className="cert-list">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="cert-item"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            >
              <div className="cert-item-inner">
                <span className="cert-index">{cert.id}</span>
                
                <div className="cert-icon">{cert.icon}</div>
                
                <div className="cert-content">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-subtitle">{cert.subtitle}</p>
                </div>
                
                <span className="cert-org">{cert.org}</span>
                
                <div className="cert-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </div>
              </div>
              <div className="cert-hover-line" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cert-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="badge-inner">
            <span className="badge-icon">✓</span>
            <span className="badge-text">Verified & Certified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
