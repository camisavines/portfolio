import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { ThemeToggle } from './ThemeToggle';
import './Navigation.css';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
  { id: 'news', label: 'News' }
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTo = useSmoothScroll();
  const activeSection = useScrollSpy(navItems.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollTo(sectionId, 80);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="nav__content">
          <a href="#hero" className="nav__logo" onClick={(e) => {
            e.preventDefault();
            scrollTo('hero', 0);
          }}>
            CV
          </a>

          {/* Desktop Navigation */}
          <div className="nav__desktop">
            <ul className="nav__links">
              {navItems.map(item => (
                <li key={item.id}>
                  <button
                    className={`nav__link ${activeSection === item.id ? 'nav__link--active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Theme Toggle - Desktop */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="nav__mobile-controls">
            <ThemeToggle />
            <button 
              className="nav__toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className={`nav__toggle-line ${isMenuOpen ? 'nav__toggle-line--open' : ''}`} />
              <span className={`nav__toggle-line ${isMenuOpen ? 'nav__toggle-line--open' : ''}`} />
              <span className={`nav__toggle-line ${isMenuOpen ? 'nav__toggle-line--open' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="nav__mobile"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <ul className="nav__mobile-links">
              {navItems.map(item => (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <button
                    className={`nav__mobile-link ${activeSection === item.id ? 'nav__mobile-link--active' : ''}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Made with Bob
