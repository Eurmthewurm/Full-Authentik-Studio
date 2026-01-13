import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavBarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onContactClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentPage, onNavigate, onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'director', label: 'The Director' },
    { id: 'service', label: 'Service Scaling' },
    { id: 'product', label: 'Authentik SPV' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 py-6 mix-blend-difference text-white">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8 flex justify-between items-center">
          <div
            className="text-xl font-bold tracking-tighter flex items-center gap-2 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-4 h-4 bg-white rounded-sm group-hover:rotate-45 transition-transform duration-300"></div>
            <span className="font-display tracking-widest">AUTHENTIK<span className="opacity-50">.STUDIO</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:text-white ${currentPage === item.id ? 'text-white border-b border-white' : 'text-gray-500'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onContactClick}
              className="px-6 py-2 text-xs font-bold uppercase tracking-widest bg-white text-black hover:bg-gray-200 transition-colors"
            >
              Book Call
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-background pt-32 px-4 md:hidden animate-fade-in-up">
          <div className="flex flex-col gap-8 text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className="text-3xl font-display font-bold uppercase hover:text-gray-500 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onContactClick();
                setMobileMenuOpen(false);
              }}
              className="text-xl font-display font-bold uppercase text-blue-500 mt-8"
            >
              Book Call
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;