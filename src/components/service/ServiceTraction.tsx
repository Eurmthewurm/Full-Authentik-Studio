import React from 'react';

const ServiceTraction: React.FC = () => {
    return (
        <section className="py-20 border-t border-white/5 bg-[#050505]">
            <div className="max-w-[1800px] mx-auto px-4 md:px-12">
                {/* Case Study Header */}
                <div className="text-center mb-12">
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Case Study</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">J-Griff</h2>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-6">
                        From $2M to $8M in 18 months. One flagship asset. Strategic positioning. Visual authority.
                    </p>
                    <a
                        href="https://www.jgriff.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-500 hover:text-white transition-all border border-blue-500/20 hover:border-white/30 px-6 py-2 rounded-full backdrop-blur-sm"
                    >
                        Visit Website
                    </a>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {/* Metric 1 */}
                    <div className="bg-[#111] p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                        <p className="text-3xl md:text-4xl font-display font-bold text-white mb-1">2,300+</p>
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Applications Generated</p>
                    </div>

                    {/* Metric 2 */}
                    <div className="bg-[#111] p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                        <p className="text-3xl md:text-4xl font-display font-bold text-green-400 mb-1">+340%</p>
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Revenue Per Viewer</p>
                    </div>

                    {/* Metric 3 */}
                    <div className="bg-[#111] p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                        <p className="text-3xl md:text-4xl font-display font-bold text-blue-400 mb-1">-89%</p>
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">CAC (vs Paid Ads)</p>
                    </div>

                    {/* Metric 4 */}
                    <div className="bg-[#111] p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                        <p className="text-3xl md:text-4xl font-display font-bold text-white mb-1">18mo</p>
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">$2M → $8M Scale</p>
                    </div>
                </div>

                {/* Client Logos */}
                <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-8 text-center">Trusted by founders scaling past 7-Figures</p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <h3 className="text-xl font-bold text-white">J-GRIFF</h3>
                    <h3 className="text-xl font-bold text-white">AARON ABKE</h3>
                    <h3 className="text-xl font-bold text-white">PUPFLASK</h3>
                    <h3 className="text-xl font-bold text-white">BBC</h3>
                    <h3 className="text-xl font-bold text-white">NAT GEO</h3>
                    <h3 className="text-xl font-bold text-white">DISCOVERY</h3>
                    <h3 className="text-xl font-bold text-white">SBS</h3>
                </div>
            </div>
        </section>
    );
};

export default ServiceTraction;
