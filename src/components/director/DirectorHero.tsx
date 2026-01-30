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
                        <h1 className="text-4xl md:text-7xl leading-[1.1] font-bold font-display tracking-tight text-white uppercase mb-6">
                            I Engineer The Visual Signal<br />That Justifies Your Price.
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mb-4 md:mb-0 text-right"
                    >
                        <p className="text-lg md:text-xl font-light text-gray-400 max-w-xl ml-auto leading-relaxed">
                            <span className="text-white font-bold block mb-4">Stop competing on volume. Win on authority.</span>
                            I build the visual infrastructure that creates an irrational preference for your brand.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DirectorHero;
