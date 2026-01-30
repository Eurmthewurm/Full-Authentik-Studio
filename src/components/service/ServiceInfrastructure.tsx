import React from 'react';
import { BarChart3, Plus, Users, ArrowRight } from 'lucide-react';

const ServiceInfrastructure: React.FC = () => {
    return (
        <section className="bg-white text-black py-24 px-4 md:px-12">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
                    <div>
                        <span className="font-mono text-xs text-blue-600 uppercase tracking-widest mb-2 block">Our Product</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold leading-none">VISUAL<br />INFRASTRUCTURE</h2>
                    </div>
                    <p className="md:text-right max-w-sm text-gray-500 mt-6 md:mt-0">
                        Remote Video Production. Branding. Web. <br />
                        <span className="text-black font-medium">Full-Service Creative & Art Direction.</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Tier 1: The Audit */}
                    <div className="group border border-gray-200 p-8 hover:bg-black hover:text-white transition-all duration-500 flex flex-col justify-between min-h-[450px] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 group-hover:bg-white/5 -rotate-45 translate-x-16 -translate-y-16 transition-colors"></div>
                        <div>
                            <div className="w-12 h-12 bg-gray-100 group-hover:bg-gray-800 rounded-lg flex items-center justify-center mb-8 transition-colors border border-gray-200 group-hover:border-white/10">
                                <BarChart3 className="w-6 h-6 text-black group-hover:text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">The Brand Audit</h3>
                            <p className="text-gray-500 group-hover:text-gray-400 mb-6 text-sm leading-relaxed">
                                A surgical diagnosis of your visual presence. We identify the specific "Trust Leaks" costing you qualified leads.
                            </p>
                            <ul className="space-y-3 text-sm font-mono text-gray-400 group-hover:text-gray-500">
                                <li className="flex items-center gap-2">• Website UX Architecture</li>
                                <li className="flex items-center gap-2">• Visual Signal Analysis</li>
                                <li className="flex items-center gap-2">• Market Position Benchmarking</li>
                            </ul>
                            <div className="mt-6 p-4 bg-green-50 group-hover:bg-green-900/10 border border-green-200 group-hover:border-green-500/30 rounded text-[10px] leading-tight text-green-700 group-hover:text-green-400 uppercase tracking-widest font-bold">
                                GUARANTEE: Actionable ROI or the Audit is complimentary.
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-100 group-hover:border-white/10 flex justify-between items-end">
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Entry Investment</p>
                                <p className="text-2xl font-bold font-display uppercase">Custom Quote</p>
                            </div>
                            <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                        </div>
                    </div>

                    {/* Tier 2: The Sprint (Most Popular) */}
                    <div className="group bg-[#050505] text-white p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-500 flex flex-col justify-between min-h-[450px] relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 font-mono uppercase tracking-widest">Flagship</div>
                        <div>
                            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-8 border border-blue-500/30">
                                <Plus className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">The $8M Framework</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                The exact "Visual Infrastructure" used for Aaron Abke's organic scale. We install the conversion engine that builds massive trust.
                            </p>
                            <ul className="space-y-3 text-sm font-mono text-gray-500">
                                <li className="flex items-center gap-2 text-white">
                                    <span className="text-blue-500">/</span> Authority VSL <span className="text-gray-600 text-[10px] ml-1">(The "Why Me")</span>
                                </li>
                                <li className="flex items-center gap-2 text-white">
                                    <span className="text-blue-500">/</span> 3x Signature Narrative Assets
                                </li>
                                <li className="pl-6 text-[10px] text-gray-500 italic max-w-xs mb-2">
                                    *High-retention mini-docs that pre-sell your philosophy before they book.
                                </li>
                                <li className="flex items-center gap-2 text-white">
                                    <span className="text-blue-500">/</span> Authority Layout Build
                                </li>
                            </ul>
                            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded text-[10px] leading-tight text-blue-400 uppercase tracking-widest font-bold">
                                60-DAY PERFORMANCE PROMISE: Measurable Authority Lift.
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-end">
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Standard Investment</p>
                                <p className="text-2xl font-bold font-display uppercase">Custom Quote</p>
                            </div>
                            <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500 text-blue-400" />
                        </div>
                    </div>

                    {/* Tier 3: The Retainer */}
                    <div className="group border border-gray-200 p-8 hover:bg-black hover:text-white transition-all duration-500 flex flex-col justify-between min-h-[450px] relative">
                        <div>
                            <div className="w-12 h-12 bg-gray-100 group-hover:bg-gray-800 rounded-lg flex items-center justify-center mb-8 transition-colors border border-gray-200 group-hover:border-white/10">
                                <Users className="w-6 h-6 text-black group-hover:text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">Fractional CD</h3>
                            <p className="text-gray-500 group-hover:text-gray-400 mb-6 text-sm leading-relaxed">
                                Ongoing Visual Engineering. I join your board as a Fractional Creative & Art Director to manage all output and scale strategy.
                            </p>
                            <ul className="space-y-3 text-sm font-mono text-gray-400 group-hover:text-gray-500">
                                <li className="flex items-center gap-2">• Weekly Executive Strategy</li>
                                <li className="flex items-center gap-2">• Asset QA & Team Leadership</li>
                                <li className="flex items-center gap-2">• Perpetual Content Architecture</li>
                            </ul>
                            <div className="mt-6 p-4 bg-purple-50 group-hover:bg-purple-900/20 border border-purple-200 group-hover:border-purple-500/30 rounded text-[10px] leading-tight text-purple-700 group-hover:text-purple-400 uppercase tracking-widest font-bold">
                                Note: On-location production available as add-on.
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-100 group-hover:border-white/10 flex justify-between items-end">
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Monthly Retainer</p>
                                <p className="text-2xl font-bold font-display uppercase">Custom Quote</p>
                            </div>
                            <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceInfrastructure;
