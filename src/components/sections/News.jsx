import { motion } from 'framer-motion';
import posts from '../../data/news.jsx';
import './News.css';

export function News() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };


  return (
    <section id="news" className="news section">
      <div className="container">
        <motion.div
          className="news__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="news__header" variants={itemVariants}>
            <h2 className="news__title heading-2">In the News</h2>
            <p className="news__subtitle body-large">
              Articles, features, and conversations about building better digital experiences
            </p>
          </motion.div>

          <div className="news__grid">
            {posts.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="news-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {item.image && (
                  <div className="news-card__image">
                    <img src={item.image} alt={item.title} />
                  </div>
                )}
                <h3 className="news-card__title">{item.title}</h3>
                <p className="news-card__description">{item.description}</p>
                <div className="news-card__meta">
                  <span className="news-card__date">{item.date}</span>
                </div>
                <div className="news-card__arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Made with Bob
