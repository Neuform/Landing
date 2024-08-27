import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import projectDoneIcon from '../../assets/projectdoneicon2.png';
import happyLogo from '../../assets/happylogo2.png';
import hoursLogo from '../../assets/hourslogo2.png';
import teamIcon from '../../assets/Teamicon3.png';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button as MuiButton } from '@mui/material';

const GetStartedButton = styled(MuiButton)`
  && {
    background-color: black;
    color: white;
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 1.1rem;
    transition: background-color 0.3s ease;
    text-transform: none;
    font-family: axiforma, sans-serif;

    &:hover {
      background-color: red;
    }
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const GlowingCTA = styled.div`
  position: relative;
  border-radius: 9999px;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 9999px;
    background: #fff;
    z-index: -1;
    filter: blur(5px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.4;
  }

  ${CTAContent}:hover ${GetStartedButton} ~ &::before {
    opacity: 0;
  }
`;

const CTAHeading = styled.h2`
  text-align: center;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  font-family: decan;
  color: white;
  margin-bottom: 0.5rem;
`;

const stats = [
  { id: 1, title: 'Project Completed', count: '25+', image: projectDoneIcon },
  { id: 2, title: 'Happy Clients', count: '10+', image: happyLogo },
  { id: 3, title: 'Hours Worked', count: '1400+', image: hoursLogo },
  { id: 4, title: 'Expert Team Member', count: '30', image: teamIcon },
];

const AnimatedCounter = ({ end, duration, shouldAnimate }) => {
  const [count, setCount] = useState(0);
  const numericEnd = parseInt(end);

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(numericEnd * percentage));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animateCount);
      }
    };

    if (shouldAnimate) {
      animationFrameId = requestAnimationFrame(animateCount);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [numericEnd, duration, shouldAnimate]);

  return (
    <span>
      {shouldAnimate ? count : 0}
      {end.includes('+') ? '+' : ''}
    </span>
  );
};

const StatSection = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const statSectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (statSectionRef.current) {
      observer.observe(statSectionRef.current);
    }

    return () => {
      if (statSectionRef.current) {
        observer.unobserve(statSectionRef.current);
      }
    };
  }, []);

  const handleButtonClick = () => {
    navigate('/contactUs');
  };

  return (
    <div className="relative">
      <div id='stat' ref={statSectionRef} className="relative bg-cover bg-center pt-24 pb-24" style={{ backgroundColor:'#EAF0F1' }}>
        <div className="absolute inset-0 "></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id}>
                <div className="mb-6">
                  <img src={stat.image} alt={stat.title} className="w-32 h-32 mx-auto object-contain" />
                </div>
                <h2>
                  <span className="flex justify-center tabular-nums text-black text-5xl font-extrabold mb-2">
                    <AnimatedCounter end={stat.count} duration={3000} shouldAnimate={shouldAnimate} />
                  </span>
                  <span className="inline-flex font-semibold bg-clip-text text-transparent bg-accent_red mb-2">
                    {stat.title}
                  </span>
                </h2>
              </div>
            ))}
          </div>
          <div className='text-center mt-20 bg-white mx-4 sm:mx-10 md:mx-20 lg:mx-[22rem] pt-10 pb-10 rounded-xl'>
            <p className='text-2xl md:text-4xl font-bold mb-10'>Get your project rolling</p>
            <GetStartedButton onClick={handleButtonClick}>
              Get Started
            </GetStartedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatSection;
