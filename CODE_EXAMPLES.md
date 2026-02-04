# Code Examples & Starter Templates

This document provides ready-to-use code snippets and templates for implementing your portfolio website.

---

## 🎨 Design System Implementation

### design-system.css

```css
/* src/styles/design-system.css */

:root {
  /* ===== COLOR PALETTE ===== */
  
  /* Primary Colors - Warm Earthy Base */
  --color-cream: #FAF8F3;
  --color-sand: #E8E3D8;
  --color-clay: #D4C5B0;
  
  /* Accent Colors - Vibrant & Confident */
  --color-terracotta: #E07A5F;
  --color-sage: #81B29A;
  --color-ochre: #F2A154;
  
  /* Neutral Colors */
  --color-charcoal: #2D3142;
  --color-slate: #4F5D75;
  --color-mist: #BFC0C0;
  
  /* Semantic Colors */
  --color-success: #81B29A;
  --color-error: #E07A5F;
  --color-warning: #F2A154;
  
  /* Gradients */
  --gradient-warm: linear-gradient(135deg, #E07A5F 0%, #F2A154 100%);
  --gradient-cool: linear-gradient(135deg, #81B29A 0%, #4F5D75 100%);
  --gradient-sunset: linear-gradient(180deg, #FAF8F3 0%, #E8E3D8 100%);
  
  /* ===== TYPOGRAPHY ===== */
  
  /* Font Families */
  --font-display: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  
  /* Type Scale (1.250 - Major Third) */
  --text-xs: 0.64rem;
  --text-sm: 0.8rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 1.563rem;
  --text-2xl: 1.953rem;
  --text-3xl: 2.441rem;
  --text-4xl: 3.052rem;
  --text-5xl: 3.815rem;
  --text-6xl: 4.768rem;
  
  /* Line Heights */
  --leading-tight: 1.2;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
  
  /* Font Weights */
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-black: 900;
  
  /* ===== SPACING ===== */
  
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;
  --space-5: 2.5rem;
  --space-6: 3rem;
  --space-8: 4rem;
  --space-10: 5rem;
  --space-12: 6rem;
  --space-16: 8rem;
  --space-20: 10rem;
  --space-24: 12rem;
  
  /* Section Spacing */
  --section-padding-mobile: var(--space-12);
  --section-padding-tablet: var(--space-16);
  --section-padding-desktop: var(--space-20);
  
  /* ===== LAYOUT ===== */
  
  --container-max-width: 1440px;
  --content-max-width: 1200px;
  --narrow-max-width: 800px;
  
  /* ===== BORDERS & RADIUS ===== */
  
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
  --radius-full: 9999px;
  
  --border-width: 1px;
  --border-width-thick: 2px;
  
  /* ===== SHADOWS ===== */
  
  --shadow-sm: 0 1px 2px 0 rgba(45, 49, 66, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(45, 49, 66, 0.1),
               0 2px 4px -1px rgba(45, 49, 66, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(45, 49, 66, 0.1),
               0 4px 6px -2px rgba(45, 49, 66, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(45, 49, 66, 0.1),
               0 10px 10px -5px rgba(45, 49, 66, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(45, 49, 66, 0.25);
  
  /* ===== TRANSITIONS ===== */
  
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
  --transition-slower: 500ms ease;
  
  /* ===== Z-INDEX ===== */
  
  --z-base: 1;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
}

/* ===== BASE STYLES ===== */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--color-charcoal);
  background-color: var(--color-cream);
}

/* ===== TYPOGRAPHY CLASSES ===== */

.heading-hero {
  font-size: clamp(var(--text-4xl), 8vw, var(--text-6xl));
  font-weight: var(--weight-black);
  line-height: var(--leading-tight);
  letter-spacing: -0.02em;
  font-family: var(--font-display);
}

.heading-1 {
  font-size: clamp(var(--text-3xl), 5vw, var(--text-5xl));
  font-weight: var(--weight-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.01em;
  font-family: var(--font-display);
}

.heading-2 {
  font-size: clamp(var(--text-2xl), 4vw, var(--text-4xl));
  font-weight: var(--weight-bold);
  line-height: var(--leading-snug);
  font-family: var(--font-display);
}

.heading-3 {
  font-size: clamp(var(--text-xl), 3vw, var(--text-3xl));
  font-weight: var(--weight-semibold);
  line-height: var(--leading-snug);
  font-family: var(--font-display);
}

.body-large {
  font-size: clamp(var(--text-lg), 2vw, var(--text-xl));
  line-height: var(--leading-relaxed);
}

.body-base {
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}

.body-small {
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
}

/* ===== LAYOUT UTILITIES ===== */

.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--space-4);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-8);
  }
}

.section {
  padding: var(--section-padding-mobile) 0;
}

@media (min-width: 768px) {
  .section {
    padding: var(--section-padding-tablet) 0;
  }
}

@media (min-width: 1024px) {
  .section {
    padding: var(--section-padding-desktop) 0;
  }
}

/* ===== ACCESSIBILITY ===== */

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-terracotta);
  color: white;
  padding: var(--space-2) var(--space-4);
  text-decoration: none;
  z-index: var(--z-tooltip);
}

.skip-link:focus {
  top: 0;
}

/* ===== REDUCED MOTION ===== */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 🎯 Animation Utilities

### animations.js

```javascript
// src/utils/animations.js

