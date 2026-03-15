import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import artwork1 from 'figma:asset/2dbad25ee18e3ce17b8eaa03b7173582be8f2f32.png';
import artwork2 from 'figma:asset/efc7bf822fb7f25dc8bef2bd80609d1463297b99.png';
import artwork3 from 'figma:asset/078c7a7bb70560eeddaa29500a22d9e20d731199.png';
import artwork4 from 'figma:asset/f49952433d3504db1f9c169d5776586576bf1837.png';
import artwork5 from 'figma:asset/8377b6a95ee5da38aca5cd71f055626aaa4b2a30.png';
import artwork6 from 'figma:asset/b1860d0f38e7c4fe03c9edc324de9d2f7eb21be5.png';
import artwork7 from 'figma:asset/e8428a723b5627ef3094043f3cb8884b636549f0.png';
import artwork8 from 'figma:asset/45713cc643669645f2c006b6865537246b6d5b7b.png';
import artwork9 from 'figma:asset/05c2fbf382ecaba70fd228ddb5b441fc4e5dab0e.png';

interface SinglePostGalleryPageProps {
  onBack: () => void;
}

const singlePostArtworks = [
  artwork5, // Gary Brecka portrait (yellow)
  artwork2, // Purpose Over Protocols swimmer
  artwork7, // Energy Challenge exercising
  artwork4, // Khatuntseva cyclist (yellow)
  artwork6, // Human Optimization quote (dark)
  artwork9, // Running Track map (beige)
  artwork1, // Dubai Fitness Challenge runners
  artwork8, // UAE Union Day flag (dark)
  artwork3  // Prevention panel event
];

export function SinglePostGalleryPage({ onBack }: SinglePostGalleryPageProps) {
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
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="uppercase tracking-wider">Back to Project</span>
        </button>

        {/* Title Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm text-[#c1ff72] font-bold uppercase tracking-[0.3em] mb-4 block">
              Single Posts
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-[1.1] uppercase">
              Selected Artworks
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-3xl leading-relaxed uppercase tracking-wide">
              Individual wellness-focused posts highlighting clinic expertise and services with powerful visual impact.
            </p>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-t border-b border-white/10 py-8 mb-24 grid grid-cols-3 gap-8"
        >
          <div>
            <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Total Artworks</div>
            <div className="text-3xl font-bold text-[#c1ff72]">9</div>
          </div>
          <div>
            <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Category</div>
            <div className="text-xl font-bold uppercase">Single Post</div>
          </div>
          <div>
            <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Client</div>
            <div className="text-xl font-bold uppercase">The Ultimate Human Wellness Clinic</div>
          </div>
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {singlePostArtworks.map((artwork, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.05, duration: 0.6 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#c1ff72]/50 transition-all duration-300">
                <div className="aspect-[4/5]">
                  <ImageWithFallback
                    src={artwork}
                    alt={`Single Post ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="container mx-auto max-w-7xl px-6 mt-32">
        <div className="border-t border-white/10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">Design Approach</h2>
            <p className="text-white/60 text-lg leading-relaxed uppercase tracking-wide mb-8">
              Carefully curated single posts designed for maximum impact, each artwork communicates a clear message while maintaining consistent brand identity and visual excellence.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-2 border-[#c1ff72] pl-6">
                <h3 className="text-xl font-bold uppercase mb-3">Instant Impact</h3>
                <p className="text-white/50 uppercase tracking-wide text-sm">
                  Designed to stop the scroll immediately
                </p>
              </div>
              <div className="border-l-2 border-[#c1ff72] pl-6">
                <h3 className="text-xl font-bold uppercase mb-3">Clear Messaging</h3>
                <p className="text-white/50 uppercase tracking-wide text-sm">
                  One powerful idea per post
                </p>
              </div>
              <div className="border-l-2 border-[#c1ff72] pl-6">
                <h3 className="text-xl font-bold uppercase mb-3">Brand Cohesion</h3>
                <p className="text-white/50 uppercase tracking-wide text-sm">
                  Unified aesthetic across all posts
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}