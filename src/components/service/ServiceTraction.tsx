import React from 'react';

const ServiceTraction: React.FC = () => {
    return (
        <section className="py-20 border-t border-white/5 bg-[#050505]">
            <div className="max-w-[1800px] mx-auto px-4 md:px-12 text-center">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-display font-bold text-white">$8M+</p>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-2">Revenue Generated</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-display font-bold text-white">100%</p>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-2">Organic (Zero Ads)</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-display font-bold text-white">8x</p>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-2">Avg. Client ROI</p>
                    </div>
                </div>
                <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-12">Trusted by founders scaling past 7-Figures</p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <h3 className="text-2xl font-bold text-white">J-GRIFF</h3>
                    <h3 className="text-2xl font-bold text-white">AARON ABKE</h3>
                    <h3 className="text-2xl font-bold text-white">SKY PRO CYCLING</h3>
                    <h3 className="text-2xl font-bold text-white">BLACKMAGIC</h3>
                </div>
            </div>
        </section>
    );
};

export default ServiceTraction;
