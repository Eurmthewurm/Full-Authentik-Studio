import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from './SEO';

interface HeroProps {
   onNavigate: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
   return (
      <>
         <SEO
            title="Visual Engineering"
            description="Authentik Studio: The Visual Engineering firm behind 8-figure exits. Stop hiring videographers. Retain a Creative & Art Director."
         />
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col pt-32 pb-12 px-4 md:px-12 max-w-[1800px] mx-auto relative overflow-hidden"
         >

            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 w-[60vw] h-[80vh] bg-gradient-to-b from-blue-900/5 to-purple-900/5 blur-3xl pointer-events-none -z-10 transform rotate-12"></div>

            <div className="flex-1 flex flex-col justify-center mb-16 relative">

               {/* Main Title Area - More Asymmetric */}
               <div className="relative mb-24">
                  <motion.div
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  >
                     <div className="flex items-center gap-4 mb-4 ml-2">
                        <span className="w-12 h-[1px] bg-white/30"></span>
                        <div className="relative z-10 max-w-[1800px] mx-auto px-4 md:px-12 h-screen flex flex-col justify-center">
                           <div className="max-w-4xl">
                              <p className="font-mono text-xs md:text-sm text-gray-500 mb-8 tracking-widest uppercase">
                                 EST. 2011 • NETHERLANDS • GLOBAL
                              </p>
                              <h1 className="text-[10vw] md:text-[11vw] leading-[0.8] font-bold font-display tracking-tighter text-white mb-12">
                                 AUTHENTIK
                              </h1>

                              <div className="max-w-2xl">
                                 <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                                    Your Visual Presence Is Determining Your Ceiling.
                                 </h2>
                                 <p className="text-xl text-gray-400 leading-relaxed mb-8">
                                    <span className="text-white font-bold block mb-2">And You Probably Don't Know It.</span>
                                    J-Griff went from $2M to $8M. Not by making better content.<br />
                                    By engineering what his visual presence communicated.
                                 </p>
                                 <p className="text-blue-500 font-medium">
                                    We do that for founders hitting the gap between their offer and their market perception.
                                 </p>
                              </div>
                           </div>

                           <div className="absolute bottom-12 right-12 text-right hidden md:block">
                              <div className="flex items-center justify-end gap-2 mb-2">
                                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                 <span className="font-mono text-xs text-green-500 tracking-widest uppercase">Accepting Q1/Q2 Partners</span>
                              </div>
                              <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                                 Network Credits:<br />
                                 Marvel, BBC, Nat Geo, J-Griff
                              </p>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>

               {/* Unique Navigation Layout - Staggered Grid */}
               <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-24"
               >

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
                           <h2 className="text-4xl font-display font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">The<br />Director</h2>
                           <p className="text-xs font-mono text-gray-400 mt-4 border-t border-white/10 pt-4">
                              CREATIVE & ART DIRECTION<br />
                              <span className="text-gray-600">The Vision behind the Brand.</span>
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
                           <h2 className="text-4xl font-display font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Service<br />Scale</h2>
                           <p className="text-xs font-mono text-gray-400 mt-4 border-t border-white/10 pt-4">
                              BRAND CONSULTING<br />
                              <span className="text-gray-600">For Creators & Educators ($50k+)</span>
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
                           <h2 className="text-4xl font-display font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Product<br />Division</h2>
                           <p className="text-xs font-mono text-gray-400 mt-4 border-t border-white/10 pt-4">
                              AMAZON SPV STUDIO<br />
                              <span className="text-gray-600">Conversion Assets</span>
                           </p>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* THE PHILOSOPHY SECTION */}
               <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="py-24 border-t border-white/10"
               >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                     <div>
                        <h3 className="text-sm font-mono text-blue-500 mb-6 tracking-widest">THE PHILOSOPHY</h3>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                           "The market doesn't buy the best product.<br />
                           <span className="text-gray-500">It buys the clearest signal."</span>
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed font-light">
                           In a high-noise economy, subtlety is invisible. You need to engineer your visual presence to cut through the static.
                           We don't just make things look "good". We align your aesthetic with the psychology of high-ticket trust.
                        </p>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#111] p-6 rounded-lg border border-white/5 hover:bg-[#161616] transition-colors">
                           <h4 className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Signal</h4>
                           <p className="text-xs text-gray-500 leading-relaxed">High-Fidelity inputs create High-Status perception. Pixel perfect is the minimum.</p>
                        </div>
                        <div className="bg-[#111] p-6 rounded-lg border border-white/5 hover:bg-[#161616] transition-colors">
                           <h4 className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 bg-red-500 rounded-full"></div> Noise</h4>
                           <p className="text-xs text-gray-500 leading-relaxed">Inconsistency creates hesitation. Hesitation kills conversion. Silence the friction.</p>
                        </div>
                        <div className="bg-[#111] p-6 rounded-lg border border-white/5 hover:bg-[#161616] transition-colors">
                           <h4 className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Leverage</h4>
                           <p className="text-xs text-gray-500 leading-relaxed">One asset, deployed correctly, can anchor a 7-figure brand for 12 months.</p>
                        </div>
                        <div className="bg-[#111] p-6 rounded-lg border border-white/5 hover:bg-[#161616] transition-colors">
                           <h4 className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div> Scale</h4>
                           <p className="text-xs text-gray-500 leading-relaxed">Systems replace willpower. Visual Architecture replaces manual sales effort.</p>
                        </div>
                     </div>
                  </div>
               </motion.div>

            </div>

            {/* Footer Manifesto Ticker */}
            <div className="w-full border-t border-white/5 bg-black py-4 overflow-hidden relative">
               <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
               <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

               <div className="whitespace-nowrap animate-marquee flex gap-12 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <span>The Physics of Attention</span>
                  <span className="text-blue-500">+++</span>
                  <span>Aesthetics are Leverage</span>
                  <span className="text-blue-500">+++</span>
                  <span>Trust Architecture</span>
                  <span className="text-blue-500">+++</span>
                  <span>Scale Without Chaos</span>
                  <span className="text-blue-500">+++</span>
                  <span>Visual Engineering</span>
                  <span className="text-blue-500">+++</span>
                  <span>The Physics of Attention</span>
                  <span className="text-blue-500">+++</span>
                  <span>Aesthetics are Leverage</span>
                  <span className="text-blue-500">+++</span>
                  <span>Trust Architecture</span>
                  <span className="text-blue-500">+++</span>
                  <span>Scale Without Chaos</span>
                  <span className="text-blue-500">+++</span>
                  <span>Visual Engineering</span>
                  <span className="text-blue-500">+++</span>
                  <span>The Physics of Attention</span>
                  <span className="text-blue-500">+++</span>
                  <span>Aesthetics are Leverage</span>
                  <span className="text-blue-500">+++</span>
                  <span>Trust Architecture</span>
                  <span className="text-blue-500">+++</span>
                  <span>Scale Without Chaos</span>
               </div>
            </div>
         </motion.div>
      </>
   );
};

export default Hero;