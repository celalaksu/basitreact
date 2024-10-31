import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ContactPage from '../pages/ContactPage';
import BlogPage from '../pages/BlogPage';


const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
};

export default Content;
