import React from 'react';
import { motion } from 'framer-motion';
import SEO from './SEO';

// Sub-components
import DirectorHero from './director/DirectorHero';
import ProductionNetwork from './director/ProductionNetwork';
import JGriffCaseStudy from './director/JGriffCaseStudy';
import AaronAbkeCaseStudy from './director/AaronAbkeCaseStudy';
import GreatAwakeningCaseStudy from './director/GreatAwakeningCaseStudy';
import DirectorDistinction from './director/DirectorDistinction';
import DirectorFooter from './director/DirectorFooter';

interface DirectorPageProps {
   onNavigate: (page: string) => void;
   onContactClick: () => void;
}

const DirectorPage: React.FC<DirectorPageProps> = ({ onNavigate, onContactClick }) => {
   const brands = [
      "MARVEL", "NATIONAL GEOGRAPHIC", "BBC", "DISCOVERY CHANNEL", "SKY PRO CYCLING", "EXPEDIA", "BLACKMAGIC DESIGN", "GRAB", "GARUDA INDONESIA", "SBS", "ARTE", "PUPFLASK", "HARTSPAN", "J-GRIFF", "AARON ABKE"
   ];

   const AARON_IMG_SRC = "https://i.imgur.com/ip8PRov.png";
   const COUCH_IMG_SRC = "https://i.imgur.com/NCBqnk3.jpeg";

   return (
      <>
         <SEO
            title="The Director | Ermo Egberts"
            description="Organic Growth Architect. From $2M to $8M. Retain a Creative & Art Director to build your visual infrastructure."
         />
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-20 min-h-screen page-transition bg-[#050505] text-white selection:bg-white selection:text-black"
         >
            {/* Editorial Grid */}
            <div className="fixed inset-0 grid grid-cols-6 pointer-events-none opacity-[0.05] z-0">
               {[...Array(5)].map((_, i) => (
                  <div key={i} className="border-r border-white/50 h-full"></div>
               ))}
            </div>

            <div className="relative z-10">
               <DirectorHero />
               <ProductionNetwork brands={brands} />
               <JGriffCaseStudy couchImgSrc={COUCH_IMG_SRC} />
               <AaronAbkeCaseStudy aaronImgSrc={AARON_IMG_SRC} />
               <GreatAwakeningCaseStudy />
               <DirectorDistinction />
               <DirectorFooter onContactClick={onContactClick} onNavigate={onNavigate} />
            </div>
         </motion.div>
      </>
   );
};

export default DirectorPage;