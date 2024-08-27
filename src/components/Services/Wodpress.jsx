import React from 'react';
import { motion } from 'framer-motion';
import aboutback from '../../assets/statback.jpg';
import abmission from '../../assets/s_wordpress.png';
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
            Wordpress Development
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At Neuform, our skilled team specializes in WordPress development, delivering customized solutions to elevate your online presence. Whether you need a new website or enhancements to an existing one, we provide a seamless and efficient process.


- Custom Theme Development: Create unique, responsive themes tailored to your brand's identity. - Plugin Integration: Enhance your website's functionality with the best plugins available. - SEO Optimization: Ensure your WordPress site is search engine friendly to boost organic traffic. - Performance Enhancement: Improve site speed and performance for a better user experience. - Security Solutions: Protect your website with advanced security measures and regular updates. - E-commerce Solutions: Set up and optimize WooCommerce stores for a seamless shopping experience. - Ongoing Maintenance: Keep your website running smoothly with regular updates and support. With a wide range of experts on our team, Neuform is committed to delivering exceptional WordPress development services that help your business thrive online. Let us turn your vision into reality with a website that stands out and performs excellently.
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
