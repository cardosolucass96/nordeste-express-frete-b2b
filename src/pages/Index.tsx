
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import QuoteForm from '../components/QuoteForm';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <FAQ />
      <QuoteForm />
      <Footer />
    </div>
  );
};

export default Index;
