
import React from 'react';

import Hero from '../components/Hero';

import Services from '../components/Services';
import About from '../components/About';

import Footer from '../components/Footer';

import Header from '@/components/Header';
import Clients from '@/components/Clients';
// import Portfolio from '@/components/Portfolio';
import Products from '@/components/Products';
import Banner from '@/components/Banner';
import CorporateService from '@/components/CorporateService';
import Partners from '@/components/Partners';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      {/* <Services /> */}
      <Products />
      <Partners />
      {/* <Clients/> */}
      {/* <Features /> */}
      {/* <Banner/> */}
      {/* <CorporateService/> */}
      {/* <Portfolio/> */}


      <Footer />
    </div>
  );
};

export default Index;
