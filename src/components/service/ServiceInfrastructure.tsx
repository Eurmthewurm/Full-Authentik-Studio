import React from 'react';
import { BarChart3, TrendingUp, UserCheck, ArrowRight, CheckCircle, PlayCircle } from 'lucide-react';

const ServiceInfrastructure: React.FC = () => {
    return (
        <section className="bg-black text-white py-24 px-4 md:px-12 relative overflow-hidden">

            {/* Cinematic Ambient Glow */}
            <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

            <div className="max-w-[1800px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                    <div>
                        <span className="font-mono text-xs text-blue-500 uppercase tracking-widest mb-2 block">How This Works</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold leading-none tracking-tight">VISUAL<br />INFRASTRUCTURE</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {/* Option 1: Free Brand Audit (The Diagnosis) */}
                    <div className="group border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between min-h-[600px] relative overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-blue-500/10 blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="relative z-10 flex-col h-full flex">
                            <div className="flex items-center gap-3 mb-6">
                                <BarChart3 className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500">Tier 1: Diagnostic</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 tracking-tight">Brand Audit</h3>
                            <p className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest">"The Perception Gap"</p>

                            <p className="text-gray-400 group-hover:text-gray-300 mb-8 text-sm leading-relaxed flex-grow">
                                Most experts undercharge by 300-500%. We diagnose exactly where your visual signal is leaking revenue.
                            </p>

                            <div className="space-y-4 mb-8">
                                <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">We Identify:</h4>
                                <ul className="space-y-3 text-xs font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                                    <li className="flex gap-3">
                                        <CheckCircle className="w-4 h-4 text-blue-900 group-hover:text-blue-500 transition-colors mt-0.5" />
                                        <span>Real Market Value vs. Price</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle className="w-4 h-4 text-blue-900 group-hover:text-blue-500 transition-colors mt-0.5" />
                                        <span>The #1 Revenue Leak</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle className="w-4 h-4 text-blue-900 group-hover:text-blue-500 transition-colors mt-0.5" />
                                        <span>Priority Asset Stack</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/10 relative z-10">
                            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Investment</p>
                            <div className="flex justify-between items-end">
                                <p className="text-xl font-bold font-display text-white">Free</p>
                                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-gray-500 group-hover:text-white" />
                            </div>
                            <p className="text-[10px] text-gray-600 mt-2 italic">
                                "If I can't find a 3-5x opportunity, I'll tell you honestly."
                            </p>
                        </div>
                    </div>

                    {/* Option 2: The Authority Accelerator (The Fix) */}
                    <div className="group border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-between min-h-[600px] relative overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-purple-500/10 blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="relative z-10 flex-col h-full flex">
                            <div className="flex items-center gap-3 mb-6">
                                <PlayCircle className="w-6 h-6 text-purple-500 group-hover:text-purple-400 transition-colors" />
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500">Tier 2: The Fix</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 tracking-tight">Accelerator</h3>
                            <p className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest">"Solve One Bottleneck"</p>

                            <div className="space-y-4 mb-8 flex-grow">
                                <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">Choose Your Weapon:</h4>
                                <ul className="space-y-4 text-xs font-medium text-gray-400">
                                    <li className="group/item">
                                        <strong className="text-white block mb-1 group-hover/item:text-purple-400 transition-colors">A. Social Proof System</strong>
                                        <span className="leading-relaxed block">5-8 Testimonials engineered to kill objections.</span>
                                    </li>
                                    <li className="group/item">
                                        <strong className="text-white block mb-1 group-hover/item:text-purple-400 transition-colors">B. Founder Documentary</strong>
                                        <span className="leading-relaxed block">The "Send This First" positioning asset.</span>
                                    </li>
                                    <li className="group/item">
                                        <strong className="text-white block mb-1 group-hover/item:text-purple-400 transition-colors">C. Conversion Engine</strong>
                                        <span className="leading-relaxed block">High-impact VSL for your offer page.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/10 relative z-10">
                            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Investment</p>
                            <div className="flex justify-between items-end">
                                <p className="text-xl font-bold font-display text-white">$15K – $20K</p>
                                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-gray-500 group-hover:text-white" />
                            </div>
                            <p className="text-[10px] text-gray-600 mt-2 italic">
                                Timeline: 30–45 Days. Result Guaranteed.
                            </p>
                        </div>
                    </div>

                    {/* Option 3: Authority Scale System */}
                    <div className="group bg-[#0a0a0a]/80 backdrop-blur-md text-white p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 flex flex-col justify-between min-h-[600px] relative overflow-hidden shadow-2xl rounded-xl transform xl:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 font-mono uppercase tracking-widest">Core Offer</div>
                        <div className="absolute inset-0 bg-blue-600/10 blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="relative z-10 flex-col h-full flex">
                            <div className="flex items-center gap-3 mb-6">
                                <TrendingUp className="w-6 h-6 text-blue-400" />
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400">Tier 3: The Build</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 tracking-tight">Authority Scale</h3>
                            <p className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest">"Complete Visual Infrastructure"</p>

                            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                                Move from $100k to $1M+. We install the systems that allow you to charge premium prices and scale beyond 1-on-1.
                            </p>

                            <div className="space-y-4 mb-8 flex-grow">
                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-white/10 pb-2">90-Day Sprint:</h4>
                                <ul className="space-y-3 text-xs font-medium text-gray-300">
                                    <li className="flex gap-3">
                                        <span className="text-blue-500 font-bold">P1.</span>
                                        <span>Foundation: Flagship Authority Asset</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-blue-500 font-bold">P2.</span>
                                        <span>Proof: Social Proof System</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-blue-500 font-bold">P3.</span>
                                        <span>Scale: Web, Sales & Content Systems</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/10 relative z-10">
                            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Investment</p>
                            <div className="flex justify-between items-end">
                                <p className="text-xl font-bold font-display">$40K – $50K</p>
                                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-blue-400" />
                            </div>
                            <p className="text-[10px] text-gray-500 mt-2">
                                90 Days. ROI Guarantee Included.
                            </p>
                        </div>
                    </div>

                    {/* Option 4: Fractional CD */}
                    <div className="group border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-green-500/30 transition-all duration-500 flex flex-col justify-between min-h-[600px] relative overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-green-500/10 blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="relative z-10 flex-col h-full flex">
                            <div className="flex items-center gap-3 mb-6">
                                <UserCheck className="w-6 h-6 text-green-600 group-hover:text-green-400 transition-colors" />
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500">Tier 4: The Partner</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 tracking-tight">Fractional CD</h3>
                            <p className="text-xs font-mono text-gray-500 mb-6 uppercase tracking-widest">"The Keeper of the Standard"</p>

                            <p className="text-gray-400 group-hover:text-gray-300 mb-8 text-sm leading-relaxed flex-grow">
                                You have a team. You have a vision. But quality is slipping. I step in as the creative authority who says "Yes" or "No".
                            </p>

                            <div className="space-y-4 mb-8">
                                <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-white/10 pb-2">Scope:</h4>
                                <ul className="space-y-3 text-xs font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                                    <li className="flex gap-3">
                                        <CheckCircle className="w-4 h-4 text-green-900 group-hover:text-green-500 transition-colors mt-0.5" />
                                        <span>Quality Control (Every Asset)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle className="w-4 h-4 text-green-900 group-hover:text-green-500 transition-colors mt-0.5" />
                                        <span>Directing Your Team</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle className="w-4 h-4 text-green-900 group-hover:text-green-500 transition-colors mt-0.5" />
                                        <span>15-20 Hrs/Mo Leadership</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/10 relative z-10">
                            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Monthly Retainer</p>
                            <div className="flex justify-between items-end">
                                <p className="text-xl font-bold font-display text-white">$10K / Mo</p>
                                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-gray-500 group-hover:text-white" />
                            </div>
                            <p className="text-[10px] text-gray-600 mt-2 italic">
                                Post-Build Only.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceInfrastructure;
