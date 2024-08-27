import React from 'react';
import { motion } from 'framer-motion';
import aboutback from '../../assets/statback.jpg';
import abmission from '../../assets/s_seo.png';
import '../../App.css';

const Mission = () => {
  return (
    <div className="relative mt-5 h-auto w-full flex flex-col items-center overflow-hidden bg-cover bg-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 p-6">
        {/* Content */}
        <div className="text-black font-semibold p-4 md:w-2/3">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 relative inline-block text-accent_red"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SEO
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Neuform excels in SEO services by optimizing websites for search engines. We focus on delivering modern and effective strategies that drive traffic and improve rankings in the shortest possible time. Our costs are extremely competitive, offering you exceptional value. With an expert team of SEO specialists, we ensure your website gains visibility and attracts the right audience.
            
            

            - SEO Techniques: On-Page SEO, Off-Page SEO, Technical SEO, Local SEO, E-commerce SEO

            

            - Specializations: Keyword Research and Optimization, Content Strategy and Creation, Link Building, Analytics and Reporting, Mobile SEO

            

            Let Neuform enhance your online presence with innovative and effective SEO strategies tailored to your needs.
          </motion.p>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center md:w-1/3 mt-8 md:mt-0">
          <div className="rounded-full bg-white border-2 border-white w-60 h-60 flex items-center justify-center">
            <img src={abmission} alt="SEO" className="rounded-full w-60 h-60 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
