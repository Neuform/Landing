import React from 'react';
import { motion } from 'framer-motion';
import aboutback from '../../assets/statback.jpg';
import abmission from '../../assets/abmission.png';
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
            Our Mission
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl font-axiforma"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At Neuform, our mission is to empower businesses by transforming their digital presence through innovative strategies and cutting-edge technology. We strive to deliver exceptional results by combining in-depth research, strategic planning, and creative execution. Our commitment to excellence, diversity, and inclusivity ensures that we provide high-quality, impactful digital solutions that help our clients stay ahead of the curve and achieve sustainable growth.
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
