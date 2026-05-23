import { motion } from 'motion/react';
import { Mode } from '../App';

interface HeaderProps {
  onResumeClick: () => void;
  onLogoClick: () => void;
  onCaseStudyClick: () => void;
  onLinkedInOfferClick?: () => void;
  mode: Mode;
}

export function Header({ onResumeClick, onLogoClick, onCaseStudyClick, onLinkedInOfferClick, mode }: HeaderProps) {
  const isMotion = mode === 'motion';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-700 ${
        isMotion
          ? 'bg-[#c1ff72]/90 border-black/10'
          : 'bg-black/80 border-white/10'
      }`}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center overflow-hidden cursor-pointer"
              onClick={onLogoClick}
            >
              <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                {[...Array(4)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xs sm:text-sm font-bold uppercase tracking-[0.3em] pr-8 transition-colors duration-700 ${
                      isMotion ? 'text-black/70' : 'text-white/80'
                    }`}
                  >
                    INTERNATIONAL SR DESIGNER * INTERNATIONAL SR DESIGNER * INTERNATIONAL SR DESIGNER *{' '}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>
    </>
  );
}