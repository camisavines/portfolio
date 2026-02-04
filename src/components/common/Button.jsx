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

// Made with Bob
