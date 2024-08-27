import React from 'react';
import { motion } from 'framer-motion';
import aboutback from '../../assets/statback.jpg';
import abmission from '../../assets/s_digitalMarketing.png';
import '../../App.css';

const Mission = () => {
  return (
    <div className="relative mt-5 h-auto w-full flex flex-col items-center overflow-hidden bg-cover bg-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10 p-6">
        {/* Content */}
        <div className="text-black font-semibold p-4 md:w-2/3">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-accent_red"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Digital Marketing
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At Neuform, our dedicated digital marketing and creative team is committed to delivering faster results and helping you grow your online presence. We specialize in a variety of services to ensure your brand stands out and reaches its full potential.
            
            <br /><br />

            - Instagram and Meta Ads: Leverage powerful social media platforms to increase visibility and engagement. <br />
            - Edit Reels: Create captivating video content that resonates with your audience. <br />
            - Daily Posting: Maintain a consistent online presence with regular, engaging posts. <br />
            - Social Engagement: Foster meaningful interactions with your followers and build a loyal community. <br />
            - Innovative Strategy: Implement cutting-edge strategies tailored to your unique needs. <br />
            - Algorithm Study: Stay ahead of the curve with insights into the latest algorithm changes.
            
            <br /><br />

            With a wide range of experts on our team, Neuform is equipped to handle all aspects of your digital marketing needs, ensuring your brand achieves exceptional growth and success.
          </motion.p>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center md:w-1/3 mt-8 md:mt-0">
          <div className="rounded-full bg-white border-2 border-white w-60 h-60 flex items-center justify-center">
            <img src={abmission} alt="Digital Marketing" className="rounded-full w-60 h-60 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
