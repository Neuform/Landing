import React from 'react';
import '../../App.css'
// import logoListBack from '../../Assets/logolistback.jpg';
import logo1 from '../../assets/logo1.jpg';
import logo2 from '../../assets/logo2.jpg';
import logo3 from '../../assets/logo3.jpg';
import logo4 from '../../assets/logo4.jpg';
import logo5 from '../../assets/logo5.jpg';
import logo6 from '../../assets/logo6.jpg';
import logo7 from '../../assets/logo7.jpg';
import logo8 from '../../assets/logo8.jpg';
import logo9 from '../../assets/logo9.png';
import logo10 from '../../assets/logo10.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];

const LogoSection = () => {
  return (
    <section className="p-8 relative overflow-hidden bg-primary_bright r5" >
        <h2 className="text-4xl font-bold font-decan mb-12 text-center ">
          Our Loyal <span className=' text-accent_red'>Friends</span>
        </h2>
      <div className="container mx-auto bg-white p-4 rounded-2xl shadow-md">
        <div className="relative h-40 overflow-hidden">
          <div className="absolute flex animate-scroll">
            {[...Array(3)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex space-x-16">
                {logos.map((logo, index) => (
                  <div
                    key={`${groupIndex}-${index}`}
                    className="w-40 h-40 flex items-center justify-center logo-container"
                  >
                    <div className="w-32 h-32 bgtrans rounded-full flex items-center justify-center overflow-hidden">
                      <img src={logo} alt={`Logo ${index + 1}`} className="max-w-[100%] max-h-[100%] object-contain" />
                    </div>
                  </div>
                ))}
                {groupIndex < 2 && <div className="w-2"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .logo-container {
          position: relative;
          border: 1px solid;
          border-radius: 50%;
       
        }
        
      `}</style>
    </section>
  );
};

export default LogoSection;