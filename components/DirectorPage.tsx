import React from 'react';
import { Film, Play, Layers, TrendingUp, Quote, Award, Mail, Calendar, ArrowDownLeft, CheckCircle2, Instagram, ArrowRight, Youtube, Radio, ExternalLink } from 'lucide-react';

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
                       
                       <div className="p-6 bg-white/5 border border-white/10 rounded-lg">
                           <p className="text-gray-400 text-sm leading-relaxed">
                               <strong className="text-white block mb-2">The Debrief</strong>
                               In this video, we discuss the exact "Private Equity" aesthetic shift that allowed J-Griff to dominate the high-ticket coaching space before his exit.
                           </p>
                       </div>
                    </div>
                 </div>
              </div>

           </div>
        </section>

        {/* 03. CASE STUDY 02: AARON ABKE & THE GREAT AWAKENING */}
        <section className="py-32 px-4 md:px-12 bg-[#0a0a0a] text-white border-t border-white/10 relative overflow-hidden">
           
           {/* Abstract Background for Aaron's Section */}
           <div className="absolute top-0 right-0 w-[50vw] h-full bg-blue-900/5 blur-3xl pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>

           <div className="max-w-[1800px] mx-auto relative z-10">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                 <div className="order-2 md:order-1">
                    <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 px-4 py-2 rounded-full mb-6">
                       <Radio className="w-4 h-4 text-blue-400 animate-pulse" />
                       <span className="text-xs font-bold text-blue-300 tracking-widest uppercase">Podcast Production</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-display font-bold leading-none">
                       THE GREAT<br/>
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AWAKENING</span>
                    </h2>
                 </div>
                 <div className="order-1 md:order-2 mb-8 md:mb-0 text-right">
                    <div className="flex items-center gap-3 justify-end mb-2">
                       <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                       <span className="font-mono text-xs font-bold uppercase tracking-widest">Case Study 002</span>
                    </div>
                    <p className="text-xl font-light text-gray-400">Aaron Abke x Jeremy Griffin</p>
                 </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                 
                 {/* Visuals Left - Podcast Identity */}
                 <div className="md:col-span-5 relative">
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10 group shadow-2xl">
                       {/* Podcast Cover Art Placeholder */}
                       <img 
                          src="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=1000&auto=format&fit=crop" 
                          alt="The Great Awakening Podcast Cover" 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                       <div className="absolute bottom-8 left-8">
                          <div className="flex items-center gap-2 mb-2">
                             <div className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                                <Youtube className="w-3 h-3" /> LIVE
                             </div>
                             <span className="text-xs font-mono text-gray-300">SEASON 1</span>
                          </div>
                          <p className="text-2xl font-bold">Bridging Science & Spirit</p>
                       </div>
                    </div>
                    
                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-6 -right-6 bg-white text-black p-6 rounded-lg shadow-2xl hidden md:block border-l-4 border-blue-600">
                       <p className="text-5xl font-bold font-display">300K+</p>
                       <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mt-1">Subscribers</p>
                       <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-xs font-bold flex items-center gap-2">
                             <TrendingUp className="w-3 h-3 text-green-600" />
                             Top 1% in Niche
                          </p>
                       </div>
                    </div>
                 </div>

                 {/* Content Right - The Strategy */}
                 <div className="md:col-span-7 md:pl-12">
                    <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                       "When you speak to millions, the signal must be pure."
                    </h3>
                    <div className="prose prose-invert max-w-none text-gray-400 mb-12 text-lg leading-relaxed">
                       <p>
                          Aaron Abke is a titan in the spiritual education space. With over <strong>300,000 subscribers</strong> and millions of views, his audience demands authenticity and high fidelity.
                       </p>
                       <p>
                          My role was to architect the visual identity for "The Great Awakening" show — a collaboration with J-Griff. We needed a look that was grounded yet expansive, blending the raw reality of the "Matrix" with the high-vibration aesthetic of new earth consciousness.
                       </p>
                    </div>

                    {/* Verified Chat Evidence */}
                    <div className="bg-[#111] border border-white/10 p-6 rounded-xl mb-12 max-w-xl shadow-inner">
                       <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                          <span className="text-xs font-mono text-gray-500 uppercase">Evidence.png</span>
                          <div className="flex items-center gap-1 text-green-500">
                             <CheckCircle2 className="w-3 h-3" />
                             <span className="text-[10px] font-bold uppercase">Verified Client</span>
                          </div>
                       </div>
                       
                       <div className="space-y-4 font-sans text-sm">
                          {/* Chat Message 1 */}
                          <div className="flex gap-3">
                             <div className="w-8 h-8 rounded-full bg-gray-800 flex-shrink-0"></div>
                             <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none text-gray-300 max-w-[80%]">
                                <p>Hey Aaron! Just wanted to introduce myself as the lead creative. Honored to be on this project.</p>
                             </div>
                          </div>
                          {/* Chat Message 2 */}
                          <div className="flex gap-3 flex-row-reverse">
                             <div className="w-8 h-8 rounded-full bg-blue-900 flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">AA</div>
                             <div className="bg-blue-900/20 border border-blue-500/20 p-3 rounded-2xl rounded-tr-none text-white max-w-[90%]">
                                <p>Hey brother! Great to meet you. I love the work you're doing and am grateful to be working with you! 🙏❤️</p>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <a 
                           href="https://www.youtube.com/@AaronAbke"
                           target="_blank"
                           rel="noreferrer"
                           className="px-6 py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors flex items-center gap-2 w-fit"
                        >
                           <Youtube className="w-5 h-5" />
                           Visit Channel
                        </a>
                        <button className="px-6 py-3 border border-white text-white font-bold rounded hover:bg-white hover:text-black transition-colors flex items-center gap-2 w-fit">
                           <ExternalLink className="w-5 h-5" />
                           View Case Study Assets
                        </button>
                    </div>
                 </div>

              </div>
           </div>
        </section>

        {/* 04. HIRE FOOTER */}
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