import React from 'react';
import { ArrowUpRight, Aperture, Triangle, Circle, Minus } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col pt-32 pb-12 px-4 md:px-12 max-w-[1800px] mx-auto relative page-transition overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[60vw] h-[80vh] bg-gradient-to-b from-blue-900/5 to-purple-900/5 blur-3xl pointer-events-none -z-10 transform rotate-12"></div>

      <div className="flex-1 flex flex-col justify-center mb-16 relative">
        
        {/* Main Title Area - More Asymmetric */}
        <div className="relative mb-24">
           <div className="animate-fade-in-up">
              <div className="flex items-center gap-4 mb-4 ml-2">
                 <span className="w-12 h-[1px] bg-white/30"></span>
                 <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Est. 2011 • London</span>
              </div>
              <h1 className="text-[14vw] leading-[0.85] font-bold tracking-tighter mix-blend-difference font-display text-white">
                AUTHENTIK
              </h1>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-6 border-t border-white/10 pt-6">
                 <p className="text-xl md:text-2xl text-gray-400 font-light max-w-xl">
                    A Creative House by <span className="text-white font-medium">Ermo.</span> <br/>
                    <span className="text-sm text-gray-500 font-mono mt-2 block">VISUAL STRATEGY • CONVERSION • SCALE</span>
                 </p>
                 
                 <div className="mt-8 md:mt-0 flex gap-4">
                     <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                     <span className="text-xs font-mono uppercase tracking-widest text-green-400">Accepting Projects Q2</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Unique Navigation Layout - Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 animate-fade-in-up delay-200">
          
          {/* Card 1: The Director (Ermo) */}
          <div 
            onClick={() => onNavigate('director')}
            className="group relative h-[450px] cursor-pointer md:mt-0"
          >
            <div className="absolute inset-0 border border-white/10 group-hover:border-blue-500/50 transition-colors duration-500 bg-[#080808]"></div>
            
            {/* Image Reveal */}
            <div className="absolute inset-4 overflow-hidden opacity-40 group-hover:opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0">
               <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
            </div>

            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
               <div className="flex justify-between">
                  <span className="text-xs font-mono text-blue-500 bg-blue-500/10 px-2 py-1">01</span>
                  <ArrowUpRight className="w-6 h-6 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </div>
               <div>
                  <h2 className="text-4xl font-display font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">The<br/>Director</h2>
                  <p className="text-xs font-mono text-gray-400 mt-4 border-t border-white/10 pt-4">
                     CREATIVE DIRECTION<br/>
                     <span className="text-gray-600">J-Griff • Aaron Abke</span>
                  </p>
               </div>
            </div>
          </div>

          {/* Card 2: Service Scaling */}
          <div 
            onClick={() => onNavigate('service')}
            className="group relative h-[450px] cursor-pointer md:mt-12" // Staggered down
          >
             <div className="absolute inset-0 border border-white/10 group-hover:border-purple-500/50 transition-colors duration-500 bg-[#080808]"></div>
             
             <div className="absolute inset-4 overflow-hidden opacity-40 group-hover:opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0">
               <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
            </div>

             <div className="relative z-10 p-8 h-full flex flex-col justify-between">
               <div className="flex justify-between">
                  <span className="text-xs font-mono text-purple-500 bg-purple-500/10 px-2 py-1">02</span>
                  <ArrowUpRight className="w-6 h-6 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </div>
               <div>
                  <h2 className="text-4xl font-display font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Service<br/>Scale</h2>
                  <p className="text-xs font-mono text-gray-400 mt-4 border-t border-white/10 pt-4">
                     BRAND CONSULTING<br/>
                     <span className="text-gray-600">Coaches & Agencies</span>
                  </p>
               </div>
            </div>
          </div>

          {/* Card 3: Product / Authentik */}
          <div 
            onClick={() => onNavigate('product')}
            className="group relative h-[450px] cursor-pointer md:mt-24" // Staggered further down
          >
             <div className="absolute inset-0 border border-white/10 group-hover:border-green-500/50 transition-colors duration-500 bg-[#080808]"></div>
             
             <div className="absolute inset-4 overflow-hidden opacity-40 group-hover:opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0">
               <img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
            </div>

             <div className="relative z-10 p-8 h-full flex flex-col justify-between">
               <div className="flex justify-between">
                  <span className="text-xs font-mono text-green-500 bg-green-500/10 px-2 py-1">03</span>
                  <ArrowUpRight className="w-6 h-6 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </div>
               <div>
                  <h2 className="text-4xl font-display font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Product<br/>Division</h2>
                  <p className="text-xs font-mono text-gray-400 mt-4 border-t border-white/10 pt-4">
                     AMAZON SPV STUDIO<br/>
                     <span className="text-gray-600">Conversion Assets</span>
                  </p>
               </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer info */}
      <div className="w-full py-4 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-600 uppercase tracking-widest">
        <span>London / Berlin</span>
        <div className="flex items-center gap-2">
            <span>Scroll</span>
            <Minus className="w-4 h-4" />
        </div>
        <span>© Authentik Studio</span>
      </div>
    </div>
  );
};

export default Hero;