import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import wavePatternImage from 'figma:asset/f0599ac73c389e3259230a5c96371dd7d444f8bf.png';
import brandDescriptionImage from 'figma:asset/cb16948f175ea02bd9dc5e3cbbb1aa04c99bff0e.png';
import logoImage from 'figma:asset/1ac828cf2cb0a8887f3760e99db90fd9df041dfd.png';

interface MawjaProjectPageProps {
  onBack: () => void;
}

export function MawjaProjectPage({ onBack }: MawjaProjectPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-20 pb-32"
    >
      {/* Header */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 sm:gap-3 text-white/60 hover:text-[#c1ff72] transition-colors mb-8 sm:mb-12 group min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-wider text-sm sm:text-base">Back to Client Works</span>
        </button>

        {/* Project Title */}
        <div className="mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm text-white/40 font-bold uppercase tracking-[0.3em]">
                Branding Project
              </span>
              <span className="text-white/20">•</span>
              <span className="text-xs sm:text-sm text-white/40 font-bold uppercase tracking-wider">
                2025/2026
              </span>
              <span className="text-white/20">•</span>
              <span className="bg-[#c1ff72] text-black px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]">
                Ongoing
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-[1.1] uppercase">
              Mawja
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 mb-4 sm:mb-6 uppercase tracking-wide">
              Coffee Shop
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-3xl leading-relaxed uppercase tracking-wide">
              Mawja is a coffee shop that makes delicious specialty coffee. 
              A comprehensive brand identity system for a modern coffee experience.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Brand Wave Pattern */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={wavePatternImage}
              alt="Mawja Brand Wave Pattern"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Description */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={brandDescriptionImage}
              alt="Mawja Brand Description"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Logo */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={logoImage}
              alt="Mawja Brand Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}