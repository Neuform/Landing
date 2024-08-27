import React from 'react';
import { motion } from 'framer-motion';
import aboutback from '../../assets/statback.jpg';
import abmission from '../../assets/s_app.png';
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
            App Development
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl font-axiforma"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           At Neuform, we specialize in application development with a focus on delivering high-quality, secure, and user-centric solutions. Our team of top-level developers is skilled in creating the best UI designs, ensuring an exceptional user experience across all devices. We offer cross-platform development for both Android and iOS, using a robust tech stack that includes Swift, Dart, React, Java, Kotlin, Xcode, Android Studio, and Flutter.


Our applications are not only fast and efficient but also tailored to fit the theme that suits you best. We prioritize low-cost solutions without compromising on quality, and our 24/7 customer support ensures you have assistance whenever you need it. Additionally, we provide yearly maintenance to keep your app running smoothly and securely.Once your app is ready, we handle the deployment on both the Play Store and App Store, making the process seamless and hassle-free. Choose Neuform for application development that meets your needs and exceeds your expectations.
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
