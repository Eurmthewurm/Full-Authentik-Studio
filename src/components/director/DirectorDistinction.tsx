import React from 'react';
import { PenTool, Focus } from 'lucide-react';

const DirectorDistinction: React.FC = () => {
    return (
        <section className="py-32 px-4 md:px-12 bg-white text-black relative">
            <div className="max-w-[1800px] mx-auto">
                <div className="mb-16">
                    <h2 className="text-5xl md:text-8xl font-display font-bold leading-none mb-6">THE DISTINCTION</h2>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
                        Production captures reality.<br />Direction engineers it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    <div className="border-t-4 border-black pt-8">
                        <div className="flex items-center gap-3 mb-6">
                            <PenTool className="w-8 h-8 text-blue-600" />
                            <h3 className="text-2xl font-bold">The Creative & Art Director</h3>
                            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">ERMO</span>
                        </div>
                        <p className="text-lg font-bold mb-4">"I provide the Architecture."</p>
                        <ul className="space-y-4">
                            {[
                                { id: '01', title: 'Visual Strategy', desc: 'Translating abstract business goals into concrete visual codes (Color, Tone, Pacing).' },
                                { id: '02', title: 'Narrative Engineering', desc: 'Structuring the "argument" of the content to maximize retention and conversion.' },
                                { id: '03', title: 'Quality Control', desc: 'The final "Yes" or "No". Ensuring the output matches the $8M standard.' }
                            ].map((item) => (
                                <li key={item.id} className="flex gap-4 items-start">
                                    <span className="font-mono text-xs text-gray-400 mt-1">{item.id}</span>
                                    <div>
                                        <h4 className="font-bold">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t-4 border-gray-200 pt-8 opacity-75">
                        <div className="flex items-center gap-3 mb-6">
                            <Focus className="w-8 h-8 text-gray-400" />
                            <h3 className="text-2xl font-bold text-gray-500">The Production Unit</h3>
                            <span className="bg-gray-100 text-gray-500 text-xs font-bold px-2 py-1 rounded">NETWORK</span>
                        </div>
                        <p className="text-lg font-bold mb-4 text-gray-500">"They provide the Assets."</p>
                        <ul className="space-y-4">
                            {[
                                { id: '01', title: 'Cinematography', desc: 'Cameras, Lighting, Lenses. Handled by John W. Sullivan & Co.' },
                                { id: '02', title: 'Logistics', desc: 'Locations, Crew Management, Equipment Rental.' }
                            ].map((item) => (
                                <li key={item.id} className="flex gap-4 items-start">
                                    <span className="font-mono text-xs text-gray-300 mt-1">{item.id}</span>
                                    <div>
                                        <h4 className="font-bold text-gray-500">{item.title}</h4>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DirectorDistinction;
