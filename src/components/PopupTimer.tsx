import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface PopupTimerProps {
  onCollaborate: () => void;
}

export function PopupTimer({ onCollaborate }: PopupTimerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 30 * 1000); // Trigger set to exactly 30 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleCollaborate = () => {
    setVisible(false);
    onCollaborate();
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={() => setVisible(false)}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4"
          >
            <div className="w-full max-w-lg bg-black border border-white/10 p-8 sm:p-12 relative">

              {/* Close Button */}
              <button
                onClick={() => setVisible(false)}
                className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Green Line */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-12 bg-[#c1ff72]"></div>
                <span className="text-xs text-[#c1ff72] uppercase tracking-[0.3em] font-bold">
                  1 Minute Passed
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold uppercase leading-tight mb-6">
                I promised to save<br />
                <span className="text-[#c1ff72]">your time,</span><br />
                and I keep my word.
              </h2>

              {/* Body */}
              <p className="text-sm text-white/50 uppercase tracking-wide leading-relaxed mb-10">
                By now, you've seen how I translate design strategy across Europe and the GCC.
              </p>

              {/* Divider */}
              <div className="h-[1px] w-full bg-white/10 mb-8"></div>

              <p className="text-xs text-white/30 uppercase tracking-[0.3em] font-bold mb-6">
                What's next?
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleCollaborate}
                  className="flex-1 bg-[#c1ff72] text-black font-bold text-sm uppercase tracking-[0.3em] py-4 px-6 hover:bg-[#d4ff9a] transition-colors duration-300"
                >
                  Collaborate
                </button>
                <button
                  onClick={() => setVisible(false)}
                  className="flex-1 border border-white/20 text-white/60 font-bold text-sm uppercase tracking-[0.3em] py-4 px-6 hover:border-white/40 hover:text-white transition-all duration-300"
                >
                  Maybe Later
                </button>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}