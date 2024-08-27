import React from 'react';
import '../../App.css';
import image1 from '../../assets/carearning.png';
import image2 from '../../assets/carworkfromhome.png';
import image3 from '../../assets/carflexible.png';
import image4 from '../../assets/cartalent.png';
import image5 from '../../assets/carlearn.png';
import image6 from '../../assets/carteam.png';

const WhyWorkWithUs = () => {
  const benefits = [
    { image: image1, text: 'Attractive Compensation: We believe in rewarding exceptional work with competitive salaries and generous compensation packages.' },
    { image: image2, text: 'Flexible Work Environment: Enjoy the comfort of working from home, even in your pajamas.' },
    { image: image3, text: "Flexible Hours and Remote Work: Embrace a schedule that suits your lifestyle, whether you're a night owl or prefer traditional hours, and work from any location." },
    { image: image4, text: 'Global Team and Diverse Cultures: Collaborate with talented professionals from around the world and experience a rich diversity of cultures.' },
    { image: image5, text: 'Continuous Learning and Development: Enhance your skills and stay ahead with our commitment to ongoing professional growth and support.' },
    { image: image6, text: 'Collaborative and Supportive Teams: Build strong bonds within a team that values diverse input and mutual support, leading to innovative and effective solutions.' },
  ];

  return (
    <section className="pt-10 pb-1 md:pb-5 mt-1 md:t-5 mx-4 sm:mx-8 lg:mx-16 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
        <span className='text-accent_red'>Life</span> at Neuform
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="mb-4 w-32 h-32 mx-auto">
              <img src={benefit.image} alt={`Benefit ${index + 1}`} className="w-full h-full object-cover" />
            </div>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-center">{benefit.text}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .benefit-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color:#FFFFFF;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          height: auto; /* Adjust height to fit content */
          width: 100%; /* Ensure all cards have the same width */
          justify-content: flex-start; /* Align content to the top */
        }
        .benefit-card:hover {
          transform: scale(1.02);
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.9);
        }
        .benefit-card img {
          transition: all 0.3s ease;
        }
        .benefit-card:hover img {
          transform: scale(1.1);
        }
        .benefit-card p {
          margin-top: 0.5rem;
          text-align: center;
          padding: 0 1rem; /* Add padding to prevent overflow */
        }
      `}</style>
    </section>
  );
};

export default WhyWorkWithUs;
