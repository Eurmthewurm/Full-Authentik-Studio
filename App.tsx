import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import DirectorPage from './components/DirectorPage';
import ServicePage from './components/ServicePage';
import ProductPage from './components/ProductPage';
import AIConsultant from './components/AIConsultant';

type Page = 'home' | 'director' | 'service' | 'product';

const App: React.FC = () => {
  // Simple state-based router
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle page transitions with a slight fade effect logic if we wanted, 
  // but for now we rely on CSS animations in index.html
  const handleNavigate = (page: Page) => {
    if (page === currentPage) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'director':
        return <DirectorPage />;
      case 'service':
        return <ServicePage />;
      case 'product':
        return <ProductPage onContactClick={() => {
           // If we had a shared contact section, we'd scroll there, 
           // but ProductPage has its own flow.
           const element = document.getElementById('pricing');
           element?.scrollIntoView({ behavior: 'smooth' });
        }} />;
      case 'home':
      default:
        return <Hero onNavigate={(id) => handleNavigate(id as Page)} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-blue-500/30 font-sans">
      <NavBar 
        currentPage={currentPage} 
        onNavigate={(id) => handleNavigate(id as Page)} 
      />
      
      <main className="relative z-10">
        {renderPage()}
      </main>

      <AIConsultant />
      
      {/* Global Footer (Optional, mostly for Home) */}
      {currentPage === 'home' && (
        <footer className="py-8 text-center text-xs text-gray-800 border-t border-white/5">
          <p>© 2026 ERMO.STUDIO</p>
        </footer>
      )}
    </div>
  );
};

export default App;