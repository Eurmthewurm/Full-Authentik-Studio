import React from 'react';
import { Check, Shield } from 'lucide-react';

interface PricingProps {
  onBookClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onBookClick }) => {
  return (
    <section id="pricing" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Sponsored Products Video<br/>Conversion Lock™</h2>
          <p className="text-gray-400">One-time deployment. No retainer. No experiments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard */}
          <div className="bg-background border border-white/10 rounded-2xl p-8 flex flex-col hover:border-white/20 transition-all">
            <h3 className="text-xl font-bold mb-2">SPV Conversion Lock</h3>
            <p className="text-gray-500 text-sm mb-6">Stabilize a single ASIN against CPC inflation.</p>
            <div className="text-4xl font-bold mb-8">€1,500<span className="text-lg text-gray-500 font-normal"> / ASIN</span></div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-white" />
                1 Engineered SPV Asset (30-45s)
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-white" />
                Native Talent (US/UK/DE)
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-white" />
                SPV Readiness Check (Free)
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-white" />
                Category Lock (90 Days)
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-400 font-semibold">
                <Shield className="w-4 h-4" />
                Performance Protection
              </li>
            </ul>

            <button 
              onClick={onBookClick}
              className="w-full py-4 border border-white/20 rounded-lg hover:bg-white hover:text-black transition-all font-semibold"
            >
              Lock Standard SPV
            </button>
          </div>

          {/* High Volume */}
          <div className="bg-[#0f0f0f] border border-blue-900/50 rounded-2xl p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              HIGH VOLUME
            </div>
            <h3 className="text-xl font-bold mb-2">A/B SPV Protocol</h3>
            <p className="text-gray-500 text-sm mb-6">Test two psychological angles. Find the winner fast.</p>
            <div className="text-4xl font-bold mb-8">€2,800<span className="text-lg text-gray-500 font-normal"> / ASIN</span></div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-white">
                <Check className="w-4 h-4 text-blue-400" />
                2 Distinct SPV Hooks (Split Test)
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-blue-400" />
                SPV Readiness Check (Free)
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-blue-400" />
                Category Lock (90 Days)
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-400 font-semibold">
                <Shield className="w-4 h-4" />
                Performance Protection
              </li>
            </ul>

            <button 
              onClick={onBookClick}
              className="w-full py-4 bg-white text-black rounded-lg hover:bg-gray-200 transition-all font-bold"
            >
              Lock A/B Protocol
            </button>
          </div>
        </div>

        {/* Guarantee */}
        <div className="max-w-3xl mx-auto mt-12 bg-background p-6 rounded-lg border border-white/5 text-center">
          <div className="flex justify-center mb-4"><Shield className="w-8 h-8 text-blue-500" /></div>
          <h4 className="font-bold mb-2">Performance Protection</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            If your SPV does not outperform your historical baseline (Unit Session % or ACOS) within 60 days, 
            we produce a second asset at no cost. We take the performance risk.
          </p>
        </div>

        {/* ROI Math */}
        <div className="max-w-3xl mx-auto mt-8 text-center border-t border-white/5 pt-8">
           <h4 className="text-lg font-bold mb-4">The "Stop The Bleeding" Math</h4>
           <div className="flex justify-center gap-8 text-sm">
              <div>
                 <p className="text-gray-500">Monthly Revenue</p>
                 <p className="font-bold">€50,000</p>
              </div>
              <div className="text-red-400">
                 <p className="opacity-70">Current Leakage</p>
                 <p className="font-bold">-€4,100/mo</p>
              </div>
              <div className="text-green-400">
                 <p className="opacity-70">Year 1 Profit</p>
                 <p className="font-bold">+€48,000</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;