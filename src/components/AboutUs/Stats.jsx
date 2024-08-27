import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import projectDoneIcon from '../../assets/projectdoneicon2.png';
import happyLogo from '../../assets/happylogo2.png';
import hoursLogo from '../../assets/hourslogo2.png';
import teamIcon from '../../assets/Teamicon3.png';
import '../../App.css';

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
  const navigate = useNavigate(); // Initialize useNavigate

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

  const handleClick = () => {
    navigate('/career'); // Navigate to '/career' route
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
            <p className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4'>Be a part of Our mission</p>
            <p className='text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold mb-10 text-accent_red'>Join us Now!</p>

            <Button 
              className="custom-button" 
              variant="contained" 
              sx={{
                backgroundColor: 'black',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'red',
                },
                borderRadius: '8px',
                padding: '12px 24px',
                fontSize: '1rem',
                mx: 'auto',
              }}
              onClick={handleClick} // Attach handleClick function
            >
              Careers
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatSection;
