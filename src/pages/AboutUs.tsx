import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const AboutUs: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [aboutData, setAboutData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const API_BASE = import.meta.env.VITE_APP_API_BASE_URL || 'http://127.0.0.1:8000';

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/v1/public/portfolio/about`);
      if (res.data?.success && res.data.data) {
        setAboutData(res.data.data);
      }
    } catch (error) {
      console.error("Failed to load about us data:", error);
    } finally {
      setLoading(false);
    }
  };

  const baseSlides = aboutData?.slides && aboutData.slides.length > 0 
    ? [...aboutData.slides].sort((a: any, b: any) => (a.order || 0) - (b.order || 0))
    : [
        {
          title: "Introduction",
          content: "Three Eye is committed to delivering excellence in global sourcing and supply. Our core strength lies in importing high-quality materials and ensuring they reach our clients with efficiency and reliability."
        },
        {
          title: "Who We Are",
          content: "We are a professional trading and supply company focused on building long-term partnerships through trust, transparency, and consistent performance."
        },
        {
          title: "Our Approach",
          content: "We combine international sourcing expertise with local market understanding to deliver value-driven solutions tailored to evolving industrial needs."
        },
        {
          title: "Vision & Mission",
          content: "Vision: To become a leading regional supplier and solution provider across South Asia and the Middle East... Mission: To deliver high-quality minerals, raw materials & food grains..."
        }
      ];

  // Clone first slide at the end for circular effect
  const dynamicSlides = [...baseSlides, { ...baseSlides[0], id: -1 }];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (currentSlide >= dynamicSlides.length - 1) {
      setIsTransitioning(false);
      setCurrentSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setIsTransitioning(false);
      setCurrentSlide(dynamicSlides.length - 1);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentSlide(dynamicSlides.length - 2);
      }, 50);
    } else {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const pageTitle = aboutData?.right_title || "Connecting Global Resources with Industrial Excellence.";
  const pageImage = aboutData?.left_image_path ? `${API_BASE}${aboutData.left_image_path}` : "/assets/img/about-fr.jpeg";

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
              src={pageImage}
              alt="About Us"
              className="w-full max-w-sm md:max-w-md h-auto object-cover rounded shadow-lg"
            />
          </div>

          {/* Right Text Section */}
          <div className="lg:col-span-8 flex flex-col space-y-6 text-gray-800 text-sm md:text-base leading-relaxed overflow-hidden">
            <h2 className="text-xl md:text-2xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2 inline-block self-start">
              {pageTitle}
            </h2>

            {/* Slider Implementation */}
            <div className="flex flex-col relative w-full bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 min-h-[300px]">
              
              {/* Slides Container */}
              <div className="overflow-hidden relative w-full flex-grow">
                <div 
                  className="flex h-full"
                  style={{ 
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none'
                  }}
                  onTransitionEnd={handleTransitionEnd}
                >
                  {dynamicSlides.map((slide: any, idx: number) => (
                    <div key={idx} className="w-full h-full flex-shrink-0 px-2 lg:px-4">
                      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-4">{slide.title}</h3>
                      <div className="text-gray-700 leading-relaxed text-justify whitespace-pre-wrap">
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
                  {baseSlides.map((_: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsTransitioning(true);
                        setCurrentSlide(idx);
                      }}
                      className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                        (currentSlide % baseSlides.length) === idx ? 'bg-blue-900 scale-125' : 'bg-gray-300 hover:bg-gray-400'
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
