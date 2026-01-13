import React from 'react';
import { RefreshCcw, LayoutTemplate, Cog, Rocket } from 'lucide-react';

const ScalingRoadmap: React.FC = () => {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-end">
           <div className="flex-1">
              <h2 className="text-sm font-mono text-purple-400 tracking-wider mb-6">THE PROTOCOL</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                 From Invisible to <br/>
                 <span className="text-gray-500">Omnipresent.</span>
              </h3>
           </div>
           <div className="flex-1">
              <p className="text-gray-400 leading-relaxed">
                 We don't guess. We install the same infrastructure that generated $8M for our partners. 
                 This is a 90-day transformation sprint.
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
           
           {/* Connecting Line (Desktop) */}
           <div className="absolute top-12 left-0 w-full h-px bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 hidden md:block z-0"></div>

           {/* Step 1 */}
           <div className="bg-surface border border-white/5 p-8 rounded-2xl relative z-10 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-24 h-24 bg-[#0a0a0a] rounded-full border border-white/10 flex items-center justify-center mb-8 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-500">
                 <RefreshCcw className="w-8 h-8 text-gray-400 group-hover:text-purple-500 transition-colors" />
              </div>
              <span className="text-xs font-mono text-purple-500 mb-2 block">PHASE 01 • WEEKS 1-2</span>
              <h4 className="text-xl font-bold mb-4">Deconstruction</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                 We audit your existing funnel and content. We identify the "Low Status" signals that are repelling high-ticket clients.
              </p>
           </div>

           {/* Step 2 */}
           <div className="bg-surface border border-white/5 p-8 rounded-2xl relative z-10 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-24 h-24 bg-[#0a0a0a] rounded-full border border-white/10 flex items-center justify-center mb-8 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-500">
                 <LayoutTemplate className="w-8 h-8 text-gray-400 group-hover:text-purple-500 transition-colors" />
              </div>
              <span className="text-xs font-mono text-purple-500 mb-2 block">PHASE 02 • WEEKS 3-4</span>
              <h4 className="text-xl font-bold mb-4">Architecture</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                 We rebuild your visual identity. New pitch decks, new website copy, new offer positioning. You will look like a market leader before you are one.
              </p>
           </div>

           {/* Step 3 */}
           <div className="bg-surface border border-white/5 p-8 rounded-2xl relative z-10 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-24 h-24 bg-[#0a0a0a] rounded-full border border-white/10 flex items-center justify-center mb-8 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-500">
                 <Cog className="w-8 h-8 text-gray-400 group-hover:text-purple-500 transition-colors" />
              </div>
              <span className="text-xs font-mono text-purple-500 mb-2 block">PHASE 03 • WEEKS 5-8</span>
              <h4 className="text-xl font-bold mb-4">The Engine</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                 We install the content workflow. We hire the editors for you. We build the Notion systems. You just record; the system handles the rest.
              </p>
           </div>

           {/* Step 4 */}
           <div className="bg-surface border border-white/5 p-8 rounded-2xl relative z-10 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-24 h-24 bg-[#0a0a0a] rounded-full border border-white/10 flex items-center justify-center mb-8 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-500">
                 <Rocket className="w-8 h-8 text-gray-400 group-hover:text-purple-500 transition-colors" />
              </div>
              <span className="text-xs font-mono text-purple-500 mb-2 block">PHASE 04 • WEEK 12</span>
              <h4 className="text-xl font-bold mb-4">Omnipresence</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                 Launch. We turn on the faucet. Your content floods the feed with high-status signals. Authority is now automated.
              </p>
           </div>

        </div>
      </div>
    </section>
  );
};

export default ScalingRoadmap;