import React from 'react';
import { motion } from 'framer-motion';
import aboutback from '../../assets/statback.jpg';
import abmission from '../../assets/influencerManagement.png';
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
            Influencer Management
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl font-axiforma"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           Our Influencer Management Services are designed to enhance your online presence and drive impactful growth. Here’s how we achieve this:- Expand Social Networks: Build and strengthen your connections to maximize engagement.- Increase Follower Growth: Implement strategies to increase your follower base organically.


- Comprehensive Market Research: Conduct in-depth research to tailor strategies to your audience and niche. - Algorithm Optimization: Leverage insights into social media algorithms to enhance content visibility. - Strategic Development: Craft and execute bespoke strategies to foster brand growth. - Maximize Content Reach: Optimize your content distribution to expand your audience reach. - Secure Brand Collaborations: Facilitate valuable partnerships and brand deals to enhance your profile.- High-Quality Content Creation: Deliver top-tier content tailored to your niche for maximum impact. Partner with us to elevate your influencer strategy with professionalism and precision.
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
