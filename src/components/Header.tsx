import { motion } from 'motion/react';

interface HeaderProps {
  onResumeClick: () => void;
  onLogoClick: () => void;
  onCaseStudyClick: () => void;
  onLinkedInOfferClick?: () => void;
}

export function Header({ onResumeClick, onLogoClick, onCaseStudyClick, onLinkedInOfferClick }: HeaderProps) {
  const text = "INTERNATIONAL SR DESIGNER * INTERNATIONAL SR DESIGNER * INTERNATIONAL SR DESIGNER * ";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="h-16 sm:h-20 flex items-center overflow-hidden cursor-pointer" onClick={onLogoClick}>
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-white/80 pr-8"
              >
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </header>
    </>
  );
}