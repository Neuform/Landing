import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';
import ServiceCarousel from '../Extras/ServiceCarousel';
import { Button } from '@mui/material';

const StyledSection = styled.div`
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

  .carousel-container {
    transition: box-shadow 0.3s ease-in-out;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }

  .carousel-container:hover {
    box-shadow: 0 0 15px 5px rgba(180, 180, 180, 0.7),
                0 0 30px 15px rgba(180, 180, 180, 0.5),
                0 0 45px 25px rgba(180, 180, 180, 0.3);
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
    margin-left: 10px;
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
    .custom-button {
      padding: 0px;
      font-size: 0.8rem;
      border-radius: 8px;
      padding: 10px 20px;
    }
    .button-container {
      margin-top: 20px;
      margin-left: 4px;
    }
    .circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-left: 10px;
    }
    .circles {
      display: flex;
      margin-left: 10px;
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
  const textRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate

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
    navigate('/services'); // Navigate to /services
  };

  return (
    <StyledSection className='grid grid-cols-1 md:grid-cols-2 bg-primary_bright'>
      <div className="left p-10">
        <div ref={textRef} className="text-container">
          <p className='font-semibold font-roboto text-4xl md:text-8xl mt-12 text-accent_red'>What</p>
          <p className='font-semibold font-roboto text-6xl md:text-9xl mt-15'>WE DO ?</p>
          <div className="button-container">
            <Button className="custom-button" variant="contained" onClick={handleClick}>
              Know it here
            </Button>
            <div className="circles">
              <div className="circle circle-red"></div>
              <div className="circle circle-black"></div>
              <div className="circle circle-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="right bg-primary_bright relative">
        <div className="corner-circles absolute top-4 right-[0.10rem] md:top-0 md:right-[2.50rem] m-[2rem]">
          <div className="circle circle-red"></div>
          <div className="circle circle-black"></div>
          <div className="circle circle-white"></div>
        </div>
        <div className="carousel-container border border-2 rounded-2xl bg-white m-2 md:m-20 overflow-hidden mt-6 md:mt-20 ">
          <ServiceCarousel />
        </div>
      </div>
    </StyledSection>
  );
}
