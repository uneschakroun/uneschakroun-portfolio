import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LoadingScreen } from './components/LoadingScreen';
import { M00StudioPage } from './components/M00StudioPage';
import { PersonalWorksPage } from './components/PersonalWorksPage';
import { ContactPage } from './components/ContactPage';
import { ProcessValuesPage } from './components/ProcessValuesPage';
import { WBPlusProjectPage } from './components/WBPlusProjectPage';
import { RPlusPlusProjectPage } from './components/RPlusPlusProjectPage';
import { ASOProjectPage } from './components/ASOProjectPage';
import { Base39ProjectPage } from './components/Base39ProjectPage';
// TEMPORARILY HIDDEN - Case Study Section (restore when requested)
// import { Base39CaseStudyPage } from './components/Base39CaseStudyPage';
import { OudloverProjectPage } from './components/OudloverProjectPage';
// import { OudloverCaseStudyPage } from './components/OudloverCaseStudyPage';
import { NuaProjectPage } from './components/NuaProjectPage';
import { ArtRevoProjectPage } from './components/ArtRevoProjectPage';
import { MawjaProjectPage } from './components/MawjaProjectPage';
import { CarouselGalleryPage } from './components/CarouselGalleryPage';
import { SinglePostGalleryPage } from './components/SinglePostGalleryPage';
import { ServicePDF } from './components/ServicePDF';
import { WorkshopProjectPage } from './components/WorkshopProjectPage';
import { LinkedInOfferPage } from './components/LinkedInOfferPage';
// import { CaseStudyPage } from './components/CaseStudyPage';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import './styles/globals.css';

