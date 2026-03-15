import { motion } from 'motion/react';
import logoImage from 'figma:asset/ded754bffdae0d81a0d94df8a050ecf0c0854f8a.png';

interface HeaderProps {
  onResumeClick: () => void;
  onLogoClick: () => void;
  onCaseStudyClick: () => void;
  onLinkedInOfferClick?: () => void;
}

export function Header({ onResumeClick, onLogoClick, onCaseStudyClick, onLinkedInOfferClick }: HeaderProps) {
  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <motion.button
                onClick={onLogoClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
              >
                <img 
                  src={logoImage} 
                  alt="UN Studio Logo" 
                  className="h-6 sm:h-8 md:h-10 w-auto"
                />
              </motion.button>
            </motion.div>

            {/* LinkedIn Offer Badge */}
            {onLinkedInOfferClick && (
              <motion.button
                onClick={onLinkedInOfferClick}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center cursor-pointer"
              >
                <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#c1ff72] hover:bg-[#d4ff9a] transition-colors duration-300">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-black">
                    LINKEDIN SERVICES
                  </span>
                </div>
              </motion.button>
            )}

            {/* TEMPORARILY HIDDEN - Case Study Badge (restore when requested)
            <motion.button
              onClick={onCaseStudyClick}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center cursor-pointer"
            >
              <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#c1ff72] hover:bg-[#d4ff9a] transition-colors duration-300">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-black">
                  CASE STUDY
                </span>
              </div>
            </motion.button>
            */}
          </div>
        </div>
      </header>
    </>
  );
}