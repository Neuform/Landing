import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import Navigation from '../components/Extras/Navigation'
import Footer from '../components/Extras/Footer'
import AboutUs from '../Pages/AboutUs'
import Career from '../Pages/Career'
import ContactUs from '../Pages/ContactUs'
import Portfolio from '../Pages/Portfolio'
import Services from '../Pages/Services'
import Blog from '../Pages/Blog'
import BlogDetails from '../Pages/BlogDetails'
import { Login } from '@mui/icons-material';
import LoginPage from '../Pages/Login';
import BlogAuthor from '../Pages/BlogAuthor';
import BlogRoutes from './BlogRoutes';

export default function MainRoutes() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/details/:id" element={<BlogDetails />} />
        {/* dynamic routes */}
        <Route path="/blog/*" element={<BlogRoutes />} />
      </Routes>
      <Footer/>
    </div>
  );
}