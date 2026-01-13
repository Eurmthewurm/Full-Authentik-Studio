import React from 'react';
import { Box } from 'lucide-react';

const ProductDivision: React.FC = () => {
  return (
    <section id="product" className="py-32 px-4 bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
           <div className="inline-flex items-center gap-2 px-3 py-1 border border-green-500/20 rounded-full bg-green-900/10 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-mono text-green-400">AUTHENTIK STUDIO</span>
           </div>
           
           <h2 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
              Product <span className="text-gray-700">Division</span>
           </h2>
           
           <div className="max-w-2xl text-lg text-gray-400 font-light leading-relaxed">
              <p>
                This is where Art meets Algorithm. <br/>
                We specialize in <strong>Amazon Sponsored Products Video (SPV)</strong>.
              </p>
              <p className="mt-4 text-sm font-mono text-gray-500">
                NO LIFESTYLE FLUFF. PURE CONVERSION ENGINEERING.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDivision;