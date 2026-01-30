import React, { useState } from 'react';
import { Target, Video, Camera, TrendingUp, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const PositioningSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'video' | 'director'>('director');

    return (
        <section className="py-24 px-4 md:px-12 max-w-[1800px] mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">You don't need "More Content".<br />You need <span className="text-blue-500">Strategic Assets.</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto">Focus on the impact, not the volume.</p>
            </div>

            <div className="bg-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden relative">
                <div className="grid grid-cols-2 border-b border-white/10">
                    <button
                        onClick={() => setActiveTab('video')}
                        className={`p-6 md:p-8 flex items-center justify-center gap-3 transition-colors ${activeTab === 'video' ? 'bg-[#111] text-gray-400' : 'bg-[#050505] text-gray-600 hover:bg-[#0a0a0a]'}`}
                    >
                        <Video className="w-5 h-5 opacity-50" />
                        <span className="font-bold uppercase tracking-wider text-sm md:text-base">The Videographer</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('director')}
                        className={`p-6 md:p-8 flex items-center justify-center gap-3 transition-colors relative ${activeTab === 'director' ? 'bg-[#0a0a0a] text-purple-400' : 'bg-[#050505] text-gray-500 hover:bg-[#0a0a0a]'}`}
                    >
                        {activeTab === 'director' && <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>}
                        <Target className="w-5 h-5" />
                        <span className="font-bold uppercase tracking-wider text-sm md:text-base">The Creative Partner</span>
                    </button>
                </div>

                <div className="p-8 md:p-16 min-h-[400px]">
                    {activeTab === 'video' ? (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        >
                            <div className="order-2 md:order-1 opacity-50">
                                <h3 className="text-2xl font-bold mb-6 text-gray-500">The Production Focus</h3>
                                <ul className="space-y-4 text-gray-400 font-mono text-sm">
                                    <li className="flex gap-3"><span className="text-gray-600 font-bold">•</span> Focus: Technical Execution.</li>
                                    <li className="flex gap-3"><span className="text-gray-600 font-bold">•</span> Output: High-volume deliverables.</li>
                                    <li className="flex gap-3"><span className="text-gray-600 font-bold">•</span> Goal: "Good looking videos."</li>
                                    <li className="flex gap-3"><span className="text-gray-600 font-bold">•</span> Role: Hands-on operator.</li>
                                </ul>
                            </div>
                            <div className="order-1 md:order-2 flex justify-center">
                                <Camera className="w-48 h-48 text-gray-800" strokeWidth={1} />
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        >
                            <div className="order-2 md:order-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                    <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">High Leverage</span>
                                </div>
                                <h3 className="text-3xl font-display font-bold mb-6 text-white">The "Authority" Asset</h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4 items-start bg-[#111] p-4 rounded border border-white/5 hover:border-purple-500/30 transition-colors">
                                        <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="block text-white mb-1">Diagnoses the Signal</strong>
                                            <span className="text-sm text-gray-400">"Is the visual language accurately reflecting the depth of the philosophy?"</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start bg-[#111] p-4 rounded border border-white/5 hover:border-purple-500/30 transition-colors">
                                        <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="block text-white mb-1">Installs the Infrastructure</strong>
                                            <span className="text-sm text-gray-400">Deploys the signature assets that anchor your authority in the market.</span>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start bg-[#111] p-4 rounded border border-white/5 hover:border-purple-500/30 transition-colors">
                                        <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="block text-white mb-1">Result: Resonance</strong>
                                            <span className="text-sm text-gray-400">A brand that doesn't just sell, but leads.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="order-1 md:order-2 flex justify-center relative">
                                <div className="absolute inset-0 bg-purple-500/20 blur-[80px]"></div>
                                <TrendingUp className="w-48 h-48 text-purple-500 relative z-10" strokeWidth={1} />
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PositioningSection;
