import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const slides = [
  {
    title: "Introduction",
    content: (
      <p>
        Three Eye is committed to delivering excellence in global sourcing and supply. Our core strength lies in importing high-quality materials and ensuring they reach our clients with efficiency and reliability.
      </p>
    )
  },
  {
    title: "Who We Are",
    content: (
      <p>
        We are a professional trading and supply company focused on building long-term partnerships through trust, transparency, and consistent performance.
      </p>
    )
  },
  {
    title: "Our Approach",
    content: (
      <p>
        We combine international sourcing expertise with local market understanding to deliver value-driven solutions tailored to evolving industrial needs.
      </p>
    )
  },
  {
    title: "Vision & Mission",
    content: (
      <ul className="space-y-2 list-none">
        <li>
          <strong className="text-blue-900">Vision:</strong> To become a leading regional supplier and solution provider across South Asia and the Middle East, recognized for excellence, innovation, and trust, while driving sustainable industrial development and long-term partnerships.
        </li>
        <li>
          <strong className="text-blue-900">Mission:</strong> To deliver high-quality minerals, raw materials & food grains through reliable global sourcing, efficient logistics, and a strong customer-centric approach—ensuring value, consistency, and sustainable growth for our clients and partners.
        </li>
      </ul>
    )
  }
];

const AboutUs: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Banner section */}
      <div className="relative pt-32 pb-20 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 z-0">
          <img src="/assets/img/about-bg.jpeg" alt="About Banner" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">ABOUT US</h1>
          <p className="text-gray-300 text-sm">
            <a href="/" className="hover:text-white transition">Home</a> <span className="mx-2">&gt;</span>
            <span className="text-[#39BBEF]">About Us</span>
          </p>
        </div>
      </div>

      <section
        className="py-16 md:py-24 relative bg-cover bg-right bg-no-repeat bg-gray-50 flex-grow"
        style={{ backgroundImage: 'linear-gradient(to right, rgba(249,250,251,1) 0%, rgba(249,250,251,1) 40%, rgba(249,250,251,0.85) 80%, rgba(249,250,251,0.3) 100%), url(/assets/img/about-bg.jpeg)' }}
      >
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Image Section */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end pt-2">
            <img
              src="/assets/img/about-fr.jpeg"
              alt="Industrial Plant"
              className="w-full max-w-sm md:max-w-md h-auto object-cover rounded shadow-lg"
            />
          </div>

          {/* Right Text Section */}
          <div className="lg:col-span-8 flex flex-col space-y-6 text-gray-800 text-sm md:text-base leading-relaxed overflow-hidden">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2 inline-block self-start">
              Connecting Global Resources with Industrial Excellence.
            </h2>

            {/* Slider Implementation */}
            <div className="flex flex-col relative w-full bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 min-h-[300px]">
              
              {/* Slides Container */}
              <div className="overflow-hidden relative w-full flex-grow">
                <div 
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, idx) => (
                    <div key={idx} className="w-full h-full flex-shrink-0 px-2 lg:px-4">
                      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-4">{slide.title}</h3>
                      <div className="text-gray-700 leading-relaxed text-justify">
                        {slide.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Navigation */}
              <div className="flex items-center justify-between mt-6 px-2 lg:px-4">
                
                <button 
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white text-blue-900 hover:bg-blue-900 hover:text-white transition-colors shadow flex items-center justify-center font-bold"
                  aria-label="Previous Slide"
                >
                  &larr;
                </button>

                {/* Dots indicator */}
                <div className="flex space-x-3">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                        currentSlide === idx ? 'bg-blue-900 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white text-blue-900 hover:bg-blue-900 hover:text-white transition-colors shadow flex items-center justify-center font-bold"
                  aria-label="Next Slide"
                >
                  &rarr;
                </button>

              </div>
              
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
