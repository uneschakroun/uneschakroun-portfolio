import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import nuaImage from 'figma:asset/3f7f8e75eb30d72bae25f1b0f35471d18ece2bb4.png';
import nuaLogo from 'figma:asset/156b0c6604412ab30df65b60fc44576e43276860.png';
import nuaColorPalette from 'figma:asset/dd7bcd683d92b31557caab4c333613aef3bde97e.png';
import nuaStudio from 'figma:asset/3d76cf277275ecf742d6191820accadef498ba34.png';
import nuaStaffUniform from 'figma:asset/2be9fa4d171249274543f68e5e15a2af2f8179d3.png';
import nuaMerchPackage from 'figma:asset/3ccecfc00550390e4414e5f048f7c5ecee1483fc.png';
import nuaBrandedEquipments from 'figma:asset/e3f02fae463c32bdc8643d9a40845601c4f916f3.png';
import nuaSignage from 'figma:asset/daba35d42ad8427a29c26916ef1b6632f7fd58bd.png';
import nuaProducts from 'figma:asset/db3f4d3e91f1d9def677f1148abe613be491d544.png';
import nuaBathroomEssentials from 'figma:asset/f64179f017867e50400d301660ace06f9e6978e4.png';
import nuaStationary from 'figma:asset/5c6132c7aed914c3de85e4057009448994dfee44.png';

interface NuaProjectPageProps {
  onBack: () => void;
}

export function NuaProjectPage({ onBack }: NuaProjectPageProps) {
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
                Brand Design
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
              Nua
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-3xl leading-relaxed uppercase tracking-wide">
              "Nua," meaning 'new,' suggests renewal and fresh starts, which are 
              intrinsic to the transformative effects of Pilates. Promoting wellness 
              and transformation. The soft 'n,' 'u,' and 'a' form a visually appealing 
              combination.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Brand Image */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative overflow-hidden bg-zinc-900 mb-2 sm:mb-3"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={nuaImage}
              alt="Nua Brand Identity"
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
          transition={{ delay: 0.5 }}
          className="relative overflow-hidden bg-zinc-900 mb-2 sm:mb-3"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={nuaLogo}
              alt="Nua Brand Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Color Palette */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative overflow-hidden bg-zinc-900 mb-2 sm:mb-3"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={nuaColorPalette}
              alt="Nua Brand Color Palette"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Studio */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="relative overflow-hidden bg-zinc-900 mb-2 sm:mb-3"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={nuaStudio}
              alt="Nua Brand Studio"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Staff Uniform */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative overflow-hidden bg-zinc-900 mb-2 sm:mb-3"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={nuaStaffUniform}
              alt="Nua Brand Staff Uniform"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Merch Package */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="relative overflow-hidden bg-zinc-900 mb-2 sm:mb-3"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={nuaMerchPackage}
              alt="Nua Brand Merch Package"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Equipment */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="relative overflow-hidden bg-zinc-900 mb-2 sm:mb-3"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={nuaBrandedEquipments}
              alt="Nua Brand Equipment"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Signage */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="relative overflow-hidden bg-zinc-900 mb-2 sm:mb-3"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={nuaSignage}
              alt="Nua Brand Signage"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Products */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="relative overflow-hidden bg-zinc-900 mb-2 sm:mb-3"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={nuaProducts}
              alt="Nua Brand Products"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Bathroom Essentials */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="relative overflow-hidden bg-zinc-900 mb-2 sm:mb-3"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={nuaBathroomEssentials}
              alt="Nua Brand Bathroom Essentials"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Brand Stationary */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="relative overflow-hidden bg-zinc-900"
        >
          <div className="aspect-[16/9]">
            <ImageWithFallback
              src={nuaStationary}
              alt="Nua Brand Stationary"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}