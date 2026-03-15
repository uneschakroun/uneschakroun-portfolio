import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Users, Mail, FileText } from 'lucide-react';
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
              <span className="text-xs sm:text-sm text-white/40 uppercase tracking-[0.3em] font-bold">Available for work</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 uppercase leading-[1.1]">
              Senior Designer<br />
              <span className="text-[#c1ff72] text-lg sm:text-3xl md:text-4xl lg:text-5xl">Morocco • KSA • UAE</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl uppercase tracking-wide leading-relaxed mb-6 sm:mb-8">
              Creative thinker who can execute the soul of your brand identity
            </p>
            
            {/* Request a Proposal CTA - Compact Version */}
            <a
              href="https://forms.gle/mqtH6UiuaaRMamyq8"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 sm:gap-4 border border-[#c1ff72]/30 bg-[#c1ff72]/5 px-4 py-3 sm:px-6 sm:py-4 hover:border-[#c1ff72]/60 hover:bg-[#c1ff72]/10 transition-all duration-300 active:scale-[0.98]"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 border border-[#c1ff72] flex items-center justify-center bg-[#c1ff72]/10 group-hover:bg-[#c1ff72]/20 transition-all duration-300 shrink-0">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#c1ff72]" />
              </div>
              <div className="flex-1">
                <div className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-tight text-white group-hover:text-[#c1ff72] transition-colors">
                  Request a Free Proposal
                </div>
                <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wide">
                  Get customized quote
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#c1ff72] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
            </a>
          </div>
        </motion.div>

        {/* Animated Marquee - Moved here, right after hero */}
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
          
          {/* Art Revo Project */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => onSectionClick('artrevo')}
            className="group relative cursor-pointer"
          >
            <div className="relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#c1ff72]/50 active:border-[#c1ff72]/50 transition-all duration-300">
              <div className="aspect-[16/9]">
                <img
                  src={artRevoImage}
                  alt="Art Revo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-xs text-[#c1ff72] font-bold uppercase tracking-[0.3em]">
                  Creative House & Marketing Agency
                </span>
                <span className="text-[10px] sm:text-xs text-white/40 font-bold uppercase tracking-wider">
                  2024
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase group-hover:text-[#c1ff72] transition-colors">
                <GlitchText>Art Revo</GlitchText>
              </h3>
            </div>
          </motion.div>

          {/* Base39 Project */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            onClick={() => onSectionClick('base39')}
            className="group relative cursor-pointer"
          >
            <div className="relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#c1ff72]/50 active:border-[#c1ff72]/50 transition-all duration-300">
              <div className="aspect-[16/9]">
                <img
                  src={base39Image}
                  alt="Base39"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-xs text-[#c1ff72] font-bold uppercase tracking-[0.3em]">
                  Brand Identity
                </span>
                <span className="text-[10px] sm:text-xs text-white/40 font-bold uppercase tracking-wider">
                  2025
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase group-hover:text-[#c1ff72] transition-colors">
                <GlitchText>Base39</GlitchText>
                <span className="block text-base sm:text-lg text-white/60">Creative District</span>
              </h3>
            </div>
          </motion.div>

          {/* TUHWC Project */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            onClick={() => onSectionClick('aso')}
            className="group relative cursor-pointer"
          >
            <div className="relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#c1ff72]/50 active:border-[#c1ff72]/50 transition-all duration-300">
              <div className="aspect-[16/9]">
                <img
                  src={asoImage}
                  alt="The Ultimate Human Wellness Clinic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-xs text-[#c1ff72] font-bold uppercase tracking-[0.3em]">
                  Instagram Content Design
                </span>
                <span className="text-[10px] sm:text-xs text-white/40 font-bold uppercase tracking-wider">
                  2025
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase group-hover:text-[#c1ff72] transition-colors">
                <GlitchText>The Ultimate Human WC</GlitchText>
              </h3>
            </div>
          </motion.div>

          {/* Oudlover Project */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            onClick={() => onSectionClick('oudlover')}
            className="group relative cursor-pointer"
          >
            <div className="relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#c1ff72]/50 active:border-[#c1ff72]/50 transition-all duration-300">
              <div className="aspect-[16/9]">
                <img
                  src={oudloverImage}
                  alt="Oudlover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-xs text-[#c1ff72] font-bold uppercase tracking-[0.3em]">
                  Brand Identity
                </span>
                <span className="text-[10px] sm:text-xs text-white/40 font-bold uppercase tracking-wider">
                  2024
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase group-hover:text-[#c1ff72] transition-colors">
                <GlitchText>Oudlover</GlitchText>
              </h3>
            </div>
          </motion.div>

          {/* Nua Project */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            onClick={() => onSectionClick('nua')}
            className="group relative cursor-pointer"
          >
            <div className="relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#c1ff72]/50 active:border-[#c1ff72]/50 transition-all duration-300">
              <div className="aspect-[16/9]">
                <img
                  src={nuaImage}
                  alt="Nua"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-xs text-[#c1ff72] font-bold uppercase tracking-[0.3em]">
                  Brand Design
                </span>
                <span className="text-[10px] sm:text-xs text-white/40 font-bold uppercase tracking-wider">
                  2024
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase group-hover:text-[#c1ff72] transition-colors">
                <GlitchText>Nua</GlitchText>
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Navigation Cards Grid - Only Services and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Services Overview Card */}
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => onSectionClick('process')}
            className="group relative text-left border border-white/10 p-6 sm:p-8 hover:border-[#c1ff72]/50 transition-all duration-300 active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-[#c1ff72]/0 group-hover:bg-[#c1ff72]/5 transition-all duration-300"></div>
            
            <div className="relative z-10 flex flex-col h-full min-h-[220px]">
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs sm:text-sm text-[#c1ff72]/60 font-bold uppercase tracking-[0.3em]">01</span>
                <div className="w-12 h-12 sm:w-14 sm:h-14 border border-white/20 flex items-center justify-center group-hover:border-[#c1ff72] transition-all duration-300">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white/40 group-hover:text-[#c1ff72] transition-colors duration-300" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 uppercase leading-tight flex-1">
                <GlitchText>Services<br />Overview</GlitchText>
              </h2>
              <p className="text-xs sm:text-sm text-white/40 uppercase tracking-wide mb-6">Freelance design services & pricing</p>
              <div className="flex items-center justify-end">
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/20 group-hover:text-[#c1ff72] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c1ff72] group-hover:w-full transition-all duration-500"></div>
            </div>
          </motion.button>

          {/* Contact Card */}
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            onClick={() => onSectionClick('contact')}
            className="group relative text-left border border-white/10 p-6 sm:p-8 hover:border-[#c1ff72]/50 transition-all duration-300 active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-[#c1ff72]/0 group-hover:bg-[#c1ff72]/5 transition-all duration-300"></div>
            
            <div className="relative z-10 flex flex-col h-full min-h-[220px]">
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs sm:text-sm text-[#c1ff72]/60 font-bold uppercase tracking-[0.3em]">02</span>
                <div className="w-12 h-12 sm:w-14 sm:h-14 border border-white/20 flex items-center justify-center group-hover:border-[#c1ff72] transition-all duration-300">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white/40 group-hover:text-[#c1ff72] transition-colors duration-300" />
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 uppercase leading-tight flex-1">
                <GlitchText>Contact<br />Me</GlitchText>
              </h2>
              <p className="text-xs sm:text-sm text-white/40 uppercase tracking-wide mb-6">Let's work together</p>
              <div className="flex items-center justify-end">
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/20 group-hover:text-[#c1ff72] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c1ff72] group-hover:w-full transition-all duration-500"></div>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}