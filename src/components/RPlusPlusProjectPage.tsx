import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect } from 'react';

interface RPlusPlusProjectPageProps {
  onBack: () => void;
}

export function RPlusPlusProjectPage({ onBack }: RPlusPlusProjectPageProps) {
  useEffect(() => {
    // Add any side effects here if needed
  }, []);

  const handleBackClick = () => {
    onBack();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-20 pb-32 bg-black"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 sm:gap-3 text-white/60 hover:text-[#c1ff72] transition-colors mb-8 sm:mb-12 group min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-light uppercase tracking-wider text-sm sm:text-base">Back to Client Works</span>
        </button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-2 leading-[0.95] uppercase tracking-tight">
            R++
          </h1>
          
          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-8 sm:mb-12 leading-[0.95] uppercase tracking-tight text-white/20">
            R++
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-12 max-w-4xl">
            <div>
              <span className="text-white font-bold uppercase tracking-wide text-sm sm:text-base">Premium Tech Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="text-white font-bold uppercase tracking-wide text-sm sm:text-base">2024</span>
            </div>
            <div>
              <span className="text-white font-bold uppercase tracking-wide text-sm sm:text-base">Brand Identity</span>
            </div>
            <div>
              <span className="text-white font-bold uppercase tracking-wide text-sm sm:text-base">Digital System</span>
            </div>
          </div>

          <div className="mb-8">
            <span className="text-white font-bold uppercase tracking-wide text-sm sm:text-base">Technology & Innovation</span>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <div className="space-y-8 sm:space-y-16">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-video overflow-hidden bg-zinc-900">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760787545864-b468b6fe2c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBicmFuZGluZ3xlbnwxfHx8fDE3NjQ4MDMzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="R++ Brand Identity - Hero"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Grid System Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-video overflow-hidden bg-zinc-900">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1756510473714-567691ff8a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwbG9nbyUyMGRlc2lnbnxlbnwxfHx8fDE3NjQ3OTAyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="R++ Brand Identity - Logo System"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6">
              <span className="text-xs text-white/40 uppercase tracking-wider">Logo System & Typography</span>
            </div>
          </motion.div>

          {/* Brand Application */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="aspect-video overflow-hidden bg-zinc-900">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1532036521863-eb1e79f117b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYnJhbmQlMjBpZGVudGl0eSUyMHN5c3RlbXxlbnwxfHx8fDE3NjQ4MDMzMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="R++ Brand Identity - Application"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6">
              <span className="text-xs text-white/40 uppercase tracking-wider">Brand Application - Digital Assets</span>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-t border-white/10"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">Design Approach</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                R++ represents the next generation of premium technology platforms. The brand identity merges cutting-edge innovation with sophisticated minimalism, creating a visual language that resonates with forward-thinking enterprises.
              </p>
              <p className="text-white/60 leading-relaxed">
                The dual plus symbols embody progressive enhancement and continuous improvement, while the sharp geometric aesthetic communicates precision and technical excellence.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">Deliverables</h3>
              <ul className="space-y-3 text-white/60">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#c1ff72] rounded-full"></span>
                  Logo Design & Variations
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#c1ff72] rounded-full"></span>
                  Brand Guidelines & Style System
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#c1ff72] rounded-full"></span>
                  Digital Asset Library
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#c1ff72] rounded-full"></span>
                  Motion Design System
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#c1ff72] rounded-full"></span>
                  UI Component Kit
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}