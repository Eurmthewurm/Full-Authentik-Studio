import React from 'react';
import { Target, ShieldAlert, BarChart3, BrainCircuit, XCircle, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section className="pb-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* The Economic Shift */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Economic Shift</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                SPV changed the physics of the page. It is no longer "just another ad format." 
                It sits above the fold. It is the first trust interaction cold buyers have with your product.
              </p>
              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-lg mb-6">
                <p className="text-red-200 italic font-medium">
                  "We launched SPV and our sales went up, but our returns doubled. We were buying the wrong customers."
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ShieldAlert className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white">Trust Vacuum</h4>
                    <p className="text-sm text-gray-500">Video that looks good but explains nothing creates hesitation downstream.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white">CPC Creep</h4>
                    <p className="text-sm text-gray-500">When conversion drops, Amazon forces you to bid higher. You pay a "Trust Tax."</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* The Pivot Comparison */}
            <div className="bg-surface rounded-xl border border-white/5 p-8 relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                  THE PIVOT
               </div>
               
               <div className="grid grid-cols-2 gap-8 relative">
                  <div className="text-center opacity-50 blur-[1px] hover:blur-0 transition-all">
                     <div className="flex justify-center mb-4"><XCircle className="w-8 h-8 text-red-500" /></div>
                     <h3 className="font-bold mb-4">Social-Media SPV</h3>
                     <ul className="text-sm text-gray-500 space-y-3">
                        <li>Lifestyle "Hooks"</li>
                        <li>High CTR / Low Conv</li>
                        <li>Sells the Dream</li>
                        <li className="text-red-400">Manufactures Returns</li>
                     </ul>
                  </div>
                  
                  <div className="text-center relative">
                     <div className="absolute inset-y-0 -left-4 w-px bg-white/10"></div>
                     <div className="flex justify-center mb-4"><CheckCircle2 className="w-8 h-8 text-green-500" /></div>
                     <h3 className="font-bold mb-4 text-white">Trust Architecture™</h3>
                     <ul className="text-sm text-gray-400 space-y-3">
                        <li className="text-white">Logic Mechanisms</li>
                        <li>Optimized for Unit Session %</li>
                        <li>Removes Hesitation</li>
                        <li className="text-green-400">Stable Ad Spend</li>
                     </ul>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* 45s Anatomy */}
        <div className="mb-24">
           <h3 className="text-2xl font-bold mb-8 text-center">Anatomy of a High-Relevance SPV (45s)</h3>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-surface p-6 border-t-2 border-blue-500">
                 <span className="text-xs font-mono text-blue-500 mb-2 block">0:00 - 0:05</span>
                 <h4 className="font-bold text-white mb-2">Pattern Interrupt</h4>
                 <p className="text-xs text-gray-500">Stop scroll without shouting. Show utility. Qualify instantly.</p>
              </div>
              <div className="bg-surface p-6 border-t-2 border-purple-500">
                 <span className="text-xs font-mono text-purple-500 mb-2 block">0:05 - 0:15</span>
                 <h4 className="font-bold text-white mb-2">The Objection</h4>
                 <p className="text-xs text-gray-500">Articulate the hesitation better than they can. Build authority.</p>
              </div>
              <div className="bg-surface p-6 border-t-2 border-pink-500">
                 <span className="text-xs font-mono text-pink-500 mb-2 block">0:15 - 0:35</span>
                 <h4 className="font-bold text-white mb-2">The Mechanism</h4>
                 <p className="text-xs text-gray-500">Explain *why* it works. Logic is the ultimate trust builder.</p>
              </div>
              <div className="bg-surface p-6 border-t-2 border-green-500">
                 <span className="text-xs font-mono text-green-500 mb-2 block">0:35 - 0:45</span>
                 <h4 className="font-bold text-white mb-2">Rational Close</h4>
                 <p className="text-xs text-gray-500">Zero risk. Position the purchase as a "test", not a commitment.</p>
              </div>
           </div>
        </div>

        {/* Case Study */}
        <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-8 md:p-12">
           <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                 <div className="text-sm text-green-400 font-mono mb-2">CASE STUDY: MEMORY FOAM SPV</div>
                 <h3 className="text-3xl font-bold mb-4">The Paradox of Comfort</h3>
                 <p className="text-gray-400 mb-6">
                    A travel pillow brand launched SPV. Sales went up, but returns spiked 15%. 
                    Customers complained "It's too hard." The Agency SPV "sold the dream" of softness.
                 </p>
                 <div className="flex gap-4">
                    <div className="text-left">
                       <p className="text-3xl font-bold text-white">-40%</p>
                       <p className="text-xs text-gray-500 uppercase">Return Rate</p>
                    </div>
                    <div className="text-left">
                       <p className="text-3xl font-bold text-green-500">Profit</p>
                       <p className="text-xs text-gray-500 uppercase">Increased</p>
                    </div>
                 </div>
              </div>
              <div className="flex-1 bg-surface p-6 rounded-xl border border-white/5">
                 <h4 className="font-bold mb-4 border-b border-white/10 pb-4">The Authentik Fix</h4>
                 <p className="text-sm text-gray-300 mb-4">
                    "We shot a macro close-up of a thumb pressing deep into the foam. The voiceover was blunt:"
                 </p>
                 <blockquote className="italic text-lg text-white border-l-2 border-blue-500 pl-4 mb-4">
                    "This is 50D High-Density foam. It is firm by design. If you want a soft pillow, do not buy this."
                 </blockquote>
                 <p className="text-xs text-gray-500">
                    Result: We attracted the *right* customers. SPV isn't for seduction. It's for qualification.
                 </p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Services;