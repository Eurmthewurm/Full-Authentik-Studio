import React, { useEffect, useState } from 'react';
import { X, ArrowRight, PenTool, Layers, Box, Mail, Calendar } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 500);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[60] flex items-center justify-center transition-all duration-500 ${
        isOpen ? 'opacity-100 backdrop-blur-xl bg-black/80' : 'opacity-0 backdrop-blur-none pointer-events-none'
      }`}
    >
      <div 
        className={`relative w-full max-w-6xl mx-auto p-4 md:p-8 transition-all duration-700 transform ${
          isOpen ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'
        }`}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-0 right-4 md:right-0 -mt-12 md:-mt-16 group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Close Terminal</span>
          <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20">
             <X className="w-6 h-6" />
          </div>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            
            {/* Option 1: The Director */}
            <div className="group bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden h-[400px] md:h-[500px] flex flex-col cursor-pointer"
                 onClick={() => window.location.href = 'mailto:ermo@authentik.studio?subject=Director Inquiry'}
            >
               <div className="absolute inset-0 bg-blue-900/5 group-hover:bg-blue-900/10 transition-colors"></div>
               <div className="relative z-10 flex-1">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <PenTool className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">Creative<br/>Direction</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                     For 7-8 figure personal brands requiring a full visual architecture overhaul.
                  </p>
                  <div className="inline-block bg-blue-500/10 px-3 py-1 rounded text-[10px] font-mono text-blue-400 uppercase tracking-widest">
                     Waitlist: Q3 2026
                  </div>
               </div>
               <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-sm font-bold text-white">Inquire</span>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
               </div>
            </div>

            {/* Option 2: Service Scaling */}
            <div className="group bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden h-[400px] md:h-[500px] flex flex-col cursor-pointer"
                 onClick={() => window.location.href = 'mailto:consulting@authentik.studio?subject=Scaling Division Application'}
            >
               <div className="absolute inset-0 bg-purple-900/5 group-hover:bg-purple-900/10 transition-colors"></div>
               <div className="relative z-10 flex-1">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Layers className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">Service<br/>Scaling</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                     Consulting & Infrastructure for Agencies and Coaches doing $50k/mo+.
                  </p>
                  <div className="inline-block bg-purple-500/10 px-3 py-1 rounded text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                     Open: 2 Spots Left
                  </div>
               </div>
               <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-sm font-bold text-white">Apply Now</span>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
               </div>
            </div>

            {/* Option 3: Authentik SPV */}
            <div className="group bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-500 relative overflow-hidden h-[400px] md:h-[500px] flex flex-col cursor-pointer"
                 onClick={() => window.location.href = 'mailto:spv@authentik.studio?subject=Amazon SPV Project'}
            >
               <div className="absolute inset-0 bg-green-900/5 group-hover:bg-green-900/10 transition-colors"></div>
               <div className="relative z-10 flex-1">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Box className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2">Product<br/>Division</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                     Amazon Sponsored Products Video (SPV) production. Conversion Engineering.
                  </p>
                  <div className="inline-block bg-green-500/10 px-3 py-1 rounded text-[10px] font-mono text-green-400 uppercase tracking-widest">
                     Deployment: 10 Days
                  </div>
               </div>
               <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-sm font-bold text-white">Start Project</span>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
               </div>
            </div>

        </div>
        
        <div className="mt-12 text-center">
            <p className="text-xs text-gray-500 font-mono">
               NOT SURE? <a href="mailto:hello@authentik.studio" className="text-white hover:text-blue-500 underline transition-colors">SEND A GENERAL INQUIRY</a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;