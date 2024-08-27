import React, { useState, useEffect } from 'react';
import Spline from "@splinetool/react-spline";
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../App.css';

const scale = keyframes`
  100% {
    transform: scale(1);
  }
`;

const fadeIn = keyframes`
  100% {
    opacity: 1;
    filter: blur(0);
  }
`;

const GetStartedButton = styled.button` // Change from 'a' to 'button'
display: inline-block;
background-color: rgba(255, 255, 255, 0.1);
color: black;
text-decoration: none;
border: none;
border-radius: 9999px;
padding: 12px 24px;
font-size: 1.2rem;
font-family: roboto;
font-weight: 400;
cursor: pointer;
transition: all 0.3s ease;
margin-top: 2rem;
backdrop-filter: blur(10px);
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
opacity: ${props => props.visible ? 1 : 0};
transform: translateY(${props => props.visible ? '0' : '20px'});
transition: opacity 0.5s ease, transform 0.5s ease;

  &:hover {
  border : 1px solid #9ecaed;
  transition: all 0.3s ease-in-out;
  border-color: black;
  color: white;
  background-color: black;
  box-shadow: 0 0 10px #9ecaed;
  }
`;

export default function HeroSection() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStartedClick = () => {
    navigate('/contactUs'); // Navigate to the Contact Us page
  };

  return (
    <section id="hero" className=" bg-slate-50 relative h-screen flex items-center justify-center overflow-hidden " >
      <div className="spline-container absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/6CVwkBfVaoZWnPAx/scene.splinecode" 
        />
      </div>
      <div className="relative z-10 text-center bg-opacity-50 w-screen h-50 block">
        <GetStartedButton onClick={handleGetStartedClick} visible={isButtonVisible}>Get Started</GetStartedButton>
      </div>
    </section>
  );
}
