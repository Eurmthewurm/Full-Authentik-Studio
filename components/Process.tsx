import React from 'react';
import { Search, FileText, Video, UploadCloud } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Operational Timeline</h2>
          <p className="text-gray-400">The "Anchor" Protocol (7-10 Days). Hybrid production, no shipping delays.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="group bg-surface p-6 rounded-xl border border-white/5 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4 border border-white/10 group-hover:border-blue-500 transition-colors mx-auto md:mx-0">
                <Search className="w-5 h-5 text-gray-300" />
              </div>
              <div className="text-center md:text-left">
                <span className="text-xs font-mono text-blue-500">Day 1-2</span>
                <h3 className="font-bold text-lg mt-1 mb-2">Diagnosis</h3>
                <p className="text-sm text-gray-400">We analyze reviews and traffic data to pinpoint the "missing argument."</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group bg-surface p-6 rounded-xl border border-white/5 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4 border border-white/10 group-hover:border-blue-500 transition-colors mx-auto md:mx-0">
                <FileText className="w-5 h-5 text-gray-300" />
              </div>
              <div className="text-center md:text-left">
                <span className="text-xs font-mono text-blue-500">Day 3-4</span>
                <h3 className="font-bold text-lg mt-1 mb-2">Script & TOS</h3>
                <p className="text-sm text-gray-400">Psychological script approval + Amazon TOS suppression risk check.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group bg-surface p-6 rounded-xl border border-white/5 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4 border border-white/10 group-hover:border-blue-500 transition-colors mx-auto md:mx-0">
                <Video className="w-5 h-5 text-gray-300" />
              </div>
              <div className="text-center md:text-left">
                <span className="text-xs font-mono text-blue-500">Day 5-9</span>
                <h3 className="font-bold text-lg mt-1 mb-2">Remote Prod</h3>
                <p className="text-sm text-gray-400">Native "Anchor" talent films the trust argument remotely. Merged with B-roll.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group bg-surface p-6 rounded-xl border border-white/5 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4 border border-white/10 group-hover:border-blue-500 transition-colors mx-auto md:mx-0">
                <UploadCloud className="w-5 h-5 text-gray-300" />
              </div>
              <div className="text-center md:text-left">
                <span className="text-xs font-mono text-green-500">Day 10</span>
                <h3 className="font-bold text-lg mt-1 mb-2">Delivery</h3>
                <p className="text-sm text-gray-400">Main Trust Asset + 2 Ad-Cutdowns (16:9 & 9:16). Ready for Seller Central.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;