import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import './Hero.css';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export const Hero = () => {
  const scrollTo = useSmoothScroll();
  const { displayedText, isComplete } = useTypingEffect(
    'I build digital eminence crafted just for you.',
    50,  // typing speed in ms
    600  // delay before starting (after greeting appears)
  );

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero__content">
          <motion.p
            className="hero__greeting"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Hey there, I'm Cami 👋
          </motion.p>

          <motion.h1
            className="hero__headline heading-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {displayedText}
            <span className={`hero__cursor ${isComplete ? 'hero__cursor--blink' : ''}`}>|</span>
          </motion.h1>

          <motion.p 
            className="hero__subheadline body-large"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Front-stack engineer & digital builder helping people and small 
            businesses create confident, modern presences with craftsmanship and care.
          </motion.p>

          <motion.div 
            className="hero__cta"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <Button 
              variant="primary" 
              size="large"
              onClick={() => scrollTo('projects', 80)}
            >
              See my work
            </Button>
            <Button 
              variant="secondary" 
              size="large"
              onClick={() => scrollTo('contact', 80)}
            >
              Let's chat
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.div
            className="hero__scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Made with Bob
