import React from 'react';
import { BarChart3, TrendingUp, UserCheck, ArrowRight, CheckCircle } from 'lucide-react';

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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Option 1: Brand Audit */}
                    <div className="group border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between min-h-[500px] relative overflow-hidden rounded-xl">
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-blue-500/10 blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <BarChart3 className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500">Start Here</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-4 tracking-tight">Brand Audit</h3>
                            <p className="text-gray-400 group-hover:text-gray-300 mb-8 text-sm leading-relaxed">
                                60–90 minute strategic conversation. We analyze your current visual signal and the gap between your positioning and your offer.
                            </p>
                            <ul className="space-y-4 text-sm font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-4 h-4 text-blue-900 group-hover:text-blue-500 transition-colors mt-0.5" />
                                    <span>Signal Analysis (How market perceives you)</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-4 h-4 text-blue-900 group-hover:text-blue-500 transition-colors mt-0.5" />
                                    <span>Gap Diagnosis</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-4 h-4 text-blue-900 group-hover:text-blue-500 transition-colors mt-0.5" />
                                    <span>Specific Asset Strategy</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Investment</p>
                            <div className="flex justify-between items-end">
                                <p className="text-xl font-bold font-display text-white">$2,500 – $5,000</p>
                                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-gray-500 group-hover:text-white" />
                            </div>
                            <p className="text-[10px] text-gray-600 mt-2 italic">
                                Or free if we can't identify a clear path forward.
                            </p>
                        </div>
                    </div>

                    {/* Option 2: Authority Scale */}
                    <div className="group bg-[#0a0a0a]/80 backdrop-blur-md text-white p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 flex flex-col justify-between min-h-[500px] relative overflow-hidden shadow-2xl rounded-xl transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 font-mono uppercase tracking-widest">Flagship</div>
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-blue-600/10 blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <TrendingUp className="w-6 h-6 text-blue-400" />
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400">If You're Ready To Build</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-4 tracking-tight">Authority Scale</h3>
                            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                                A 90-day sprint to install your visual infrastructure. We build the assets that let you charge what you're worth.
                            </p>
                            <ul className="space-y-4 text-sm font-medium text-gray-300">
                                <li className="flex gap-3">
                                    <span className="text-blue-500 font-bold">1.</span>
                                    <span>Authority VSL (Founder Story)</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500 font-bold">2.</span>
                                    <span>3x Signature Narrative Assets</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500 font-bold">3.</span>
                                    <span>Visual Authority Rebuild (Web)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Investment</p>
                            <div className="flex justify-between items-end">
                                <p className="text-xl font-bold font-display">$25K – $50K</p>
                                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-blue-400" />
                            </div>
                            <p className="text-[10px] text-gray-500 mt-2">
                                60–90 Days. Measurable results.
                            </p>
                        </div>
                    </div>

                    {/* Option 3: Fractional CD */}
                    <div className="group border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-purple-500/30 transition-all duration-500 flex flex-col justify-between min-h-[500px] relative overflow-hidden rounded-xl">
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-purple-500/10 blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <UserCheck className="w-6 h-6 text-purple-600 group-hover:text-purple-400 transition-colors" />
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-500">Permanent Standard</span>
                            </div>
                            <h3 className="text-3xl font-bold mb-4 tracking-tight">Fractional CD</h3>
                            <p className="text-gray-400 group-hover:text-gray-300 mb-8 text-sm leading-relaxed">
                                You retain me as your creative authority. I become the person who says "yes" or "no" to every asset.
                            </p>
                            <ul className="space-y-4 text-sm font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                                <li className="flex gap-3">
                                    <CheckCircle className="w-4 h-4 text-purple-900 group-hover:text-purple-500 transition-colors mt-0.5" />
                                    <span>20 Hours/Month Leadership</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-4 h-4 text-purple-900 group-hover:text-purple-500 transition-colors mt-0.5" />
                                    <span>Weekly Strategy Alignment</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle className="w-4 h-4 text-purple-900 group-hover:text-purple-500 transition-colors mt-0.5" />
                                    <span>The "Keeper of the Standard"</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Monthly Retainer</p>
                            <div className="flex justify-between items-end">
                                <p className="text-xl font-bold font-display text-white">$5K – $15K</p>
                                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-gray-500 group-hover:text-white" />
                            </div>
                            <p className="text-[10px] text-gray-600 mt-2 italic">
                                Only for founders committed to quality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceInfrastructure;
