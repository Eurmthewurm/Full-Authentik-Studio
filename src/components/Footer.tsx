import React from 'react';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

interface FooterProps {
   onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
   const handleNav = (page: string) => {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
   };

   return (
      <footer className="bg-black text-white border-t border-white/10 pt-24 pb-12 px-4 md:px-12 relative overflow-hidden z-10">

         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
         <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-blue-900/10 blur-[100px] pointer-events-none"></div>

         {/* Content */}
         <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 relative z-10">
            <div className="md:col-span-2">
               <h2 className="text-[15vw] md:text-[8vw] font-display font-bold leading-none tracking-tighter mb-8 text-white/10 select-none hover:text-white/20 transition-colors duration-700 cursor-pointer" onClick={() => handleNav('home')}>
                  AUTHENTIK
               </h2>
            </div>

            <div>
               <h3 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">Divisions</h3>
               <ul className="space-y-4 text-sm text-gray-300 font-light">
                  <li><button onClick={() => handleNav('director')} className="hover:text-blue-400 transition-colors flex items-center gap-2 group">The Director <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></button></li>
                  <li><button onClick={() => handleNav('service')} className="hover:text-purple-400 transition-colors flex items-center gap-2 group">Service Scaling <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></button></li>
                  <li><button onClick={() => handleNav('product')} className="hover:text-green-400 transition-colors flex items-center gap-2 group">Product Studio <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></button></li>
               </ul>
            </div>

            <div>
               <h3 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-6">Connect</h3>
               <ul className="space-y-4 text-sm text-gray-300 font-light">
                  <li><a href="https://instagram.com/authentik_studio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group"><Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" /> Instagram</a></li>
                  <li><a href="https://linkedin.com/company/authentik-studio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group"><Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" /> LinkedIn</a></li>
                  <li><a href="https://x.com/authentikstudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group"><Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" /> Twitter</a></li>
               </ul>
            </div>
         </div>

         <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-12 text-xs text-gray-600 font-mono">
            <p>© 2019 AUTHENTIK STUDIO. NETHERLANDS.</p>
            <div className="flex items-center gap-3 mt-4 md:mt-0 px-4 py-2 border border-white/5 rounded-full bg-white/5">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               <span className="text-green-500 font-bold tracking-widest">SYSTEM ONLINE</span>
            </div>
         </div>
      </footer>
   );
};

export default Footer;