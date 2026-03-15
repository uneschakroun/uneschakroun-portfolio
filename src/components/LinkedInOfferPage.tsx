import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, Sparkles, TrendingUp, Users, Palette, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

interface LinkedInOfferPageProps {
  onBack?: () => void;
}

const servicePackages = [
  {
    icon: Sparkles,
    title: 'The Profile Flip',
    description: 'Transform your LinkedIn presence into a conversion machine',
    deliverables: [
      'Headline optimization for maximum impact',
      'Custom 1584×396 banner art design',
      'High-conversion "Featured" section setup',
      'Profile strategy consultation'
    ],
    highlight: 'First Impression'
  },
  {
    icon: TrendingUp,
    title: 'Authority Content',
    description: 'Establish yourself as a thought leader in your industry',
    deliverables: [
      '4-8 high-impact thought leadership posts',
      'Professional carousel designs',
      'Engaging poster templates',
      'Content strategy & planning'
    ],
    highlight: 'Monthly Package'
  },
  {
    icon: Users,
    title: 'The Ghostwriter + Designer',
    description: 'Full-service LinkedIn growth while you focus on your business',
    deliverables: [
      'Complete account management',
      'Content strategy & creation',
      'Network engagement & growth',
      'Performance analytics & optimization'
    ],
    highlight: 'Done-For-You'
  },
  {
    icon: Palette,
    title: 'Visual Branding Kit',
    description: 'Stand out with a cohesive, recognizable brand identity',
    deliverables: [
      'Exclusive typography system',
      'Custom color palette',
      'Branded post templates',
      'Design guidelines & assets'
    ],
    highlight: 'Brand Recognition'
  }
];

