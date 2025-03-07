import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import PricingSection from "./PricingSection";

import NewsletterSignup from "./NewsletterSignup";
import { siteMetadata } from "@/lib/metadata";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteMetadata.title} />
        <meta name="twitter:description" content={siteMetadata.description} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <PricingSection />
          <NewsletterSignup /> {/* Include the component here */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
