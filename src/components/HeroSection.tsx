import { motion } from 'motion/react';
import { GlitchText } from './GlitchText';
import asoImage from 'figma:asset/8729a78c210ddc92a48825d48de5e819924a6bc0.png';
import base39Image from 'figma:asset/e013c937b6ed02e6b798e44d2cfacb342a304f3c.png';
import oudloverImage from 'figma:asset/2c0fee2c268a2c8dad227990f79750c975e64518.png';
import nuaImage from 'figma:asset/3f7f8e75eb30d72bae25f1b0f35471d18ece2bb4.png';
import artRevoImage from 'figma:asset/56bcda8c22d8322fce62b9f4e84f240aee9309e6.png';
import marqueeImage from 'figma:asset/bdca5c3cc2e1f8fac4d8b1bfafb1f629483d8a4e.png';

interface HeroSectionProps {
  onSectionClick: (sectionId: string) => void;
}

export function HeroSection({ onSectionClick }: HeroSectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative pt-24 md:pt-32 pb-12">
      <div className="container mx-auto max-w-7xl w-full">

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <div className="border border-white/10 p-6 sm:p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 sm:w-16 bg-[#c1ff72]"></div>
              <span className="text-xs sm:text-sm text-white/40 uppercase tracking-[0.3em] font-bold">
                Based in Morocco · Open to Europe
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 uppercase leading-[1.1]">
              Senior Designer
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl uppercase tracking-wide leading-relaxed">
              Brand Identity · Brand Guidelines · Social Media Design
            </p>
            <p className="text-xs sm:text-sm text-white/30 uppercase tracking-[0.3em] font-bold mt-3">
              Multilingual · EN · FR · AR
            </p>
          </div>
        </motion.div>

        {/* Animated Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 sm:mb-16 md:mb-20 border-y border-white/10 py-8 sm:py-10 overflow-hidden relative bg-black"
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex-shrink-0 px-6 sm:px-8 md:px-12">
                <img
                  src={marqueeImage}
                  alt="Brand Services"
                  className="h-5 sm:h-6 md:h-8 lg:h-10 w-auto opacity-30 hover:opacity-50 transition-opacity duration-300"
                  style={{ filter: 'brightness(2)' }}
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
            <div className="h-[2px] w-8 bg-[#c1ff72]"></div>
            <span className="text-xs sm:text-sm text-white/40 uppercase tracking-[0.3em] font-bold">Featured Work</span>
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
            <div className="relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#c1ff72]/50 transition-all duration-300">
              <div className="aspect-[16/9]">
                <img src={artRevoImage} alt="Art Revo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-xs text-[#c1ff72] font-bold uppercase tracking-[0.3em]">Creative House & Marketing Agency</span>
                <span className="text-[10px] sm:text-xs text-white/40 font-bold uppercase tracking-wider">2024</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase group-hover:text-[#c1ff72] transition-colors">
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
            <div className="relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#c1ff72]/50 transition-all duration-300">
              <div className="aspect-[16/9]">
                <img src={base39Image} alt="Base39" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-xs text-[#c1ff72] font-bold uppercase tracking-[0.3em]">Brand Identity</span>
                <span className="text-[10px] sm:text-xs text-white/40 font-bold uppercase tracking-wider">2025</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase group-hover:text-[#c1ff72] transition-colors">
                <GlitchText>Base39</GlitchText>
                <span className="block text-base sm:text-lg text-white/60">Creative District</span>
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
            <div className="relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#c1ff72]/50 transition-all duration-300">
              <div className="aspect-[16/9]">
                <img src={asoImage} alt="The Ultimate Human Wellness Clinic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-xs text-[#c1ff72] font-bold uppercase tracking-[0.3em]">Instagram Content Design</span>
                <span className="text-[10px] sm:text-xs text-white/40 font-bold uppercase tracking-wider">2025</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase group-hover:text-[#c1ff72] transition-colors">
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
            <div className="relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#c1ff72]/50 transition-all duration-300">
              <div className="aspect-[16/9]">
                <img src={oudloverImage} alt="Oudlover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-xs text-[#c1ff72] font-bold uppercase tracking-[0.3em]">Brand Identity</span>
                <span className="text-[10px] sm:text-xs text-white/40 font-bold uppercase tracking-wider">2024</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase group-hover:text-[#c1ff72] transition-colors">
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
            <div className="relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#c1ff72]/50 transition-all duration-300">
              <div className="aspect-[16/9]">
                <img src={nuaImage} alt="Nua" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-xs text-[#c1ff72] font-bold uppercase tracking-[0.3em]">Brand Design</span>
                <span className="text-[10px] sm:text-xs text-white/40 font-bold uppercase tracking-wider">2024</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase group-hover:text-[#c1ff72] transition-colors">
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
          className="border border-white/10 p-6 sm:p-8 md:p-12"
        >
          <p className="text-center text-xs sm:text-sm text-white/15 uppercase tracking-[0.4em] mb-8">
            Nothing Here To See
          </p>
          <div className="h-[1px] w-full bg-white/10 mb-8"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight">
            If My Work<br />
            <span className="text-[#c1ff72]">Doesn't Convince You,</span><br />
            Nothing Will.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}