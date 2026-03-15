import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Sharjah Museums artworks
import sharjahMuseum1 from 'figma:asset/602e6a5437c0d2aadabba76e097a686bb12f9a67.png';
import sharjahMuseum2 from 'figma:asset/15bb830ddc30d0ac28d94623c3aafbfe9d1952f1.png';
import sharjahMuseum3 from 'figma:asset/4c82c4831b3a3fe6d29ac3e95c8ea3f8800c22c8.png';

// Sharjah Research, Technology and Innovation Park artworks
import sharjah1 from 'figma:asset/6a1bfb572fd5f1e2dd78e0b26eabb22dcf040b36.png';
import sharjah2 from 'figma:asset/e34bbbf444d476caa0f7cf6f7232a3445125b935.png';
import sharjah3 from 'figma:asset/2d2727b8c884ce132d1fa9a87a68ad4df11bf089.png';

// Together Community artworks
import together1 from 'figma:asset/d4915f729db3e22f83559156baaed9da0f73f896.png';
import together2 from 'figma:asset/a81594805af33332c3f3ced4c9daa7ebbb2d1039.png';
import together3 from 'figma:asset/01360e4b4d366339ffa776bbc81e8978e8d5de5d.png';

interface ArtRevoProjectPageProps {
  onBack: () => void;
}

const projectInfo = {
  client: 'Art Revo',
  role: 'Full-Time Freelancer',
  year: '2024-2025',
  location: 'UAE 🇦🇪',
};

const sharjahMuseumArtworks = [
  sharjahMuseum1,
  sharjahMuseum2,
  sharjahMuseum3
];

const sharjahArtworks = [
  sharjah1,
  sharjah2,
  sharjah3
];

const togetherArtworks = [
  together1,
  together2,
  together3
];

export function ArtRevoProjectPage({ onBack }: ArtRevoProjectPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-16 sm:pt-20 pb-16 sm:pb-32"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 sm:gap-3 text-white/60 hover:text-[#c1ff72] transition-colors mb-8 sm:mb-12 group min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-wider text-sm sm:text-base">Back to Projects</span>
        </button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          {/* Project Meta */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 pb-8 border-b border-white/10">
            <div>
              <div className="text-xs sm:text-sm text-white/40 uppercase tracking-wider mb-2">Client</div>
              <div className="text-base sm:text-xl font-bold uppercase">{projectInfo.client}</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-white/40 uppercase tracking-wider mb-2">Role</div>
              <div className="text-base sm:text-xl font-bold uppercase">{projectInfo.role}</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-white/40 uppercase tracking-wider mb-2">Year</div>
              <div className="text-base sm:text-xl font-bold uppercase">{projectInfo.year}</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-white/40 uppercase tracking-wider mb-2">Location</div>
              <div className="text-base sm:text-xl font-bold uppercase">{projectInfo.location}</div>
            </div>
          </div>

          {/* Project Title & Description */}
          <div>
            <span className="text-xs sm:text-sm text-white/40 font-bold uppercase tracking-[0.3em] mb-3 sm:mb-4 block">
              Creative House & Marketing Agency
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-[1.1] uppercase">
              Art Revo
            </h1>
            <div className="max-w-3xl">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 leading-relaxed uppercase tracking-wide">
                UAE-based creative house & marketing agency delivering 360° business growth solutions through strategic brand development, visual identity design, and innovative marketing campaigns.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sharjah Research, Technology and Innovation Park Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16 sm:mb-24"
        >
          {/* Section Header */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 uppercase">
              @shjrtipark
            </h3>
            <div className="text-sm sm:text-base md:text-lg text-white/60 uppercase tracking-wide space-y-1">
              <p>Sharjah Research, Technology and Innovation Park (formerly SRTIP, SRTI Park)</p>
            </div>
          </div>

          {/* Artworks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sharjahArtworks.map((artwork, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="group relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#c1ff72]/50 transition-all duration-300"
              >
                <div className="aspect-[4/5]">
                  <ImageWithFallback
                    src={artwork}
                    alt={`Sharjah Research, Technology and Innovation Park Artwork ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Together Community Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16 sm:mb-24"
        >
          {/* Section Header */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 uppercase">
              @togethercommunity.ae
            </h3>
            <div className="text-sm sm:text-base md:text-lg text-white/60 uppercase tracking-wide">
              <p>Together Community Space & Cafe</p>
            </div>
          </div>

          {/* Artworks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {togetherArtworks.map((artwork, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="group relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#c1ff72]/50 transition-all duration-300"
              >
                <div className="aspect-[4/5]">
                  <ImageWithFallback
                    src={artwork}
                    alt={`Together Community Artwork ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sharjah Museums Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16 sm:mb-24"
        >
          {/* Section Header */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 uppercase">
              @sharjahmuseums
            </h3>
            <div className="text-sm sm:text-base md:text-lg text-white/60 uppercase tracking-wide">
              <p>Official account of Sharjah Museums Authority</p>
            </div>
          </div>

          {/* Artworks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sharjahMuseumArtworks.map((artwork, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="group relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#c1ff72]/50 transition-all duration-300"
              >
                <div className="aspect-[4/5]">
                  <ImageWithFallback
                    src={artwork}
                    alt={`Sharjah Museums Artwork ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="border-t border-white/10 pt-8 sm:pt-12"
        >
          <div className="max-w-3xl">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 uppercase text-[#c1ff72]">
              About the Role
            </h3>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed uppercase tracking-wide">
              Working as a full-time freelance designer with Art Revo, a UAE-based creative house and marketing agency. 
              Delivering comprehensive 360° business growth solutions through strategic brand development, visual identity design, 
              and creative marketing campaigns.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}