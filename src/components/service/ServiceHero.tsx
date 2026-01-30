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
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end"
            >
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-px bg-purple-500"></span>
                        <span className="font-mono text-xs text-purple-400 tracking-widest uppercase">Consulting Division</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
                        SCALE WITH<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500">AUTHORITY.</span>
                    </h1>
                </div>
                <div className="md:max-w-md md:ml-auto">
                    <p className="text-xl md:text-2xl font-light text-gray-400 mb-6 leading-relaxed">
                        You have the audience. You have the offer. But your brand visuals are costing you the <span className="text-white italic">premium</span>.<br />
                        We fix the "Trust Gap" so you can <span className="text-blue-400 font-bold">raise prices</span> and convert faster.
                    </p>
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
                </div>
            </motion.div>
        </section>
    );
};

export default ServiceHero;