// Framer Motion animation variants

export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] // Custom easing
    }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Hover animations
export const hoverLift = {
  rest: { y: 0 },
  hover: { 
    y: -8,
    transition: { duration: 0.3 }
  }
};

export const hoverScale = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  }
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.4 }
  }
};
```

---

## 🪝 Custom Hooks

### useScrollSpy.js

```javascript
// src/hooks/useScrollSpy.js
import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};
```

### useSmoothScroll.js

```javascript
// src/hooks/useSmoothScroll.js
import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollTo = useCallback((elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return scrollTo;
};
```

### useMediaQuery.js

```javascript
// src/hooks/useMediaQuery.js
import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

// Usage examples:
// const isMobile = useMediaQuery('(max-width: 768px)');
// const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
// const isDesktop = useMediaQuery('(min-width: 1025px)');
```

### useKonamiCode.js

```javascript
// src/hooks/useKonamiCode.js
import { useState, useEffect } from 'react';

export const useKonamiCode = (callback) => {
  const [keys, setKeys] = useState([]);
  
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'b', 'a'
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeys(prevKeys => [...prevKeys.slice(-9), e.key]);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (keys.join(',').includes(konamiCode.join(','))) {
      callback();
      setKeys([]);
    }
  }, [keys, callback, konamiCode]);
};
```

---

## 🧩 Component Templates

### Button.jsx

```jsx
// src/components/common/Button.jsx
import { motion } from 'framer-motion';
import './Button.css';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClass = 'button';
  const classes = `${baseClass} ${baseClass}--${variant} ${baseClass}--${size} ${className}`;

  const buttonContent = (
    <>
      <span className="button__text">{children}</span>
      <span className="button__ripple" />
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};
```

### Button.css

```css
/* src/components/common/Button.css */
.button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;
  overflow: hidden;
  transition: all var(--transition-base);
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Sizes */
.button--small {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

.button--medium {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
}

.button--large {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}

/* Variants */
.button--primary {
  background: var(--gradient-warm);
  color: white;
  box-shadow: var(--shadow-md);
}

.button--primary:hover {
  box-shadow: var(--shadow-lg);
}

.button--secondary {
  background: transparent;
  color: var(--color-charcoal);
  border: var(--border-width-thick) solid var(--color-charcoal);
}

.button--secondary:hover {
  background: var(--color-charcoal);
  color: var(--color-cream);
}

.button--ghost {
  background: transparent;
  color: var(--color-charcoal);
}

.button--ghost:hover {
  background: var(--color-sand);
}

/* Ripple effect */
.button__ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.button:hover .button__ripple {
  width: 300px;
  height: 300px;
}
```

### Section.jsx

```jsx
// src/components/common/Section.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp } from '../../utils/animations';
import './Section.css';

export const Section = ({ 
  id, 
  children, 
  className = '',
  background = 'default',
  ...props 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`section section--${background} ${className}`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      {...props}
    >
      <div className="container">
        {children}
      </div>
    </motion.section>
  );
};
```

### Navigation.jsx

```jsx
// src/components/layout/Navigation.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import './Navigation.css';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
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
            CS
          </a>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button 
            className="nav__toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`nav__toggle-line ${isMenuOpen ? 'nav__toggle-line--open' : ''}`} />
            <span className={`nav__toggle-line ${isMenuOpen ? 'nav__toggle-line--open' : ''}`} />
            <span className={`nav__toggle-line ${isMenuOpen ? 'nav__toggle-line--open' : ''}`} />
          </button>
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
```

### Hero.jsx

```jsx
// src/components/sections/Hero.jsx
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
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
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            I build digital experiences that feel like home
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
```

---

## 📦 Constants File

### constants.js

```javascript
// src/utils/constants.js

export const SITE_CONFIG = {
  name: 'Cami Savines',
  title: 'Front-Stack Engineer & Digital Builder',
  description: 'Front-stack engineer helping people and small businesses create confident, modern digital presences with craftsmanship and care.',
  url: 'https://yourusername.github.io/portfolio',
  email: 'your@email.com',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername'
  }
};

