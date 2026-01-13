import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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

// Mapping between path and page ID
const getPageIdFromPath = (pathname: string): string => {
  if (pathname === '/') return 'home';
  return pathname.substring(1); // remove leading slash
};

const MainContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const currentPage = getPageIdFromPath(location.pathname);

  // Handle page transitions and Titles
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    switch (currentPage) {
      case 'director': document.title = 'Ermo | The Director'; break;
      case 'service': document.title = 'Authentik | Service Scaling'; break;
      case 'product': document.title = 'Authentik | SPV Studio'; break;
      default: document.title = 'Authentik Studio | Visual Engineering';
    }
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;
    const path = page === 'home' ? '/' : `/${page}`;
    navigate(path);
  };

  const openContact = () => setIsContactOpen(true);

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-blue-500/30 font-sans cursor-none flex flex-col">
      <Preloader />
      <CustomCursor />

      <NavBar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onContactClick={openContact}
      />

      <main className="relative z-10 flex-1">
        <Routes>
          <Route path="/" element={<Hero onNavigate={handleNavigate} />} />
          <Route path="/director" element={<DirectorPage onNavigate={handleNavigate} onContactClick={openContact} />} />
          <Route path="/service" element={<ServicePage onContactClick={openContact} />} />
          <Route path="/product" element={<ProductPage onContactClick={openContact} />} />
          <Route path="*" element={<Hero onNavigate={handleNavigate} />} />
        </Routes>
      </main>

      {/* Global Footer on all pages */}
      <Footer onNavigate={handleNavigate} />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <AIConsultant />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
};

export default App;