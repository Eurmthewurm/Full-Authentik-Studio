import React from 'react';
import { Layers, Zap, PenTool, ArrowRight, Diamond } from 'lucide-react';

const ServicePage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen page-transition bg-surface">
       <section className="py-24 px-4 md:px-8 max-w-[1800px] mx-auto">
        
        {/* Header */}
        <div className="mb-24 relative">
          <div className="absolute top-0 left-0 w-32 h-1 bg-purple-500"></div>
          <h2 className="text-sm font-mono text-purple-400 tracking-wider mb-6 mt-8">SERVICE SCALING DIVISION</h2>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-tight">
            FOR THE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">EMPIRE BUILDERS.</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
            We apply the exact frameworks used to scale J-Griff and Aaron Abke to your consulting firm, agency, or education brand.
          </p>
          
          <div className="mt-8 flex items-center gap-4 text-sm font-mono text-gray-500">
             <Diamond className="w-4 h-4 text-purple-500" />
             <span>MINIMUM REQUIREMENT: $50K/MO REVENUE</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            
            {/* Service 1 */}
            <div className="bg-background p-10 border border-white/5 hover:border-purple-500/50 transition-all duration-500 group flex flex-col justify-between h-[500px] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-700">
                 <Layers className="w-32 h-32 text-purple-500" />
              </div>
              
              <div className="relative z-10">
                <Layers className="w-10 h-10 text-gray-600 group-hover:text-purple-400 mb-8 transition-colors" />
                <h4 className="text-3xl font-bold mb-6 font-display">Brand<br/>Authority</h4>
                <p className="text-gray-400 leading-relaxed">
                  Tear down the "startup" aesthetic. We implement high-status visual codes that justify high-ticket pricing. 
                  Your brand needs to look deeper than your competitors pockets.
                </p>
              </div>
              
              <div className="w-full h-px bg-white/10 mt-8 mb-4 group-hover:bg-purple-500/50 transition-colors"></div>
              <ul className="text-xs font-mono text-gray-500 space-y-2">
                 <li>+ Visual Identity Systems</li>
                 <li>+ Pitch Deck Architecture</li>
                 <li>+ Website Overhaul</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-background p-10 border border-white/5 hover:border-purple-500/50 transition-all duration-500 group flex flex-col justify-between h-[500px] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-700">
                 <Zap className="w-32 h-32 text-purple-500" />
              </div>
              
              <div className="relative z-10">
                <Zap className="w-10 h-10 text-gray-600 group-hover:text-purple-400 mb-8 transition-colors" />
                <h4 className="text-3xl font-bold mb-6 font-display">Content<br/>Systems</h4>
                <p className="text-gray-400 leading-relaxed">
                  The infrastructure to produce daily, high-quality video assets without founder burnout.
                  We install the workflows, hire the editors, and train the team.
                </p>
              </div>
              
              <div className="w-full h-px bg-white/10 mt-8 mb-4 group-hover:bg-purple-500/50 transition-colors"></div>
               <ul className="text-xs font-mono text-gray-500 space-y-2">
                 <li>+ Workflow Automation</li>
                 <li>+ Editor Training</li>
                 <li>+ Asset Management</li>
              </ul>
            </div>

             {/* Service 3 */}
             <div className="bg-background p-10 border border-white/5 hover:border-purple-500/50 transition-all duration-500 group flex flex-col justify-between h-[500px] relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-700">
                 <PenTool className="w-32 h-32 text-purple-500" />
              </div>
              
              <div className="relative z-10">
                 <PenTool className="w-10 h-10 text-gray-600 group-hover:text-purple-400 mb-8 transition-colors" />
                 <h4 className="text-3xl font-bold mb-6 font-display">Strategic<br/>Consulting</h4>
                <p className="text-gray-400 leading-relaxed">
                   Direct access to Ermo's 13 years of experience. We audit your funnel, your offer aesthetics, and your market perception to unlock the next leg of growth.
                </p>
              </div>
              
              <div className="w-full h-px bg-white/10 mt-8 mb-4 group-hover:bg-purple-500/50 transition-colors"></div>
               <ul className="text-xs font-mono text-gray-500 space-y-2">
                 <li>+ Revenue Modeling</li>
                 <li>+ Offer Aesthetics</li>
                 <li>+ 1:1 Creative Direction</li>
              </ul>
            </div>
        </div>

        {/* COO Endorsement Section */}
        <section className="border-t border-white/10 pt-24 pb-24">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                 <div className="inline-flex items-center gap-2 px-3 py-1 border border-purple-500/30 rounded-full bg-purple-900/10 mb-6">
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                    <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest">COO Endorsement</span>
                 </div>
                 <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    "We scaled to $8M.<br/>
                    <span className="text-gray-500">The systems held.</span>"
                 </h3>
                 <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    Creativity without infrastructure is chaos. 
                    Jess, the COO of Level Up Collective, breaks down how we integrated high-fidelity production into their daily operations without slowing down the team.
                 </p>
                 
                 <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center font-bold text-white border border-white/10 text-sm">
                        J
                     </div>
                     <div>
                         <p className="font-bold text-white">Jess</p>
                         <p className="text-xs font-mono text-gray-500">COO, LEVEL UP COLLECTIVE</p>
                     </div>
                 </div>
              </div>

              <div className="relative">
                 <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                    <iframe 
                       src="https://player.vimeo.com/video/1152804047?title=0&byline=0&portrait=0" 
                       className="absolute inset-0 w-full h-full"
                       frameBorder="0" 
                       allow="autoplay; fullscreen; picture-in-picture" 
                       allowFullScreen
                    ></iframe>
                 </div>
                 {/* Decorative */}
                 <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
              </div>
           </div>
        </section>

        {/* PARTNERSHIP PROTOCOL FOOTER */}
        <section id="contact" className="py-24 border-t border-white/10 bg-[#0a0a0a] relative overflow-hidden">
           <div className="absolute inset-0 bg-purple-900/5"></div>
           
           <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
              <Diamond className="w-12 h-12 text-purple-500 mx-auto mb-8" />
              
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
                 INITIATE SCALE
              </h2>
              
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                 We are selective. We only partner with 3 new agencies per quarter to maintain the integrity of our systems. 
                 <br/><br/>
                 If you are ready to remove the bottleneck of "Creative" from your business, apply below.
              </p>

              <a 
                 href="mailto:consulting@authentik.studio?subject=Service Scaling Application"
                 className="inline-flex items-center gap-3 px-8 py-5 bg-white text-black font-bold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 rounded-lg group"
              >
                 Apply for Partnership <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <p className="mt-8 text-xs font-mono text-gray-600 uppercase tracking-widest">
                 Current Waitlist: 4 Weeks
              </p>
           </div>
        </section>

      </section>
    </div>
  );
};

export default ServicePage;