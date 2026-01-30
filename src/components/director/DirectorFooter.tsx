import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

interface DirectorFooterProps {
    onContactClick: () => void;
    onNavigate: (page: string) => void;
}

const DirectorFooter: React.FC<DirectorFooterProps> = ({ onContactClick, onNavigate }) => {
    return (
        <section id="contact" className="py-32 px-4 md:px-12 bg-white text-black text-center border-t border-gray-100">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="font-mono text-xs text-red-600 font-bold uppercase tracking-widest">2 SPOTS LEFT FOR Q1/Q2 2026</span>
            </div>
            <h2 className="text-5xl md:text-9xl font-display font-bold mb-12 uppercase tracking-tighter">Retain The<br />Director</h2>
            <p className="max-w-xl mx-auto text-gray-500 mb-8">
                I am a Creative & Art Director specializing in <span className="text-black font-medium">remote video production</span>. <br />
                Full-service: Video, Branding, Web. On-location available at premium rates.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md mx-auto mb-12">
                <p className="text-sm text-gray-600 mb-2">What you get on the call:</p>
                <ul className="text-left text-sm text-gray-700 space-y-2">
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 30-min strategy session (not a sales pitch)</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Free Content Teardown of your current assets</li>
                    <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Scope alignment for potential partnership</li>
                </ul>
            </div>
            <div className="flex flex-col items-center gap-8">
                <button
                    onClick={onContactClick}
                    className="px-10 py-5 bg-black text-white font-bold text-lg hover:bg-gray-800 transition-all flex items-center gap-3 shadow-lg"
                >
                    <Mail className="w-5 h-5" /> Book Discovery Call
                </button>

                <div className="text-sm text-gray-400 pt-8 border-t border-gray-100 w-full max-w-md">
                    <p className="mb-2">Need immediate scale?</p>
                    <a href="/service" onClick={(e) => { e.preventDefault(); onNavigate('service'); }} className="text-blue-600 font-bold hover:underline">
                        Apply for the Service Scaling Division →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DirectorFooter;
