import { motion } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
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

interface CarouselGalleryPageProps {
  onBack: () => void;
}

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
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/80 border border-[#c1ff72]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#c1ff72]/20"
            >
              <ChevronLeft className="w-5 h-5 text-[#c1ff72]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/80 border border-[#c1ff72]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#c1ff72]/20"
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

export function CarouselGalleryPage({ onBack }: CarouselGalleryPageProps) {
  const totalSlides = carouselPosts.reduce((acc, post) => acc + post.slides.length, 0);

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
              Carousel Posts
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 leading-[1.1] uppercase">
              Multi-Slide Carousels
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-3xl leading-relaxed uppercase tracking-wide">
              Multi-slide carousel posts showcasing wellness services and client transformations with engaging visual storytelling.
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
            <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Total Slides</div>
            <div className="text-3xl font-bold text-[#c1ff72]">{String(totalSlides).padStart(2, '0')}</div>
          </div>
          <div>
            <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Carousels</div>
            <div className="text-xl font-bold uppercase">{String(carouselPosts.length).padStart(2, '0')}</div>
          </div>
          <div>
            <div className="text-sm text-white/40 uppercase tracking-wider mb-2">Client</div>
            <div className="text-xl font-bold uppercase">The Ultimate Human Wellness Clinic</div>
          </div>
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {carouselPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
            >
              <CarouselSlider slides={post.slides} carouselNumber={post.id} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}