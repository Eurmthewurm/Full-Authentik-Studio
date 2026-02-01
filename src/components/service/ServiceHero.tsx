import React from 'react';
import { Target, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceHero: React.FC = () => {
    return (
        <section className="min-h-[60vh] flex flex-col justify-end pb-12 px-4 md:px-12 max-w-[1800px] mx-auto border-b border-white/5 relative">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
            >
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-px bg-purple-500"></span>
                        <span className="font-mono text-xs text-purple-400 tracking-widest uppercase">Consulting Division</span>
                    </div>
                    <h1 className="text-[12vw] md:text-[8vw] font-display font-bold leading-[0.9] tracking-tighter mb-12">
                        VISUAL<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">INFRASTRUCTURE</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-2">The Reality</h2>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            You have expertise worth <span className="text-white font-bold">$5,000 – $10,000</span> per client.
                            But the market sees you at <span className="text-red-400 font-bold">$500 – $2,000</span>.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white mb-2">The Gap</h2>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            It's not your offer. It's your <span className="text-white font-bold">Visual Authority</span>.
                            We diagnose exactly where the revenue leak is. Then we engineer what you need to claim it.
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    <div className="bg-[#111] px-4 py-2 rounded border border-white/10 flex items-center gap-2">
                        <Target className="w-4 h-4 text-purple-500" />
                        <span className="text-xs font-mono text-gray-400">TARGET: CREATORS / EDUCATORS / SERVICE BUSINESSES</span>
                    </div>
                    <div className="bg-[#111] px-4 py-2 rounded border border-blue-500/20 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-mono text-blue-400">REMOTE-FIRST PRODUCTION</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ServiceHero;
