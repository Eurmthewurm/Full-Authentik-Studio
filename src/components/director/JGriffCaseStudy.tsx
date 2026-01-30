import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Archive, TrendingUp, Play } from 'lucide-react';

interface JGriffCaseStudyProps {
    couchImgSrc: string;
}

const JGriffCaseStudy: React.FC<JGriffCaseStudyProps> = ({ couchImgSrc }) => {
    return (
        <section className="py-24 px-4 md:px-12 bg-white text-black relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 relative z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                            <span className="font-mono text-xs font-bold uppercase tracking-widest">Case Study 001</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-display font-bold leading-none mb-4">
                            THE ORGANIC<br />EMPIRE
                        </h2>
                    </div>
                    <div className="md:text-right mt-8 md:mt-0">
                        <p className="text-lg font-bold">LUC Mastermind &<br />Conscious Wealth Podcast</p>
                        <p className="text-sm text-gray-500 font-mono mt-2">1.5 YEAR SPRINT</p>
                    </div>
                </div>

                {/* THE TESTIMONIAL - HERO */}
                <motion.div
                    whileHover={{ scale: 1.005 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-black rounded-sm mb-24 overflow-hidden border border-white/10 group shadow-2xl"
                >
                    <iframe
                        src="https://player.vimeo.com/video/1112128628?title=0&byline=0&portrait=0"
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded border border-white/10 pointer-events-none">
                        <span className="text-xs font-mono text-white flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            THE FOUNDER'S TESTIMONY
                        </span>
                    </div>
                </motion.div>

                {/* The Numbers & Narrative */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
                    <div className="md:col-span-4">
                        <div className="space-y-12">
                            <div>
                                <p className="text-6xl font-display font-bold mb-2">$8M</p>
                                <p className="font-mono text-xs uppercase tracking-widest text-gray-500 border-t border-black/10 pt-2 inline-block">Peak Annual Revenue</p>
                            </div>
                            <div>
                                <p className="text-6xl font-display font-bold mb-2">100%</p>
                                <p className="font-mono text-xs uppercase tracking-widest text-gray-500 border-t border-black/10 pt-2 inline-block">Organic Traffic (Zero Ads)</p>
                            </div>

                            {/* J-Griff Status Note */}
                            <div className="bg-gray-50 p-6 border border-gray-200 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <Archive className="w-4 h-4 text-gray-400" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">The Legacy Archive</span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    A completed creative cycle. Upon reaching the <span className="font-bold text-black">$8M apex</span>, the project was deliberately concluded.
                                    Standing now as a <span className="text-black font-bold">closed-loop masterclass</span> in organic scale.
                                </p>
                            </div>

                            <div>
                                <a
                                    href="https://www.instagram.com/official_jgriff/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold border-b border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors"
                                >
                                    <Instagram className="w-4 h-4" />
                                    @official_jgriff
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-8">
                        <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                            "I always like to keep the human aspect."
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-600 leading-relaxed font-light">
                            <div className="space-y-6">
                                <p>
                                    I engineered the visual infrastructure that took this brand from <strong>$2M to $8M in just 1.5 years</strong>.
                                </p>
                                <p>
                                    <strong>The Strategy:</strong> I stepped out from behind the camera. We stripped away the polish to talk about the real stuff:
                                    <span className="text-black font-medium block mt-2 ml-4 border-l-2 border-blue-500 pl-4">
                                        • Service to Others Path<br />
                                        • Breaking Scarcity Programming<br />
                                        • Building Wealth in a Heart-Centered Way
                                    </span>
                                </p>
                            </div>

                            <div className="space-y-6">
                                <p>
                                    I became the proxy for the audience, asking the questions they were afraid to ask. As J-Griff put it: <span className="italic">"Ermo asked powerful questions that truly required me to dig deep."</span>
                                </p>

                                <div className="bg-gray-50 p-6 border-l-4 border-black">
                                    <h4 className="text-black font-bold mb-2 flex items-center gap-2">
                                        <TrendingUp className="w-4 h-4" />
                                        The Validation
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-4">
                                        This single interview drove more qualified applications to the LUC Mastermind than any ad campaign.
                                    </p>

                                    {/* Social Proof Comments */}
                                    <div className="space-y-3 pt-4 border-t border-gray-200">
                                        {[
                                            { name: 'backyardchickenss1', text: '"This episode... make me want to join the LUC. Keep dropping the 🔥!"', img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop' },
                                            { name: 'markholmanhealth', text: '"Internet got what it wanted: more Ermo 🔥🔥"', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop' }
                                        ].map((comment, i) => (
                                            <div key={i} className="flex gap-3 items-start">
                                                <div className="w-6 h-6 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                                                    <img src={comment.img} />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold text-black">{comment.name}</p>
                                                    <p className="text-[11px] text-gray-600 leading-tight">{comment.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* VISUAL EVIDENCE - LIST VIEW */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-black/10 flex-1"></div>
                        <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">Visual Evidence</span>
                        <div className="h-px bg-black/10 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {/* Video 1: THE COUCH REEL */}
                        <div className="bg-black text-white p-8 rounded-2xl relative overflow-hidden shadow-2xl group border border-white/5 flex flex-col w-full">
                            <div className="absolute top-0 right-0 p-6 opacity-20 font-display text-6xl font-bold pointer-events-none text-white/10">01</div>
                            <h3 className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                                Deconstructing the Pedestal
                            </h3>
                            <h4 className="text-xl font-bold mb-6">"We didn't interview. We communed."</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div
                                    onClick={() => window.open('https://www.instagram.com/p/C6FGYUhSqHMOHOzseoNMDqdqIC6cRRwq6s06ZA0/', '_blank')}
                                    className="w-full aspect-video bg-[#111] border border-white/20 relative overflow-hidden shadow-lg rounded-lg group-hover:border-blue-500/40 transition-colors cursor-pointer"
                                >
                                    <img
                                        src={couchImgSrc}
                                        alt="Ermo and J-Griff Interview on Couch"
                                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                                            <Play className="w-6 h-6 text-white fill-white" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                        To break the "Guru" positioning, I sat on the couch <i>with</i> the client.
                                        This demonstrates the "Authentik" interview style that builds massive trust.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center font-bold text-white border border-white/10 text-xs">IG</div>
                                        <div>
                                            <p className="font-bold text-white text-sm">WATCH THE REEL</p>
                                            <p className="font-mono text-[10px] text-gray-400">INSTAGRAM ARCHIVE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Video 2: JESS */}
                        <div className="bg-[#0f0f0f] text-white p-8 rounded-2xl relative overflow-hidden shadow-2xl group border border-white/5 flex flex-col w-full">
                            <div className="absolute top-0 right-0 p-6 opacity-20 font-display text-6xl font-bold pointer-events-none text-white/10">02</div>
                            <h3 className="text-xs font-mono text-purple-400 mb-2 uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                                Operational Impact
                            </h3>
                            <h4 className="text-xl font-bold mb-6">"We scaled to $8M. The systems held."</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="w-full aspect-video bg-[#050505] border border-white/20 relative overflow-hidden shadow-lg rounded-lg group-hover:border-purple-500/30 transition-colors">
                                    <iframe
                                        src="https://player.vimeo.com/video/1152804047?title=0&byline=0&portrait=0"
                                        className="absolute inset-0 w-full h-full"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                        Creativity without infrastructure is chaos. Jess, the COO, breaks down how we integrated high-fidelity production into operations without slowing down the team.
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center font-bold text-white border border-white/10 text-sm">J</div>
                                        <div>
                                            <p className="font-bold text-white">JESS</p>
                                            <p className="text-xs font-mono text-purple-400">COO, LEVEL UP COLLECTIVE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JGriffCaseStudy;
