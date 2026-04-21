import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section
      className="py-10 md:py-16 relative bg-cover bg-right bg-no-repeat bg-gray-50"
      style={{ backgroundImage: 'linear-gradient(to right, rgba(249,250,251,1) 0%, rgba(249,250,251,1) 40%, rgba(249,250,251,0.85) 80%, rgba(249,250,251,0.3) 100%), url(/assets/img/about-bg.jpeg)' }}
    >

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center relative z-10">

        {/* Left Image Section (approx 4 columns on large screens) */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end pt-2">
          <img
            src="/assets/img/about-fr.jpeg"
            alt="Industrial Plant"
            className="w-full max-w-sm md:max-w-md h-auto object-cover"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%)',
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 25%)'
            }}
          />
        </div>

        {/* Right Text Section (approx 8 columns on large screens) */}
        <div className="lg:col-span-8 flex flex-col space-y-6 text-gray-800 text-sm md:text-base leading-relaxed">

          <h2 className="text-xl md:text-2xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2 inline-block self-start">
            Connecting Global Resources with Industrial Excellence.
          </h2>

          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed text-justify">
              Three Eye is a globally oriented trading and supply company specializing in the import and distribution of high-quality raw materials, chemicals, and industrial resources. With operational presence in Dhaka, Bangladesh and the United Arab Emirates, we ensure reliable sourcing and seamless supply solutions for modern industries. Our commitment to excellence, consistency, and long-term partnerships positions us as a trusted name in the global supply chain.
            </p>

            <div className="pt-4">
              <Link to="/about-us" className="inline-block bg-blue-900 hover:bg-black text-white px-6 py-2 rounded font-medium transition-colors shadow">
                Read More About Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;