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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
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
      </section>
    </div>
  );
};

export default ServicePage;