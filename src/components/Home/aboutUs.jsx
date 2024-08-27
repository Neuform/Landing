import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';
import ServiceCarousel from '../Extras/ServiceCarousel';
import { Button } from '@mui/material';
import AboutImage from '../../assets/about2.png';

const StyledSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  background-color: var(--primary_bright);

  .text-container {
    opacity: 0;
    transform: translateX(-20%);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  .text-container.appear {
    opacity: 1;
    transform: translateX(0);
  }

  .text-container p {
    transition-delay: 0.2s;
  }

  .custom-button {
    background-color: black;
    color: white;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    padding: 12px 24px;
    font-size: 1.1rem;

    &:hover {
      background-color: #ff0000;
    }
  }

  .button-container {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .circles {
    display: flex;
    margin-left: 20px;
  }

  .circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: 10px;
  }

  .circle-red {
    background-color: red;
  }

  .circle-black {
    background-color: black;
  }

  .circle-white {
    background-color: white;
    border: 1px solid #000;
  }

  .corner-circles {
    display: flex;
    z-index: 10;
  }

  @media (max-width: 767px) { /* For small screens */
    grid-template-columns: 1fr; /* Single column layout */
    
    .custom-button {
      padding: 8px 16px;
      font-size: 0.9rem;
    }
    
    .button-container {
      margin-top: 20px;
      margin-left: 4px;
    }
    
    .circle {
      width: 10px;
      height: 10px;
      margin-left: 10px;
    }
    
    .circles {
      margin-left: 10px;
    }
    
    .right {
      display: none; /* Hide the right section */
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) { /* For medium screens */
    .custom-button {
      padding: 10px 20px;
      font-size: 1rem;
    }
  }
`;

export default function Section2() {
  const navigate = useNavigate(); // Create navigate function
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    navigate('/aboutUs'); // Navigate to /aboutUs
  };

  return (
    <StyledSection>
      <div className="right bg-primary_bright relative mt-20">
        <div className="corner-circles absolute top-0 left-[2.50rem] m-[2rem]">
          <div className="circle circle-red"></div>
          <div className="circle circle-black"></div>
          <div className="circle circle-white"></div>
        </div>
        <div className="carousel-container none m-0 mt-[10rem] md:m-20 md:mt-20 overflow-hidden">
          <img src={AboutImage} alt="" />
        </div>
      </div>
      <div className="left p-10 bg-primary_bright">
        <div ref={textRef} className="text-container">
          <p className='font-semibold font-roboto text-2xl md:text-8xl mt-12 text-accent_red'>About Us</p>
          <p className='font-semibold font-roboto text-md md:text-4xl mt-12'>At Neuform <span className='text-accent_red text-lg md:text-5xl'>Creativity</span> Fuels Our Client's Growth.</p>
          <p className='font-semibold font-roboto text-xs md:text-2xl mt-4 text-gray-700'>Neuform is a premier digital marketing company, offering SEO, social media marketing and content creation. We also specialize in web and app development, creating engaging websites and innovative mobile apps. Our expert team delivers measurable results, driving traffic, increasing engagement, and boosting conversions.</p>

          <div className="button-container">
            <Button className="custom-button" variant="contained" onClick={handleClick}>Know More</Button>
            <div className="circles">
              <div className="circle circle-red"></div>
              <div className="circle circle-black"></div>
              <div className="circle circle-white"></div>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}
