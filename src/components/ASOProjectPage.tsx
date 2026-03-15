import { motion } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

// Carousel slides imports
import garyBreckaSlide from 'figma:asset/8e0f6df41a6f6229746ad84e7e6f4fd36731b8f7.png';
import sunlightSlide from 'figma:asset/48066b09d9d6e73045007573e4c080910490275b.png';
import coldWaterSlide from 'figma:asset/c1defefbd8a3ba0a6a562c885a929a3fa74fcde0.png';
import earthSlide from 'figma:asset/23d17c12eb222a8af222185b052c0355436188d1.png';
import breatheSlide from 'figma:asset/36af81879b02eafa11e08c7584848991acb76c66.png';
import longevitySlide from 'figma:asset/c83d8f80a35b530918e21337be2a560940848d20.png';
import sleepSlide from 'figma:asset/21d7489b8c0942b21c686c00c05d0430feebe4c1.png';
import stressSlide from 'figma:asset/d9f53d485c258b6b0b03bab03bedd2d16e8b1caf.png';
import biomarkersSlide from 'figma:asset/9d490af6ad764d6623510f472c8629bdb8a134dc.png';
import scienceConversationSlide from 'figma:asset/7e5fc2919952faaa01aeb77d025636982d2c9b94.png';
import humanStorySlide from 'figma:asset/431dee81f203cafe9be0fd66c01940b84d48b21a.png';
import experienceSlide from 'figma:asset/6ca1cc78be0910cff5afaba9dd73c106354dc4d4.png';
import expertsSlide from 'figma:asset/0e4eee30a6788d63ef6ccc34852ea02cd1ec616e.png';
import resetRestSlide from 'figma:asset/e3f2f7a44bfda23d699d4bdc5be4add19a2aad56.png';
import bodyHealsSlide from 'figma:asset/3b4087a7e1cb8974a31474e9d6889bdb4be4a60a.png';
import deepSleepSlide from 'figma:asset/935a8910c24f54e0ebd621cd37ec8bb03374cf91.png';
import activeRecoverySlide from 'figma:asset/e9dab93886e92d57582d797ecec23b5841bb6350.png';
import overtrainingSlide from 'figma:asset/9f05e02594f305620ac37c358a20be4a2d6bf95c.png';
import redefinePotentialSlide from 'figma:asset/d652f56e32c97f967e9744a8ffa6c0edb8a5af9a.png';
import oneMissionSlide from 'figma:asset/c70d0937f54ccc50e4387fe60e41b1c342440a1a.png';
import purposeSlide from 'figma:asset/0c19d5b3495a04e3087dd805013b4da4bdabae97.png';

// Single post imports
import artwork1 from 'figma:asset/2dbad25ee18e3ce17b8eaa03b7173582be8f2f32.png';
import artwork2 from 'figma:asset/efc7bf822fb7f25dc8bef2bd80609d1463297b99.png';
import artwork3 from 'figma:asset/078c7a7bb70560eeddaa29500a22d9e20d731199.png';
import artwork4 from 'figma:asset/f49952433d3504db1f9c169d5776586576bf1837.png';
import artwork5 from 'figma:asset/8377b6a95ee5da38aca5cd71f055626aaa4b2a30.png';
import artwork6 from 'figma:asset/b1860d0f38e7c4fe03c9edc324de9d2f7eb21be5.png';
import artwork7 from 'figma:asset/e8428a723b5627ef3094043f3cb8884b636549f0.png';
import artwork8 from 'figma:asset/45713cc643669645f2c006b6865537246b6d5b7b.png';
import artwork9 from 'figma:asset/05c2fbf382ecaba70fd228ddb5b441fc4e5dab0e.png';

interface ASOProjectPageProps {
  onBack: () => void;
  onGalleryView?: (galleryType: 'carousel' | 'single') => void;
}

const projectInfo = {
  client: 'The Ultimate Human Wellness Clinic',
  year: '2025',
  duration: '2 Month Project',
};

