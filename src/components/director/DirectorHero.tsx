import React from 'react';
import { motion } from 'framer-motion';

const DirectorHero: React.FC = () => {
    return (
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
                            The strategic partner behind <span className="text-white font-medium">Aaron Abke</span> & <span className="text-white font-medium">J-Griff</span>.<br />
                            I build the <span className="text-blue-400">visual infrastructure</span> that turns "content" into 8-figure brands.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DirectorHero;
