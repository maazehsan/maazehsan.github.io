import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Footer.css';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-logo">
              <span className="logo-text">maaz</span>
              <span className="logo-ext">builds</span>
            </div>
          </motion.div>

          <motion.div
            className="footer-info"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="footer-copyright">
              © {currentYear} Maaz Ehsan
            </span>
            <span className="footer-divider">—</span>
            <span className="footer-tagline">
              Made with passion & code
            </span>
          </motion.div>

          <motion.div
            className="footer-status"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="status-dot"></span>
            <span className="status-text">Available for work</span>
          </motion.div>
        </div>

        <motion.div
          className="footer-line"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </footer>
  );
}
