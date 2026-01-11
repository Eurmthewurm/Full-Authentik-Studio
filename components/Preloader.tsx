import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [stage, setStage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const sequence = [
      { t: 1000, action: () => setStage(1) }, // Show "Authentik"
      { t: 2000, action: () => setStage(2) }, // Show "Visual Engineering"
      { t: 3200, action: () => setIsVisible(false) }, // Fade out
    ];

    const timeouts = sequence.map(({ t, action }) => setTimeout(action, t));
    return () => timeouts.forEach(clearTimeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 pointer-events-none ${stage === 2 ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Center Text Sequence */}
      <div className="relative overflow-hidden h-16 md:h-24">
         <div className={`transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            stage === 0 ? 'translate-y-full' : stage === 1 ? 'translate-y-0' : '-translate-y-full'
         }`}>
            <h1 className="text-4xl md:text-7xl font-display font-bold text-white tracking-tighter">
               AUTHENTIK
            </h1>
         </div>
      </div>

      <div className="relative overflow-hidden h-6 mt-2">
         <div className={`transition-transform duration-700 delay-100 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            stage === 1 ? 'translate-y-0' : 'translate-y-full'
         }`}>
            <p className="font-mono text-xs text-gray-500 uppercase tracking-[0.5em]">
               Visual Engineering
            </p>
         </div>
      </div>

      {/* Loading Bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gray-900 overflow-hidden">
         <div className="absolute inset-0 bg-white animate-[loading_2s_ease-in-out_forwards]"></div>
      </div>

    </div>
  );
};

export default Preloader;