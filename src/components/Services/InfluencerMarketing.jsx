import React from 'react';
import { motion } from 'framer-motion';
import aboutback from '../../assets/statback.jpg';
import abmission from '../../assets/s_influencerMarketing.png';
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
            Influencer Marketing
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl font-axiforma"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           At Neuform, we harness the power of influencer marketing to amplify your brand's reach and credibility. By partnering with influential voices in your industry, we create authentic and engaging campaigns that resonate with your target audience. Our strategic approach ensures that the right influencers represent your brand, driving awareness, engagement, and conversions.


- Strategic influencer partnerships - Authentic and engaging campaigns- Enhanced brand credibility- Targeted audience reach- Increased engagement and conversionsLeverage Neuform’s expertise in influencer marketing to connect with your audience on a deeper level and achieve impactful results.
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
