import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import wbImage1 from 'figma:asset/97217800c5dce4b51a0d610d3c228498d466bc62.png';
import { useEffect } from 'react';

interface BrandIdentityPageProps {
  onBack: () => void;
  onProjectClick?: (projectId: string) => void;
}

const projects = [
  {
    id: 'r-plus-plus',
    title: 'R++',
    category: 'Premium Tech Platform',
    year: '2024',
    description: 'Next-generation technology platform brand merging cutting-edge innovation with sophisticated minimalism.',
    image: 'https://images.unsplash.com/photo-1760787545864-b468b6fe2c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBicmFuZGluZ3xlbnwxfHx8fDE3NjQ4MDMzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Brand Identity', 'Digital System', 'Technology'],
    link: 'r-plus-plus'
  },
  {
    id: 'wb-plus',
    title: 'WB+',
    category: 'Complete Brand System',
    year: '2024',
    description: 'Experts in Construction - Building distinctive brand identity for living spaces and sustainable construction.',
    image: wbImage1,
    tags: ['Brand Identity', 'Visual System', 'Construction'],
    link: 'wb-plus'
  },
  {
    id: 'luxury-hotel',
    title: 'Luxury Hotel Group',
    category: 'Complete Brand System',
    year: '2024',
    description: 'End-to-end brand identity for a premium hospitality group across the Middle East.',
    image: 'https://images.unsplash.com/photo-1612810806546-ebbf22b53496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dvJTIwZGVzaWduJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzY0NzEwMzc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Logo Design', 'Brand Guidelines', 'Collateral'],
    link: 'luxury-hotel'
  },
  {
    id: 'tech-unicorn',
    title: 'Tech Unicorn',
    category: 'Visual Identity & Guidelines',
    year: '2024',
    description: 'Creating a modern, scalable brand system for a rapidly growing technology company.',
    image: 'https://images.unsplash.com/photo-1622503247445-cfe020cd0e5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbWluaW1hbHxlbnwxfHx8fDE3NjQ3MzYyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Identity', 'Digital', 'Strategy'],
    link: 'tech-unicorn'
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    category: 'Corporate Identity',
    year: '2023',
    description: 'Sophisticated branding for a premium financial advisory firm targeting UHNW clients.',
    image: 'https://images.unsplash.com/photo-1622124554445-017d74b9ed84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBicmFuZGluZ3xlbnwxfHx8fDE3NjQ2ODEwODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Corporate', 'Print', 'Packaging'],
    link: 'financial-services'
  },
  {
    id: 'premium-retail',
    title: 'Premium Retail',
    category: 'Brand Collateral',
    year: '2023',
    description: 'Elevating a luxury retail experience through premium touchpoints and materials.',
    image: 'https://images.unsplash.com/photo-1667201698408-0c06e55b3da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwZGVzaWdufGVufDF8fHx8MTc2NDY2NzU2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Retail', 'Stationery', 'Signage'],
    link: 'premium-retail'
  },
  {
    id: 'cultural-foundation',
    title: 'Cultural Foundation',
    category: 'Non-Profit Identity',
    year: '2023',
    description: 'Authentic brand expression for a cultural organization preserving heritage.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ298ZW58MXx8fHwxNzY0NzgzNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Cultural', 'Heritage', 'Print'],
    link: 'cultural-foundation'
  },
  {
    id: 'restaurant-group',
    title: 'Restaurant Group',
    category: 'Hospitality Branding',
    year: '2023',
    description: 'Multi-venue restaurant brand with distinct personalities under one umbrella.',
    image: 'https://images.unsplash.com/photo-1635549223710-1976f99d3f87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnJhbmRpbmd8ZW58MXx8fHwxNzY0NzgzNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['F&B', 'Menu Design', 'Packaging'],
    link: 'restaurant-group'
  }
];

export function BrandIdentityPage({ onBack, onProjectClick }: BrandIdentityPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-20 pb-32"
    >
      {/* Header */}
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-3 text-white/60 hover:text-[#c1ff72] transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-wider">Back to Home</span>
        </button>

        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm text-white/40 font-bold uppercase tracking-[0.3em] mb-4 block">02.</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] uppercase">
              Brand Identity
            </h1>
            <p className="text-xl text-white/60 max-w-3xl leading-relaxed uppercase tracking-wide">
              Building distinctive visual systems that capture the essence of forward-thinking brands 
              and create lasting impressions in competitive markets.
            </p>
          </motion.div>
        </div>

      </div>

      {/* Projects Grid */}
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="group relative block overflow-hidden transition-all duration-300 cursor-pointer"
              onClick={() => project.link && onProjectClick?.(project.link)}
            >
              {/* Large Image */}
              <div className="relative overflow-hidden bg-zinc-900 mb-6">
                <div className="aspect-[21/9]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                
                {/* Hover Overlay with Info */}
                <motion.div 
                  className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200"
                >
                  <div className="text-center px-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <h3 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-center gap-4 text-white/60 uppercase tracking-wider mb-6">
                        <span>{project.category}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                      <div className="flex flex-wrap gap-3 justify-center">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-4 py-2 border border-white/30 text-white/70 uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Corner Number */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-white/10 group-hover:text-[#c1ff72]/40 transition-colors duration-200">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}