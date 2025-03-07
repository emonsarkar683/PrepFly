import React from "react";
import Hero from "./Hero";
import Features from "./Features";

import Testimonials from "./Testimonials";
import NewsletterSignup from "./NewsletterSignup";
import PricingSection from "./PricingSection"; // Added import

import { Helmet } from "react-helmet";
// Removed duplicate imports: import Hero from "./Hero"; import Features from "./Features"; import FeatureCards from "./FeatureCards";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

//const HomePage = () => { ... }; // Removed the first HomePage component, using the second one instead.

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <PricingSection /> {/* Added PricingSection */}
      <NewsletterSignup />
    </div>
  );
};

export default HomePage;
