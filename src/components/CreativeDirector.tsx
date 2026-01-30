import React from 'react';
import { Film, Play, Layers, TrendingUp } from 'lucide-react';

const CreativeDirector: React.FC = () => {
   return (
      <section id="director" className="py-32 px-4 bg-surface relative overflow-hidden">
         {/* Background Noise Texture */}
         <div className="absolute inset-0 opacity-[0.03] bg-noise pointer-events-none"></div>

         <div className="max-w-7xl mx-auto relative z-10">

            {/* Intro */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-32">
               <div className="flex-1">
                  <h2 className="text-[12vw] md:text-9xl font-bold leading-[0.8] tracking-tighter text-white/5 absolute top-0 left-0 -translate-y-1/2 pointer-events-none select-none">
                     VISION
                  </h2>
                  <div className="relative pt-12 md:pt-24">
                     <h3 className="text-sm font-mono text-blue-500 mb-6">ERMO / CREATIVE & ART DIRECTOR</h3>
                     <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        13 Years of <br />
                        <span className="text-gray-600">Visual Mastery.</span>
                     </h2>
                     <p className="text-xl text-gray-400 leading-relaxed font-light">
                        I don't just edit videos. I construct narratives that act as economic levers.
                        With over a decade in video production, creative & art direction, and high-end editing,
                        I have developed a "Physics of Attention" that works across high-ticket education,
                        consulting, and e-commerce.
                     </p>
                  </div>
               </div>
               <div className="flex-1 flex items-end">
                  <div className="w-full grid grid-cols-2 gap-4">
                     <div className="p-6 border border-white/10 bg-background/50 backdrop-blur-sm">
                        <p className="text-4xl font-bold text-white mb-2">13+</p>
                        <p className="text-xs font-mono text-gray-500">YEARS EXPERIENCE</p>
                     </div>
                     <div className="p-6 border border-white/10 bg-background/50 backdrop-blur-sm">
                        <p className="text-4xl font-bold text-white mb-2">$8M</p>
                        <p className="text-xs font-mono text-gray-500">CLIENT REVENUE SCALED</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Case Study Highlight: J-Griff */}
            <div className="mb-32">
               <div className="border-t border-white/10 pt-8 mb-12 flex justify-between items-end">
                  <h3 className="text-2xl font-bold">The J-Griff Protocol</h3>
                  <p className="font-mono text-xs text-green-400">SUCCESS STORY</p>
               </div>

               <div className="bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="grid grid-cols-1 md:grid-cols-2">
                     <div className="p-12 md:p-20 flex flex-col justify-center relative z-10">
                        <TrendingUp className="w-12 h-12 text-blue-500 mb-8" />
                        <h4 className="text-5xl font-bold mb-6">$2M <span className="text-gray-600">to</span> $8M</h4>
                        <p className="text-xl text-gray-300 mb-8 font-light">
                           In just 1.5 years, we completely overhauled the J-Griff brand.
                           We moved from "content creator" vibes to "Industry Authority" aesthetics.
                        </p>
                        <ul className="space-y-4 font-mono text-sm text-gray-500">
                           <li className="flex items-center gap-3"><span className="w-1 h-1 bg-blue-500"></span>Complete Visual Identity Overhaul</li>
                           <li className="flex items-center gap-3"><span className="w-1 h-1 bg-blue-500"></span>High-Ticket Funnel Architecture</li>
                           <li className="flex items-center gap-3"><span className="w-1 h-1 bg-blue-500"></span>Editorial Video Production</li>
                        </ul>
                     </div>
                     <div className="bg-gray-900 relative min-h-[400px]">
                        <img
                           src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                           alt="J-Griff Case Study"
                           className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                        />
                     </div>
                  </div>
               </div>
            </div>

            {/* Client List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-white/10 pt-16">
               <div>
                  <h3 className="text-2xl font-bold mb-8">Selected Collaborations</h3>
                  <div className="space-y-8">
                     <div className="group cursor-pointer">
                        <h4 className="text-4xl md:text-5xl font-bold text-gray-500 group-hover:text-white transition-colors">Aaron Abke</h4>
                        <p className="text-sm font-mono text-gray-600 mt-2 group-hover:text-blue-400">SPIRITUAL EDUCATION • CONTENT STRATEGY</p>
                     </div>
                     <div className="group cursor-pointer">
                        <h4 className="text-4xl md:text-5xl font-bold text-gray-500 group-hover:text-white transition-colors">J-Griff</h4>
                        <p className="text-sm font-mono text-gray-600 mt-2 group-hover:text-blue-400">BUSINESS CONSULTING • BRAND SCALING</p>
                     </div>
                     <div className="group cursor-pointer">
                        <h4 className="text-4xl md:text-5xl font-bold text-gray-500 group-hover:text-white transition-colors">Authentik</h4>
                        <p className="text-sm font-mono text-gray-600 mt-2 group-hover:text-blue-400">PRODUCT STUDIO • FOUNDER</p>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col justify-between">
                  <p className="text-lg text-gray-400 font-light leading-relaxed">
                     "Working with Ermo isn't about getting a video edited. It's about translating your intellectual property into a visual asset class.
                     His 13-year background means he understands the technicals of the frame and the psychology of the viewer."
                  </p>

                  <div className="mt-12 grid grid-cols-3 gap-4">
                     <div className="h-32 bg-[#111] rounded-lg border border-white/5 flex flex-col items-center justify-center gap-2 group hover:bg-[#151515] transition-colors">
                        <Film className="w-6 h-6 text-gray-600 group-hover:text-white" />
                        <span className="text-xs font-mono text-gray-500">PROD</span>
                     </div>
                     <div className="h-32 bg-[#111] rounded-lg border border-white/5 flex flex-col items-center justify-center gap-2 group hover:bg-[#151515] transition-colors">
                        <Layers className="w-6 h-6 text-gray-600 group-hover:text-white" />
                        <span className="text-xs font-mono text-gray-500">DIR</span>
                     </div>
                     <div className="h-32 bg-[#111] rounded-lg border border-white/5 flex flex-col items-center justify-center gap-2 group hover:bg-[#151515] transition-colors">
                        <Play className="w-6 h-6 text-gray-600 group-hover:text-white" />
                        <span className="text-xs font-mono text-gray-500">EDIT</span>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </section>
   );
};

export default CreativeDirector;