export const HERO_CONTENT = {
  greeting: "Hey there, I'm Cami 👋",
  headline: "I build digital experiences that feel like home",
  subheadline: "Front-stack engineer & digital builder helping people and small businesses create confident, modern presences with craftsmanship and care.",
  cta: {
    primary: { text: "See my work", action: "projects" },
    secondary: { text: "Let's chat", action: "contact" }
  }
};

export const ABOUT_CONTENT = {
  heading: "Building with purpose, designing with heart",
  paragraphs: [
    "I believe the web should feel welcoming, not intimidating. Every project I take on is an opportunity to create something that makes people feel confident and capable.",
    "With a background in [your background], I bring both technical expertise and a human-centered approach to every build. I don't just write code—I craft experiences that resonate.",
    "When I'm not coding, you'll find me [personal interests that humanize you]."
  ],
  principles: [
    {
      icon: "🎯",
      title: "Purpose-driven",
      description: "Every design decision serves your goals"
    },
    {
      icon: "🤝",
      title: "Collaborative",
      description: "Your vision, my expertise—together"
    },
    {
      icon: "✨",
      title: "Detail-obsessed",
      description: "Sweating the small stuff so you don't have to"
    }
  ]
};

export const SKILLS = [
  {
    category: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "React & Next.js", level: "expert" },
      { name: "TypeScript", level: "advanced" },
      { name: "CSS/Tailwind", level: "expert" },
      { name: "Framer Motion", level: "advanced" }
    ]
  },
  {
    category: "Design & UX",
    icon: "🎨",
    skills: [
      { name: "Figma", level: "advanced" },
      { name: "Responsive Design", level: "expert" },
      { name: "Accessibility", level: "advanced" },
      { name: "Design Systems", level: "advanced" }
    ]
  },
  {
    category: "Tools & Workflow",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: "expert" },
      { name: "Vite/Webpack", level: "advanced" },
      { name: "Performance Optimization", level: "advanced" },
      { name: "Testing (Jest/Vitest)", level: "intermediate" }
    ]
  }
];

export const PROJECTS = [
  {
    id: "project-1",
    title: "Project Name",
    tagline: "One-line description of what this project does",
    category: "Web App",
    thumbnail: "/projects/project-1/thumbnail.jpg",
    featured: true,
    technologies: ["React", "Node.js", "PostgreSQL"],
    details: {
      description: "Full project description explaining what it is and why it matters...",
      challenge: "What problem did this solve?",
      solution: "How did you solve it?",
      results: "What was the impact?",
      images: [
        "/projects/project-1/hero.jpg",
        "/projects/project-1/detail-1.jpg"
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/username/repo"
    }
  }
  // Add more projects...
];

export const CONTACT_CONTENT = {
  heading: "Let's build something together",
  subheading: "Have a project in mind? Just want to chat? I'd love to hear from you.",
  form: {
    fields: [
      { name: "name", label: "Your name", type: "text", required: true },
      { name: "email", label: "Email address", type: "email", required: true },
      { name: "message", label: "Tell me about your project", type: "textarea", required: true }
    ],
    submitText: "Send message",
    successMessage: "Thanks! I'll get back to you soon. ✨"
  }
};
```

---

## 🎨 Example CSS for Specific Components

### Hero.css

```css
/* src/components/sections/Hero.css */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--gradient-sunset);
  overflow: hidden;
}

.hero__content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-8) 0;
}

.hero__greeting {
  font-size: var(--text-xl);
  color: var(--color-slate);
  margin-bottom: var(--space-4);
  font-weight: var(--weight-medium);
}

.hero__headline {
  margin-bottom: var(--space-6);
  background: linear-gradient(135deg, var(--color-charcoal) 0%, var(--color-slate) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__subheadline {
  color: var(--color-slate);
  margin-bottom: var(--space-8);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero__cta {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}

.hero__scroll-indicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
}

.hero__scroll-arrow {
  font-size: var(--text-2xl);
  color: var(--color-slate);
  opacity: 0.6;
}

@media (max-width: 768px) {
  .hero__content {
    padding: var(--space-6) 0;
  }

  .hero__cta {
    flex-direction: column;
    align-items: stretch;
  }
}
```

---

This provides a solid foundation of code examples to get started with implementation. Each component is designed to be modular, accessible, and performant.