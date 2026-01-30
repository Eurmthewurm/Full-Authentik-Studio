import React from 'react';
import { Youtube, StopCircle, ArrowRight } from 'lucide-react';

const GreatAwakeningCaseStudy: React.FC = () => {
    return (
        <section className="py-20 px-4 md:px-12 bg-[#050505] text-white border-t border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] to-[#050505]"></div>
            <div className="absolute top-0 right-0 w-[50vw] h-[500px] bg-blue-900/10 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[30vw] h-[300px] bg-yellow-600/5 blur-[80px] pointer-events-none"></div>

            <div className="max-w-[1600px] mx-auto relative z-10">
                <div className="flex items-center gap-4 mb-6 justify-center">
                    <span className="w-8 h-px bg-yellow-500/50"></span>
                    <span className="font-mono text-xs text-yellow-500 tracking-widest uppercase">Collaboration</span>
                    <span className="w-8 h-px bg-yellow-500/50"></span>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-white mb-4">
                        The Great <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">Awakening</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">The Origin Story</h3>
                            <p className="text-gray-400 leading-relaxed text-lg font-light">
                                It started as a conversation between titans. <strong className="text-white">J-Griff</strong> (Conscious Wealth) and <strong className="text-white">Aaron Abke</strong> (Spiritual Intelligence) wanted to bridge the gap between their two worlds.
                            </p>
                        </div>

                        <div className="pl-6 border-l-2 border-yellow-500/30">
                            <h4 className="text-yellow-500 font-bold mb-2 text-sm uppercase tracking-wide">The Strategy</h4>
                            <p className="text-gray-300 text-sm">
                                We didn't want another "podcast." We wanted a cultural moment. I architected a format that felt less like an interview and more like a documentary. The audience was starving for high-level spiritual discourse with cinematic gravity.
                            </p>
                        </div>

                        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <div className="flex items-center gap-4 mb-2">
                                <StopCircle className="w-5 h-5 text-red-500" />
                                <span className="font-bold">The Conclusion</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                The show blew up fast, becoming an instant flagship asset. However, when <strong className="text-white">J-Griff was done with the business</strong> and successfully exited the industry, we concluded the show at its peak. It stands as a completed limited series.
                            </p>
                        </div>
                    </div>

                    <div
                        onClick={() => window.open('https://www.youtube.com/@TheGreatAwakeningPodcast', '_blank')}
                        className="relative aspect-video bg-black rounded-xl overflow-hidden border border-white/10 flex flex-col items-center justify-center text-center p-8 group cursor-pointer shadow-2xl"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=2000&auto=format&fit=crop')` }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <Youtube className="w-16 h-16 text-red-500 mb-6 group-hover:scale-110 group-hover:text-red-400 transition-all duration-300 shadow-xl" />
                            <h3 className="text-3xl font-display font-bold text-white mb-2">The Great Awakening</h3>
                            <p className="text-gray-400 mb-8 font-light tracking-wide">Watch the full documentary series on YouTube</p>

                            <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-yellow-500 hover:text-white transition-all duration-300 flex items-center gap-2">
                                Open Channel <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GreatAwakeningCaseStudy;