type PageType = 'home' | 'm00-studio' | 'personal-works' | 'contact' | 'process' | 'wb-plus' | 'r-plus-plus' | 'aso' | 'base39' | 'base39-case-study' | 'oudlover' | 'oudlover-case-study' | 'nua' | 'artrevo' | 'mawja' | 'carousel-gallery' | 'single-gallery' | 'services' | 'workshop' | 'case-study' | 'linkedin-offer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] // Custom easing curve for smooth motion
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const handleSectionClick = (sectionId: string) => {
    if (sectionId === 'm00-studio') setCurrentPage('m00-studio');
    else if (sectionId === 'personal-works') setCurrentPage('personal-works');
    else if (sectionId === 'contact') setCurrentPage('contact');
    else if (sectionId === 'process') setCurrentPage('process');
    else if (sectionId === 'wb-plus') setCurrentPage('wb-plus');
    else if (sectionId === 'r-plus-plus') setCurrentPage('r-plus-plus');
    else if (sectionId === 'aso') setCurrentPage('aso');
    else if (sectionId === 'base39') setCurrentPage('base39');
    else if (sectionId === 'base39-case-study') setCurrentPage('base39-case-study');
    else if (sectionId === 'oudlover') setCurrentPage('oudlover');
    else if (sectionId === 'oudlover-case-study') setCurrentPage('oudlover-case-study');
    else if (sectionId === 'nua') setCurrentPage('nua');
    else if (sectionId === 'artrevo') setCurrentPage('artrevo');
    else if (sectionId === 'mawja') setCurrentPage('mawja');
    else if (sectionId === 'carousel-gallery') setCurrentPage('carousel-gallery');
    else if (sectionId === 'single-gallery') setCurrentPage('single-gallery');
    else if (sectionId === 'services') setCurrentPage('services');
    else if (sectionId === 'workshop') setCurrentPage('workshop');
    else if (sectionId === 'case-study') setCurrentPage('case-study');
    else if (sectionId === 'linkedin-offer') setCurrentPage('linkedin-offer');
  };

  const handleBack = () => {
    setCurrentPage('home');
  };

  const handleBackToASO = () => {
    setCurrentPage('aso');
  };

  const handleGalleryView = (galleryType: 'carousel' | 'single') => {
    if (galleryType === 'carousel') {
      setCurrentPage('carousel-gallery');
    } else {
      setCurrentPage('single-gallery');
    }
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      {!isLoading && (
        <div className="min-h-screen bg-black text-white">
          <Header 
            onResumeClick={() => {}} 
            onLogoClick={handleBack} 
            onCaseStudyClick={() => setCurrentPage('case-study')}
            onLinkedInOfferClick={() => setCurrentPage('linkedin-offer')}
          />
          
          <AnimatePresence mode="wait">
            {currentPage === 'home' && (
              <HeroSection key="home" onSectionClick={handleSectionClick} />
            )}
            {currentPage === 'm00-studio' && (
              <M00StudioPage key="m00-studio" onBack={handleBack} />
            )}
            {currentPage === 'personal-works' && (
              <PersonalWorksPage key="personal-works" onBack={handleBack} onProjectClick={handleSectionClick} />
            )}
            {currentPage === 'contact' && (
              <ContactPage key="contact" onBack={handleBack} onServicesClick={() => setCurrentPage('services')} />
            )}
            {currentPage === 'process' && (
              <ProcessValuesPage key="process" onBack={handleBack} onNavigateToContact={() => setCurrentPage('contact')} onServicesClick={() => setCurrentPage('services')} />
            )}
            {currentPage === 'wb-plus' && (
              <WBPlusProjectPage key="wb-plus" onBack={handleBack} />
            )}
            {currentPage === 'r-plus-plus' && (
              <RPlusPlusProjectPage key="r-plus-plus" onBack={handleBack} />
            )}
            {currentPage === 'aso' && (
              <ASOProjectPage key="aso" onBack={handleBack} onGalleryView={handleGalleryView} />
            )}
            {currentPage === 'base39' && (
              <Base39ProjectPage key="base39" onBack={handleBack} />
            )}
            {/* TEMPORARILY HIDDEN - Case Study Section (restore when requested)
            {currentPage === 'base39-case-study' && (
              <Base39CaseStudyPage key="base39-case-study" onBack={() => setCurrentPage('case-study')} />
            )}
            */}
            {currentPage === 'oudlover' && (
              <OudloverProjectPage key="oudlover" onBack={handleBack} />
            )}
            {/* TEMPORARILY HIDDEN - Case Study Section (restore when requested)
            {currentPage === 'oudlover-case-study' && (
              <OudloverCaseStudyPage key="oudlover-case-study" onBack={() => setCurrentPage('case-study')} />
            )}
            */}
            {currentPage === 'nua' && (
              <NuaProjectPage key="nua" onBack={handleBack} />
            )}
            {currentPage === 'artrevo' && (
              <ArtRevoProjectPage key="artrevo" onBack={handleBack} />
            )}
            {currentPage === 'mawja' && (
              <MawjaProjectPage key="mawja" onBack={handleBack} />
            )}
            {currentPage === 'carousel-gallery' && (
              <CarouselGalleryPage key="carousel-gallery" onBack={handleBackToASO} />
            )}
            {currentPage === 'single-gallery' && (
              <SinglePostGalleryPage key="single-gallery" onBack={handleBackToASO} />
            )}
            {currentPage === 'services' && (
              <ServicePDF key="services" onBack={handleBack} />
            )}
            {currentPage === 'workshop' && (
              <WorkshopProjectPage key="workshop" onBack={handleBack} />
            )}
            {currentPage === 'linkedin-offer' && (
              <LinkedInOfferPage key="linkedin-offer" onBack={handleBack} />
            )}
            {/* TEMPORARILY HIDDEN - Case Study Page (restore when requested)
            {currentPage === 'case-study' && (
              <CaseStudyPage key="case-study" onBack={handleBack} onProjectClick={handleSectionClick} />
            )}
            */}
          </AnimatePresence>

          {currentPage === 'home' && <Footer />}
          {currentPage === 'home' && <WhatsAppButton phoneNumber="212707227263" />}
        </div>
      )}
    </>
  );
}