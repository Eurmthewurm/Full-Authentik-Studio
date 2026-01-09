import React from 'react';
import { Film, Play, Layers, TrendingUp, Quote, Award, Mail, Calendar, ArrowDownLeft, CheckCircle2, Instagram, ArrowRight, Youtube, Radio, ExternalLink, Users, Sparkles, Fingerprint, ArrowUpRight } from 'lucide-react';

const DirectorPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen page-transition bg-[#050505] text-white selection:bg-white selection:text-black">
      
      {/* Editorial Grid */}
      <div className="fixed inset-0 grid grid-cols-6 pointer-events-none opacity-[0.05] z-0">
        <div className="border-r border-white/50 h-full"></div>
        <div className="border-r border-white/50 h-full"></div>
        <div className="border-r border-white/50 h-full"></div>
        <div className="border-r border-white/50 h-full"></div>
        <div className="border-r border-white/50 h-full"></div>
      </div>

      <div className="relative z-10">
        
        {/* 01. INTRO HEADER */}
        <section className="min-h-[70vh] flex flex-col justify-end pb-12 px-4 md:px-12 relative">
           <div className="border-b border-white/20 pb-12">
              <div className="flex flex-col md:flex-row items-end justify-between mb-8">
                 <div>
                    <span className="font-mono text-xs text-blue-500 tracking-widest mb-2 block">ERMO EGBERTS</span>
                    <h1 className="text-[12vw] leading-[0.85] font-bold font-display tracking-tighter text-white uppercase">
                      Director
                    </h1>
                 </div>
                 <div className="mb-4 md:mb-0 text-right">
                    <p className="text-xl md:text-2xl font-light text-gray-400 max-w-md ml-auto leading-tight">
                       Organic Growth Architect.<br/>
                       <span className="text-white">From $2M to $8M.</span>
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* 02. PRIMARY CASE STUDY: J-GRIFF (The Organic Empire) */}
        <section className="py-24 px-4 md:px-12 bg-white text-black relative overflow-hidden">
           <div className="max-w-[1800px] mx-auto">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start mb-16 relative z-10">
                 <div>
                    <div className="flex items-center gap-3 mb-4">
                       <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                       <span className="font-mono text-xs font-bold uppercase tracking-widest">Case Study 001</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-display font-bold leading-none mb-4">
                       THE ORGANIC<br/>EMPIRE
                    </h2>
                 </div>
                 <div className="md:text-right mt-8 md:mt-0">
                    <p className="text-lg font-bold">LUC Mastermind &<br/>Conscious Wealth Podcast</p>
                    <p className="text-sm text-gray-500 font-mono mt-2">1.5 YEAR SPRINT</p>
                 </div>
              </div>

              {/* THE COUCH PHOTO - HERO */}
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gray-100 mb-24 grayscale hover:grayscale-0 transition-all duration-1000 cursor-none group">
                  <img 
                     src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop" 
                     alt="Ermo and J-Griff Strategy Session" 
                     className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  
                  {/* Floating Caption */}
                  <div className="absolute bottom-8 left-8 bg-white p-4 max-w-xs shadow-2xl rotate-1 group-hover:rotate-0 transition-transform">
                     <p className="text-xs font-mono text-gray-500 mb-1">BEHIND THE SCENES</p>
                     <p className="font-bold text-sm">Strategy session at J-Griff HQ. Mapping the organic funnel architecture.</p>
                  </div>
              </div>

              {/* The Numbers & Narrative */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                 <div className="md:col-span-4">
                    <div className="space-y-12">
                       <div>
                          <p className="text-6xl font-display font-bold mb-2">$8M</p>
                          <p className="font-mono text-xs uppercase tracking-widest text-gray-500 border-t border-black/10 pt-2 inline-block">Peak Annual Revenue</p>
                       </div>
                       <div>
                          <p className="text-6xl font-display font-bold mb-2">100%</p>
                          <p className="font-mono text-xs uppercase tracking-widest text-gray-500 border-t border-black/10 pt-2 inline-block">Organic Traffic (Zero Ads)</p>
                       </div>
                       <div>
                           <a 
                              href="https://www.instagram.com/official_jgriff/" 
                              target="_blank" 
                              rel="noreferrer" 
                              className="inline-flex items-center gap-2 text-sm font-bold border-b border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors"
                           >
                              <Instagram className="w-4 h-4" />
                              @official_jgriff
                           </a>
                       </div>
                    </div>
                 </div>

                 <div className="md:col-span-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                       "We didn't just edit videos. We built a philosophy."
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-600 leading-relaxed font-light">
                       <p>
                          For 1.5 years, I sat in the trenches with Jeremy Griffin (J-Griff). We took <strong>The Conscious Wealth Podcast</strong> and the <strong>LUC Mastermind</strong> from a $2M operation to an $8M empire.
                       </p>
                       <p>
                          The strategy was pure: High-status aesthetics, deep psychological retention editing, and a "Private Equity" visual language that separated him from every other coach in the industry.
                       </p>
                       <div className="md:col-span-2 bg-gray-50 p-8 border-l-4 border-black mt-4">
                          <h4 className="text-black font-bold mb-2 flex items-center gap-2">
                             <TrendingUp className="w-5 h-5" />
                             The Exit Strategy
                          </h4>
                          <p className="text-sm">
                             We built the brand so effectively that J-Griff decided to <strong>shut down the business at its absolute peak</strong> to pivot into his next venture. We didn't just scale a business; we completed the mission.
                          </p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* VIMEO TESTIMONIAL EMBED */}
              <div className="bg-black text-white p-6 md:p-12 relative overflow-hidden rounded-xl md:rounded-3xl shadow-2xl">
                 <div className="absolute top-0 right-0 p-8 opacity-20 font-display text-9xl font-bold pointer-events-none text-white/10">PROOF</div>
                 
                 <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-start">
                    {/* Video Player */}
                    <div className="flex-1 w-full group">
                       <h3 className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-widest flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                          The Debrief • J-Griff x Ermo
                       </h3>
                       <div className="w-full aspect-video bg-[#111] border border-white/20 relative overflow-hidden shadow-2xl rounded-lg">
                          <iframe 
                             src="https://player.vimeo.com/video/1112128628?title=0&byline=0&portrait=0" 
                             className="absolute inset-0 w-full h-full"
                             frameBorder="0" 
                             allow="autoplay; fullscreen; picture-in-picture" 
                             allowFullScreen
                          ></iframe>
                       </div>
                    </div>
                    
                    {/* Quote & Context */}
                    <div className="flex-1 flex flex-col justify-center h-full lg:pt-8">
                       <Quote className="w-12 h-12 text-blue-500 mb-6" />
                       <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                          "We went from $2M to $8M. Ermo was the architect of the visual standard that made that pricing possible."
                       </h3>
                       
                       <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 bg-gray-800 rounded-full overflow-hidden">
                              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                          </div>
                          <div>
                              <p className="font-bold text-white">JEREMY GRIFFIN</p>
                              <p className="font-mono text-xs text-gray-400">FOUNDER, LUC MASTERMIND</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

           </div>
        </section>

        {/* 03. CASE STUDY 02: AARON ABKE (Personal Brand) */}
        <section className="py-24 px-4 md:px-12 bg-[#080808] text-white border-t border-white/10 relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto relative z-10">
               <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                  <div>
                     <div className="flex items-center gap-3 mb-4">
                        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest">Case Study 002</span>
                     </div>
                     <h2 className="text-6xl md:text-8xl font-display font-bold leading-none mb-4">
                        AARON<br/>ABKE
                     </h2>
                     <p className="text-xl text-gray-400 max-w-lg">
                        Spiritual Teacher & Author. Building the digital infrastructure for mass awakening.
                     </p>
                  </div>
                  <div className="text-right mt-8 md:mt-0">
                     <div className="bg-white/5 border border-white/10 p-4 rounded-xl inline-block text-left">
                        <p className="text-4xl font-bold font-display text-white">300K+</p>
                        <p className="text-xs font-mono text-gray-500 tracking-widest uppercase mt-1">YouTube Subscribers</p>
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Evidence / Chat */}
                  <div className="bg-[#111] border border-white/10 p-8 rounded-2xl relative order-2 md:order-1">
                      <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                          <span className="text-xs font-mono text-gray-500">RELATIONSHIP</span>
                          <div className="flex items-center gap-1 text-green-500">
                             <CheckCircle2 className="w-3 h-3" />
                             <span className="text-[10px] font-bold uppercase">Verified Client</span>
                          </div>
                       </div>
                       <div className="space-y-6 font-sans text-sm">
                          <div className="flex gap-4">
                             <div className="w-10 h-10 rounded-full bg-gray-800 flex-shrink-0"></div>
                             <div className="bg-gray-800 p-4 rounded-2xl rounded-tl-none text-gray-300 max-w-[80%]">
                                <p className="leading-relaxed">The goal is to translate high-frequency concepts into visual assets that retain attention without losing depth.</p>
                             </div>
                          </div>
                          <div className="flex gap-4 flex-row-reverse">
                             <div className="w-10 h-10 rounded-full bg-blue-900 flex-shrink-0 flex items-center justify-center text-xs font-bold text-white border border-blue-500">AA</div>
                             <div className="bg-blue-900/20 border border-blue-500/20 p-4 rounded-2xl rounded-tr-none text-white max-w-[90%]">
                                <p className="leading-relaxed">I love the work you're doing and am grateful to be working with you! The aesthetic is exactly what this message needs. 🙏❤️</p>
                             </div>
                          </div>
                       </div>
                       <div className="mt-8 pt-6 border-t border-white/5">
                          <a 
                             href="https://www.youtube.com/@AaronAbke" 
                             target="_blank"
                             rel="noreferrer"
                             className="flex items-center justify-between group hover:text-blue-400 transition-colors"
                          >
                             <span className="font-bold flex items-center gap-2">
                                <Youtube className="w-5 h-5 text-red-500" />
                                youtube.com/@AaronAbke
                             </span>
                             <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </a>
                       </div>
                  </div>

                  {/* Visual */}
                  <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden order-1 md:order-2 group">
                     <img 
                        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop" 
                        alt="Aaron Abke Visual Identity" 
                        className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                     <div className="absolute bottom-8 left-8">
                        <p className="font-display text-3xl font-bold">New Earth<br/>Consciousness</p>
                     </div>
                  </div>
               </div>
            </div>
        </section>

        {/* 04. CASE STUDY 03: THE GREAT AWAKENING (Podcast) */}
        <section className="py-24 px-4 md:px-12 bg-[#050505] text-white border-t border-white/10 relative overflow-hidden">
           {/* Abstract Background */}
           <div className="absolute top-0 right-0 w-[50vw] h-full bg-purple-900/5 blur-3xl pointer-events-none"></div>

           <div className="max-w-[1800px] mx-auto relative z-10">
               <div className="flex items-center gap-4 mb-12">
                   <span className="w-16 h-px bg-white/30"></span>
                   <span className="font-mono text-xs text-purple-400 tracking-widest">CASE STUDY 003 • COLLABORATION</span>
               </div>

               <div className="flex flex-col lg:flex-row gap-16 items-center">
                   
                   {/* Left: Podcast Cover/Visual */}
                   <div className="w-full lg:w-1/3">
                      <div className="aspect-[4/5] relative rounded-lg overflow-hidden border border-white/10 shadow-2xl group cursor-pointer">
                         <img 
                            src="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=1000&auto=format&fit=crop" 
                            alt="The Great Awakening Podcast" 
                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                         />
                         <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                         <div className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-white shadow-lg flex items-center gap-2">
                            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            Live Show
                         </div>
                         <div className="absolute bottom-6 left-6 right-6">
                            <h3 className="text-3xl font-bold mb-1 leading-tight">The Great Awakening</h3>
                            <p className="text-xs font-mono text-gray-300">PREMIERE SEASON</p>
                         </div>
                      </div>
                   </div>

                   {/* Right: Content */}
                   <div className="w-full lg:w-2/3">
                      <h2 className="text-5xl md:text-8xl font-display font-bold leading-none mb-8">
                         THE GREAT<br/>
                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">AWAKENING</span>
                      </h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                             <Users className="w-6 h-6 text-purple-400 mb-4" />
                             <h4 className="font-bold text-lg mb-2">The Collaboration</h4>
                             <p className="text-sm text-gray-400 leading-relaxed">
                                Join <strong>Aaron Abke</strong> and <strong>Jeremy Griffin</strong> as they guide you through humanity's evolution, breaking down both the spiritual and societal shifts shaping our world.
                             </p>
                          </div>
                          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                             <Sparkles className="w-6 h-6 text-blue-400 mb-4" />
                             <h4 className="font-bold text-lg mb-2">The Mission</h4>
                             <p className="text-sm text-gray-400 leading-relaxed">
                                No fear. No illusions. Just truth. Unfiltered truth and unmatched insights starting the conversations that nobody else will.
                             </p>
                          </div>
                      </div>

                      <div className="mb-12">
                          <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed border-l-2 border-purple-500 pl-6 italic">
                             "The greatest show on Earth is happening before our eyes. Behind the headlines and beyond the chaos, there’s a deeper game at play—and we’re here to pull back the curtain."
                          </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-6">
                          <a 
                             href="https://www.youtube.com/@TheGreatAwakeningPodcast" 
                             target="_blank"
                             rel="noreferrer"
                             className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center gap-3 justify-center"
                          >
                             <Youtube className="w-5 h-5 text-red-600" />
                             Watch The Show
                          </a>
                          <div className="flex items-center gap-2 text-gray-500 text-sm justify-center sm:justify-start">
                             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                             <span>New Episodes Weekly</span>
                          </div>
                      </div>
                   </div>

               </div>
           </div>
        </section>

        {/* 05. THE HUMAN ALGORITHM (Philosophy) */}
        <section className="py-32 px-4 md:px-12 bg-white text-black relative">
           <div className="max-w-[1800px] mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                 <div>
                    <h2 className="text-5xl md:text-8xl font-display font-bold leading-none mb-6">
                       THE HUMAN<br/>ALGORITHM
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                       Algorithms predict behavior. Empathy moves markets.<br/>
                       <span className="text-black font-bold">I don't just direct. I immerse.</span>
                    </p>
                 </div>
                 <div className="hidden md:block">
                     <Fingerprint className="w-24 h-24 text-gray-200" />
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 
                 {/* Card 1: Creative Direction Reel */}
                 <a 
                    href="https://www.instagram.com/p/C4yrt0GvrIBu2VEI6BNTzYSXvgqEq8ZL4hg7hE0/"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative aspect-[4/5] bg-black rounded-lg overflow-hidden cursor-pointer"
                 >
                    <img 
                       src="https://images.unsplash.com/photo-1601506521793-dc748fc80b67?q=80&w=1000&auto=format&fit=crop" // Placeholder for onset/direction
                       alt="Creative Direction Reel"
                       className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                       <div className="flex justify-between items-start">
                          <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                             <span className="text-xs font-mono text-white">REEL • DIRECTING</span>
                          </div>
                          <ArrowUpRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                       </div>
                       
                       <div>
                          <h3 className="text-3xl font-display font-bold text-white mb-2">The Director's Eye</h3>
                          <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                             Behind the scenes. Orchestrating the vision in real-time.
                          </p>
                       </div>
                    </div>
                    {/* Play Button Overlay */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                       <Instagram className="w-8 h-8 text-white" />
                    </div>
                 </a>

                 {/* Card 2: Immersion Experience */}
                 <a 
                    href="https://www.instagram.com/p/C5oxg6RS8nl51OoxNzmpNm6MjPasuCcEHVGqeM0/"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative aspect-[4/5] bg-[#111] rounded-lg overflow-hidden cursor-pointer md:mt-24" // Staggered
                 >
                    <img 
                       src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop" // Placeholder for lifestyle/immersion
                       alt="Immersion Experience"
                       className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale"
                    />
                    <div className="absolute inset-0 flex flex-col justify-between p-8">
                       <div className="flex justify-between items-start">
                          <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                             <span className="text-xs font-mono text-white">LIFESTYLE • IMMERSION</span>
                          </div>
                          <ArrowUpRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                       </div>
                       
                       <div>
                          <h3 className="text-3xl font-display font-bold text-white mb-2">Total Immersion</h3>
                          <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                             I live the brand to understand the customer. Authenticity cannot be faked.
                          </p>
                       </div>
                    </div>
                 </a>

              </div>
           </div>
        </section>

        {/* 06. HIRE FOOTER */}
        <section id="contact-director" className="py-32 px-4 md:px-12 bg-white text-black text-center">
           <p className="font-mono text-xs text-blue-600 tracking-widest mb-6">AVAILABILITY: Q3 2026</p>
           <h2 className="text-5xl md:text-9xl font-display font-bold mb-12 uppercase tracking-tighter">
              Let's Build<br/>Your Legacy
           </h2>
           <div className="flex flex-col md:flex-row justify-center gap-4">
              <a href="mailto:ermo@authentik.studio" className="px-8 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-all flex items-center gap-2">
                 <Mail className="w-4 h-4" /> Email The Director
              </a>
              <a href="#" className="px-8 py-4 border border-black font-bold hover:bg-gray-100 transition-all flex items-center gap-2">
                 <Calendar className="w-4 h-4" /> Book Consultation
              </a>
           </div>
        </section>

      </div>
    </div>
  );
};

export default DirectorPage;