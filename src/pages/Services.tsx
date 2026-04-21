import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Globe, Settings, FileCheck, Truck, Landmark } from 'lucide-react';

const services = [
  {
    title: 'Product Sourcing',
    icon: Globe,
    desc: 'We leverage a well-established international network to identify and secure high-quality materials with consistency and precision. Our sourcing approach is driven by reliability, competitive positioning, and long-term supplier alignment.',
    bgImage: '/assets/img/slider1.jpeg'
  },
  {
    title: 'Product Development',
    icon: Settings,
    desc: 'We collaborate closely with supply partners to develop and refine products according to specific requirements. Our focus remains on achieving exact specifications, maintaining quality integrity, and ensuring performance consistency across every batch.',
    bgImage: '/assets/img/slider2.jpeg'
  },
  {
    title: 'CNF (Clearing & Forwarding)',
    icon: FileCheck,
    desc: 'Our CNF operations are managed with meticulous attention to documentation, compliance, and regulatory procedures. We ensure smooth customs clearance and minimize operational delays through structured coordination and expertise.',
    bgImage: '/assets/img/slider3.jpeg'
  },
  {
    title: 'Logistics Management',
    icon: Truck,
    desc: 'We design and manage efficient logistics solutions that ensure the timely and secure movement of goods. From shipment planning to final delivery, every stage is executed with precision and operational discipline.',
    bgImage: '/assets/img/services.jpg'
  },
  {
    title: 'Banking Consultation',
    icon: Landmark,
    desc: 'We provide strategic guidance on trade-related financial processes, supporting clients with documentation, payment structuring, and banking coordination to ensure secure and streamlined transactions.',
    bgImage: '/assets/img/about-bg.jpeg'
  }
];

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-12">

        {/* SERVICES GRID (Main Focus at the very top) */}
        <section className="container mx-auto px-6 max-w-7xl mb-16">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1d3278] uppercase tracking-tight">
              Our Services
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group min-h-[350px]">
                  {/* Background Image layer */}
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay for high contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a1f] via-[#0a1538]/90 to-[#1d3278]/70 z-10"></div>

                  {/* Content layer */}
                  <div className="relative z-20 p-8 flex flex-col h-full">
                    <div className="flex items-center justify-start mb-6">
                      <Icon className="w-12 h-12 text-[#39BBEF] group-hover:text-white transition-colors duration-300" />
                    </div>
                    {/* Explicit text-white ensures it overrides global heading colors */}
                    <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">{service.title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed flex-grow drop-shadow">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SLOGAN & TEXTS (Simplified & more stylish) */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <div className="inline-block mb-6">
              <span className="bg-[#e8f4fc] text-[#1d3278] text-sm font-bold tracking-widest uppercase px-4 py-2 rounded-full">
                Precision & Excellence
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              Integrated Trade Solutions.<br className="hidden md:block" /> Executed with Precision.
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-light">
              Three Eye delivers a refined portfolio of services designed to support every stage of international sourcing and supply—combining expertise, coordination, and precision to ensure seamless execution.
            </p>
            <div className="w-24 h-1 bg-[#39BBEF] mx-auto rounded-full"></div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
