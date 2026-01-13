import React from 'react';
import { Play, TrendingUp, Archive, Instagram, ArrowRight, Youtube, Globe, StopCircle, PenTool, Focus, Mail, Clapperboard, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from './SEO';

interface DirectorPageProps {
   onNavigate: (page: string) => void;
   onContactClick: () => void;
}

const DirectorPage: React.FC<DirectorPageProps> = ({ onNavigate, onContactClick }) => {
   const brands = [
      "MARVEL", "NATIONAL GEOGRAPHIC", "BBC", "DISCOVERY CHANNEL", "SKY PRO CYCLING", "EXPEDIA", "BLACKMAGIC DESIGN", "GRAB", "GARUDA INDONESIA", "SBS", "ARTE", "PUPFLASK", "HARTSPAN", "J-GRIFF", "AARON ABKE"
   ];

   // UPDATED: Using the direct Imgur link for Aaron Abke
   const AARON_IMG_SRC = "https://i.imgur.com/ip8PRov.png";
   // UPDATED: Using the new direct Imgur link for J-Griff/Ermo couch
   const COUCH_IMG_SRC = "https://i.imgur.com/NCBqnk3.jpeg";

   return (
      <>
         <SEO
            title="The Director | Ermo Egberts"
            description="Organic Growth Architect. From $2M to $8M. Retain a Creative Director to build your visual infrastructure."
         />
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-20 min-h-screen page-transition bg-[#050505] text-white selection:bg-white selection:text-black"
         >

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
                        <motion.div
                           initial={{ y: 50, opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           transition={{ duration: 0.8 }}
                        >
                           <span className="font-mono text-xs text-blue-500 tracking-widest mb-2 block">ERMO EGBERTS</span>
                           <h1 className="text-[12vw] leading-[0.85] font-bold font-display tracking-tighter text-white uppercase">
                              Creative<br />Director
                           </h1>
                        </motion.div>
                        <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 0.5, duration: 0.8 }}
                           className="mb-4 md:mb-0 text-right"
                        >
                           <p className="text-xl md:text-2xl font-light text-gray-400 max-w-md ml-auto leading-tight">
                              Organic Growth Architect.<br />
                              <span className="text-white">From $2M to $8M.</span>
                           </p>
                        </motion.div>
                     </div>
                  </div>
               </section>

               {/* 01.5 THE NETWORK / COLLECTIVE TRACK RECORD */}
               <section className="py-16 border-b border-white/10 bg-[#0a0a0a] overflow-hidden">
                  <div className="px-4 md:px-12 max-w-[1800px] mx-auto mb-12">
                     <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                        <div className="max-w-3xl">
                           <div className="flex items-center gap-3 mb-4">
                              <Clapperboard className="w-4 h-4 text-gray-400" />
                              <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">Production Capabilities</span>
                           </div>
                           <h3 className="text-2xl font-bold mb-4">You hire me for the Vision. We build the Team together.</h3>
                           <p className="text-lg text-gray-300 font-light leading-relaxed">
                              A Creative Director is only as good as their execution team.
                              <br /><br />
                              I partner with producers like <a href="https://johnwsullivan.com/" target="_blank" rel="noreferrer" className="text-white font-bold underline decoration-blue-500 underline-offset-4 hover:text-blue-400 transition-colors">John W. Sullivan</a> to curate the specific talent required for your project.
                              We assemble the production unit around the vision—whether utilizing existing networks or finding new talent together.
                           </p>
                           <p className="text-xs text-gray-500 mt-6 font-mono uppercase tracking-widest">
                              OUR NETWORK'S COLLECTIVE CREDITS INCLUDE:
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Brand Marquee */}
                  <div className="relative w-full overflow-hidden">
                     <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
                     <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>

                     <div className="flex whitespace-nowrap animate-marquee">
                        {[...brands, ...brands].map((brand, index) => (
                           <div key={index} className="mx-8 md:mx-16 flex items-center opacity-50 hover:opacity-100 transition-opacity">
                              <span className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter cursor-default">
                                 {brand}
                              </span>
                           </div>
                        ))}
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
                              THE ORGANIC<br />EMPIRE
                           </h2>
                        </div>
                        <div className="md:text-right mt-8 md:mt-0">
                           <p className="text-lg font-bold">LUC Mastermind &<br />Conscious Wealth Podcast</p>
                           <p className="text-sm text-gray-500 font-mono mt-2">1.5 YEAR SPRINT</p>
                        </div>
                     </div>

                     {/* THE TESTIMONIAL - HERO (AUTHORITY FIRST) */}
                     <motion.div
                        whileHover={{ scale: 1.005 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-black rounded-sm mb-24 overflow-hidden border border-white/10 group shadow-2xl"
                     >
                        <iframe
                           src="https://player.vimeo.com/video/1112128628?title=0&byline=0&portrait=0"
                           className="absolute inset-0 w-full h-full"
                           frameBorder="0"
                           allow="autoplay; fullscreen; picture-in-picture"
                           allowFullScreen
                        ></iframe>
                        <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded border border-white/10 pointer-events-none">
                           <span className="text-xs font-mono text-white flex items-center gap-2">
                              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                              THE FOUNDER'S TESTIMONY
                           </span>
                        </div>
                     </motion.div>

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

                              {/* J-Griff Status Note */}
                              <div className="bg-gray-50 p-6 border border-gray-200 rounded-lg">
                                 <div className="flex items-center gap-2 mb-2">
                                    <Archive className="w-4 h-4 text-gray-400" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Status Update</span>
                                 </div>
                                 <p className="text-sm text-gray-600 leading-relaxed">
                                    J-Griff has since <span className="font-bold text-black">exited the industry</span> and retired at his peak.
                                    All public content, including his YouTube videos, has been <span className="text-red-600 font-bold">unpublished/archived</span>.
                                 </p>
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
                              "I always like to keep the human aspect."
                           </h3>
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-600 leading-relaxed font-light">
                              <div className="space-y-6">
                                 <p>
                                    I engineered the visual infrastructure that took this brand from <strong>$2M to $8M in just 1.5 years</strong>.
                                 </p>
                                 <p>
                                    <strong>The Strategy:</strong> I stepped out from behind the camera. We stripped away the polish to talk about the real stuff:
                                    <span className="text-black font-medium block mt-2 ml-4 border-l-2 border-blue-500 pl-4">
                                       • Service to Others Path<br />
                                       • Breaking Scarcity Programming<br />
                                       • Building Wealth in a Heart-Centered Way
                                    </span>
                                 </p>
                              </div>

                              <div className="space-y-6">
                                 <p>
                                    I became the proxy for the audience, asking the questions they were afraid to ask. As J-Griff put it: <span className="italic">"Ermo asked powerful questions that truly required me to dig deep."</span>
                                 </p>

                                 <div className="bg-gray-50 p-6 border-l-4 border-black">
                                    <h4 className="text-black font-bold mb-2 flex items-center gap-2">
                                       <TrendingUp className="w-4 h-4" />
                                       The Validation
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-4">
                                       This single interview drove more qualified applications to the LUC Mastermind than any ad campaign.
                                    </p>

                                    {/* Social Proof Comments */}
                                    <div className="space-y-3 pt-4 border-t border-gray-200">
                                       <div className="flex gap-3 items-start">
                                          <div className="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                                             <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop" />
                                          </div>
                                          <div>
                                             <p className="text-[10px] font-bold text-black">backyardchickenss1</p>
                                             <p className="text-[11px] text-gray-600 leading-tight">"This episode... make me want to join the LUC. Keep dropping the 🔥!"</p>
                                          </div>
                                       </div>
                                       <div className="flex gap-3 items-start">
                                          <div className="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                                             <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" />
                                          </div>
                                          <div>
                                             <p className="text-[10px] font-bold text-black">markholmanhealth</p>
                                             <p className="text-[11px] text-gray-600 leading-tight">"Internet got what it wanted: more Ermo 🔥🔥"</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* VISUAL EVIDENCE - LIST VIEW */}
                     <div className="mb-24">
                        <div className="flex items-center gap-4 mb-8">
                           <div className="h-px bg-black/10 flex-1"></div>
                           <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">Visual Evidence</span>
                           <div className="h-px bg-black/10 flex-1"></div>
                        </div>

                        <div className="grid grid-cols-1 gap-8">

                           {/* Video 1: THE COUCH REEL (The Human Element) - Moved Here */}
                           <div className="bg-black text-white p-8 rounded-2xl relative overflow-hidden shadow-2xl group border border-white/5 flex flex-col w-full">
                              <div className="absolute top-0 right-0 p-6 opacity-20 font-display text-6xl font-bold pointer-events-none text-white/10">01</div>

                              <h3 className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest flex items-center gap-2">
                                 <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                                 The Human Element
                              </h3>
                              <h4 className="text-xl font-bold mb-6">"Bridging the Gap: The Authentic Interview"</h4>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                 <div
                                    onClick={() => window.open('https://www.instagram.com/p/C6FGYUhSqHMOHOzseoNMDqdqIC6cRRwq6s06ZA0/', '_blank')}
                                    className="w-full aspect-video bg-[#111] border border-white/20 relative overflow-hidden shadow-lg rounded-lg group-hover:border-blue-500/40 transition-colors cursor-pointer"
                                 >
                                    <img
                                       src={COUCH_IMG_SRC}
                                       alt="Ermo and J-Griff Interview on Couch"
                                       className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                       <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                                          <Play className="w-6 h-6 text-white fill-white" />
                                       </div>
                                    </div>
                                 </div>
                                 <div>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                       To break the "Guru" positioning, I sat on the couch <i>with</i> the client.
                                       This demonstrates the "Authentik" interview style that builds massive trust.
                                    </p>
                                    <div className="flex items-center gap-4">
                                       <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center font-bold text-white border border-white/10 text-xs">
                                          IG
                                       </div>
                                       <div>
                                          <p className="font-bold text-white text-sm">WATCH THE REEL</p>
                                          <p className="font-mono text-[10px] text-gray-400">INSTAGRAM ARCHIVE</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Video 2: JESS (Operational Impact) - Full Width */}
                           <div className="bg-[#0f0f0f] text-white p-8 rounded-2xl relative overflow-hidden shadow-2xl group border border-white/5 flex flex-col w-full">
                              <div className="absolute top-0 right-0 p-6 opacity-20 font-display text-6xl font-bold pointer-events-none text-white/10">02</div>

                              <h3 className="text-xs font-mono text-purple-400 mb-2 uppercase tracking-widest flex items-center gap-2">
                                 <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                                 Operational Impact
                              </h3>
                              <h4 className="text-xl font-bold mb-6">"We scaled to $8M. The systems held."</h4>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                 <div className="w-full aspect-video bg-[#050505] border border-white/20 relative overflow-hidden shadow-lg rounded-lg group-hover:border-purple-500/30 transition-colors">
                                    <iframe
                                       src="https://player.vimeo.com/video/1152804047?title=0&byline=0&portrait=0"
                                       className="absolute inset-0 w-full h-full"
                                       frameBorder="0"
                                       allow="autoplay; fullscreen; picture-in-picture"
                                       allowFullScreen
                                    ></iframe>
                                 </div>
                                 <div>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                       Creativity without infrastructure is chaos. Jess, the COO, breaks down how we integrated high-fidelity production into operations without slowing down the team.
                                    </p>
                                    <div className="flex items-center gap-4">
                                       <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center font-bold text-white border border-white/10 text-sm">
                                          J
                                       </div>
                                       <div>
                                          <p className="font-bold text-white">JESS</p>
                                          <p className="text-xs font-mono text-purple-400">COO, LEVEL UP COLLECTIVE</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                        </div>
                     </div>

                  </div>
               </section>

               {/* 03. CASE STUDY 02: AARON ABKE */}
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
                              Aaron<br />
                              <span className="font-bold">Abke</span>
                           </h2>
                        </div>
                        <div className="mt-8 md:mt-0 flex flex-col items-end">
                           <div className="flex items-center gap-4 mb-2">
                              <a href="https://www.youtube.com/@AaronAbke" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors">
                                 <Youtube className="w-5 h-5" />
                                 <span className="font-bold">@AaronAbke</span>
                              </a>
                              <div className="w-px h-4 bg-white/20"></div>
                              <a href="https://www.aaronabke.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                                 <Globe className="w-4 h-4" />
                                 <span className="font-bold">aaronabke.com</span>
                              </a>
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

                              {/* Actual Aaron Abke Image */}
                              <img
                                 src={AARON_IMG_SRC}
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

                        {/* Right: The DM Proof */}
                        <div className="lg:col-span-8">
                           <div className="bg-[#1f232e] rounded-xl border border-white/10 shadow-2xl overflow-hidden max-w-3xl mx-auto lg:ml-0">
                              {/* Fake Browser Header */}
                              <div className="bg-[#161a25] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                                 <div className="flex items-center gap-3">
                                    <div className="relative">
                                       <img
                                          src={AARON_IMG_SRC}
                                          className="w-8 h-8 rounded-full object-cover"
                                       />
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
                                       Today
                                    </span>
                                 </div>

                                 {/* Aaron Reply */}
                                 <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-blue-900 flex-shrink-0 overflow-hidden border border-white/10 relative">
                                       <img
                                          src={AARON_IMG_SRC}
                                          alt="Aaron"
                                          className="w-full h-full object-cover"
                                       />
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
                                          <p>Hey brother! Great to meet you. I love the work you’re doing and am grateful to be working with you! 🙏❤️</p>
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

               {/* 04. CASE STUDY 03: THE GREAT AWAKENING */}
               <section className="py-20 px-4 md:px-12 bg-[#050505] text-white border-t border-white/10 relative overflow-hidden">
                  {/* Abstract Background - Gold/Blue theme */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] to-[#050505]"></div>
                  <div className="absolute top-0 right-0 w-[50vw] h-[500px] bg-blue-900/10 blur-[100px] pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-[30vw] h-[300px] bg-yellow-600/5 blur-[80px] pointer-events-none"></div>

                  <div className="max-w-[1600px] mx-auto relative z-10">
                     <div className="flex items-center gap-4 mb-6 justify-center">
                        <span className="w-8 h-px bg-yellow-500/50"></span>
                        <span className="font-mono text-xs text-yellow-500 tracking-widest uppercase">Collaboration</span>
                        <span className="w-8 h-px bg-yellow-500/50"></span>
                     </div>

                     <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
                           The Great <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">Awakening</span>
                        </h2>
                     </div>

                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left: The Narrative Story */}
                        <div className="space-y-8">
                           <div>
                              <h3 className="text-2xl font-bold mb-4">The Origin Story</h3>
                              <p className="text-gray-400 leading-relaxed text-lg font-light">
                                 It started as a conversation between titans. <strong className="text-white">J-Griff</strong> (Conscious Wealth) and <strong className="text-white">Aaron Abke</strong> (Spiritual Intelligence) wanted to bridge the gap between their two worlds.
                              </p>
                           </div>

                           <div className="pl-6 border-l-2 border-yellow-500/30">
                              <h4 className="text-yellow-500 font-bold mb-2 text-sm uppercase tracking-wide">The Strategy</h4>
                              <p className="text-gray-300 text-sm">
                                 We didn't want another "podcast." We wanted a cultural moment. I architected a format that felt less like an interview and more like a documentary. The audience was starving for high-level spiritual discourse with cinematic gravity.
                              </p>
                           </div>

                           <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                              <div className="flex items-center gap-4 mb-2">
                                 <StopCircle className="w-5 h-5 text-red-500" />
                                 <span className="font-bold">The Conclusion</span>
                              </div>
                              <p className="text-gray-400 text-sm">
                                 The show blew up fast, becoming an instant flagship asset. However, when <strong className="text-white">J-Griff was done with the business</strong> and successfully exited the industry, we concluded the show at its peak. It stands as a completed limited series.
                              </p>
                           </div>
                        </div>

                        {/* Right: Channel Link (Replaces Broken Embed) */}
                        <div
                           onClick={() => window.open('https://www.youtube.com/@TheGreatAwakeningPodcast', '_blank')}
                           className="relative aspect-video bg-black rounded-xl overflow-hidden border border-white/10 flex flex-col items-center justify-center text-center p-8 group cursor-pointer shadow-2xl"
                        >
                           {/* Background Image Effect - FIXED with specific URL and inline style to ensure rendering */}
                           <div
                              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=2000&auto=format&fit=crop')` }}
                           ></div>
                           <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                           <div className="relative z-10 flex flex-col items-center">
                              <Youtube className="w-16 h-16 text-red-500 mb-6 group-hover:scale-110 group-hover:text-red-400 transition-all duration-300 shadow-xl" />
                              <h3 className="text-3xl font-display font-bold text-white mb-2">The Great Awakening</h3>
                              <p className="text-gray-400 mb-8 font-light tracking-wide">Watch the full documentary series on YouTube</p>

                              <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-yellow-500 hover:text-white transition-all duration-300 flex items-center gap-2">
                                 Open Channel <ArrowRight className="w-4 h-4" />
                              </button>
                           </div>
                        </div>

                     </div>
                  </div>
               </section>

               {/* 05. THE HIERARCHY OF VALUE (Scope of Practice) */}
               <section className="py-32 px-4 md:px-12 bg-white text-black relative">
                  <div className="max-w-[1800px] mx-auto">
                     <div className="mb-16">
                        <h2 className="text-5xl md:text-8xl font-display font-bold leading-none mb-6">
                           THE HIERARCHY<br />OF VALUE
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                           Distinguishing "Production" from "Direction".<br />
                           Defining the scope of practice for optimal results.
                        </p>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

                        {/* Column 1: The Creative Director (Ermo) */}
                        <div className="border-t-4 border-black pt-8">
                           <div className="flex items-center gap-3 mb-6">
                              <PenTool className="w-8 h-8 text-blue-600" />
                              <h3 className="text-2xl font-bold">The Creative Director</h3>
                              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">ERMO</span>
                           </div>
                           <p className="text-lg font-bold mb-4">"I provide the Architecture."</p>
                           <ul className="space-y-4">
                              <li className="flex gap-4 items-start">
                                 <span className="font-mono text-xs text-gray-400 mt-1">01</span>
                                 <div>
                                    <h4 className="font-bold">Visual Strategy</h4>
                                    <p className="text-gray-600 text-sm">Translating abstract business goals into concrete visual codes (Color, Tone, Pacing).</p>
                                 </div>
                              </li>
                              <li className="flex gap-4 items-start">
                                 <span className="font-mono text-xs text-gray-400 mt-1">02</span>
                                 <div>
                                    <h4 className="font-bold">Narrative Engineering</h4>
                                    <p className="text-gray-600 text-sm">Structuring the "argument" of the content to maximize retention and conversion.</p>
                                 </div>
                              </li>
                              <li className="flex gap-4 items-start">
                                 <span className="font-mono text-xs text-gray-400 mt-1">03</span>
                                 <div>
                                    <h4 className="font-bold">Quality Control</h4>
                                    <p className="text-gray-600 text-sm">The final "Yes" or "No". Ensuring the output matches the $8M standard.</p>
                                 </div>
                              </li>
                           </ul>
                        </div>

                        {/* Column 2: The Network (Production) */}
                        <div className="border-t-4 border-gray-200 pt-8 opacity-75">
                           <div className="flex items-center gap-3 mb-6">
                              <Focus className="w-8 h-8 text-gray-400" />
                              <h3 className="text-2xl font-bold text-gray-500">The Production Unit</h3>
                              <span className="bg-gray-100 text-gray-500 text-xs font-bold px-2 py-1 rounded">NETWORK</span>
                           </div>
                           <p className="text-lg font-bold mb-4 text-gray-500">"They provide the Assets."</p>
                           <ul className="space-y-4">
                              <li className="flex gap-4 items-start">
                                 <span className="font-mono text-xs text-gray-300 mt-1">01</span>
                                 <div>
                                    <h4 className="font-bold text-gray-500">Cinematography</h4>
                                    <p className="text-gray-400 text-sm">Cameras, Lighting, Lenses. Handled by John W. Sullivan & Co.</p>
                                 </div>
                              </li>
                              <li className="flex gap-4 items-start">
                                 <span className="font-mono text-xs text-gray-300 mt-1">02</span>
                                 <div>
                                    <h4 className="font-bold text-gray-500">Logistics</h4>
                                    <p className="text-gray-400 text-sm">Locations, Crew Management, Equipment Rental.</p>
                                 </div>
                              </li>
                           </ul>
                        </div>

                     </div>
                  </div>
               </section>

               {/* 06. HIRE FOOTER */}
               <section id="contact" className="py-32 px-4 md:px-12 bg-white text-black text-center border-t border-gray-100">
                  <p className="font-mono text-xs text-blue-600 tracking-widest mb-6">AVAILABILITY: Q3 2026</p>
                  <h2 className="text-5xl md:text-9xl font-display font-bold mb-12 uppercase tracking-tighter">
                     Retain The<br />Director
                  </h2>
                  <p className="max-w-xl mx-auto text-gray-500 mb-12">
                     I am not a videographer. I am a Creative Director. <br />
                     I build the visual systems that scale brands.
                  </p>
                  <div className="flex flex-col items-center gap-8">
                     <button
                        onClick={onContactClick}
                        className="px-8 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-all flex items-center gap-2"
                     >
                        <Mail className="w-4 h-4" /> Inquire for Creative Direction
                     </button>

                     <div className="text-sm text-gray-400 pt-8 border-t border-gray-100 w-full max-w-md">
                        <p className="mb-2">Need immediate scale?</p>
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('service'); }} className="text-blue-600 font-bold hover:underline">
                           Apply for the Service Scaling Division →
                        </a>
                     </div>
                  </div>
               </section>

            </div>
         </motion.div>
      </>
   );
};

export default DirectorPage;