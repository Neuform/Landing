import React from 'react';
import { motion } from 'framer-motion';
import aboutback from '../../assets/statback.jpg';
import abmission from '../../assets/s_hosting.png';
import '../../App.css';

const Mission = () => {
  return (
    <div className="relative mt-5 h-auto w-full flex flex-col items-center overflow-hidden bg-cover bg-center"  >
      <div className="container mx-auto flex flex-col md:flex-row relative z-10 p-6">
        {/* Content */}
        <div className="text-black font-semibold p-4 md:w-2/3">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-decan mb-6 relative inline-block text-accent_red"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hosting
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl font-axiforma content-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           At Neuform, we offer premium hosting services designed to keep your website running smoothly and securely. We handle the entire process of hosting and managing your site, ensuring optimal performance and reliability. Our expert team takes care of setup, configuration, and ongoing maintenance, so you can focus on your business. Whether you need hosting for a small personal blog or a large e-commerce platform, our solutions are tailored to meet your specific needs. With Neuform's hosting services, your online presence is in capable hands, providing you with peace of mind and the freedom to grow your business.
          </motion.p>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center md:w-1/3 mt-8 md:mt-0">
          <div className="rounded-full bg-white border-2 border-white w-60 h-60 flex items-center justify-center ">
            <img src={abmission} alt="Mission" className="rounded-full w-60 h-60 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
