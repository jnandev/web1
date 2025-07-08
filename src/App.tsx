import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CoreBeliefs from './components/Work';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Service Landing Pages
import RetailMarketingPage from './pages/RetailMarketingPage';
import EcommercePage from './pages/EcommercePage';
import RealEstateMarketingPage from './pages/RealEstateMarketingPage';
import BrandDevelopmentPage from './pages/BrandDevelopmentPage';
import DigitalAdvertisingPage from './pages/DigitalAdvertisingPage';
import SocialMediaPage from './pages/SocialMediaPage';

// Additional Pages
import CaseStudiesPage from './pages/CaseStudiesPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ResourcesPage from './pages/ResourcesPage';

// Core Beliefs Pages
import EveryBusinessDeservesToWinPage from './pages/EveryBusinessDeservesToWinPage';
import AuthenticityOverEverythingPage from './pages/AuthenticityOverEverythingPage';
import InnovationDrivesGrowthPage from './pages/InnovationDrivesGrowthPage';
import CommunityOverCompetitionPage from './pages/CommunityOverCompetitionPage';
import ResultsSpeakLouderPage from './pages/ResultsSpeakLouderPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <CoreBeliefs />
      <Testimonials />
      <About />
      <Newsletter />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/resources" element={<ResourcesPage />} />

            {/* Services Pages */}
            <Route path="/services/retail-marketing" element={<RetailMarketingPage />} />
            <Route path="/services/ecommerce" element={<EcommercePage />} />
            <Route path="/services/real-estate" element={<RealEstateMarketingPage />} />
            <Route path="/services/brand-development" element={<BrandDevelopmentPage />} />
            <Route path="/services/digital-advertising" element={<DigitalAdvertisingPage />} />
            <Route path="/services/social-media" element={<SocialMediaPage />} />

            {/* Belief Pages */}
            <Route path="/beliefs/every-business-deserves-to-win" element={<EveryBusinessDeservesToWinPage />} />
            <Route path="/beliefs/authenticity-over-everything" element={<AuthenticityOverEverythingPage />} />
            <Route path="/beliefs/innovation-drives-growth" element={<InnovationDrivesGrowthPage />} />
            <Route path="/beliefs/community-over-competition" element={<CommunityOverCompetitionPage />} />
            <Route path="/beliefs/results-speak-louder" element={<ResultsSpeakLouderPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