export function LinkedInOfferPage({ onBack }: LinkedInOfferPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  // Scroll-based horizontal movement for image rows
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const images = {
    row1: [
      "https://images.unsplash.com/photo-1670851050245-d861fd433d06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg0MDMwODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW5rZWRpbiUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3Njg1MTA1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1571973947322-612e31b82c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYXB0b3AlMjBkZXNrfGVufDF8fHx8MTc2ODQ1MDEyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1758691737543-09a1b2b715fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWV0aW5nJTIwdGVhbXxlbnwxfHx8fDE3Njg1MTA1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    row2: [
      "https://images.unsplash.com/photo-1570215171323-4ec328f3f5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbiUyMHR5cGluZ3xlbnwxfHx8fDE3Njg1MTA1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1682336869523-2c6859f781cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2ODQ4ODg2NXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG9mZmljZSUyMGRlc2lnbnxlbnwxfHx8fDE3Njg0Njk5NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1562228802-4b1052d0f845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODQ3NDQ3OHww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    row3: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMHdvcmtpbmd8ZW58MXx8fHwxNzM2OTY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdGVhbXxlbnwxfHx8fDE3MzY5NjgwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3MzY5NjgwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzM2OTY4MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ]
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-32"
    >
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Hero Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-28">
          <motion.div
            style={{ opacity, scale }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="border border-white/10 p-6 sm:p-10 md:p-16 lg:p-20 xl:p-24"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <div className="h-[1px] sm:h-[2px] w-12 sm:w-16 md:w-20 bg-[#c1ff72]"></div>
              <span className="text-[10px] sm:text-xs md:text-sm text-white/40 uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold">LinkedIn Services</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-6 sm:mb-8 md:mb-10 uppercase leading-[0.9] sm:leading-[0.95]"
            >
              The Freedom to Lead<br />
              While You Live
            </motion.h1>
            
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 sm:gap-8 lg:gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex-1"
              >
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#c1ff72] uppercase tracking-tight leading-[1.1] mb-4 sm:mb-6">
                  Stand Out. Get Noticed. Close Deals.
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/50 max-w-2xl leading-relaxed">
                  Professional LinkedIn services designed to transform your profile into a powerful business asset
                </p>
              </motion.div>
              
              {/* CTA Button */}
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                href="https://forms.gle/mqtH6UiuaaRMamyq8"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 sm:gap-4 border border-[#c1ff72] bg-[#c1ff72]/10 px-6 sm:px-8 py-4 sm:py-5 md:py-6 hover:bg-[#c1ff72]/20 transition-all duration-300 active:scale-[0.98] self-start min-h-[56px]"
              >
                <div className="flex-1">
                  <div className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-tight text-[#c1ff72]">
                    Get Started
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wide">
                    Request a quote
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#c1ff72] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll-Interactive Image Gallery */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-28 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            {/* First Row - Moves Left on Scroll Down */}
            <motion.div 
              style={{ x: x1 }}
              className="flex gap-4 sm:gap-6 md:gap-8"
            >
              {images.row1.map((img, idx) => (
                <motion.div
                  key={`row1-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[440px] aspect-square overflow-hidden border border-white/10"
                >
                  <img
                    src={img}
                    alt={`Professional workspace ${idx + 1}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#c1ff72]/0 hover:bg-[#c1ff72]/10 transition-all duration-500"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Second Row - Moves Right on Scroll Down */}
            <motion.div 
              style={{ x: x2 }}
              className="flex gap-4 sm:gap-6 md:gap-8"
            >
              {images.row2.map((img, idx) => (
                <motion.div
                  key={`row2-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[440px] aspect-square overflow-hidden border border-white/10"
                >
                  <img
                    src={img}
                    alt={`Professional workspace ${idx + 5}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#c1ff72]/0 hover:bg-[#c1ff72]/10 transition-all duration-500"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Third Row - Moves Left on Scroll Down */}
            <motion.div 
              style={{ x: x3 }}
              className="flex gap-4 sm:gap-6 md:gap-8"
            >
              {images.row3.map((img, idx) => (
                <motion.div
                  key={`row3-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[440px] aspect-square overflow-hidden border border-white/10"
                >
                  <img
                    src={img}
                    alt={`Professional workspace ${idx + 9}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#c1ff72]/0 hover:bg-[#c1ff72]/10 transition-all duration-500"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Case Studies Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-[1px] sm:h-[2px] w-8 sm:w-10 md:w-12 bg-[#c1ff72]"></div>
              <span className="text-[10px] sm:text-xs md:text-sm text-white/40 uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold">Case Studies</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Case Study 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="border border-white/10 p-6 sm:p-8 hover:border-[#c1ff72]/30 transition-all duration-300 group"
            >
              <div className="mb-4 sm:mb-6">
                <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.3em] font-bold">Tech Founder</span>
              </div>
              <div className="mb-4 sm:mb-6">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#c1ff72] mb-2">+340%</div>
                <p className="text-xs sm:text-sm text-white/50">Profile views in 60 days</p>
              </div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Complete profile redesign with strategic content led to 12 qualified leads and 3 partnership deals.
              </p>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="border border-white/10 p-6 sm:p-8 hover:border-[#c1ff72]/30 transition-all duration-300 group"
            >
              <div className="mb-4 sm:mb-6">
                <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.3em] font-bold">Design Agency</span>
              </div>
              <div className="mb-4 sm:mb-6">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#c1ff72] mb-2">25K+</div>
                <p className="text-xs sm:text-sm text-white/50">Impressions per post</p>
              </div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Branded content system with consistent posting schedule established authority in MENA design community.
              </p>
            </motion.div>

            {/* Case Study 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="border border-white/10 p-6 sm:p-8 hover:border-[#c1ff72]/30 transition-all duration-300 group"
            >
              <div className="mb-4 sm:mb-6">
                <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.3em] font-bold">Business Consultant</span>
              </div>
              <div className="mb-4 sm:mb-6">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#c1ff72] mb-2">8</div>
                <p className="text-xs sm:text-sm text-white/50">High-value clients in 3 months</p>
              </div>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Ghostwriting service with thought leadership content positioned client as go-to expert in their field.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Service Packages Grid */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-[1px] sm:h-[2px] w-8 sm:w-10 md:w-12 bg-[#c1ff72]"></div>
              <span className="text-[10px] sm:text-xs md:text-sm text-white/40 uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold">Service Packages</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {servicePackages.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: index * 0.15,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group relative border border-white/10 p-6 sm:p-8 md:p-10 lg:p-12 hover:border-[#c1ff72]/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[#c1ff72]/0 group-hover:bg-[#c1ff72]/5 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6 sm:mb-8">
                      <div className="flex-1">
                        <span className="inline-block text-[10px] sm:text-xs text-black font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-3 sm:mb-4 bg-[#c1ff72] px-2 sm:px-3 py-1">
                          {service.highlight}
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-tight mb-3 sm:mb-4 group-hover:text-[#c1ff72] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-white/50 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border border-white/20 flex items-center justify-center group-hover:border-[#c1ff72] transition-all duration-300 ml-3 sm:ml-4 shrink-0">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white/40 group-hover:text-[#c1ff72] transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-3 sm:space-y-4">
                      <div className="h-[1px] w-full bg-white/10 mb-4 sm:mb-6"></div>
                      <span className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold">The Deliverables</span>
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 sm:gap-4">
                          <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 border border-[#c1ff72]/50 shrink-0 mt-0.5">
                            <span className="text-[10px] sm:text-xs font-bold text-[#c1ff72]">{idx + 1}</span>
                          </div>
                          <span className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="border border-white/10 p-8 sm:p-12 md:p-16 lg:p-20 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase mb-4 sm:mb-6 leading-tight">
            Ready to Transform<br />Your LinkedIn Presence?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/50 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Let's discuss which package fits your goals and get you started on your LinkedIn growth journey
          </p>
          <a
            href="https://forms.gle/mqtH6UiuaaRMamyq8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 sm:gap-4 border-2 border-[#c1ff72] bg-[#c1ff72]/10 px-8 sm:px-10 py-4 sm:py-5 hover:bg-[#c1ff72]/20 transition-all duration-300 active:scale-[0.98] group min-h-[56px]"
          >
            <span className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#c1ff72]">
              Request Custom Proposal
            </span>
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#c1ff72] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}