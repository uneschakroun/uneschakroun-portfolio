import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LinkedInOfferPage } from '../components/LinkedInOfferPage';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import '../styles/globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen bg-black text-white">
      <Header 
        onResumeClick={() => {}} 
        onLogoClick={() => window.location.href = '/'} 
        onCaseStudyClick={() => window.location.href = '/'} 
        onLinkedInOfferClick={() => {}}
      />
      <LinkedInOfferPage />
      <Footer />
      <WhatsAppButton phoneNumber="212707227263" />
    </div>
  </StrictMode>
);
