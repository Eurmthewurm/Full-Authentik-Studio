import React from 'react';
import { motion } from 'framer-motion';
import SEO from './SEO';

// Sub-components
import ServiceHero from './service/ServiceHero';
import PositioningSection from './service/PositioningSection';
import ServiceInfrastructure from './service/ServiceInfrastructure';
import ServiceTraction from './service/ServiceTraction';
import ServiceFAQ from './service/ServiceFAQ';
import ServiceCTA from './service/ServiceCTA';

interface ServicePageProps {
   onContactClick: () => void;
}

const ServicePage: React.FC<ServicePageProps> = ({ onContactClick }) => {
   return (
      <>
         <SEO
            title="Visual Infrastructure | Authentik Studio"
            description="Scale with Visual Infrastructure. We build Authority Content systems for Personal Brands, Educators & Service Businesses to bridge the positioning gap."
         />
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen pt-20 bg-background text-primary selection:bg-blue-500/30 font-sans cursor-none flex flex-col page-transition"
         >
            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none -z-10">
               <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-blue-900/10 blur-[120px]"></div>
               <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-purple-900/10 blur-[120px]"></div>
            </div>

            <div className="relative z-10">
               <ServiceHero />
               <PositioningSection />
               <ServiceInfrastructure />
               <ServiceTraction />
               <ServiceFAQ />
               <ServiceCTA onContactClick={onContactClick} />
            </div>
         </motion.div>
      </>
   );
};

export default ServicePage;