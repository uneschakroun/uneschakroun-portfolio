import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GlitchImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export function GlitchImage({ src, alt, className = '', delay = 0 }: GlitchImageProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Initial random delay before first glitch
    const initialTimeout = setTimeout(() => {
      // Trigger glitch effect periodically
      const glitchInterval = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => {
          setIsGlitching(false);
        }, 600); // Glitch duration
      }, 3000); // Every 3 seconds

      // Cleanup interval
      return () => clearInterval(glitchInterval);
    }, delay);

    return () => clearTimeout(initialTimeout);
  }, [delay]);

  return (
    <div className={`relative ${className}`}>
      {/* Main Image */}
      <div className="relative z-10">
        <ImageWithFallback
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Glitch Layer 1 - Top Section with Neon Green */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
          opacity: 0.15,
          mixBlendMode: 'screen'
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
        <div className="relative w-full h-full">
          <ImageWithFallback
            src={src}
            alt=""
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 bg-[#c1ff72]" 
            style={{ 
              mixBlendMode: 'color',
              opacity: 0.8
            }}
          />
        </div>
      </motion.div>
      
      {/* Glitch Layer 2 - Bottom Section with Neon Green */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
          opacity: 0.15,
          mixBlendMode: 'screen'
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
        <div className="relative w-full h-full">
          <ImageWithFallback
            src={src}
            alt=""
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 bg-[#c1ff72]" 
            style={{ 
              mixBlendMode: 'color',
              opacity: 0.8
            }}
          />
        </div>
      </motion.div>

      {/* Glitch Layer 3 - Full Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.1,
          mixBlendMode: 'screen',
          filter: 'blur(8px)'
        }}
        animate={isGlitching ? {
          opacity: [0.1, 0.5, 0.3, 0.6, 0.1],
        } : {}}
        transition={{
          duration: 0.6,
        }}
      >
        <div className="relative w-full h-full">
          <ImageWithFallback
            src={src}
            alt=""
            className="w-full h-full object-cover"
          />
          <div 
            className="absolute inset-0 bg-[#c1ff72]" 
            style={{ 
              mixBlendMode: 'color',
              opacity: 1
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}