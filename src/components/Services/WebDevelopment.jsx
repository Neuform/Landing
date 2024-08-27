import React from 'react';
import { motion } from 'framer-motion';
import aboutback from '../../assets/statback.jpg';
import abmission from '../../assets/s_web.png';
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
            Web Development
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Neuform specializes in website designing, bringing over 5 years of experience in this field. We focus on delivering modern designs and ensuring your site is ready to host in the shortest possible time. Our costs are extremely competitive, offering you exceptional value. With an expert team of developers, we guarantee an appealing look tailored to your theme, and a secure website.

      

            - Web Technologies: MERN: MongoDB, Express.js, React, Node.js - MEAN: MongoDB, Express.js, Angular, Node.js - Django - Next.js - LAMP: Linux, Apache, MySQL, PHP - Liquid

   

            - Specializations: 3D Website Development, Custom Theme-Based Designs, Secure Website Solutions, AI Integration



            Let Neuform bring your vision to life with innovative and modern website solutions.
          </motion.p>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center md:w-1/3 mt-8 md:mt-0">
          <div className="rounded-full bg-white border-2 border-white w-60 h-60 flex items-center justify-center">
            <img src={abmission} alt="Mission" className="rounded-full w-60 h-60 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
