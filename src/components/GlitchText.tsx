import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GlitchText({ children, className = '' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Trigger glitch effect periodically
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setIsGlitching(false);
      }, 600); // Glitch duration
    }, 3000); // Every 3 seconds

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main text */}
      <span className="relative z-10">
        {children}
      </span>
      
      {/* Glitch layers - always visible with opacity */}
      <motion.span
        className="absolute inset-0"
        style={{
          color: '#c1ff72',
          textShadow: '2px 0 #c1ff72',
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
          opacity: 0.15
        }}
        animate={isGlitching ? {
          x: [0, -3, 3, -2, 0],
          y: [0, 2, -2, 1, 0],
          opacity: [0.15, 0.7, 0.5, 0.8, 0.15]
        } : {}}
        transition={{
          duration: 0.6,
        }}
      >
        {children}
      </motion.span>
      
      <motion.span
        className="absolute inset-0"
        style={{
          color: '#c1ff72',
          textShadow: '-2px 0 #c1ff72',
          clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
          opacity: 0.15
        }}
        animate={isGlitching ? {
          x: [0, 3, -3, 4, 0],
          y: [0, -2, 2, -1, 0],
          opacity: [0.15, 0.6, 0.7, 0.5, 0.15]
        } : {}}
        transition={{
          duration: 0.6,
          delay: 0.05
        }}
      >
        {children}
      </motion.span>

      <motion.span
        className="absolute inset-0"
        style={{
          color: '#c1ff72',
          textShadow: '0 0 8px #c1ff72',
          opacity: 0.1
        }}
        animate={isGlitching ? {
          opacity: [0.1, 0.5, 0.3, 0.6, 0.1],
        } : {}}
        transition={{
          duration: 0.6,
        }}
      >
        {children}
      </motion.span>
    </div>
  );
}