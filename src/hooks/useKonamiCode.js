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

// Made with Bob
