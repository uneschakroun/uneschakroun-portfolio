import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft, Play } from 'lucide-react';
import { useEffect } from 'react';
import asoImage from 'figma:asset/8729a78c210ddc92a48825d48de5e819924a6bc0.png';
import base39Image from 'figma:asset/e013c937b6ed02e6b798e44d2cfacb342a304f3c.png';

interface MediaDigitalPageProps {
  onBack: () => void;
  onProjectClick?: (projectId: string) => void;
}

const projects = [
  {
    id: 'base39',
    title: 'Base39',
    subtitle: 'Creative District',
    category: 'Poster Design',
    year: '2024',
    description: 'Ongoing creative district branding with striking visual identity and bold typography.',
    image: base39Image,
    type: 'print',
    status: 'ongoing',
    link: 'base39'
  },
  {
    id: 'aso',
    title: 'The Ultimate Human Wellness Clinic',
    category: 'Instagram Content Design',
    year: '2025',
    duration: '2 Month Project',
    description: 'Strategic social media design with 40+ posts creating powerful visual presence on Instagram.',
    image: asoImage,
    type: 'social',
    status: 'completed',
    link: 'aso'
  },
  {
    title: 'Global Campaign',
    category: 'Social Media Strategy',
    year: '2024',
    description: 'Multi-platform campaign reaching 50M+ impressions across MENA region.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRlc2lnbnxlbnwxfHx8fDE3NjQ3MzY5ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'social'
  },
  {
    title: 'Exhibition Design',
    category: 'Large Format Print',
    year: '2024',
    description: 'Immersive brand experience for major industry exhibition in Dubai.',
    image: 'https://images.unsplash.com/photo-1763671727638-5bc55bb9c980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcG9zdGVyJTIwZGVzaWdufGVufDF8fHx8MTc2NDc4MTc0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'print'
  },
  {
    title: 'Content Series',
    category: 'Video & Motion',
    year: '2024',
    description: 'Branded content series with motion graphics and cinematic storytelling.',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwdGh1bWJuYWlsfGVufDF8fHx8MTc2NDc4MTc0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'video'
  },
  {
    title: 'Editorial Magazine',
    category: 'Publication Design',
    year: '2023',
    description: 'Quarterly luxury lifestyle magazine with premium editorial design.',
    image: 'https://images.unsplash.com/photo-1561455372-ed928fca107a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluJTIwZGVzaWdufGVufDF8fHx8MTY0NjU2NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'print'
  },
  {
    title: 'Digital Lookbook',
    category: 'Interactive Experience',
    year: '2023',
    description: 'Immersive digital catalog with 3D product visualization.',
    image: 'https://images.unsplash.com/photo-1614516727093-b02bfba325fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YWdyYW0lMjBwb3N0JTIwZGVzaWdufGVufDF8fHx8MTc2NDY3MDg0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'digital'
  },
  {
    title: 'Motion Graphics Suite',
    category: 'Animation & VFX',
    year: '2023',
    description: 'Comprehensive motion design system for brand communications.',
    image: 'https://images.unsplash.com/photo-1764258560076-9530b22a1e8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGRlc2lnbnxlbnwxfHx8fDE3NjQ3MzM0OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    type: 'video'
  }
];

export function MediaDigitalPage({ onBack, onProjectClick }: MediaDigitalPageProps) {
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
            <span className="text-sm text-white/40 font-bold uppercase tracking-[0.3em] mb-4 block">03.</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] uppercase">
              Media & Digital
            </h1>
            <p className="text-xl text-white/60 max-w-3xl leading-relaxed uppercase tracking-wide">
              Crafting compelling visual narratives across digital and traditional media. 
              From social campaigns to motion design, we bring brands to life.
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
              onClick={() => project.link && onProjectClick && onProjectClick(project.link)}
              className={`group relative block overflow-hidden transition-all duration-300 ${project.link ? 'cursor-pointer' : ''}`}
            >
              {/* Large Image */}
              <div className="relative overflow-hidden bg-black">
                <div className="aspect-[21/9] relative">
                  {/* Image that fades out on hover */}
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-0"
                  />

                  {/* Text Content that appears on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-center px-8 max-w-4xl">
                      <motion.div
                        initial={false}
                        className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75"
                      >
                        <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 uppercase tracking-tight leading-[1.1]">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="text-2xl md:text-3xl text-white/70 mb-6 uppercase tracking-wide">
                            {project.subtitle}
                          </p>
                        )}
                        <div className="flex items-center justify-center gap-4 text-[#c1ff72] uppercase tracking-[0.3em] mb-6 text-sm font-bold">
                          <span>{project.category}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                          {project.status && (
                            <>
                              <span>•</span>
                              <span className="text-[#c1ff72]">{project.status}</span>
                            </>
                          )}
                        </div>
                        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto uppercase tracking-wide leading-relaxed">
                          {project.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Video Play Button - only visible when NOT hovering */}
                  {project.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                      <div className="w-20 h-20 rounded-full border-2 border-white/80 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  )}

                  {/* Ongoing Badge - only visible when NOT hovering */}
                  {project.status === 'ongoing' && (
                    <div className="absolute top-6 left-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-[#c1ff72] text-black px-4 py-2 font-bold uppercase tracking-[0.3em] text-xs">
                        Ongoing
                      </div>
                    </div>
                  )}

                  {/* Completed Badge - only visible when NOT hovering */}
                  {project.status === 'completed' && (
                    <div className="absolute top-6 left-6 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-[#c1ff72] text-black px-4 py-2 font-bold uppercase tracking-[0.3em] text-xs">
                        Completed
                      </div>
                    </div>
                  )}
                </div>

                {/* Corner Number */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-white/10 group-hover:text-[#c1ff72]/40 transition-colors duration-300 pointer-events-none">
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