const carouselPosts = [
  {
    id: 1,
    title: "Living Better Campaign",
    slides: [
      garyBreckaSlide,
      sunlightSlide,
      coldWaterSlide,
      earthSlide,
      breatheSlide
    ]
  },
  {
    id: 2,
    title: "The Science of Longevity",
    slides: [
      longevitySlide,
      sleepSlide,
      stressSlide,
      biomarkersSlide,
      scienceConversationSlide
    ]
  },
  {
    id: 3,
    title: "Behind Every Test",
    slides: [
      humanStorySlide,
      experienceSlide,
      expertsSlide,
      redefinePotentialSlide,
      oneMissionSlide,
      purposeSlide
    ]
  },
  {
    id: 4,
    title: "Reset to Redefine",
    slides: [
      resetRestSlide,
      bodyHealsSlide,
      deepSleepSlide,
      activeRecoverySlide,
      overtrainingSlide
    ]
  }
];

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

function CarouselSlider({ slides, carouselNumber }: { slides: string[], carouselNumber: number }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden bg-zinc-900 border border-white/10 hover:border-[#c1ff72]/50 transition-all duration-300 group">
      <div className="aspect-[4/5] relative">
        <ImageWithFallback
          src={slides[currentSlide]}
          alt={`Carousel ${carouselNumber} - Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/80 border border-[#c1ff72]/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#c1ff72]/20"
            >
              <ChevronLeft className="w-5 h-5 text-[#c1ff72]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/80 border border-[#c1ff72]/50 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#c1ff72]/20"
            >
              <ChevronRight className="w-5 h-5 text-[#c1ff72]" />
            </button>
          </>
        )}

        {/* Slide Counter */}
        <div className="absolute bottom-6 left-6 px-3 py-1 bg-black/80 border border-[#c1ff72]/50">
          <span className="text-[#c1ff72] text-sm font-bold">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>

        {/* Number Badge */}
        <div className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center bg-black/80 border border-[#c1ff72]/50">
          <span className="text-[#c1ff72] font-bold">
            {String(carouselNumber).padStart(2, '0')}
          </span>
        </div>

        {/* Slide Indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-6 right-6 flex gap-1">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'bg-[#c1ff72] w-6' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function ASOProjectPage({ onBack, onGalleryView }: ASOProjectPageProps) {
  const [galleryType, setGalleryType] = useState<'carousel' | 'single' | null>(null);

  const handleGalleryView = (type: 'carousel' | 'single') => {
    setGalleryType(type);
    if (onGalleryView) {
      onGalleryView(type);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-20 pb-32"
    >
      {/* Header */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 sm:gap-3 text-white/60 hover:text-[#c1ff72] transition-colors mb-8 sm:mb-12 group min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-wider text-sm sm:text-base">Back to Client Works</span>
        </button>

        {/* Project Title */}
        <div className="mb-12 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm text-white/40 font-bold uppercase tracking-[0.3em]">
                Instagram Content Design
              </span>
              <span className="text-white/20">•</span>
              <span className="text-xs sm:text-sm text-white/40 font-bold uppercase tracking-wider">
                {projectInfo.year}
              </span>
              <span className="text-white/20">•</span>
              <span className="text-xs sm:text-sm text-white/40 font-bold uppercase tracking-wider">
                {projectInfo.duration}
              </span>
              <span className="text-white/20">•</span>
              <span className="bg-[#c1ff72] text-black px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]">
                Completed
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-[1.1] uppercase">
              The Ultimate Human Wellness Clinic
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-3xl leading-relaxed uppercase tracking-wide">
              Strategic social media design creating a powerful visual presence 
              on Instagram with consistent, engaging content that drives results.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Single Posts Section */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-16 sm:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 uppercase">
            Single Posts
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl uppercase tracking-wide">
            Individual wellness-focused posts highlighting clinic expertise and services with powerful visual impact.
          </p>
        </motion.div>

        {/* Single Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
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

      {/* Carousel Posts Section */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 mb-12 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 uppercase">
            Carousel Posts
          </h2>
          <p className="text-white/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl uppercase tracking-wide">
            Multi-slide carousel posts showcasing wellness services and client transformations with engaging visual storytelling.
          </p>
        </motion.div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {carouselPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + idx * 0.1, duration: 0.6 }}
            >
              <CarouselSlider slides={post.slides} carouselNumber={post.id} />
              <div className="mt-4">
                <h3 className="text-xl font-bold uppercase">{post.title}</h3>
                <p className="text-sm text-white/40 uppercase tracking-wider mt-1">
                  {post.slides.length} Slides
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}