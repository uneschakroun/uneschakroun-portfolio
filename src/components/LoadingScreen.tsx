import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 bg-black z-[200] flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm md:text-base font-bold uppercase tracking-[0.3em] text-white"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              color: ['#ffffff', '#c1ff72', '#ffffff', '#c1ff72', '#ffffff']
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.3 },
              color: { duration: 0.15, delay: 0.9, repeat: Infinity, repeatDelay: 2 }
            }}
          >
            Only think,
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              color: ['#ffffff', '#c1ff72', '#ffffff', '#c1ff72', '#ffffff']
            }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.6 },
              color: { duration: 0.15, delay: 1.2, repeat: Infinity, repeatDelay: 2 }
            }}
          >
            then execute.
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}