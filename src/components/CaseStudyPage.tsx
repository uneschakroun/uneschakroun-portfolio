import { motion } from 'motion/react';
import { ArrowUpRight, Play, ExternalLink } from 'lucide-react';
import { GlitchText } from './GlitchText';
import artRevoImage from 'figma:asset/56bcda8c22d8322fce62b9f4e84f240aee9309e6.png';
import base39Image from 'figma:asset/e013c937b6ed02e6b798e44d2cfacb342a304f3c.png';
import asoImage from 'figma:asset/8729a78c210ddc92a48825d48de5e819924a6bc0.png';
import oudloverImage from 'figma:asset/2c0fee2c268a2c8dad227990f79750c975e64518.png';
import nuaImage from 'figma:asset/3f7f8e75eb30d72bae25f1b0f35471d18ece2bb4.png';

interface CaseStudyPageProps {
  onBack: () => void;
  onProjectClick: (projectId: string) => void;
}

const caseStudies = [
  {
    id: 'base39-case-study',
    title: 'Base39',
    subtitle: 'Creative District',
    year: '2025',
    category: 'Brand Identity',
    description: 'Modern brand identity for a creative district, blending urban culture with artistic innovation.',
    image: base39Image,
    metrics: [
      { label: 'Brand Elements', value: '50+' },
      { label: 'Touchpoints', value: '15+' },
      { label: 'Deliverables', value: '80+' }
    ],
    tags: ['Branding', 'Art Direction', 'Visual Identity']
  },
  {
    id: 'oudlover-case-study',
    title: 'Oudlover',
    subtitle: 'Luxury Fragrance Brand',
    year: '2024',
    category: 'Brand Identity',
    description: 'Sophisticated brand identity for a luxury oud fragrance brand, merging tradition with modern aesthetics.',
    image: oudloverImage,
    metrics: [
      { label: 'Brand Assets', value: '40+' },
      { label: 'Packaging Designs', value: '8' },
      { label: 'Launch Success', value: '100%' }
    ],
    tags: ['Luxury Branding', 'Packaging', 'Visual Identity']
  }
];

export function CaseStudyPage({ onBack, onProjectClick }: CaseStudyPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-24 sm:pt-28 pb-16 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 sm:mb-16"
        >
          <div className="border border-white/10 p-6 sm:p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 sm:w-16 bg-[#c1ff72]"></div>
              <span className="text-xs sm:text-sm text-white/40 uppercase tracking-[0.3em] font-bold">Portfolio Showreel</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 uppercase leading-[1.1]">
              <GlitchText>Case Study</GlitchText><br />
              <span className="text-[#c1ff72] text-lg sm:text-3xl md:text-4xl lg:text-5xl">Showreel</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-3xl uppercase tracking-wide leading-relaxed mb-6">
              Explore my recent projects across branding, digital design, and creative strategy for clients in Morocco, KSA, and UAE.
            </p>
            
            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#c1ff72] mb-1">2</div>
                <div className="text-xs text-white/40 uppercase tracking-wide">Case Studies</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#c1ff72] mb-1">15+</div>
                <div className="text-xs text-white/40 uppercase tracking-wide">Clients</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#c1ff72] mb-1">3</div>
                <div className="text-xs text-white/40 uppercase tracking-wide">Markets</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#c1ff72] mb-1">100%</div>
                <div className="text-xs text-white/40 uppercase tracking-wide">Success Rate</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-12 sm:space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              onClick={() => onProjectClick(study.id)}
              className="group cursor-pointer"
            >
              <div className="border border-white/10 hover:border-[#c1ff72]/50 transition-all duration-300">
                
                {/* Image Section */}
                <div className="relative overflow-hidden bg-zinc-900">
                  <div className="aspect-[16/9]">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-[#c1ff72] bg-[#c1ff72]/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#c1ff72] fill-[#c1ff72]" />
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 border border-white/20">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/60">{study.year}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  
                  {/* Title & Category */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-[#c1ff72] font-bold uppercase tracking-[0.3em]">
                        {study.category}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-2 group-hover:text-[#c1ff72] transition-colors duration-300">
                      {study.title}
                    </h2>
                    <p className="text-base sm:text-lg text-white/60 uppercase">
                      {study.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/50 leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/10">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <div className="text-lg sm:text-xl font-bold text-[#c1ff72] mb-1">{metric.value}</div>
                        <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wide">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 border border-white/20 text-xs font-bold uppercase tracking-wide text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-white/40">
                      View Full Case Study
                    </span>
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#c1ff72] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={onBack}
          className="group mt-12 sm:mt-16 flex items-center gap-3 text-sm sm:text-base font-bold uppercase tracking-wide text-white/60 hover:text-[#c1ff72] transition-colors duration-300"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 border border-white/20 group-hover:border-[#c1ff72] flex items-center justify-center transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
          </div>
          <span>Back to Home</span>
        </motion.button>
      </div>
    </motion.div>
  );
}