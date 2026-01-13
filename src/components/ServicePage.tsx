import React, { useState } from 'react';
import { Target, TrendingUp, CheckCircle, ArrowRight, Video, Camera, Plus, BarChart3, Users, Globe, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from './SEO';

interface ServicePageProps {
   onContactClick: () => void;
}

const ServicePage: React.FC<ServicePageProps> = ({ onContactClick }) => {
   const [activeTab, setActiveTab] = useState<'video' | 'director'>('director');

   return (
      <>
         <SEO
            title="Service Scaling | Authentik Studio"
            description="Brand Consulting for Agencies & Coaches. Scale your service business past $50k/mo with Authority Content."
         />
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-20 bg-background text-primary selection:bg-blue-500/30 font-sans cursor-none flex flex-col page-transition"
         >

            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none -z-10">
               <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-900/10 blur-[120px]"></div>
               <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-purple-900/10 blur-[120px]"></div>
            </div>

            {/* 1. HERO HEADER */}
            <section className="min-h-[60vh] flex flex-col justify-end pb-12 px-4 md:px-12 max-w-[1800px] mx-auto border-b border-white/5 relative">
               <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end"
               >
                  <div>
                     <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-px bg-purple-500"></span>
                        <span className="font-mono text-xs text-purple-400 tracking-widest uppercase">Consulting Division</span>
                     </div>
                     <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
                        SERVICE<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">SCALING</span>
                     </h1>
                  </div>
                  <div className="md:max-w-md md:ml-auto">
                     <p className="text-xl md:text-2xl font-light text-gray-400 mb-6 leading-relaxed">
                        We install the <span className="text-white font-medium">Visual Authority Systems</span> needed to scale High-Ticket B2B offers past $50k/mo.
                     </p>
                     <div className="flex gap-4">
                        <div className="bg-[#111] px-4 py-2 rounded border border-white/10 flex items-center gap-2">
                           <Target className="w-4 h-4 text-purple-500" />
                           <span className="text-xs font-mono text-gray-400">TARGET: AGENCIES / COACHES</span>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </section>

            {/* 2. THE PROBLEM (COMPARISON) */}
            <section className="py-24 px-4 md:px-12 max-w-[1800px] mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">You don't need "More Content".<br />You need <span className="text-blue-500">Better Positioning.</span></h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">The market is flooded with "content editors". Stop competing on their level.</p>
               </div>

               <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden relative">
                  {/* Toggle Header */}
                  <div className="grid grid-cols-2 border-b border-white/10">
                     <button
                        onClick={() => setActiveTab('video')}
                        className={`p-6 md:p-8 flex items-center justify-center gap-3 transition-colors ${activeTab === 'video' ? 'bg-[#111] text-gray-400' : 'bg-[#050505] text-gray-600 hover:bg-[#0a0a0a]'}`}
                     >
                        <Video className="w-5 h-5 opacity-50" />
                        <span className="font-bold uppercase tracking-wider text-sm md:text-base">The Videographer</span>
                     </button>
                     <button
                        onClick={() => setActiveTab('director')}
                        className={`p-6 md:p-8 flex items-center justify-center gap-3 transition-colors relative ${activeTab === 'director' ? 'bg-[#0a0a0a] text-purple-400' : 'bg-[#050505] text-gray-500 hover:bg-[#0a0a0a]'}`}
                     >
                        {activeTab === 'director' && <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>}
                        <Target className="w-5 h-5" />
                        <span className="font-bold uppercase tracking-wider text-sm md:text-base">The Creative Partner</span>
                     </button>
                  </div>

                  {/* Toggle Content */}
                  <div className="p-8 md:p-16 min-h-[400px]">
                     {activeTab === 'video' ? (
                        <motion.div
                           initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                           className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        >
                           <div className="order-2 md:order-1 opacity-50">
                              <h3 className="text-2xl font-bold mb-6 text-gray-500">The "Commodity" Trap</h3>
                              <ul className="space-y-4 text-gray-400 font-mono text-sm">
                                 <li className="flex gap-3">
                                    <span className="text-red-900 font-bold">✖</span> Asks: "What do you want me to shoot?"
                                 </li>
                                 <li className="flex gap-3">
                                    <span className="text-red-900 font-bold">✖</span> Focuses on: Camera gear & transitions
                                 </li>
                                 <li className="flex gap-3">
                                    <span className="text-red-900 font-bold">✖</span> Result: Pretty videos that don't sell
                                 </li>
                                 <li className="flex gap-3">
                                    <span className="text-red-900 font-bold">✖</span> Cost: Expense (Low ROI)
                                 </li>
                              </ul>
                           </div>
                           <div className="order-1 md:order-2 flex justify-center">
                              <Camera className="w-48 h-48 text-gray-800" strokeWidth={1} />
                           </div>
                        </motion.div>
                     ) : (
                        <motion.div
                           initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                           className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        >
                           <div className="order-2 md:order-1">
                              <div className="flex items-center gap-2 mb-2">
                                 <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                 <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">High Leverage</span>
                              </div>
                              <h3 className="text-3xl font-display font-bold mb-6 text-white">The "Authority" Asset</h3>
                              <ul className="space-y-6">
                                 <li className="flex gap-4 items-start bg-[#111] p-4 rounded border border-white/5 hover:border-purple-500/30 transition-colors">
                                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                       <strong className="block text-white mb-1">Diagnoses the Bottleneck</strong>
                                       <span className="text-sm text-gray-400">"Your offer isn't converting because your trust signals are weak."</span>
                                    </div>
                                 </li>
                                 <li className="flex gap-4 items-start bg-[#111] p-4 rounded border border-white/5 hover:border-purple-500/30 transition-colors">
                                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                       <strong className="block text-white mb-1">Engineers the Solution</strong>
                                       <span className="text-sm text-gray-400">Builds the specific assets (VSL, Case Study, Ads) needed to fix it.</span>
                                    </div>
                                 </li>
                                 <li className="flex gap-4 items-start bg-[#111] p-4 rounded border border-white/5 hover:border-purple-500/30 transition-colors">
                                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                       <strong className="block text-white mb-1">Result: Revenue</strong>
                                       <span className="text-sm text-gray-400">Investment (High ROI). Direct correlation to closed deals.</span>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div className="order-1 md:order-2 flex justify-center relative">
                              <div className="absolute inset-0 bg-purple-500/20 blur-[80px]"></div>
                              <TrendingUp className="w-48 h-48 text-purple-500 relative z-10" strokeWidth={1} />
                           </div>
                        </motion.div>
                     )}
                  </div>
               </div>
            </section>

            {/* 3. THE INFRASTRUCTURE (SERVICES) */}
            <section className="bg-white text-black py-24 px-4 md:px-12">
               <div className="max-w-[1800px] mx-auto">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
                     <div>
                        <span className="font-mono text-xs text-blue-600 uppercase tracking-widest mb-2 block">Our Product</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold leading-none">
                           VISUAL<br />INFRASTRUCTURE
                        </h2>
                     </div>
                     <p className="md:text-right max-w-sm text-gray-500 mt-6 md:mt-0">
                        We don't sell "hours". We install systems. <br />
                        Choose the level of support your agency needs.
                     </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                     {/* Tier 1: The Audit */}
                     <div className="group border border-gray-200 p-8 hover:bg-black hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[400px]">
                        <div>
                           <div className="w-12 h-12 bg-gray-100 group-hover:bg-gray-800 rounded-full flex items-center justify-center mb-8 transition-colors">
                              <BarChart3 className="w-6 h-6 text-black group-hover:text-white" />
                           </div>
                           <h3 className="text-2xl font-bold mb-4">The Brand Audit</h3>
                           <p className="text-gray-500 group-hover:text-gray-400 mb-6">
                              For founders who are stuck. We tear down your current visual presence and identify the exact "Trust Leaks" costing you clients.
                           </p>
                           <ul className="space-y-2 text-sm font-mono text-gray-400 group-hover:text-gray-500">
                              <li>• Website UX Review</li>
                              <li>• Social Content Analysis</li>
                              <li>• Competitor Benchmarking</li>
                           </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-100 group-hover:border-white/10 flex justify-between items-end">
                           <div>
                              <p className="text-xs uppercase tracking-widest text-gray-400">Investment</p>
                              <p className="text-xl font-bold">$2,500</p>
                           </div>
                           <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                     </div>

                     {/* Tier 2: The Sprint (Most Popular) */}
                     <div className="group bg-[#f5f5f7] p-8 hover:bg-black hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[400px] relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 font-mono uppercase">
                           Most Popular
                        </div>
                        <div>
                           <div className="w-12 h-12 bg-white group-hover:bg-gray-800 rounded-full flex items-center justify-center mb-8 transition-colors">
                              <Plus className="w-6 h-6 text-black group-hover:text-white" />
                           </div>
                           <h3 className="text-2xl font-bold mb-4">The Trust Sprint</h3>
                           <p className="text-gray-500 group-hover:text-gray-400 mb-6">
                              A 30-day overhaul of your core conversion assets. We replace your "amateur" content with "authority" assets.
                           </p>
                           <ul className="space-y-2 text-sm font-mono text-gray-400 group-hover:text-gray-500">
                              <li>• 1x Flagship VSL (Script to Screen)</li>
                              <li>• 3x Case Study Documentaries</li>
                              <li>• Landing Page Copy Refinement</li>
                           </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-200 group-hover:border-white/10 flex justify-between items-end">
                           <div>
                              <p className="text-xs uppercase tracking-widest text-gray-400">Investment</p>
                              <p className="text-xl font-bold">$12,000</p>
                           </div>
                           <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                     </div>

                     {/* Tier 3: The Retainer */}
                     <div className="group border border-gray-200 p-8 hover:bg-black hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[400px]">
                        <div>
                           <div className="w-12 h-12 bg-gray-100 group-hover:bg-gray-800 rounded-full flex items-center justify-center mb-8 transition-colors">
                              <Users className="w-6 h-6 text-black group-hover:text-white" />
                           </div>
                           <h3 className="text-2xl font-bold mb-4">Fractional CD</h3>
                           <p className="text-gray-500 group-hover:text-gray-400 mb-6">
                              I join your leadership team as Fractional Creative Director. I manage your editors, designers, and content strategy ongoing.
                           </p>
                           <ul className="space-y-2 text-sm font-mono text-gray-400 group-hover:text-gray-500">
                              <li>• Weekly Strategy Calls</li>
                              <li>• Team Management & QA</li>
                              <li>• Monthly Content Systems</li>
                           </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-100 group-hover:border-white/10 flex justify-between items-end">
                           <div>
                              <p className="text-xs uppercase tracking-widest text-gray-400">Investment</p>
                              <p className="text-xl font-bold">$5k/mo</p>
                           </div>
                           <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </div>
                     </div>

                  </div>
               </div>
            </section>

            {/* 4. TRACTION / PROOF */}
            <section className="py-20 border-t border-white/5 bg-[#050505]">
               <div className="max-w-[1800px] mx-auto px-4 md:px-12 text-center">
                  <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-12">Trusted by founders scaling past 7-Figures</p>
                  <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                     <h3 className="text-2xl font-bold text-white">J-GRIFF</h3>
                     <h3 className="text-2xl font-bold text-white">AARON ABKE</h3>
                     <h3 className="text-2xl font-bold text-white">SKY PRO CYCLING</h3>
                     <h3 className="text-2xl font-bold text-white">BLACKMAGIC</h3>
                  </div>
               </div>
            </section>

            {/* 5. CTA */}
            <section className="py-24 px-4 md:px-12 text-center relative overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

               <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to Professionalize?</h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                     Your brand is currently leaking revenue because your visuals don't match your price point. Let's fix that.
                  </p>
                  <button
                     onClick={onContactClick}
                     className="px-12 py-5 bg-white text-black font-bold text-lg rounded hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                  >
                     Book Your Brand Audit
                  </button>
               </div>
            </section>

         </motion.div>
      </>
   );
};

export default ServicePage;