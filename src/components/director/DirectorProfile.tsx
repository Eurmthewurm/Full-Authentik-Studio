import React from 'react';
import { Award, Globe, Zap, CheckCircle } from 'lucide-react';

const DirectorProfile: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-12 max-w-[1800px] mx-auto bg-[#080808] text-white border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Visual Side - Image */}
                <div className="md:sticky md:top-32 relative group">
                    <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden relative border border-white/10">
                        <img
                            src="https://i.imgur.com/6kGbwQ3.jpeg"
                            alt="Ermo Egberts - Creative Director"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                        <div className="absolute bottom-8 left-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-blue-400">Est. 2011</span>
                                <span className="bg-white/5 border border-white/10 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-300">Global</span>
                            </div>
                            <h2 className="text-3xl font-display font-bold">ERMO EGBERTS</h2>
                            <p className="text-sm font-mono text-gray-400 tracking-widest uppercase">Creative & Art Director</p>
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="space-y-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-8">
                            Building Systems for Measurable Growth.
                        </h2>
                        <div className="prose prose-invert prose-lg text-gray-400 font-light leading-relaxed">
                            <p>
                                Creative & Art Director with 15+ years of experience building brand, video, and narrative systems that drive measurable growth.
                                I help founder-led and product brands scale by turning creative vision into repeatable, revenue-generating creative systems.
                            </p>
                            <p className="mt-6">
                                I thrive in senior creative roles where strategic vision, aesthetic authority, and execution excellence combine to create audience trust, brand authority, and measurable growth.
                            </p>
                        </div>
                    </div>

                    {/* Key Outcomes */}
                    <div className="bg-[#111] p-8 rounded-2xl border border-white/5">
                        <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                            <Award className="w-6 h-6 text-blue-500" />
                            Key Outcomes Delivered
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex gap-4 items-start">
                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 leading-relaxed">Scaled founder-led brands from <strong className="text-white">$2M → $8M in 18 months</strong> through video, content, and visual identity alignment.</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 leading-relaxed">Built and led teams of <strong className="text-white">10–30 creatives</strong>, delivering premium, consistent output across campaigns and long-form content.</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 leading-relaxed">Currently leading narrative strategy on a <strong className="text-white">feature-length documentary</strong> targeting Netflix and top-tier festivals.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Stat Card 1 */}
                    <div className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-colors group">
                        <Globe className="w-8 h-8 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2">Global Scale</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            My work has been deployed for high-growth founders and product brands. Through my network, we access production capabilities used by global giants.
                        </p>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest pt-6 border-t border-white/10">
                            Direct: J-Griff, Aaron Abke, Pupflask<br />
                            <span className="text-blue-400">Network: Marvel, BBC, Nat Geo</span>
                        </p>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-colors group">
                        <Award className="w-8 h-8 text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2">High-Stakes Production</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            From intimate brand documentaries to managing product campaigns. I collaborate with John (DP) to bring broadcast-level infrastructure to your brand.
                        </p>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest pt-6 border-t border-white/10">
                            Credits: Sky Pro Cycling, Expedia, Garuda Indonesia (John Sullivan)
                        </p>
                    </div>

                    {/* Specializations */}
                    <div className="bg-[#111] p-8 rounded-2xl border border-white/5">
                        <h3 className="flex items-center gap-3 text-xl font-bold text-white mb-6">
                            <Zap className="w-6 h-6 text-purple-500" />
                            What I Specialize In
                        </h3>
                        <ul className="grid grid-cols-1 gap-4">
                            {[
                                "Brand strategy & positioning that drives trust, acquisition, and retention",
                                "Visual storytelling and cinematic content production across commercial, branded, and long-form projects",
                                "Scalable creative workflows and systems for video, content, and brand identity",
                                "Leading cross-functional creative teams with clarity, taste, and operational efficiency"
                            ].map((spec, i) => (
                                <li key={i} className="flex gap-4 items-start border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                    <span className="font-mono text-xs text-purple-500 mt-1.5">0{i + 1}</span>
                                    <span className="text-gray-400 leading-relaxed">{spec}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DirectorProfile;
