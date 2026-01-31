import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML5', icon: 'devicon-html5-plain' },
  { name: 'CSS3', icon: 'devicon-css3-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'Django', icon: 'devicon-django-plain' },
  { name: 'Python', icon: 'devicon-python-plain' },
  { name: 'C', icon: 'devicon-c-plain' },
  { name: 'SQL', icon: 'devicon-postgresql-plain' },
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'GitHub', icon: 'devicon-github-original' },
  { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <div className="skills-layout">
          <div className="skills-header">
            <motion.div
              className="section-label"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span>Expertise</span>
            </motion.div>

            <motion.h2
              className="display-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Tech<br />
              <span className="text-outline">Stack</span>
            </motion.h2>

            <motion.p
              className="skills-description"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Tools and technologies I use to bring ideas to life. 
              Always learning, always evolving.
            </motion.p>

            <motion.div
              className="skills-counter"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="counter-number">{skills.length}</span>
              <span className="counter-label">Technologies</span>
            </motion.div>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="skill-icon-wrapper">
                  <i className={skill.icon}></i>
                </div>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-glow" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="skills-marquee"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="marquee-track">
            {[...skills, ...skills].map((skill, index) => (
              <span key={index} className="marquee-item">
                {skill.name} <span className="marquee-dot">●</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
