import React from 'react';
import { Award, Globe, Zap } from 'lucide-react';

const DirectorProfile: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-12 max-w-[1800px] mx-auto bg-[#080808] text-white border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Visual / Title Side */}
                <div className="md:sticky md:top-32">
                    <span className="font-mono text-xs text-blue-500 uppercase tracking-widest mb-4 block">The Creative Director</span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
                        ERMO EGBERTS
                    </h2>
                    <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg mb-8">
                        A decade of visual engineering for global brands.
                        Translating complex value into high-status signals.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <span className="bg-white/5 border border-white/10 px-4 py-2 rounded text-xs font-mono uppercase tracking-widest text-gray-300">Est. 2011</span>
                        <span className="bg-white/5 border border-white/10 px-4 py-2 rounded text-xs font-mono uppercase tracking-widest text-gray-300">Global</span>
                        <span className="bg-white/5 border border-white/10 px-4 py-2 rounded text-xs font-mono uppercase tracking-widest text-gray-300">High-Ticket</span>
                    </div>
                </div>

                {/* Grid Visuals */}
                <div className="grid gap-8">
                    {/* Stat Card 1 */}
                    <div className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-colors group">
                        <Globe className="w-8 h-8 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2">Global Scale</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            My work has been deployed across 5 continents for some of the world's most recognizable organizations.
                        </p>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest pt-6 border-t border-white/10">
                            Credits: Marvel, BBC, Nat Geo, Discovery Channel
                        </p>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-colors group">
                        <Award className="w-8 h-8 text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2">High-Stakes Production</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            From 50-person crews in remote locations to intimate brand documentaries. I understand the weight of production.
                        </p>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest pt-6 border-t border-white/10">
                            Credits: Sky Pro Cycling, Expedia, Garuda Indonesia
                        </p>
                    </div>

                    {/* Stat Card 3 */}
                    <div className="bg-[#111] p-8 rounded-2xl border border-white/5 hover:border-green-500/20 transition-colors group">
                        <Zap className="w-8 h-8 text-green-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2">Conversion Engineering</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            I don't just "make content". I build assets engineered to convert high-ticket offers ($5K – $100K).
                        </p>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest pt-6 border-t border-white/10">
                            Credits: J-Griff, Aaron Abke, Authentik
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DirectorProfile;
