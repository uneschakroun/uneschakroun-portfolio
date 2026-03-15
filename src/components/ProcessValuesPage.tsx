import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Target, Users, Globe, DollarSign, Calendar, Clock } from 'lucide-react';
import { useState } from 'react';

interface ProcessValuesPageProps {
  onBack: () => void;
  onNavigateToContact?: () => void;
}

const howItWorksSteps = [
  {
    number: '1',
    title: 'Monthly Planning',
    description: 'We meet monthly to discuss goals, upcoming projects, and budget.',
  },
  {
    number: '2',
    title: 'Project Scope & Pricing',
    description: 'Each project is scoped and priced individually based on complexity.',
  },
  {
    number: '3',
    title: 'Design & Delivery',
    description: 'I work on your projects with regular updates and deliver high-quality results on time.',
  },
  {
    number: '4',
    title: 'Flexible Continuation',
    description: 'Continue, pause, or adjust the partnership anytime based on your needs.',
  }
];

const services = [
  { title: 'Brand Identity Design', icon: Sparkles },
  { title: 'Logo & Visual Systems', icon: Target },
  { title: 'Social Media Content', icon: Users },
  { title: 'Marketing Materials', icon: Globe },
];

const pricingDetails = [
  { label: 'Payment Mode', value: 'Per Project', icon: DollarSign },
  { label: 'Billing Cycle', value: 'Monthly Discussion', icon: Calendar },
  { label: 'Contract Duration', value: 'Flexible / No Minimum', icon: Clock }
];

export function ProcessValuesPage({ onBack, onNavigateToContact }: ProcessValuesPageProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-16 pb-12 sm:pt-20 sm:pb-32"
    >
      {/* Header */}
      <div className="container mx-auto max-w-7xl px-5 sm:px-6 py-6 sm:py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 sm:gap-3 text-white/60 hover:text-[#c1ff72] transition-colors mb-8 sm:mb-12 group min-h-[44px]"
        >
          <ArrowLeft className="w-5 h-5 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-wider text-xs sm:text-base">Back to Home</span>
        </button>

        {/* Hero Section */}
        <div className="mb-16 sm:mb-32 mt-6 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-6">
              <span className="text-[10px] sm:text-sm text-white/40 font-bold uppercase tracking-[0.3em]">
                01
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>
            <h1 className="text-[28px] leading-[1.1] sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-3 sm:mb-6 uppercase">
              Freelance Design Services
            </h1>
            <p className="text-[15px] leading-[1.5] sm:text-base md:text-lg lg:text-xl text-white/60 max-w-3xl">
              Project-based creative collaboration with flexible terms
            </p>
          </motion.div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto max-w-7xl px-5 sm:px-6 mb-16 sm:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-[22px] sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 sm:mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {howItWorksSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative border border-white/10 p-5 sm:p-8 hover:border-[#c1ff72]/50 transition-all duration-300 group"
              >
                <motion.div
                  className="absolute inset-0 bg-[#c1ff72]/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5 sm:mb-6">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 border-2 border-[#c1ff72]/30 flex items-center justify-center group-hover:border-[#c1ff72] transition-colors duration-300">
                      <span className="text-[26px] sm:text-3xl font-bold text-[#c1ff72]">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-[17px] leading-[1.3] sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-[#c1ff72] transition-colors duration-300 uppercase">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] sm:text-base text-white/60">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Services */}
      <div className="container mx-auto max-w-7xl px-5 sm:px-6 mb-16 sm:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-[22px] sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 sm:mb-12">
            Services Offered
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.05 }}
                  className="border border-white/10 p-5 sm:p-8 hover:border-[#c1ff72]/50 transition-all duration-300 group"
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white/40 mb-3 sm:mb-4 group-hover:text-[#c1ff72] transition-colors duration-300" />
                  <p className="text-[15px] leading-[1.4] sm:text-lg font-bold uppercase group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Pricing Structure */}
      <div className="container mx-auto max-w-7xl px-5 sm:px-6 mb-16 sm:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-[22px] sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 sm:mb-12">
            Pricing Structure
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {pricingDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="border border-white/10 p-5 sm:p-8 hover:border-[#c1ff72]/50 transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white/40 mb-3 sm:mb-4 group-hover:text-[#c1ff72] transition-colors duration-300" />
                  <div className="text-[11px] sm:text-sm text-white/40 uppercase tracking-wider mb-2 font-bold">
                    {detail.label}
                  </div>
                  <div className="text-[16px] leading-[1.3] sm:text-xl font-bold">{detail.value}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="border border-white/10 p-6 sm:p-12 md:p-16 text-center hover:border-[#c1ff72]/50 transition-all duration-300"
        >
          <h3 className="text-[24px] leading-[1.2] sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-6 uppercase">
            Ready to Start?
          </h3>
          <p className="text-[13px] leading-[1.5] sm:text-base text-white/60 mb-6 sm:mb-8 uppercase tracking-wide max-w-2xl mx-auto">
            Let's create something extraordinary together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNavigateToContact}
            className="w-full sm:w-auto px-8 sm:px-8 py-4 sm:py-4 border-2 border-[#c1ff72] text-[#c1ff72] font-bold uppercase tracking-wider hover:bg-[#c1ff72] hover:text-black transition-all duration-300 text-[14px] sm:text-base min-h-[52px]"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}