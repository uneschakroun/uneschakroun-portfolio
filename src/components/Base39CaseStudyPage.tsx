import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, MapPin, Users, Target, Lightbulb, Rocket, CheckCircle2 } from 'lucide-react';
import { GlitchText } from './GlitchText';
import base39Cover from 'figma:asset/e013c937b6ed02e6b798e44d2cfacb342a304f3c.png';
import base39Image1 from 'figma:asset/5ce88c7c0f71c57a7d8dc7be7fea96f30e6f5faa.png';
import base39Image2 from 'figma:asset/24f16ee903fb0b6ad13e6f603ac3a3502d0a2b5e.png';
import base39Image3 from 'figma:asset/0970d6fb025c0ad80fcf1ffdaec4a90bf43e7b10.png';
import base39Image4 from 'figma:asset/f40e50c1d10abe8ec54ea5c651d3b30aa6bc6f05.png';

interface Base39CaseStudyPageProps {
  onBack: () => void;
}

export function Base39CaseStudyPage({ onBack }: Base39CaseStudyPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-24 sm:pt-28 pb-16 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* Hero Cover Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 sm:mb-16"
        >
          <div className="relative overflow-hidden border border-white/10">
            <div className="aspect-[21/9]">
              <img
                src={base39Cover}
                alt="Base39 Cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            
            {/* Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-12 sm:w-16 bg-[#c1ff72]"></div>
                <span className="text-xs sm:text-sm text-white/60 uppercase tracking-[0.3em] font-bold">Case Study</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 uppercase leading-[1.1]">
                <GlitchText>Base39</GlitchText>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#c1ff72] uppercase tracking-wide">
                Creative District Brand Identity
              </p>
            </div>
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-12 sm:mb-16"
        >
          {/* Project Info */}
          <div className="border border-white/10 p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold uppercase mb-6 text-[#c1ff72]">Project Info</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Calendar className="w-5 h-5 text-[#c1ff72] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-wide mb-1">Timeline</div>
                  <div className="text-base font-bold uppercase">2025 - 8 Weeks</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#c1ff72] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-wide mb-1">Location</div>
                  <div className="text-base font-bold uppercase">UAE</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-5 h-5 text-[#c1ff72] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-wide mb-1">Role</div>
                  <div className="text-base font-bold uppercase">Lead Brand Designer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="border border-white/10 p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold uppercase mb-6 text-[#c1ff72]">Key Deliverables</h2>
            <div className="space-y-3">
              {[
                'Brand Identity System',
                'Logo & Visual Identity',
                'Brand Guidelines (80+ Pages)',
                'Marketing Collateral',
                'Environmental Graphics',
                'Digital Assets & Templates',
                'Social Media System'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#c1ff72] flex-shrink-0" />
                  <span className="text-sm uppercase tracking-wide text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="border border-white/10 p-6 sm:p-8 md:p-12 mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <Target className="w-8 h-8 text-[#c1ff72]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#c1ff72]">The Problem</h2>
          </div>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
            Base39 is a new creative district designed to bring together artists, designers, entrepreneurs, and innovators in the UAE. The challenge was to create a brand identity that would:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border-l-2 border-[#c1ff72] pl-4">
              <h3 className="text-base font-bold uppercase mb-2 text-white/90">Brand Challenge</h3>
              <p className="text-sm text-white/60">Establish a unique identity in a competitive creative market</p>
            </div>
            <div className="border-l-2 border-[#c1ff72] pl-4">
              <h3 className="text-base font-bold uppercase mb-2 text-white/90">Audience Challenge</h3>
              <p className="text-sm text-white/60">Appeal to diverse creative communities and businesses</p>
            </div>
            <div className="border-l-2 border-[#c1ff72] pl-4">
              <h3 className="text-base font-bold uppercase mb-2 text-white/90">Visual Challenge</h3>
              <p className="text-sm text-white/60">Balance urban edge with artistic sophistication</p>
            </div>
            <div className="border-l-2 border-[#c1ff72] pl-4">
              <h3 className="text-base font-bold uppercase mb-2 text-white/90">System Challenge</h3>
              <p className="text-sm text-white/60">Create flexible assets for multiple touchpoints</p>
            </div>
          </div>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="border border-white/10 p-6 sm:p-8 md:p-12 mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <Lightbulb className="w-8 h-8 text-[#c1ff72]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#c1ff72]">The Solution</h2>
          </div>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8">
            We developed a comprehensive brand identity that merges industrial architecture with creative energy. The visual system draws inspiration from urban grid systems, architectural blueprints, and the dynamic intersection of creative disciplines.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-white/10 p-6">
              <div className="text-3xl font-bold text-[#c1ff72] mb-3">01</div>
              <h3 className="text-lg font-bold uppercase mb-3">Bold Typography</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                A custom typographic system that reflects the intersection of structure and creativity
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <div className="text-3xl font-bold text-[#c1ff72] mb-3">02</div>
              <h3 className="text-lg font-bold uppercase mb-3">Modular Grid</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                A flexible grid system inspired by architectural plans and urban layouts
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <div className="text-3xl font-bold text-[#c1ff72] mb-3">03</div>
              <h3 className="text-lg font-bold uppercase mb-3">Dynamic Color</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                A vibrant palette that reflects the diverse creative community
              </p>
            </div>
          </div>
        </motion.div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="border border-white/10 p-6 sm:p-8 md:p-12 mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <Rocket className="w-8 h-8 text-[#c1ff72]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-[#c1ff72]">Methodology</h2>
          </div>
          
          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="border-l-4 border-[#c1ff72] pl-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#c1ff72] text-black font-bold px-3 py-1 text-sm uppercase">Phase 01</div>
                <h3 className="text-xl font-bold uppercase">Research & Discovery</h3>
              </div>
              <p className="text-white/60 mb-4">
                Conducted market analysis, competitor research, and stakeholder interviews to understand the creative district landscape in the UAE.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Market Analysis</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">User Research</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Brand Audit</span>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="border-l-4 border-[#c1ff72] pl-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#c1ff72] text-black font-bold px-3 py-1 text-sm uppercase">Phase 02</div>
                <h3 className="text-xl font-bold uppercase">Strategy & Concept</h3>
              </div>
              <p className="text-white/60 mb-4">
                Developed brand positioning, values, and visual direction based on the concept of "creative intersection" and urban innovation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Brand Strategy</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Mood Boards</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Concept Development</span>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="border-l-4 border-[#c1ff72] pl-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#c1ff72] text-black font-bold px-3 py-1 text-sm uppercase">Phase 03</div>
                <h3 className="text-xl font-bold uppercase">Design & Development</h3>
              </div>
              <p className="text-white/60 mb-4">
                Created comprehensive brand assets including logo variations, typography system, color palette, and application guidelines.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Logo Design</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Visual Identity</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Brand Guidelines</span>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="border-l-4 border-[#c1ff72] pl-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#c1ff72] text-black font-bold px-3 py-1 text-sm uppercase">Phase 04</div>
                <h3 className="text-xl font-bold uppercase">Implementation & Launch</h3>
              </div>
              <p className="text-white/60 mb-4">
                Rolled out brand assets across digital and physical touchpoints, including signage, marketing materials, and social media.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Asset Production</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Launch Campaign</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Brand Training</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-8 text-[#c1ff72]">Visual Identity</h2>
          
          <div className="grid gap-6">
            {/* Large Image */}
            <div className="border border-white/10 overflow-hidden">
              <img
                src={base39Image1}
                alt="Base39 Brand Identity"
                className="w-full h-auto"
              />
            </div>

            {/* Two Column Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-white/10 overflow-hidden">
                <img
                  src={base39Image2}
                  alt="Base39 Applications"
                  className="w-full h-auto"
                />
              </div>
              <div className="border border-white/10 overflow-hidden">
                <img
                  src={base39Image3}
                  alt="Base39 Collateral"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Full Width */}
            <div className="border border-white/10 overflow-hidden">
              <img
                src={base39Image4}
                alt="Base39 Environmental"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Results & Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="border border-white/10 p-6 sm:p-8 md:p-12 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-8 text-[#c1ff72]">Results & Impact</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="text-center border border-white/10 p-6">
              <div className="text-4xl sm:text-5xl font-bold text-[#c1ff72] mb-2">50+</div>
              <div className="text-sm text-white/60 uppercase tracking-wide">Brand Elements</div>
            </div>
            <div className="text-center border border-white/10 p-6">
              <div className="text-4xl sm:text-5xl font-bold text-[#c1ff72] mb-2">15+</div>
              <div className="text-sm text-white/60 uppercase tracking-wide">Touchpoints</div>
            </div>
            <div className="text-center border border-white/10 p-6">
              <div className="text-4xl sm:text-5xl font-bold text-[#c1ff72] mb-2">80+</div>
              <div className="text-sm text-white/60 uppercase tracking-wide">Deliverables</div>
            </div>
            <div className="text-center border border-white/10 p-6">
              <div className="text-4xl sm:text-5xl font-bold text-[#c1ff72] mb-2">100%</div>
              <div className="text-sm text-white/60 uppercase tracking-wide">Client Satisfaction</div>
            </div>
          </div>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            The Base39 brand identity successfully positioned the creative district as a premier destination for artists and innovators in the UAE. The flexible visual system allows for consistent brand expression across diverse applications while maintaining a distinctive, memorable presence.
          </p>
        </motion.div>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={onBack}
          className="group flex items-center gap-3 text-sm sm:text-base font-bold uppercase tracking-wide text-white/60 hover:text-[#c1ff72] transition-colors duration-300"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 border border-white/20 group-hover:border-[#c1ff72] flex items-center justify-center transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
          </div>
          <span>Back to Case Studies</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
