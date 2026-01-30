import React from 'react';

interface ServiceCTAProps {
    onContactClick: () => void;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({ onContactClick }) => {
    return (
        <section className="py-24 px-4 md:px-12 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-12">READY TO FIND YOUR GAP?</h2>
                <div className="flex justify-center">
                    <button
                        onClick={onContactClick}
                        className="px-12 py-5 bg-white text-black font-bold text-lg rounded hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center gap-2"
                    >
                        <span>Book Your Brand Audit</span>
                        <span className="text-blue-600">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServiceCTA;
