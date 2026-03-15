import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Globe, Award, Lightbulb, Target, Zap, Rocket } from 'lucide-react';

interface M00StudioPageProps {
  onBack: () => void;
}

export function M00StudioPage({ onBack }: M00StudioPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={onBack}
          className="group flex items-center gap-2 text-white/40 hover:text-[#c1ff72] transition-colors duration-300 mb-12 sm:mb-16"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="text-sm uppercase tracking-wider font-medium">Back to Home</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16 sm:mb-24"
        >
          <div className="flex items-baseline gap-4 sm:gap-6 mb-4 sm:mb-6">
            <span className="text-sm sm:text-base text-white/30 font-bold tracking-wider">00</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight">
              M 00 Studio
            </h1>
          </div>
          <div className="border-l-2 border-[#c1ff72] pl-6 sm:pl-8 ml-12 sm:ml-16">
            <p className="text-sm sm:text-base md:text-lg text-white/40 uppercase tracking-wide">
              About us & our mission
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="border-l-2 border-[#c1ff72] pl-6 sm:pl-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 sm:mb-8">
              Our Story
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 uppercase tracking-wide leading-relaxed mb-4">
              Founded by Creative Executive <span className="text-[#c1ff72] font-bold">Younes Chakroun</span>, bringing international expertise from KSA and UAE markets to deliver world-class creative solutions globally.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/60 uppercase tracking-wide leading-relaxed">
              The name <span className="text-[#c1ff72] font-bold">"M 00"</span> represents ground zero—a reset, a new beginning. It's where innovation starts, where creative processes are reimagined, and where excellence becomes the standard.
            </p>
          </motion.div>

          {/* Key Points Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {/* International Expertise */}
            <div className="border border-white/10 p-6 sm:p-8 hover:border-[#c1ff72]/50 transition-all duration-300">
              <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-[#c1ff72] mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight mb-3 sm:mb-4">
                Global Reach
              </h3>
              <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wide leading-relaxed">
                Experience from KSA and UAE markets
              </p>
            </div>

            {/* Zero Point Philosophy */}
            <div className="border border-white/10 p-6 sm:p-8 hover:border-[#c1ff72]/50 transition-all duration-300">
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-[#c1ff72] mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight mb-3 sm:mb-4">
                Zero Point Philosophy
              </h3>
              <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wide leading-relaxed">
                Every project starts from ground zero
              </p>
            </div>

            {/* Creative Excellence */}
            <div className="border border-white/10 p-6 sm:p-8 hover:border-[#c1ff72]/50 transition-all duration-300">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#c1ff72] mb-4 sm:mb-6" />
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight mb-3 sm:mb-4">
                Creative Excellence
              </h3>
              <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wide leading-relaxed">
                World-class design and branding
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="border-t border-white/10 pt-12 sm:pt-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 sm:mb-8">
              Our Vision
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 uppercase tracking-wide leading-relaxed max-w-3xl">
              To deliver premium design and creative services globally, combining international standards with fresh perspectives. We start every project from zero—with no assumptions, no limits, only possibilities.
            </p>
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="border-t border-white/10 pt-12 sm:pt-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4 sm:mb-6">
              Our Process
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 uppercase tracking-wide leading-relaxed mb-12 sm:mb-16">
              Four phases. Maximum impact.
            </p>

            {/* Process Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Phase 01 - Discovery */}
              <div className="border border-white/10 p-6 sm:p-8 hover:border-[#c1ff72]/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 border border-white/20 flex items-center justify-center group-hover:border-[#c1ff72] transition-colors duration-300">
                    <Lightbulb className="w-6 h-6 text-white/60 group-hover:text-[#c1ff72] transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <span className="text-5xl sm:text-6xl font-bold text-white/5 group-hover:text-[#c1ff72]/20 transition-colors duration-300">
                    01
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase mb-3 sm:mb-4 group-hover:text-[#c1ff72] transition-colors duration-300">
                  Discovery
                </h3>
                <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wide leading-relaxed">
                  Research your brand DNA and identify opportunities.
                </p>
              </div>

              {/* Phase 02 - Strategy */}
              <div className="border border-white/10 p-6 sm:p-8 hover:border-[#c1ff72]/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 border border-white/20 flex items-center justify-center group-hover:border-[#c1ff72] transition-colors duration-300">
                    <Target className="w-6 h-6 text-white/60 group-hover:text-[#c1ff72] transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <span className="text-5xl sm:text-6xl font-bold text-white/5 group-hover:text-[#c1ff72]/20 transition-colors duration-300">
                    02
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase mb-3 sm:mb-4 group-hover:text-[#c1ff72] transition-colors duration-300">
                  Strategy
                </h3>
                <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wide leading-relaxed">
                  Create actionable roadmap with clear objectives.
                </p>
              </div>

              {/* Phase 03 - Execution */}
              <div className="border border-white/10 p-6 sm:p-8 hover:border-[#c1ff72]/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 border border-white/20 flex items-center justify-center group-hover:border-[#c1ff72] transition-colors duration-300">
                    <Zap className="w-6 h-6 text-white/60 group-hover:text-[#c1ff72] transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <span className="text-5xl sm:text-6xl font-bold text-white/5 group-hover:text-[#c1ff72]/20 transition-colors duration-300">
                    03
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase mb-3 sm:mb-4 group-hover:text-[#c1ff72] transition-colors duration-300">
                  Execution
                </h3>
                <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wide leading-relaxed">
                  Design with precision for maximum impact.
                </p>
              </div>

              {/* Phase 04 - Launch */}
              <div className="border border-white/10 p-6 sm:p-8 hover:border-[#c1ff72]/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 border border-white/20 flex items-center justify-center group-hover:border-[#c1ff72] transition-colors duration-300">
                    <Rocket className="w-6 h-6 text-white/60 group-hover:text-[#c1ff72] transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <span className="text-5xl sm:text-6xl font-bold text-white/5 group-hover:text-[#c1ff72]/20 transition-colors duration-300">
                    04
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase mb-3 sm:mb-4 group-hover:text-[#c1ff72] transition-colors duration-300">
                  Launch
                </h3>
                <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wide leading-relaxed">
                  Deploy seamlessly with ongoing optimization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}