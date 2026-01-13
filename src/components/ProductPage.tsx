import React, { useState } from 'react';
import { Package, ShieldCheck, ArrowRight, Zap, ShoppingBag, Globe, BarChart, Settings, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from './SEO';

interface ProductPageProps {
   onContactClick: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ onContactClick }) => {
   const [activeTab, setActiveTab] = useState<'listings' | 'content'>('listings');

   return (
      <>
         <SEO
            title="Amazon SPV Studio | Authentik Studio"
            description="High-Conversion Amazon Content. Listings, A+ Content, and Brand Stories designed to dominate your category."
         />
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-20 bg-background text-primary selection:bg-green-500/30 font-sans cursor-none flex flex-col page-transition"
         >

            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none -z-10">
               <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-green-500/5 blur-[100px]"></div>
               <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-blue-500/5 blur-[100px]"></div>
            </div>

            {/* 1. HERO HEADER */}
            <section className="min-h-[50vh] flex flex-col justify-end pb-12 px-4 md:px-12 max-w-[1800px] mx-auto border-b border-white/5">
               <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end"
               >
                  <div>
                     <div className="flex items-center gap-3 mb-6">
                        <div className="bg-green-500/10 px-3 py-1 rounded border border-green-500/20 flex items-center gap-2">
                           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                           <span className="font-mono text-xs text-green-400 tracking-widest uppercase">Amazon Division</span>
                        </div>
                     </div>
                     <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
                        AUTHENTIK<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">SPV STUDIO</span>
                     </h1>
                  </div>
                  <div className="md:max-w-md md:ml-auto">
                     <p className="text-xl md:text-2xl font-light text-gray-400 mb-6 leading-relaxed">
                        We engineer <span className="text-white font-medium">Conversion Assets</span> for 7 & 8-figure Amazon Brands.
                     </p>
                     <div className="flex flex-wrap gap-4">
                        <div className="bg-[#111] px-4 py-2 rounded border border-white/10 flex items-center gap-2">
                           <ShoppingBag className="w-4 h-4 text-green-500" />
                           <span className="text-xs font-mono text-gray-400">MARKETPLACES: US / UK / EU</span>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </section>

            {/* 2. THE VALUE PROP */}
            <section className="py-24 px-4 md:px-12 max-w-[1800px] mx-auto">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-4">
                     <h2 className="text-4xl font-display font-bold mb-6">Stop listing products.<br />Start building <span className="text-green-500">Brands.</span></h2>
                     <p className="text-gray-400 leading-relaxed mb-8">
                        The Amazon algorithm has changed. Keyword stuffing doesn't work effectively anymore. The brands winning today are the ones with <strong>Off-Amazon traffic</strong> and <strong>On-Amazon Brand Authority</strong>.
                     </p>
                     <button
                        onClick={onContactClick}
                        className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-green-500 hover:text-white transition-all flex items-center gap-2"
                     >
                        Get a Quote <ArrowRight className="w-4 h-4" />
                     </button>
                  </div>

                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                     {/* Feature 1 */}
                     <div className="bg-[#111] p-8 rounded-xl border border-white/5 hover:border-green-500/30 transition-all group">
                        <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                           <Package className="w-6 h-6 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Listing Optimization</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           We rewrite and redesign your Main Images, Infographics, and Lifestyle shots to maximize CTR and Conversion Rate.
                        </p>
                     </div>

                     {/* Feature 2 */}
                     <div className="bg-[#111] p-8 rounded-xl border border-white/5 hover:border-green-500/30 transition-all group">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                           <ShieldCheck className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">A+ Premium Content</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           Full modular A+ layouts that tell your brand story. Essential for cross-selling and increasing Average Order Value.
                        </p>
                     </div>

                     {/* Feature 3 */}
                     <div className="bg-[#111] p-8 rounded-xl border border-white/5 hover:border-green-500/30 transition-all group">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                           <Zap className="w-6 h-6 text-purple-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Brand Story</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           The often ignored "About the Brand" section that builds trust and separates you from cheap Chinese competitors.
                        </p>
                     </div>

                     {/* Feature 4 */}
                     <div className="bg-[#111] p-8 rounded-xl border border-white/5 hover:border-green-500/30 transition-all group">
                        <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                           <BarChart className="w-6 h-6 text-yellow-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">PPC Video Assets</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                           High-retention video ads specifically edited for Amazon Sponsored Brand Video slots. Silent-optimized.
                        </p>
                     </div>
                  </div>
               </div>
            </section>

            {/* 3. CASE STUDIES / EXAMPLES */}
            <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
               <div className="px-4 md:px-12 max-w-[1800px] mx-auto">
                  <div className="flex items-center justify-between mb-12">
                     <h2 className="text-3xl font-display font-bold">The Standard</h2>
                     <div className="flex gap-2">
                        <button
                           onClick={() => setActiveTab('listings')}
                           className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded ${activeTab === 'listings' ? 'bg-white text-black' : 'bg-[#111] text-gray-500 border border-white/10'}`}
                        >
                           Listings
                        </button>
                        <button
                           onClick={() => setActiveTab('content')}
                           className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded ${activeTab === 'content' ? 'bg-white text-black' : 'bg-[#111] text-gray-500 border border-white/10'}`}
                        >
                           A+ Content
                        </button>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     {/* Placeholder Examples - Replaced with generic polished placeholders */}
                     {[1, 2, 3].map((item) => (
                        <motion.div
                           key={item}
                           initial={{ opacity: 0, y: 20 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           className="group cursor-pointer"
                        >
                           <div className="aspect-[3/4] bg-[#111] rounded-lg border border-white/10 overflow-hidden relative mb-4">
                              <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
                              <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-mono text-xs">
                                 [High-Res Asset {item}]
                              </div>

                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                                 <p className="text-green-500 font-bold mb-2">RESULT</p>
                                 <p className="text-2xl font-bold text-white mb-2">+40%</p>
                                 <p className="text-xs text-gray-400 uppercase tracking-widest">Conversion Rate Lift</p>
                              </div>
                           </div>
                           <h3 className="font-bold text-white">Project Alpha {item}</h3>
                           <p className="text-xs text-gray-500">Beauty & Personal Care</p>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </section>

            {/* 4. PROCESS */}
            <section className="py-24 px-4 md:px-12 max-w-[1800px] mx-auto">
               <h2 className="text-3xl font-bold mb-16 text-center">How It Works</h2>

               <div className="relative">
                  {/* Connecting Line */}
                  <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden md:block"></div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

                     <div className="bg-[#050505] p-6 border border-white/10 rounded-xl text-center">
                        <div className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20 font-mono text-sm">01</div>
                        <h3 className="font-bold mb-2">Audit</h3>
                        <p className="text-xs text-gray-500">We analyze your current listing vs. top competitors.</p>
                     </div>

                     <div className="bg-[#050505] p-6 border border-white/10 rounded-xl text-center">
                        <div className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20 font-mono text-sm">02</div>
                        <h3 className="font-bold mb-2">Strategy</h3>
                        <p className="text-xs text-gray-500">We define the visual hierarchy and key selling points.</p>
                     </div>

                     <div className="bg-[#050505] p-6 border border-white/10 rounded-xl text-center">
                        <div className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20 font-mono text-sm">03</div>
                        <h3 className="font-bold mb-2">Design</h3>
                        <p className="text-xs text-gray-500">Our team executes high-fidelity renders and layouts.</p>
                     </div>

                     <div className="bg-[#050505] p-6 border border-white/10 rounded-xl text-center">
                        <div className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20 font-mono text-sm">04</div>
                        <h3 className="font-bold mb-2">Launch</h3>
                        <p className="text-xs text-gray-500">Upload to Seller Central + A/B Testing strategy.</p>
                     </div>

                  </div>
               </div>
            </section>

            {/* 5. CTA */}
            <section className="py-24 bg-green-900/10 border-t border-green-500/20 text-center px-4">
               <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Dominate Your Category</h2>
               <p className="text-gray-400 max-w-lg mx-auto mb-10">
                  Don't let poor design be the reason your superior product fails.
               </p>
               <button
                  onClick={onContactClick}
                  className="px-10 py-4 bg-green-600 text-white font-bold rounded hover:bg-green-500 transition-colors shadow-lg shadow-green-900/20"
               >
                  Start Your Project
               </button>
            </section>

         </motion.div>
      </>
   );
};

export default ProductPage;