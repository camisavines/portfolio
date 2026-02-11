import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { staggerContainer, staggerItem } from '../../utils/animations';
import projects from '../../data/projects.jsx';
import './Projects.css';

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });


  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="projects__content"
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="projects__header">
            <h2 className="heading-2">Featured Projects</h2>
            <p className="body-large projects__subtitle">
              A selection of recent work that showcases my skills and passion for building great products
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="projects__grid">
            {projects.map((project, index) => (
              <motion.article
                key={index}
                className="project-card"
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div className="project-card__image">
                  {project.img ? (
                    <img src={project.img} alt={project.alt || project.title} />
                  ) : (
                    <div className="project-card__image-placeholder">
                      <span className="project-card__image-icon">🚀</span>
                    </div>
                  )}
                  <div className="project-card__overlay">
                    <div className="project-card__links">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__link"
                          aria-label={`View ${project.title} live site`}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          <span>Live Site</span>
                        </a>
                      )}
                      {project.link2 && (
                        <a
                          href={project.link2}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card__link"
                          aria-label={project.link2Text || 'View more'}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          <span>{project.link2Text || 'View More'}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Made with Bob
