import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoPlaceholderImage from 'figma:asset/e80db10e24748f6d4038ed87c0bd3f1826c33a3a.png';
import logoImage from 'figma:asset/723a9c8df216bb864f242126288d9479fb8c281e.png';
import logoConstructionImage from 'figma:asset/afaeddb8552e93ca2927380c3e2aa8df5b0f4d76.png';
import colorVariationsImage from 'figma:asset/3a518074fadbf9b92fad2d5a878e63914e011c7e.png';
import colorPaletteTitleImage from 'figma:asset/6031ae2abec9786472c6f31420735ec2ba84162d.png';
import colorPaletteDetailsImage from 'figma:asset/a8c424c1b81bb50d09e4d2bf056dd0f57bcce13a.png';
import graphicElementsTitleImage from 'figma:asset/3d4c7f130778624f55b5215d85471a1c6bc933f3.png';
import graphicElementsImage from 'figma:asset/97ca224ccf5e6a3b93b63cb344a124e56916140e.png';
import iconBadgesBeigeImage from 'figma:asset/ed1ccc6fb2b138f91702a91a42a7548dbf102c17.png';
import iconBadgesTealImage from 'figma:asset/471f6e71ee00ecb8baf9d1160c6d731ac877dd5f.png';
import typographyImage from 'figma:asset/7013ddc1802fbc48567b21a1bf5465a77bd9c60a.png';
import typographyDetailsImage from 'figma:asset/93dc4b4fa2c24a60027f9c88b78b837c0fe2f781.png';
import visualIdentityTitleImage from 'figma:asset/5bb91b51207b7af3119922bc6e899bb47f9cb7d2.png';
import moodboardCollageImage from 'figma:asset/ed6e95bc9cfed943278461f437cc9c40f2d52696.png';
import websiteBannerImage from 'figma:asset/7bfb6ea20dcb3e4bcc0f75479b85de328a4c08ec.png';
import instagramGridImage from 'figma:asset/9e230799bf81684719ce5a9a0ec1f411e4f419f5.png';
import wobblerImage from 'figma:asset/2824c812a5e63f43298d837f066c9339856fee4e.png';

interface OudloverProjectPageProps {
  onBack: () => void;
}

export function OudloverProjectPage({ onBack }: OudloverProjectPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-16 sm:pt-20 pb-16 sm:pb-32"
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
                Brand Identity
              </span>
              <span className="text-white/20">•</span>
              <span className="text-xs sm:text-sm text-white/40 font-bold uppercase tracking-wider">
                2024
              </span>
              <span className="text-white/20">•</span>
              <span className="bg-[#c1ff72] text-black px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]">
                Completed
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-[1.1] uppercase">
              Oudlover
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-3xl leading-relaxed uppercase tracking-wide">
              Specializing in incense and furniture fresheners with innovative scents. 
              Creating new ideas in the field of fragrance to provide distinction. 
              &quot;We adore oud, so we made it our name.&quot;
            </p>
          </motion.div>
        </div>
      </div>

      {/* Logo Placeholder */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={logoPlaceholderImage}
              alt="Oudlover Logo Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Logo */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={logoImage}
              alt="Oudlover Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Logo Construction */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={logoConstructionImage}
              alt="Oudlover Logo Construction"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Color Variations */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={colorVariationsImage}
              alt="Oudlover Color Variations"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Color Palette Title */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={colorPaletteTitleImage}
              alt="Oudlover Color Palette Title"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Color Palette Details */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={colorPaletteDetailsImage}
              alt="Oudlover Color Palette Details"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Graphic Elements Title */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={graphicElementsTitleImage}
              alt="Oudlover Graphic Elements Title"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Graphic Elements */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={graphicElementsImage}
              alt="Oudlover Graphic Elements"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Icon Badges Beige */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={iconBadgesBeigeImage}
              alt="Oudlover Icon Badges Beige"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Icon Badges Teal */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={iconBadgesTealImage}
              alt="Oudlover Icon Badges Teal"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Typography */}
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
              alt="Oudlover Typography"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Typography Details */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={typographyDetailsImage}
              alt="Oudlover Typography Details"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Visual Identity Title */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={visualIdentityTitleImage}
              alt="Oudlover Visual Identity Title"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Moodboard Collage */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={moodboardCollageImage}
              alt="Oudlover Moodboard Collage"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Website Banner */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={websiteBannerImage}
              alt="Oudlover Website Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Instagram Grid */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={instagramGridImage}
              alt="Oudlover Instagram Grid"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Wobbler */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-2 sm:mb-3">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={wobblerImage}
              alt="Oudlover Wobbler"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}