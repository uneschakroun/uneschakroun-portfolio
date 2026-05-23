import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { GlitchText } from './GlitchText';
import { Mode } from '../App';
import asoImage from 'figma:asset/8729a78c210ddc92a48825d48de5e819924a6bc0.png';
import base39Image from 'figma:asset/e013c937b6ed02e6b798e44d2cfacb342a304f3c.png';
import oudloverImage from 'figma:asset/2c0fee2c268a2c8dad227990f79750c975e64518.png';
import nuaImage from 'figma:asset/3f7f8e75eb30d72bae25f1b0f35471d18ece2bb4.png';
import artRevoImage from 'figma:asset/56bcda8c22d8322fce62b9f4e84f240aee9309e6.png';
import marqueeImage from 'figma:asset/bdca5c3cc2e1f8fac4d8b1bfafb1f629483d8a4e.png';

interface HeroSectionProps {
  onSectionClick: (sectionId: string) => void;
  mode: Mode;
  onToggleMode: () => void;
}

const words = ['BRAND', 'IDENTITY', 'MOTION', 'DESIGN', 'VISUAL', 'CREATIVE', 'SENIOR', 'DESIGNER'];

export function HeroSection({ onSectionClick, mode, onToggleMode }: HeroSectionProps) {
  const isMotion = mode === 'motion';

  const borderColor = isMotion ? 'border-black/20' : 'border-white/10';
  const textMuted = isMotion ? 'text-black/50' : 'text-white/40';
  const textBody = isMotion ? 'text-black/70' : 'text-white/60';
  const textFaint = isMotion ? 'text-black/20' : 'text-white/15';
  const accent = isMotion ? 'bg-black' : 'bg-[#c1ff72]';
  const accentText = isMotion ? 'text-black' : 'text-[#c1ff72]';
  const hoverBorder = isMotion ? 'hover:border-black/50' : 'hover:border-[#c1ff72]/50';

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 sm:px-6 relative pt-24 md:pt-32 pb-12 transition-colors duration-700`}>
      <div className="container mx-auto max-w-7xl w-full">

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className={`border ${borderColor} p-6 sm:p-8 md:p-12 transition-colors duration-700`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`h-[2px] w-12 sm:w-16 ${accent} transition-colors duration-700`}></div>
              <span className={`text-xs sm:text-sm ${textMuted} uppercase tracking-[0.3em] font-bold`}>
                Available to Relocate
              </span>
            </div>

            <AnimatePresence mode="wait">
              {isMotion ? (
                <motion.div
                  key="motion"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 sm:mb-6"
                >
                  <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
                    {words.map((word, i) => (
                      <motion.span
                        key={word}
                        initial={{ opacity: 0, y: 40, rotate: -5 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.08,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0], transition: { duration: 0.3 } }}
                        className="text-2xl sm:text-4xl md:text-5xl font-bold uppercase cursor-default"
                        style={{ color: i % 2 === 0 ? 'black' : 'rgba(0,0,0,0.3)' }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="h-[3px] bg-black mb-4 origin-left"
                  />
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-sm sm:text-base md:text-lg text-black/60 uppercase tracking-wide"
                  >
                    Senior Designer · GCC Expertise
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  key="graphic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 uppercase leading-[1.1]">
                    Senior Designer<br />
                    <span className="text-[#c1ff72] text-lg sm:text-3xl md:text-4xl lg:text-5xl">GCC Expertise</span>
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>

            <p className={`text-sm sm:text-base md:text-lg ${textBody} max-w-2xl uppercase tracking-wide leading-relaxed`}>
              Brand Identity · Brand Guidelines · Social Media Design
            </p>
            <p className={`text-xs sm:text-sm ${textMuted} uppercase tracking-[0.3em] font-bold mt-3`}>
              Multilingual · EN · FR · AR
            </p>
          </div>
        </motion.div>

        {/* Mode Toggle Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 sm:mb-16"
        >
          <button
            onClick={onToggleMode}
            className={`group flex items-center gap-3 border px-5 py-3 transition-all duration-500 ${
              isMotion
                ? 'border-black/30 hover:border-black bg-black/5 hover:bg-black/10'
                : 'border-white/20 hover:border-[#c1ff72] bg-white/5 hover:bg-[#c1ff72]/10'
            }`}
          >
            <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${isMotion ? 'bg-black' : 'bg-[#c1ff72]'}`}></div>
            <span className={`text-xs font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${
              isMotion ? 'text-black' : 'text-white'
            }`}>
              {isMotion ? 'Switch to Graphic Design' : 'Switch to Motion Typography'}
            </span>
            <ArrowUpRight className={`w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
              isMotion ? 'text-black/50' : 'text-white/50'
            }`} />
          </button>
        </motion.div>

        {/* Animated Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`mb-12 sm:mb-16 md:mb-20 border-y py-8 sm:py-10 overflow-hidden relative transition-colors duration-700 ${
            isMotion ? 'border-black/20 bg-[#c1ff72]' : 'border-white/10 bg-black'
          }`}
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex-shrink-0 px-6 sm:px-8 md:px-12">
                <img
                  src={marqueeImage}
                  alt="Brand Services"
                  className={`h-5 sm:h-6 md:h-8 lg:h-10 w-auto transition-all duration-700 ${
                    isMotion ? 'opacity-30 hover:opacity-60' : 'opacity-30 hover:opacity-50'
                  }`}
                  style={{ filter: isMotion ? 'brightness(0)' : 'brightness(2)' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-4">
            <div className={`h-[2px] w-8 ${accent} transition-colors duration-700`}></div>
            <span className={`text-xs sm:text-sm ${textMuted} uppercase tracking-[0.3em] font-bold`}>Featured Work</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-12 sm:mb-16">

          {/* Art Revo */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => onSectionClick('artrevo')}
            className="group relative cursor-pointer"
          >
            <div className={`relative overflow-hidden bg-zinc-900 border ${borderColor} ${hoverBorder} transition-all duration-300`}>
              <div className="aspect-[16/9]">
                <img src={artRevoImage} alt="Art Revo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] sm:text-xs ${accentText} font-bold uppercase tracking-[0.3em]`}>Creative House & Marketing Agency</span>
                <span className={`text-[10px] sm:text-xs ${textMuted} font-bold uppercase tracking-wider`}>2024</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase group-hover:opacity-60 transition-opacity">
                <GlitchText>Art Revo</GlitchText>
              </h3>
            </div>
          </motion.div>

          {/* Base39 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            onClick={() => onSectionClick('base39')}
            className="group relative cursor-pointer"
          >
            <div className={`relative overflow-hidden bg-zinc-900 border ${borderColor} ${hoverBorder} transition-all duration-300`}>
              <div className="aspect-[16/9]">
                <img src={base39Image} alt="Base39" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] sm:text-xs ${accentText} font-bold uppercase tracking-[0.3em]`}>Brand Identity</span>
                <span className={`text-[10px] sm:text-xs ${textMuted} font-bold uppercase tracking-wider`}>2025</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase group-hover:opacity-60 transition-opacity">
                <GlitchText>Base39</GlitchText>
                <span className={`block text-base sm:text-lg ${textBody}`}>Creative District</span>
              </h3>
            </div>
          </motion.div>

          {/* TUHWC */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            onClick={() => onSectionClick('aso')}
            className="group relative cursor-pointer"
          >
            <div className={`relative overflow-hidden bg-zinc-900 border ${borderColor} ${hoverBorder} transition-all duration-300`}>
              <div className="aspect-[16/9]">
                <img src={asoImage} alt="The Ultimate Human Wellness Clinic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] sm:text-xs ${accentText} font-bold uppercase tracking-[0.3em]`}>Instagram Content Design</span>
                <span className={`text-[10px] sm:text-xs ${textMuted} font-bold uppercase tracking-wider`}>2025</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase group-hover:opacity-60 transition-opacity">
                <GlitchText>The Ultimate Human WC</GlitchText>
              </h3>
            </div>
          </motion.div>

          {/* Oudlover */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            onClick={() => onSectionClick('oudlover')}
            className="group relative cursor-pointer"
          >
            <div className={`relative overflow-hidden bg-zinc-900 border ${borderColor} ${hoverBorder} transition-all duration-300`}>
              <div className="aspect-[16/9]">
                <img src={oudloverImage} alt="Oudlover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] sm:text-xs ${accentText} font-bold uppercase tracking-[0.3em]`}>Brand Identity</span>
                <span className={`text-[10px] sm:text-xs ${textMuted} font-bold uppercase tracking-wider`}>2024</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase group-hover:opacity-60 transition-opacity">
                <GlitchText>Oudlover</GlitchText>
              </h3>
            </div>
          </motion.div>

          {/* Nua */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            onClick={() => onSectionClick('nua')}
            className="group relative cursor-pointer"
          >
            <div className={`relative overflow-hidden bg-zinc-900 border ${borderColor} ${hoverBorder} transition-all duration-300`}>
              <div className="aspect-[16/9]">
                <img src={nuaImage} alt="Nua" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] sm:text-xs ${accentText} font-bold uppercase tracking-[0.3em]`}>Brand Design</span>
                <span className={`text-[10px] sm:text-xs ${textMuted} font-bold uppercase tracking-wider`}>2024</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase group-hover:opacity-60 transition-opacity">
                <GlitchText>Nua</GlitchText>
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Statement Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className={`border ${borderColor} p-6 sm:p-8 md:p-12 transition-colors duration-700`}
        >
          <p className={`text-center text-xs sm:text-sm ${textFaint} uppercase tracking-[0.4em] mb-8`}>
            Nothing Here To See
          </p>
          <div className={`h-[1px] w-full ${isMotion ? 'bg-black/10' : 'bg-white/10'} mb-8`}></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight">
            If My Work<br />
            <span className={accentText}>Doesn't Convince You,</span><br />
            Nothing Will.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}