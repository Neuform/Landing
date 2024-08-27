import React from 'react';
import { motion } from 'framer-motion';
import aboutback from '../../assets/statback.jpg';
import abmission from '../../assets/s_logo.png';
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
            Logo & Graphics
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl font-axiforma"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           Our Logo Making and Graphic Designing services are dedicated to enhancing your brand’s visual identity and leaving a lasting impression. We specialize in creating custom logos that capture the essence of your brand, ensuring that your visual identity is both unique and memorable. Our services extend to developing a cohesive brand identity that aligns with your vision and values, as well as providing high-quality graphic design solutions for marketing materials, social media, and website assets.
    
    We focus on creative conceptualization, bringing innovative and artistic concepts to life, and offer versatile design services ranging from business cards to brochures. With our professional consultation, we provide expert advice on design trends and best practices to make sure your visuals stand out. Partner with us to build a compelling and professional visual identity that truly resonates with your audience and drives your brand's success
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
