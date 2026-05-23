import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export function PopupTimer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 40 * 1000); // 40 Seconds flat
    return () => clearTimeout(timer);
  }, []);

  const handleCollaborate = () => {
    setVisible(false);
    window.open(
      'https://api.whatsapp.com/send/?phone=212707227263&text=Hello%21+I%27d+like+to+discuss+a+project.&type=phone_number&app_absent=0',
      '_blank'
    );
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

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center sm:px-4"
          >
            {/* Box responsive logic: full width on mobile, max-w-lg on desktop */}
            <div className="w-full h-full sm:h-auto sm:max-w-lg bg-black border-y sm:border border-white/10 p-8 sm:p-12 relative flex flex-col justify-center sm:block">

              {/* Close Button */}
              <button
                onClick={() => setVisible(false)}
                className="absolute top-6 right-6 sm:top-4 sm:right-4 text-white/30 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Green Line Indicator */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-12 bg-[#c1ff72]"></div>
                <span className="text-xs text-[#c1ff72] uppercase tracking-[0.3em] font-bold">
                  1 Minute Passed
                </span>
              </div>

              {/* Title Section */}
              <h2 className="text-2xl sm:text-3xl font-bold uppercase leading-tight mb-6">
                I promised to save<br />
                <span className="text-[#c1ff72]">your time,</span><br />
                and I keep my word.
              </h2>

              {/* Body Text */}
              <p className="text-sm text-white/50 uppercase tracking-wide leading-relaxed mb-10">
                By now, you've seen how I translate design strategy across Europe and the GCC.
              </p>

              {/* Structural Divider */}
              <div className="h-[1px] w-full bg-white/10 mb-8"></div>

              <p className="text-xs text-white/30 uppercase tracking-[0.3em] font-bold mb-6">
                What's next?
              </p>

              {/* Action Suite */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Collaborate: Inverts to black background with custom green border outline on hover */}
                <button
                  onClick={handleCollaborate}
                  className="flex-1 bg-[#c1ff72] text-black font-bold text-sm uppercase tracking-[0.3em] py-4 px-6 border border-transparent hover:bg-black hover:text-[#c1ff72] hover:border-[#c1ff72] transition-all duration-300"
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