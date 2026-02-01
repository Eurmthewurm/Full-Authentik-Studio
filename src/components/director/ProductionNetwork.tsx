import React from 'react';
import { Clapperboard, Play } from 'lucide-react';

interface ProductionNetworkProps {
    brands: string[];
}

const ProductionNetwork: React.FC<ProductionNetworkProps> = ({ brands }) => {
    return (
        <section className="py-16 border-b border-white/10 bg-[#0a0a0a] overflow-hidden">
            <div className="px-4 md:px-12 max-w-[1800px] mx-auto mb-12">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Clapperboard className="w-4 h-4 text-gray-400" />
                            <span className="font-mono text-xs text-gray-500 tracking-widest uppercase">Creative & Art Direction & Production Leadership</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 uppercase">I do not hold the camera. I hold the standard.</h3>
                        <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
                            <p>
                                As Creative & Art Director, my role is to bring clarity, alignment, and creative leadership across the entire production. I work closely with in-house teams and trusted external partners, <span className="text-white font-medium">strengthening what already exists and extending it where needed.</span>
                            </p>
                            <p>
                                Rather than forcing a fixed setup, each project is built around the brief. I collaborate with senior producers — including <a href="https://johnwsullivan.com/" target="_blank" rel="noreferrer" className="text-white font-bold underline decoration-blue-500 underline-offset-4 hover:text-blue-400 transition-colors">John W. Sullivan</a> — to curate the right specialists while maintaining continuity with existing teams.
                            </p>
                            <p>
                                The focus is simple: <span className="text-white font-medium">clear vision, efficient execution,</span> and work that holds up creatively and commercially.
                            </p>
                            <p className="text-base text-gray-400">
                                Our extended network has contributed to projects for <span className="text-white">BBC, National Geographic, Discovery Channel, and Village Roadshow Pictures</span>, as well as category-leading founders and successful product brands including <span className="text-white">J-Griff, Aaron Abke, Pupflask, and Blackmagic.</span>
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-4">
                            <a
                                href="https://johnwsullivan.com/showreel"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded text-sm text-gray-300 hover:text-white hover:border-white/30 transition-all font-medium"
                            >
                                <Play className="w-3 h-3" /> View Production Reel
                            </a>
                        </div>
                        <p className="text-xs text-gray-500 mt-6 font-mono uppercase tracking-widest">
                            OUR NETWORK'S COLLECTIVE CREDITS INCLUDE:
                        </p>
                    </div>
                </div>
            </div>

            {/* Brand Marquee */}
            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>

                <div className="flex whitespace-nowrap animate-marquee">
                    {[...brands, ...brands].map((brand, index) => (
                        <div key={index} className="mx-8 md:mx-16 flex items-center opacity-50 hover:opacity-100 transition-opacity">
                            <span className="text-3xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter cursor-default">
                                {brand}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductionNetwork;
