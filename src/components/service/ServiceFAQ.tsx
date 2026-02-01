import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const ServiceFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Do you film everything yourself?",
            answer: "No. I'm a Creative & Art Director—I provide vision, strategy, and creative authority. I work with John W. Sullivan and a curated network of specialists for production. I hold the standard, not the camera."
        },
        {
            question: "What if I already have an editor or production team?",
            answer: "Perfect. I can direct your existing team or bring in specialists where needed. Many clients keep their editor and add me for strategic direction."
        },
        {
            question: "What if I'm not sure which tier I need?",
            answer: "Book the free Brand Audit. We'll diagnose your exact situation and recommend the right path. No sales pressure."
        },
        {
            question: "How long until I see results?",
            answer: "Authority Accelerator (Single Asset): Results visible within 30-45 days of launch. Authority Scale System: Initial improvements by Day 60, full results by Day 180. Fractional CD: Immediate consistency; compounding results over 6-12 months."
        },
        {
            question: "What if I don't see the promised results?",
            answer: "We have guarantees built into each tier. If you implement and don't see results, we work additional days at no cost."
        },
        {
            question: "Can we do this remotely?",
            answer: "Yes, everything is remote-first. Production is coordinated with videographers as needed. All strategy and direction happens via Zoom/Slack."
        },
        {
            question: "How do I know if this will work for my niche?",
            answer: "If you have expertise worth $2K-$10K+ and your visual presence doesn't match that value, this works. Spiritual teachers, coaches, course creators, consultants, healers, educators—all work. The positioning principle is universal."
        },
        {
            question: "What's your capacity?",
            answer: "I take 6-8 Authority Scale projects per year and maintain 3-4 Fractional CD relationships. If I'm at capacity, I'll tell you upfront and offer waitlist status."
        },
        {
            question: "Why is the Fractional CD so expensive?",
            answer: "Because it's not execution—it's creative authority and standards-keeping. The value isn't in labor hours; it's in saying \"no\" to things that dilute your positioning. Premium clients expect this level of strategic oversight."
        }
    ];

    return (
        <section className="bg-black text-white py-24 px-4 md:px-12 relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-[30%] left-[-10%] w-[40vw] h-[40vw] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <p className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">Common Questions</p>
                    <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
                        FAQ
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                        Everything you need to know about working with Authentik Studio.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                            >
                                <span className="text-base md:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-all duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceFAQ;
