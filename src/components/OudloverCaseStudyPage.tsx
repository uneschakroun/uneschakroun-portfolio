import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, MapPin, Users, Target, Lightbulb, Rocket, CheckCircle2 } from 'lucide-react';
import { GlitchText } from './GlitchText';
import oudloverCover from 'figma:asset/2c0fee2c268a2c8dad227990f79750c975e64518.png';
import oudloverImage1 from 'figma:asset/88976e4e23c04baaecf8f9acdeb88e2cfde6a92f.png';
import oudloverImage2 from 'figma:asset/ac29f2a87dd81de8cba24c63e0e89f30bc3ca5a3.png';
import oudloverImage3 from 'figma:asset/31e870f3d19b7e49e4d13ec87fa5fdbbb9fa38ab.png';
import oudloverImage4 from 'figma:asset/8e89f7c75c3a04e6154d78b17c7e6dbcd5c8b0d7.png';

interface OudloverCaseStudyPageProps {
  onBack: () => void;
}

export function OudloverCaseStudyPage({ onBack }: OudloverCaseStudyPageProps) {
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
                src={oudloverCover}
                alt="Oudlover Cover"
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
                <GlitchText>Oudlover</GlitchText>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[#c1ff72] uppercase tracking-wide">
                Luxury Fragrance Brand Identity
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
                  <div className="text-base font-bold uppercase">2024 - 6 Weeks</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#c1ff72] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-wide mb-1">Location</div>
                  <div className="text-base font-bold uppercase">Morocco & KSA</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-5 h-5 text-[#c1ff72] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-sm text-white/40 uppercase tracking-wide mb-1">Role</div>
                  <div className="text-base font-bold uppercase">Lead Brand & Packaging Designer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="border border-white/10 p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold uppercase mb-6 text-[#c1ff72]">Key Deliverables</h2>
            <div className="space-y-3">
              {[
                'Luxury Brand Identity',
                'Logo & Brand Mark',
                'Premium Packaging Design',
                'Brand Guidelines',
                'Product Label System',
                'Marketing Collateral',
                'Social Media Templates',
                'Brand Photography Direction'
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
            Oudlover is a luxury fragrance brand specializing in premium oud-based perfumes targeting high-end customers in Morocco and the Middle East. The challenge was to create a brand identity that would:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border-l-2 border-[#c1ff72] pl-4">
              <h3 className="text-base font-bold uppercase mb-2 text-white/90">Heritage Challenge</h3>
              <p className="text-sm text-white/60">Honor traditional oud culture while appealing to modern luxury consumers</p>
            </div>
            <div className="border-l-2 border-[#c1ff72] pl-4">
              <h3 className="text-base font-bold uppercase mb-2 text-white/90">Market Challenge</h3>
              <p className="text-sm text-white/60">Compete in saturated luxury fragrance market across MENA region</p>
            </div>
            <div className="border-l-2 border-[#c1ff72] pl-4">
              <h3 className="text-base font-bold uppercase mb-2 text-white/90">Design Challenge</h3>
              <p className="text-sm text-white/60">Create sophisticated packaging that reflects premium product quality</p>
            </div>
            <div className="border-l-2 border-[#c1ff72] pl-4">
              <h3 className="text-base font-bold uppercase mb-2 text-white/90">Brand Challenge</h3>
              <p className="text-sm text-white/60">Establish distinctive identity in traditional fragrance industry</p>
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
            We crafted a luxury brand identity that bridges traditional Arabian perfumery with contemporary minimalist aesthetics. The visual language combines elegant typography, gold accents, and refined geometric patterns inspired by Islamic art.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-white/10 p-6">
              <div className="text-3xl font-bold text-[#c1ff72] mb-3">01</div>
              <h3 className="text-lg font-bold uppercase mb-3">Elegant Identity</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                A sophisticated logo and brand mark that reflects luxury, tradition, and timeless elegance
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <div className="text-3xl font-bold text-[#c1ff72] mb-3">02</div>
              <h3 className="text-lg font-bold uppercase mb-3">Premium Packaging</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Luxurious packaging system featuring high-quality materials and refined finishing details
              </p>
            </div>
            <div className="border border-white/10 p-6">
              <div className="text-3xl font-bold text-[#c1ff72] mb-3">03</div>
              <h3 className="text-lg font-bold uppercase mb-3">Cultural Fusion</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Patterns and elements inspired by traditional Islamic geometry with modern minimalism
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
                <h3 className="text-xl font-bold uppercase">Market Research & Discovery</h3>
              </div>
              <p className="text-white/60 mb-4">
                Deep dive into luxury fragrance market, competitor analysis, and cultural research on oud traditions across Morocco and the Middle East.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Market Analysis</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Cultural Research</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Competitor Audit</span>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="border-l-4 border-[#c1ff72] pl-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#c1ff72] text-black font-bold px-3 py-1 text-sm uppercase">Phase 02</div>
                <h3 className="text-xl font-bold uppercase">Brand Strategy & Positioning</h3>
              </div>
              <p className="text-white/60 mb-4">
                Developed brand positioning that positions Oudlover as a bridge between traditional Arabian perfumery and contemporary luxury lifestyle.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Brand Positioning</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Visual Strategy</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Target Audience</span>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="border-l-4 border-[#c1ff72] pl-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#c1ff72] text-black font-bold px-3 py-1 text-sm uppercase">Phase 03</div>
                <h3 className="text-xl font-bold uppercase">Visual Identity Design</h3>
              </div>
              <p className="text-white/60 mb-4">
                Created comprehensive visual identity including logo, typography system, color palette, patterns, and packaging designs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Logo Design</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Packaging Design</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Pattern System</span>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="border-l-4 border-[#c1ff72] pl-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#c1ff72] text-black font-bold px-3 py-1 text-sm uppercase">Phase 04</div>
                <h3 className="text-xl font-bold uppercase">Production & Launch</h3>
              </div>
              <p className="text-white/60 mb-4">
                Production of packaging materials, brand guidelines documentation, and launch campaign materials for Morocco and KSA markets.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Production</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Guidelines</span>
                <span className="text-xs border border-white/20 px-3 py-1 uppercase">Launch Campaign</span>
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
                src={oudloverImage1}
                alt="Oudlover Brand Identity"
                className="w-full h-auto"
              />
            </div>

            {/* Two Column Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-white/10 overflow-hidden">
                <img
                  src={oudloverImage2}
                  alt="Oudlover Packaging"
                  className="w-full h-auto"
                />
              </div>
              <div className="border border-white/10 overflow-hidden">
                <img
                  src={oudloverImage3}
                  alt="Oudlover Details"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Full Width */}
            <div className="border border-white/10 overflow-hidden">
              <img
                src={oudloverImage4}
                alt="Oudlover Applications"
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
              <div className="text-4xl sm:text-5xl font-bold text-[#c1ff72] mb-2">40+</div>
              <div className="text-sm text-white/60 uppercase tracking-wide">Brand Assets</div>
            </div>
            <div className="text-center border border-white/10 p-6">
              <div className="text-4xl sm:text-5xl font-bold text-[#c1ff72] mb-2">8</div>
              <div className="text-sm text-white/60 uppercase tracking-wide">Packaging Designs</div>
            </div>
            <div className="text-center border border-white/10 p-6">
              <div className="text-4xl sm:text-5xl font-bold text-[#c1ff72] mb-2">2</div>
              <div className="text-sm text-white/60 uppercase tracking-wide">Markets</div>
            </div>
            <div className="text-center border border-white/10 p-6">
              <div className="text-4xl sm:text-5xl font-bold text-[#c1ff72] mb-2">100%</div>
              <div className="text-sm text-white/60 uppercase tracking-wide">Launch Success</div>
            </div>
          </div>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            The Oudlover brand identity successfully launched across Morocco and Saudi Arabia, establishing a strong presence in the luxury fragrance market. The sophisticated packaging and cohesive visual system helped position the brand as a premium choice for discerning customers who appreciate both traditional oud culture and contemporary luxury design.
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
