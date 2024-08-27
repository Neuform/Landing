import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../App.css';
import coverImage1 from '../../assets/ctacall2.png';
import coverImage2 from '../../assets/ctadiscuss2.png';
import coverImage3 from '../../assets/ctastart2.png';
import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';

const StyledButton = styled(MuiButton)`
  && {
    background-color: black;
    color: white;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    padding: 12px 24px;
    font-size: 1.1rem;
    text-transform: none;
    font-family: axiforma, sans-serif;

    &:hover {
      background-color: #ff0000;
    }
  }
`;

const CTASection = () => {
    const navigate = useNavigate(); // Create navigate function

    const handleClick = () => {
        navigate('/contactUs'); // Navigate to /contactUs
    };

    return (
        <div className="bg-primary_bright pt-20 pb-8 px-4">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-decan font-bold">Ready to Get <span className='text-accent_red'>Started</span>?</h1>
                <p className="text-gray-600 w-full md:w-2/3 lg:w-1/2 -center mt-10 text-2xl mx-auto font-semibold">
                    Simple 3-step process - Contact us, Consult with our team of experts, and get your project started effortlessly. Let's turn your vision into reality.
                </p>
            </div>

            <div className="relative flex flex-col items-center">
                <div className="flex flex-wrap justify-center space-x-8 lg:space-x-36 relative z-10">
                    <div className="text-center mb-8 flex-shrink-0">
                        <div className='w-24 h-24 border-4 rounded-full mb-6'>
                            <img src={coverImage1} alt="Step 1" className="w-30 h-30" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-axiforma font-bold">Connect</h2>
                        <p className="mt-2 font-axiforma maincolorblue text-lg md:text-xl">Step 01</p>
                    </div>

                    <div className="text-center mb-8 flex-shrink-0">
                        <div className='w-24 h-24 border-4 rounded-full mb-6'>
                            <img src={coverImage2} alt="Step 2" className="w-30 h-30" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-axiforma font-bold">Consult</h2>
                        <p className="mt-2 font-axiforma maincolorblue text-lg md:text-xl">Step 02</p>
                    </div>

                    <div className="text-center mb-8 flex-shrink-0">
                        <div className='w-24 h-24 border-4 rounded-full mb-6'>
                            <img src={coverImage3} alt="Step 3" className="w-30 h-30" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-axiforma font-bold">Initiate</h2>
                        <p className="mt-2 font-axiforma maincolorblue text-lg md:text-xl">Step 03</p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-6 mb-8">
                <StyledButton variant="contained" onClick={handleClick}>
                    Get Started
                </StyledButton>
            </div>
        </div>
    );
};

export default CTASection;
