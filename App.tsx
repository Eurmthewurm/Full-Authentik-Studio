import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import DirectorPage from './components/DirectorPage';
import ServicePage from './components/ServicePage';
import ProductPage from './components/ProductPage';
import AIConsultant from './components/AIConsultant';
import ContactModal from './components/ContactModal';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import SoundController from './components/SoundController';

type Page = 'home' | 'director' | 'service' | 'product';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Handle page transitions and Titles
  const handleNavigate = (page: Page) => {
    if (page === currentPage) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  useEffect(() => {
    switch(currentPage) {
       case 'director': document.title = 'Ermo | The Director'; break;
       case 'service': document.title = 'Authentik | Scaling'; break;
       case 'product': document.title = 'Authentik | SPV Studio'; break;
       default: document.title = 'Authentik Studio | Visual Engineering';
    }
  }, [currentPage]);

  const openContact = () => setIsContactOpen(true);

  const renderPage = () => {
    switch (currentPage) {
      case 'director':
        return <DirectorPage onNavigate={(page) => handleNavigate(page as Page)} onContactClick={openContact} />;
      case 'service':
        return <ServicePage onContactClick={openContact} />;
      case 'product':
        return <ProductPage onContactClick={openContact} />;
      case 'home':
      default:
        return <Hero onNavigate={(id) => handleNavigate(id as Page)} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-blue-500/30 font-sans cursor-none flex flex-col">
      <Preloader />
      <CustomCursor />
      <SoundController />
      
      <NavBar 
        currentPage={currentPage} 
        onNavigate={(id) => handleNavigate(id as Page)}
        onContactClick={openContact}
      />
      
      <main className="relative z-10 flex-1">
        {renderPage()}
      </main>

      {/* Global Footer on all pages */}
      <Footer onNavigate={(id) => handleNavigate(id as Page)} />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <AIConsultant />
    </div>
  );
};

export default App;