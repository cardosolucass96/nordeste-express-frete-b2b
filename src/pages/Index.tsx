
import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Coverage from '../components/Coverage';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import QuoteForm from '../components/QuoteForm';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Benefits />
      <Coverage />
      <Testimonials />
      <QuoteForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
