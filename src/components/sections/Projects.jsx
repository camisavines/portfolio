import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { staggerContainer, staggerItem } from '../../utils/animations';
import './Projects.css';

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: 'https://example.com/project1',
      github: 'https://github.com/yourusername/project1',
      image: '/projects/project1.jpg' // Placeholder
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team workspaces, and progress tracking.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
      link: 'https://example.com/project2',
      github: 'https://github.com/yourusername/project2',
      image: '/projects/project2.jpg' // Placeholder
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      technologies: ['React', 'OpenWeather API', 'Mapbox', 'Tailwind'],
      link: 'https://example.com/project3',
      github: 'https://github.com/yourusername/project3',
      image: '/projects/project3.jpg' // Placeholder
    },
    {
      id: 4,
      title: 'Portfolio CMS',
      description: 'Headless CMS for creative professionals to showcase their work with customizable themes and layouts.',
      technologies: ['Next.js', 'Sanity', 'Vercel', 'Framer Motion'],
      link: 'https://example.com/project4',
      github: 'https://github.com/yourusername/project4',
      image: '/projects/project4.jpg' // Placeholder
    }
  ];

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
                key={project.id}
                className="project-card"
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project Image */}
                <div className="project-card__image">
                  <div className="project-card__image-placeholder">
                    <span className="project-card__image-icon">🚀</span>
                  </div>
                  <div className="project-card__overlay">
                    <div className="project-card__links">
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
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="project-card__technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-card__tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
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
