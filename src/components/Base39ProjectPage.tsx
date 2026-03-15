import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import brandImage from 'figma:asset/fad3d458c226863d5aed397c46867bb870ddfc02.png';
import positioningImage from 'figma:asset/a25de1eba617961b04bec1d0e9fc89a5c9a6c4e5.png';
import toneOfVoiceImage from 'figma:asset/6920fbe017fc810a423f0021452e07a8ff6d7bc9.png';
import logoIntroImage from 'figma:asset/8b85fca438d7b3b930edffc27051ba2b035c0216.png';
import logoColorVariationsImage from 'figma:asset/1191155737b567e22c8be0c3e0212ab05b78508f.png';
import primaryColorsImage from 'figma:asset/32a1e48201ec8473938f0ba2c30f017166988ffd.png';
import typographyImage from 'figma:asset/cfc5aeef9cef0f3f9faef4fc8f585c74d0e26184.png';
import typographyHierarchyImage from 'figma:asset/93d46a79fad30d3f544282764ca7a46692553159.png';
import visualLanguageImage from 'figma:asset/cde8e83fdba8cb01157c9fe021d9ff3df21ef6d2.png';
import visualLanguageShapesImage from 'figma:asset/ba9f9b1d34843f3e4eb340c754107c3ededa8227.png';
import contactInfoImage from 'figma:asset/4336608613a71e3957ddc401f4a0c0a6c5e95d3a.png';

interface Base39ProjectPageProps {
  onBack: () => void;
}

export function Base39ProjectPage({ onBack }: Base39ProjectPageProps) {
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
                2025
              </span>
              <span className="text-white/20">•</span>
              <span className="bg-[#c1ff72] text-black px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]">
                Ongoing
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-[1.1] uppercase">
              Base39
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 mb-4 sm:mb-6 uppercase tracking-wide">
              Creative District
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-3xl leading-relaxed uppercase tracking-wide">
              A Sharjah born creative hub built to break boundaries and reimagine 
              what&apos;s possible. Comprehensive brand identity system for an innovative 
              creative district.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Brand Image */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={brandImage}
              alt="Base39 Brand Identity"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Positioning */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={positioningImage}
              alt="Base39 Brand Positioning"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Tone of Voice */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={toneOfVoiceImage}
              alt="Base39 Brand Tone of Voice"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Logo Introduction */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={logoIntroImage}
              alt="Base39 Brand Logo Introduction"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Logo Color Variations */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={logoColorVariationsImage}
              alt="Base39 Brand Logo Color Variations"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Primary Colors */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={primaryColorsImage}
              alt="Base39 Brand Primary Colors"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Typography */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={typographyImage}
              alt="Base39 Brand Typography"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Typography Hierarchy */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={typographyHierarchyImage}
              alt="Base39 Brand Typography Hierarchy"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Visual Language */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={visualLanguageImage}
              alt="Base39 Brand Visual Language"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Visual Language Shapes */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={visualLanguageShapesImage}
              alt="Base39 Brand Visual Language Shapes"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Contact Info */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.0 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={contactInfoImage}
              alt="Base39 Brand Contact Info"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}