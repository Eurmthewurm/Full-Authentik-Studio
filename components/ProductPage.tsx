import React from 'react';
import { Box } from 'lucide-react';
import Services from './Services'; // SPV Methodology
import Process from './Process';
import Pricing from './Pricing';

interface ProductPageProps {
  onContactClick: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ onContactClick }) => {
  return (
    <div className="pt-20 min-h-screen page-transition">
       
       {/* Authentik Header */}
       <section className="py-24 px-4 bg-background border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 border border-green-500/30 rounded-full bg-green-900/10 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-mono text-green-400 font-bold tracking-widest">AUTHENTIK STUDIO</span>
             </div>
             
             <h1 className="text-6xl md:text-9xl font-display font-bold mb-8 tracking-tighter">
                Product <span className="text-gray-800">Division</span>
             </h1>
             
             <div className="max-w-2xl text-xl text-gray-400 font-light leading-relaxed">
                <p>
                  This is where Art meets Algorithm. <br/>
                  We specialize in <strong>Amazon Sponsored Products Video (SPV)</strong>.
                </p>
                <p className="mt-6 text-sm font-mono text-gray-600 uppercase tracking-widest">
                  NO LIFESTYLE FLUFF. PURE CONVERSION ENGINEERING.
                </p>
             </div>
          </div>
       </section>

       {/* Components from Authentik flow */}
       <Services />
       <Process />
       <Pricing onBookClick={onContactClick} />
    </div>
  );
};

export default ProductPage;