import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import './Projects.css';

const projects = {
  backend: [
    {
      id: 1,
      title: 'Mail Client',
      description: 'A web-based email client that allows users to send, receive, and archive messages in real time.',
      tags: ['API', 'Django'],
      image: `${import.meta.env.BASE_URL}images/mail.png`,
      live: 'https://maazehsan.pythonanywhere.com/mail/',
      github: 'https://github.com/maazehsan/mail',
    },
    {
      id: 2,
      title: 'E-Commerce',
      description: 'An online auction platform where users can list items, place bids, and manage their watchlist.',
      tags: ['Django', 'JavaScript', 'PostgreSQL'],
      image: `${import.meta.env.BASE_URL}images/auctions.png`,
      live: 'https://maazehsan.pythonanywhere.com/auctions/',
      github: 'https://github.com/maazehsan/commerce',
    },
    {
      id: 3,
      title: 'Social Media',
      description: 'A social media web app where users can create posts, follow others, and like content.',
      tags: ['Django', 'API'],
      image: `${import.meta.env.BASE_URL}images/network.png`,
      live: 'https://maazehsan.pythonanywhere.com/network/',
      github: 'https://github.com/maazehsan/network',
    },
    {
      id: 4,
      title: 'Workhub',
      description: 'A personal freelancing portfolio and hiring website with integrated contact forms.',
      tags: ['Django', 'PostgreSQL'],
      image: `${import.meta.env.BASE_URL}images/workhub.png`,
      live: 'https://maazehsan.pythonanywhere.com/accounts/',
      github: 'https://github.com/maazehsan/workhub',
    },
  ],
  frontend: [
    {
      id: 5,
      title: 'Doctor Booking',
      description: 'A medical booking platform for patients to schedule appointments and view doctor profiles.',
      tags: ['Django', 'Email'],
      image: `${import.meta.env.BASE_URL}images/doctor.png`,
      live: 'https://maazehsan.pythonanywhere.com/booking/',
      github: 'https://github.com/maazehsan/doctor',
    },
    {
      id: 6,
      title: 'Restaurant',
      description: 'A responsive restaurant website featuring an elegant menu display and reservation form.',
      tags: ['Django', 'Animation'],
      image: `${import.meta.env.BASE_URL}images/restaurant.png`,
      live: 'https://maazehsan.github.io/bagh/',
      github: 'https://github.com/maazehsan/bagh',
    },
    {
      id: 7,
      title: 'Chatbot',
      description: 'A clean and responsive chatbot frontend built with React and smooth UI interactions.',
      tags: ['React', 'Frontend'],
      image: `${import.meta.env.BASE_URL}images/chatbot.png`,
      live: 'https://maazehsan.pythonanywhere.com/chatbot/',
      github: 'https://github.com/maazehsan/bot',
    },
    {
      id: 8,
      title: 'Movie App',
      description: 'A modern movie website featuring latest releases, trending section, and fast search.',
      tags: ['React', 'API'],
      image: `${import.meta.env.BASE_URL}images/movie.jpeg`,
      live: 'https://maazehsan.github.io/movie',
      github: 'https://github.com/maazehsan/movie',
    },
    {
      id: 9,
      title: 'Cafe',
      description: 'A modern cafe website for presenting the location and menu of the cafe.',
      tags: ['React'],
      image: `${import.meta.env.BASE_URL}images/cafe.png`,
      live: 'https://maazehsan.github.io/eightyplus',
      github: 'https://github.com/maazehsan/eightyplus',
    },
  ],
};

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-overlay">
          <div className="project-links">
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
              <span>Visit</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <span>Code</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('frontend');
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <div className="projects-header">
          <div className="projects-header-left">
            <motion.div
              className="section-label"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span>Portfolio</span>
            </motion.div>

            <motion.h2
              className="display-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Featured<br />
              <span className="text-accent">Projects</span>
            </motion.h2>
          </div>

          <motion.div
            className="projects-tabs"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <button
              className={`tab-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
              onClick={() => setActiveCategory('frontend')}
            >
              <span className="tab-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
              </span>
              <span className="tab-text">Frontend</span>
              <span className="tab-count">{projects.frontend.length}</span>
            </button>
            <button
              className={`tab-btn ${activeCategory === 'backend' ? 'active' : ''}`}
              onClick={() => setActiveCategory('backend')}
            >
              <span className="tab-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                  <line x1="6" y1="6" x2="6.01" y2="6"/>
                  <line x1="6" y1="18" x2="6.01" y2="18"/>
                </svg>
              </span>
              <span className="tab-text">Backend</span>
              <span className="tab-count">{projects.backend.length}</span>
            </button>

          </motion.div>
        </div>

        <div className="projects-grid-wrapper">
          {canScrollLeft && (
            <button className="scroll-btn scroll-btn-left" onClick={scrollLeft} aria-label="Scroll left">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
          )}
          
          <motion.div
            className="projects-grid"
            ref={scrollContainerRef}
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            onScroll={checkScrollPosition}
            onAnimationComplete={checkScrollPosition}
          >
            {projects[activeCategory].map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
          
          {canScrollRight && (
            <button className="scroll-btn scroll-btn-right" onClick={scrollRight} aria-label="Scroll right">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          )}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a href="https://github.com/maazehsan" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View All on GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
