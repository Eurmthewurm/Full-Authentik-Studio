import React from 'react';
import { Youtube, Globe } from 'lucide-react';

interface AaronAbkeCaseStudyProps {
    aaronImgSrc: string;
}

const AaronAbkeCaseStudy: React.FC<AaronAbkeCaseStudyProps> = ({ aaronImgSrc }) => {
    return (
        <section className="relative w-full bg-[#161a25] text-white overflow-hidden border-t border-white/10">
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2500&auto=format&fit=crop')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#161a25] via-[#161a25]/60 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-[1800px] mx-auto px-4 md:px-12 py-24">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16">
                    <div>
                        <div className="inline-flex items-center gap-3 mb-6 bg-blue-500/10 backdrop-blur-md px-4 py-2 rounded-full border border-blue-500/20">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-200">Case Study 002 • 300K+ Subs</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-display font-light uppercase tracking-wide leading-none">
                            Aaron<br />
                            <span className="font-bold">Abke</span>
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0 flex flex-col items-end">
                        <div className="flex items-center gap-4 mb-2">
                            <a href="https://www.youtube.com/@AaronAbke" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors">
                                <Youtube className="w-5 h-5" />
                                <span className="font-bold">@AaronAbke</span>
                            </a>
                            <div className="w-px h-4 bg-white/20"></div>
                            <a href="https://www.aaronabke.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                                <Globe className="w-4 h-4" />
                                <span className="font-bold">aaronabke.com</span>
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm max-w-xs text-right">
                            4D University. Unity Consciousness.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-4 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#161a25] to-transparent opacity-60 z-10"></div>
                            <img
                                src={aaronImgSrc}
                                alt="Aaron Abke Portrait"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-6 left-6 z-20">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    <span className="text-xs font-mono uppercase tracking-widest text-green-400">Online</span>
                                </div>
                                <p className="text-2xl font-bold font-display">Spiritual Teacher</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="bg-[#1f232e] rounded-xl border border-white/10 shadow-2xl overflow-hidden max-w-3xl mx-auto lg:ml-0">
                            <div className="bg-[#161a25] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <img
                                            src={aaronImgSrc}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#161a25]"></div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white flex items-center gap-1">
                                            Aaron Abke <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 space-y-8 font-sans text-sm md:text-base bg-[#1f232e]">
                                <div className="flex justify-center">
                                    <span className="text-[10px] text-gray-500 font-medium bg-[#161a25] px-3 py-1 rounded-full border border-white/5">Today</span>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-full bg-blue-900 flex-shrink-0 overflow-hidden border border-white/10 relative">
                                        <img src={aaronImgSrc} alt="Aaron" className="w-full h-full object-cover" />
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-black rounded-full text-[4px] flex items-center justify-center font-bold">4</div>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className="font-bold text-white">Aaron Abke</span>
                                            <span className="text-[10px] text-gray-500">5:44 PM</span>
                                        </div>
                                        <div className="text-gray-300 leading-relaxed bg-blue-500/5 p-4 rounded-r-2xl rounded-bl-2xl border border-blue-500/10">
                                            <p>Hey brother! Great to meet you. I love the work you’re doing and am grateful to be working with you! 🙏❤️</p>
                                            <p className="mt-2">Excited to create even more magic together 🙌</p>
                                        </div>
                                        <div className="mt-2 flex items-center gap-2">
                                            <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center font-bold text-[8px]">4</div>
                                            <span className="text-xs text-gray-500">Aaron Abke is from <span className="text-white font-bold">4DU</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-[#161a25] border-t border-white/5">
                                <div className="w-full h-10 bg-[#1f232e] rounded-lg border border-white/10 flex items-center px-4 text-sm text-gray-600">Message Aaron Abke...</div>
                            </div>
                        </div>

                        {/* High Retention Series - New Section */}
                        <div className="mt-12 bg-black/40 rounded-xl border border-white/10 p-8">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                High-Retention Video Series
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/20">
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/A5Aad3I6hls"
                                        title="High-Retention Video Structuring"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-gray-300 leading-relaxed">
                                        This project demonstrates <span className="text-white font-bold">high-retention video structuring</span>.
                                        I specifically engineered the intro to function as a powerful hook, maximizing immediate viewer engagement.
                                    </p>
                                    <div className="bg-blue-500/5 border-l-2 border-blue-500 p-4">
                                        <p className="text-sm text-blue-200 italic">
                                            "Despite a limited multi-month run, this series successfully drove a significant spike in subscribers and qualified leads for Aaron Abke’s services."
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-widest text-gray-500">
                                        <span className="bg-white/5 px-2 py-1 rounded">Visual Engineering</span>
                                        <span className="bg-white/5 px-2 py-1 rounded">Lead Generation</span>
                                        <span className="bg-white/5 px-2 py-1 rounded">Hook Strategy</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The Bottom Line - Explicit "Why Me" */}
                        <div className="mt-8 border-t border-white/5 pt-8">
                            <h4 className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">The Bottom Line</h4>
                            <p className="text-xl md:text-2xl font-light leading-relaxed">
                                <span className="text-white font-bold">This isn't just "video editing."</span> It's the architecture of authority. We built a visual ecosystem that allowed Aaron to command premium attention in a crowded market.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AaronAbkeCaseStudy;
