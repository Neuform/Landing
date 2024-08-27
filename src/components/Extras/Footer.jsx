import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer grid bg-primary_bright p-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="section-2 flex flex-col md:flex-row justify-evenly gap-4 md:p-12">
        <div className="block-s-1 flex flex-col space-y-4">
          <div className="tab-1 flex items-center">
            <img
              width="42"
              height="42"
              src="https://ik.imagekit.io/wjsnaz8nns/ICONS/NeuFrom__1_-removebg-preview.png?updatedAt=1722952289007"
              alt="NeuForm"
            />
            <p className="text-2xl font-semibold">NeuForm</p>
          </div>
          <div className="tab-2 flex items-center space-x-2">
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/tiny-color/16/home.png"
              alt="Location"
            />
            <p className="text-sm text-gray-400 font-semibold">Banglore, India</p>
          </div>
          <div className="tab-3 flex items-center space-x-2">
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/ultraviolet/40/phone.png"
              alt="Phone"
            />
            <p className="text-sm text-gray-400 font-semibold">+91 95370 95563</p>
          </div>
          <div className="tab-4 flex items-center space-x-2">
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/offices/30/new-post.png"
              alt="Email"
            />
            <p className="text-sm text-gray-400 font-semibold">contact@neuform.in</p>
          </div>
        </div>
        <div className="block-s-2 flex flex-col space-y-4">
          <div className="tab-1 flex items-center space-x-4">
            <p className="text-2xl font-semibold">LINKS</p>
          </div>
          <Link to="/" className="tab-2 flex items-center space-x-2">
            <p className="text-sm text-gray-400 font-semibold">Home</p>
          </Link>
          <Link to="/services" className="tab-3 flex items-center space-x-2">
            <p className="text-sm text-gray-400 font-semibold">Services</p>
          </Link>
          <Link to="/portfolio" className="tab-4 flex items-center space-x-2">
            <p className="text-sm text-gray-400 font-semibold">Portfolio</p>
          </Link>
          <Link to="/career" className="tab-5 flex items-center space-x-2">
            <p className="text-sm text-gray-400 font-semibold">Careers</p>
          </Link>
        </div>
        <div className="block-s-4 flex flex-col space-y-4">
          <div className="tab-1 flex items-center space-x-4">
            <p className="text-2xl font-semibold">SERVICES</p>
          </div>
          <div className="tab-2 flex items-center space-x-2">
            <p className="text-sm text-gray-400 font-semibold">Web Development</p>
          </div>
          <div className="tab-3 flex items-center space-x-2">
            <p className="text-sm text-gray-400 font-semibold">App Development</p>
          </div>
          <div className="tab-3 flex items-center space-x-2">
            <p className="text-sm text-gray-400 font-semibold">UI / UX</p>
          </div>
          <div className="tab-3 flex items-center space-x-2">
            <p className="text-sm text-gray-400 font-semibold">Digital Marketing</p>
          </div>
          <div className="tab-3 flex items-center space-x-2">
            <p className="text-sm text-gray-400 font-semibold">Social Media Management</p>
          </div>
          <div className="tab-3 flex items-center space-x-2">
            <p className="text-sm text-gray-400 font-semibold">Influencer Management</p>
          </div>
          <div className="tab-3 flex items-center space-x-2">
            <p className="text-sm text-gray-400 font-semibold">Ads Marketing</p>
          </div>
        </div>
        <div className="block-s-3 flex flex-col space-y-4">
          <div className="tab-1 flex items-center space-x-4">
            <p className="text-2xl font-semibold">MORE</p>
          </div>
          <a href="https://www.linkedin.com/in/neuform-technologies-434740322/" className="tab-2 flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
            <p className="text-sm text-gray-400 font-semibold">Linked In</p>
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
