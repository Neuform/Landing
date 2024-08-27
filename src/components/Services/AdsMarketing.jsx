import React from 'react';
import { motion } from 'framer-motion';
import aboutback from '../../assets/statback.jpg';
import abmission from '../../assets/s_adsMarketing.png';
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
            Ads Marketing
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl font-axiforma"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           Our team of experts leverages the latest trends and technologies to craft ads that stand out in the competitive market. Whether it's a digital campaign or a traditional advertisement, we ensure each ad resonates with your target audience, compelling them to take action. At Neuform, we believe in the power of creativity combined with strategic thinking to deliver ads that not only look great but also perform exceptionally well. Let us help you create ads that leave a lasting impression and drive meaningful engagement for your brand.


- Creative and innovative designs- Attractive visuals- Attention-grabbing concepts- Modern and up-to-date styles- Result-oriented campaigns- Logo & Graphics
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
