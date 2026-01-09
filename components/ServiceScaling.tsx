import React from 'react';
import { Layers, Zap, PenTool, ArrowRight } from 'lucide-react';

const ServiceScaling: React.FC = () => {
  return (
    <section id="service" className="py-32 px-4 bg-background relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Header */}
          <div className="lg:col-span-4">
            <h2 className="text-sm font-mono text-purple-400 tracking-wider mb-6">SERVICE SCALING</h2>
            <h3 className="text-5xl font-bold mb-8 leading-tight">
              For the <br/>
              <span className="text-gray-600">Empire Builders.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              We apply the exact frameworks used to scale J-Griff and Aaron Abke to your consulting firm, agency, or education brand.
            </p>
            <div className="w-full h-px bg-white/10 mb-8"></div>
            <p className="text-xs font-mono text-gray-500">MINIMUM REQUIREMENT: $50K/MO REVENUE</p>
          </div>

          {/* Right Column: Services */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Service 1 */}
            <div className="bg-surface p-8 border border-white/5 hover:border-purple-500/50 transition-all duration-500 group flex flex-col justify-between min-h-[300px]">
              <div>
                <Layers className="w-8 h-8 text-gray-600 group-hover:text-purple-400 mb-6 transition-colors" />
                <h4 className="text-2xl font-bold mb-4">Brand Authority</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Tear down the "startup" aesthetic. We implement high-status visual codes that justify high-ticket pricing.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                 Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-surface p-8 border border-white/5 hover:border-purple-500/50 transition-all duration-500 group flex flex-col justify-between min-h-[300px]">
              <div>
                <Zap className="w-8 h-8 text-gray-600 group-hover:text-purple-400 mb-6 transition-colors" />
                <h4 className="text-2xl font-bold mb-4">Content Systems</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The infrastructure to produce daily, high-quality video assets without founder burnout.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                 Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </div>

             {/* Service 3 */}
             <div className="bg-surface p-8 border border-white/5 hover:border-purple-500/50 transition-all duration-500 group flex flex-col justify-between min-h-[300px] md:col-span-2">
              <div className="flex flex-col md:flex-row gap-8">
                <div>
                   <PenTool className="w-8 h-8 text-gray-600 group-hover:text-purple-400 mb-6 transition-colors" />
                   <h4 className="text-2xl font-bold mb-4">Strategic Consulting</h4>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed max-w-md pt-2">
                   Direct access to Ermo's 13 years of experience. We audit your funnel, your offer aesthetics, and your market perception to unlock the next leg of growth.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                 Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceScaling;