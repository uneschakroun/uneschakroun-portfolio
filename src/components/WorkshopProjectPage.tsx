import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface WorkshopProjectPageProps {
  onBack: () => void;
}

export function WorkshopProjectPage({ onBack }: WorkshopProjectPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-16 sm:pt-20 pb-16 sm:pb-32 flex items-center justify-center"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 sm:gap-3 text-white/60 hover:text-[#c1ff72] transition-colors mb-8 sm:mb-12 group min-h-[44px] fixed top-20 left-4 sm:left-6 z-50"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-wider text-sm sm:text-base">Back</span>
        </button>

        {/* Coming Soon with Glitch Effect */}
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          {/* Main Glitch Text */}
          <div className="relative mb-12 sm:mb-16">
            {/* Background Glitch Layers */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                x: [-5, 5, -3, 3, 0],
                y: [3, -3, 5, -5, 0],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'linear'
              }}
            >
              <h1 
                className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase"
                style={{
                  color: '#c1ff72',
                  textShadow: '0 0 30px rgba(193, 255, 114, 0.8)',
                  filter: 'blur(2px)',
                }}
              >
                Coming Soon
              </h1>
            </motion.div>

            {/* Secondary Glitch Layer */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                x: [3, -3, 5, -5, 0],
                y: [-5, 5, -3, 3, 0],
              }}
              transition={{
                duration: 0.25,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: 'linear'
              }}
            >
              <h1 
                className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase"
                style={{
                  color: '#d4ff9a',
                  textShadow: '0 0 40px rgba(212, 255, 154, 0.6)',
                  filter: 'blur(3px)',
                }}
              >
                Coming Soon
              </h1>
            </motion.div>

            {/* Main Text */}
            <motion.h1 
              className="relative text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase text-white"
              animate={{
                textShadow: [
                  '0 0 10px rgba(193, 255, 114, 0.5)',
                  '0 0 30px rgba(193, 255, 114, 0.8)',
                  '0 0 10px rgba(193, 255, 114, 0.5)',
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              Coming Soon
            </motion.h1>

            {/* Scan Line Animation */}
            <motion.div
              initial={{ top: '0%' }}
              animate={{ top: '100%' }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute left-0 w-full h-1 bg-gradient-to-b from-transparent via-[#c1ff72]/50 to-transparent pointer-events-none"
              style={{
                filter: 'blur(2px)'
              }}
            />
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-3xl text-center space-y-6 sm:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed tracking-wide"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                workshop_dyalchi7aja is first Moroccan based concept Art
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed tracking-wide"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  delay: 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                that gonna serve Darija to a memorable arts
              </motion.p>
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed tracking-wide"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  delay: 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                that won't be on the wall
              </motion.p>
            </div>

            {/* Moroccan Darija Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="pt-6 sm:pt-8 border-t border-[#c1ff72]/30"
            >
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#c1ff72] leading-relaxed italic"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(193, 255, 114, 0.3)',
                    '0 0 20px rgba(193, 255, 114, 0.6)',
                    '0 0 10px rgba(193, 255, 114, 0.3)',
                  ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                "Kifach T9na3 Moul L 7anout Y3tik B Kridi"
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#c1ff72] rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
