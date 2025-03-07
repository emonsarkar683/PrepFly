import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import NewsletterSignup from './NewsletterSignup';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <NewsletterSignup />
    </div>
  );
};

export default HomePage;