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
import { OudloverProjectPage } from './components/OudloverProjectPage';
import { NuaProjectPage } from './components/NuaProjectPage';
import { ArtRevoProjectPage } from './components/ArtRevoProjectPage';
import { MawjaProjectPage } from './components/MawjaProjectPage';
import { CarouselGalleryPage } from './components/CarouselGalleryPage';
import { SinglePostGalleryPage } from './components/SinglePostGalleryPage';
import { ServicePDF } from './components/ServicePDF';
import { WorkshopProjectPage } from './components/WorkshopProjectPage';
import { LinkedInOfferPage } from './components/LinkedInOfferPage';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import './styles/globals.css';

type PageType = 'home' | 'm00-studio' | 'personal-works' | 'contact' | 'process' | 'wb-plus' | 'r-plus-plus' | 'aso' | 'base39' | 'base39-case-study' | 'oudlover' | 'oudlover-case-study' | 'nua' | 'artrevo' | 'mawja' | 'carousel-gallery' | 'single-gallery' | 'services' | 'workshop' | 'case-study' | 'linkedin-offer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const handleSectionClick = (sectionId: string) => {
    setCurrentPage(sectionId as PageType);
  };

  const handleBack = () => setCurrentPage('home');
  const handleBackToASO = () => setCurrentPage('aso');

  const handleGalleryView = (galleryType: 'carousel' | 'single') => {
    setCurrentPage(galleryType === 'carousel' ? 'carousel-gallery' : 'single-gallery');
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
            {currentPage === 'home' && <HeroSection key="home" onSectionClick={handleSectionClick} />}
            {currentPage === 'm00-studio' && <M00StudioPage key="m00-studio" onBack={handleBack} />}
            {currentPage === 'personal-works' && <PersonalWorksPage key="personal-works" onBack={handleBack} onProjectClick={handleSectionClick} />}
            {currentPage === 'contact' && <ContactPage key="contact" onBack={handleBack} onServicesClick={() => setCurrentPage('services')} />}
            {currentPage === 'process' && <ProcessValuesPage key="process" onBack={handleBack} onNavigateToContact={() => setCurrentPage('contact')} onServicesClick={() => setCurrentPage('services')} />}
            {currentPage === 'wb-plus' && <WBPlusProjectPage key="wb-plus" onBack={handleBack} />}
            {currentPage === 'r-plus-plus' && <RPlusPlusProjectPage key="r-plus-plus" onBack={handleBack} />}
            {currentPage === 'aso' && <ASOProjectPage key="aso" onBack={handleBack} onGalleryView={handleGalleryView} />}
            {currentPage === 'base39' && <Base39ProjectPage key="base39" onBack={handleBack} />}
            {currentPage === 'oudlover' && <OudloverProjectPage key="oudlover" onBack={handleBack} />}
            {currentPage === 'nua' && <NuaProjectPage key="nua" onBack={handleBack} />}
            {currentPage === 'artrevo' && <ArtRevoProjectPage key="artrevo" onBack={handleBack} />}
            {currentPage === 'mawja' && <MawjaProjectPage key="mawja" onBack={handleBack} />}
            {currentPage === 'carousel-gallery' && <CarouselGalleryPage key="carousel-gallery" onBack={handleBackToASO} />}
            {currentPage === 'single-gallery' && <SinglePostGalleryPage key="single-gallery" onBack={handleBackToASO} />}
            {currentPage === 'services' && <ServicePDF key="services" onBack={handleBack} />}
            {currentPage === 'workshop' && <WorkshopProjectPage key="workshop" onBack={handleBack} />}
            {currentPage === 'linkedin-offer' && <LinkedInOfferPage key="linkedin-offer" onBack={handleBack} />}
          </AnimatePresence>

          {currentPage === 'home' && <Footer />}
          {currentPage === 'home' && <WhatsAppButton phoneNumber="212707227263" />}
        </div>
      )}
    </>
  );
}