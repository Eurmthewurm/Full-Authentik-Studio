import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const JGriffCaseStudy: React.FC = () => {
    return (
        <section className="py-24 px-4 md:px-12 max-w-[1800px] mx-auto bg-black text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Visual Side - Video Embed */}
                <div className="relative">
                    <div className="aspect-video w-full rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
                        <iframe
                            src="https://player.vimeo.com/video/1112128628?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            title="J-Griff Testimonial"
                        ></iframe>
                    </div>
                </div>

                {/* Narrative Side */}
                <div className="space-y-8">
                    <div>
                        <h4 className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">The Observation</h4>
                        <p className="text-xl text-gray-300 leading-relaxed font-light">
                            J-Griff was doing <span className="text-white font-bold">$2M</span>. He had built it through relentless content creation.
                            But something was off.
                        </p>
                        <p className="text-gray-400 mt-4 leading-relaxed">
                            The offer was solid. The content was consistent.
                            Yet the market was still treating him like "another wealth creator."
                            Not as the thinker. Not as the authority. Just... another voice.
                        </p>
                    </div>

                    <div className="border-l border-white/20 pl-6">
                        <h4 className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-4">The Pivot</h4>
                        <p className="text-lg text-white leading-relaxed">
                            So we stepped back. The strategy wasn't "make more videos."
                            It was <span className="italic">"engineer one asset so powerful, so positioned, it anchors the entire brand."</span>
                        </p>
                        <p className="text-gray-400 mt-4 leading-relaxed">
                            We made a documentary. Just one. Sat on a couch. Asked real questions.
                            Positioned him as a thinking founder, not a polished guru.
                        </p>
                    </div>

                    <div className="bg-[#111] p-8 rounded-xl border border-white/5">
                        <h4 className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-6">The Result</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start justify-between border-b border-white/10 pb-4">
                                <span className="text-gray-400">Applications Generated</span>
                                <span className="text-white font-bold text-xl">2,300+</span>
                            </li>
                            <li className="flex items-start justify-between border-b border-white/10 pb-4">
                                <span className="text-gray-400">Revenue Per Viewer</span>
                                <div className="text-right">
                                    <span className="text-green-400 font-bold block">+340%</span>
                                    <span className="text-[10px] text-gray-500 uppercase">vs Standard Content</span>
                                </div>
                            </li>
                            <li className="flex items-start justify-between">
                                <span className="text-gray-400">Acquisition Cost</span>
                                <div className="text-right">
                                    <span className="text-green-400 font-bold block">-89%</span>
                                    <span className="text-[10px] text-gray-500 uppercase">vs Paid Ads</span>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-xl font-light text-center">
                                The business went from <span className="text-white font-bold">$2M to $8M</span> in just <span className="text-white font-bold">18 months</span>.
                            </p>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 italic text-center">
                        This wasn't luck. It was architecture.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default JGriffCaseStudy;
