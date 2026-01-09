import React from 'react';
import { Film, Play, Layers, TrendingUp, Quote, Award, Mail, Calendar, ArrowDownLeft, CheckCircle2, Instagram, ArrowRight, Youtube, Radio, ExternalLink, Users, Sparkles, Fingerprint, ArrowUpRight, Globe, MessageCircle } from 'lucide-react';

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

        {/* 03. CASE STUDY 02: AARON ABKE (Redesigned with DM Proof + Headshot) */}
        <section className="relative w-full bg-[#161a25] text-white overflow-hidden border-t border-white/10">
            {/* Background Texture - Galaxy/Stars Banner Style */}
            <div 
               className="absolute inset-0 z-0 opacity-40"
               style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2500&auto=format&fit=crop')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
               }}
            >
               <div className="absolute inset-0 bg-gradient-to-r from-[#161a25] via-[#161a25]/60 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-[1800px] mx-auto px-4 md:px-12 py-24">
               
               {/* Header Info */}
               <div className="flex flex-col md:flex-row items-end justify-between mb-16">
                  <div>
                      <div className="inline-flex items-center gap-3 mb-6 bg-blue-500/10 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/20">
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-200">Case Study 002 • 300K+ Subs</span>
                     </div>
                     <h2 className="text-5xl md:text-8xl font-display font-light uppercase tracking-wide leading-none">
                        Aaron<br/>
                        <span className="font-bold">Abke</span>
                     </h2>
                  </div>
                  <div className="mt-8 md:mt-0">
                     <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-4 h-4 text-blue-400" />
                        <span className="font-bold">www.aaronabke.com</span>
                     </div>
                     <p className="text-gray-400 text-sm max-w-xs text-right">
                        4D University. Unity Consciousness.
                     </p>
                  </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left: Aaron Headshot */}
                  <div className="lg:col-span-4 flex justify-center lg:justify-start">
                     <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#161a25] to-transparent opacity-60 z-10"></div>
                        <img 
                           src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop" // REPLACED: Better placeholder matching the smiling headshot vibe
                           alt="Aaron Abke Portrait" 
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                           <div className="flex items-center gap-2 mb-1">
                              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                              <span className="text-xs font-mono uppercase tracking-widest text-green-400">Online</span>
                           </div>
                           <p className="text-2xl font-bold font-display">Spiritual Teacher</p>
                        </div>
                     </div>
                  </div>

                  {/* Right: The DM Proof (Pixel Perfect Recreation) */}
                  <div className="lg:col-span-8">
                     <div className="bg-[#1f232e] rounded-xl border border-white/10 shadow-2xl overflow-hidden max-w-3xl mx-auto lg:ml-0">
                        {/* Fake Browser Header */}
                        <div className="bg-[#161a25] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                           <div className="flex items-center gap-3">
                              <div className="relative">
                                 <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100" className="w-8 h-8 rounded-full object-cover" />
                                 <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#161a25]"></div>
                              </div>
                              <div>
                                 <p className="text-sm font-bold text-white flex items-center gap-1">
                                    Aaron Abke <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                 </p>
                              </div>
                           </div>
                           <div className="flex gap-2">
                              <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                           </div>
                        </div>

                        {/* Chat Area */}
                        <div className="p-6 md:p-8 space-y-8 font-sans text-sm md:text-base bg-[#1f232e]">
                           
                           {/* Timestamp */}
                           <div className="flex justify-center">
                              <span className="text-[10px] text-gray-500 font-medium bg-[#161a25] px-3 py-1 rounded-full border border-white/5">
                                 Monday, October 7th
                              </span>
                           </div>

                           {/* Ermo Message */}
                           <div className="flex gap-4 items-start">
                              <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden border border-white/10">
                                 <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=100" alt="Ermo" className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1">
                                 <div className="flex items-baseline gap-2 mb-1">
                                    <span className="font-bold text-white">Ermo Egberts (INFJ-A)</span>
                                    <span className="text-[10px] text-gray-500">2:57 PM</span>
                                 </div>
                                 <div className="text-gray-300 leading-relaxed space-y-2">
                                    <p>Hey Aaron!</p>
                                    <p>I just wanted to take a moment to properly introduce myself as the lead creative and long-form content editor at J-Griff. 🙂</p>
                                    <p>It's awesome to see that you're vibing with the hooks I put together! I also have to say, the way you teach, carry yourself, and deliver such impactful value is seriously inspiring! ✨</p>
                                    <p>Let's create & make a lasting impact!</p>
                                 </div>
                              </div>
                           </div>

                           {/* Timestamp Today */}
                           <div className="flex justify-center">
                              <span className="text-[10px] text-gray-500 font-medium bg-[#161a25] px-3 py-1 rounded-full border border-white/5">
                                 Today
                              </span>
                           </div>

                           {/* Aaron Reply */}
                           <div className="flex gap-4 items-start">
                              <div className="w-10 h-10 rounded-full bg-blue-900 flex-shrink-0 overflow-hidden border border-white/10 relative">
                                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100" alt="Aaron" className="w-full h-full object-cover" />
                                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                                     <div className="w-2 h-2 bg-black rounded-full text-[4px] flex items-center justify-center font-bold">4</div>
                                  </div>
                              </div>
                              <div className="flex-1">
                                 <div className="flex items-baseline gap-2 mb-1">
                                    <span className="font-bold text-white">Aaron Abke</span>
                                    <span className="text-[10px] text-gray-500">5:44 PM</span>
                                 </div>
                                 <div className="text-gray-300 leading-relaxed bg-blue-500/5 p-4 rounded-r-2xl rounded-bl-2xl border border-blue-500/10">
                                    <p>Hey brother! Great to meet you. I love the work you're doing and am grateful to be working with you! 🙏❤️</p>
                                    <p className="mt-2">Excited to create even more magic together 🙌</p>
                                 </div>
                                 <div className="mt-2 flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center font-bold text-[8px]">4</div>
                                    <span className="text-xs text-gray-500">Aaron Abke is from <span className="text-white font-bold">4DU</span></span>
                                 </div>
                              </div>
                           </div>

                        </div>
                        
                        {/* Input Area (Fake) */}
                        <div className="p-4 bg-[#161a25] border-t border-white/5">
                           <div className="w-full h-10 bg-[#1f232e] rounded-lg border border-white/10 flex items-center px-4 text-sm text-gray-600">
                              Message Aaron Abke...
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </section>

        {/* 04. CASE STUDY 03: THE GREAT AWAKENING (Compact, Gold/Blue Aesthetic) */}
        <section className="py-20 px-4 md:px-12 bg-[#050505] text-white border-t border-white/10 relative overflow-hidden">
           {/* Abstract Background - Gold/Blue theme */}
           <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] to-[#050505]"></div>
           <div className="absolute top-0 right-0 w-[50vw] h-[500px] bg-blue-900/10 blur-[100px] pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[30vw] h-[300px] bg-yellow-600/5 blur-[80px] pointer-events-none"></div>

           <div className="max-w-[1200px] mx-auto relative z-10">
               <div className="flex items-center gap-4 mb-6 justify-center">
                   <span className="w-8 h-px bg-yellow-500/50"></span>
                   <span className="font-mono text-xs text-yellow-500 tracking-widest uppercase">Collaboration</span>
                   <span className="w-8 h-px bg-yellow-500/50"></span>
               </div>

               <div className="text-center mb-8">
                   <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-2">
                      The Great <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">Awakening</span>
                   </h2>
                   <p className="text-gray-400 max-w-lg mx-auto text-xs md:text-sm">
                      The Story of Humanity's Evolution. Featuring Aaron Abke & Jeremy Griffin.
                   </p>
               </div>

               <div className="max-w-3xl mx-auto">
                   {/* YouTube Hook */}
                   <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-yellow-500/20 relative group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10"></div>
                      <iframe 
                         className="absolute inset-0 w-full h-full"
                         src="https://www.youtube.com/embed/k8sKYCDetuw?start=0" 
                         title="The Great Awakening - Hook" 
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                         allowFullScreen
                      ></iframe>
                   </div>
                   
                   <div className="flex justify-between items-center mt-4 px-2">
                       <div>
                          <p className="text-base font-bold text-white">Episode 01: The Hook</p>
                       </div>
                       <a 
                          href="https://www.youtube.com/@TheGreatAwakeningPodcast"
                          target="_blank"
                          rel="noreferrer" 
                          className="flex items-center gap-2 text-yellow-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                       >
                          Watch Series <ArrowRight className="w-3 h-3" />
                       </a>
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