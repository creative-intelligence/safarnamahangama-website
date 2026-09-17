import React, { useState } from 'react';
import { BrandPreloader } from './components/BrandPreloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { YouTubeEngineVisualizer } from './components/YouTubeEngineVisualizer';
import { LiveStudioSimulator } from './components/LiveStudioSimulator';
import { AboutFounder } from './components/AboutFounder';
import { GuaranteeBanner } from './components/GuaranteeBanner';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioProof } from './components/PortfolioProof';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [preloaderOption, setPreloaderOption] = useState<1 | 2 | 3 | 4 | 5>(5);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-[#030C07] text-slate-100 selection:bg-emerald-500 selection:text-black font-sans">
      {/* Executive Splash Screen Preloader */}
      <BrandPreloader
        activeOption={preloaderOption}
        onSelectOption={(opt) => setPreloaderOption(opt)}
      />

      {/* Header Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenContact={handleOpenContact} />

        {/* 2. 24/7 Animated YouTube Production Engine */}
        <YouTubeEngineVisualizer />

        {/* 4. Interactive Live Studio Simulator */}
        <LiveStudioSimulator />

        {/* 4. Founder Story & Authority */}
        <AboutFounder />

        {/* 5. Zero Risk 90-Day Guarantee Banner */}
        <GuaranteeBanner />

        {/* 6. Done-For-You Services Showcase */}
        <ServicesSection onOpenContact={handleOpenContact} />

        {/* 7. 4-Stage Production System */}
        <ProcessSection />

        {/* 9. Client Case Studies & Proof Grid */}
        <PortfolioProof />

        {/* 10. Transparent Pricing Packages */}
        <PricingSection onOpenContact={handleOpenContact} />

        {/* 11. Monetization FAQs */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Strategy Call Booking Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}

export default App;
