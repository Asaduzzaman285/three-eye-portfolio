import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

interface CarouselItem {
  id: number;
  image: string;
}

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselItems, setCarouselItems] = useState<CarouselItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const API_BASE = import.meta.env.VITE_APP_API_BASE_URL || 'http://127.0.0.1:8000';

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/v1/public/portfolio/heroes`);
        let items = [];
        if (res.data?.success && res.data.data.length > 0) {
          items = res.data.data.map((hero: any) => ({
            id: hero.id,
            image: hero.image_path ? `${API_BASE}${hero.image_path}` : "/assets/img/slider1.jpeg"
          }));
        } else {
          items = [
            { id: 1, image: "/assets/img/slider1.jpeg" },
            { id: 2, image: "/assets/img/slider2.jpeg" },
            { id: 3, image: "/assets/img/slider3.jpeg" }
          ];
        }
        
        // Add a clone of the first item at the end for circular effect
        setCarouselItems([...items, { ...items[0], id: -1 }]);
      } catch (error) {
        console.error("Failed to load hero slides:", error);
        const fallbacks = [
            { id: 1, image: "/assets/img/slider1.jpeg" },
            { id: 2, image: "/assets/img/slider2.jpeg" },
            { id: 3, image: "/assets/img/slider3.jpeg" }
        ];
        setCarouselItems([...fallbacks, { ...fallbacks[0], id: -1 }]);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  useEffect(() => {
    if (carouselItems.length > 1) {
      const interval = setInterval(() => {
        goToNext();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [carouselItems, currentSlide]);

  const goToNext = () => {
    if (carouselItems.length === 0) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const handleTransitionEnd = () => {
    // If we reached the clone (last item), jump back to the real first item instantly
    if (currentSlide >= carouselItems.length - 1) {
      setIsTransitioning(false);
      setCurrentSlide(0);
    }
  };

  const goToPrevious = () => {
    if (carouselItems.length === 0) return;
    if (currentSlide === 0) {
        // Jump to clone instantly, then animate to real last
        setIsTransitioning(false);
        setCurrentSlide(carouselItems.length - 1);
        setTimeout(() => {
            setIsTransitioning(true);
            setCurrentSlide(carouselItems.length - 2);
        }, 50);
    } else {
        setIsTransitioning(true);
        setCurrentSlide((prev) => prev - 1);
    }
  };

  if (loading) {
    return (
      <section className="h-[calc(100vh-140px)] bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[calc(100vh-130px)] overflow-hidden bg-gray-900">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-0 left-0 flex w-full h-full"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: isTransitioning ? 'transform 1000ms ease-in-out' : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="relative w-full h-full flex-shrink-0">
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] hover:scale-105"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />
              <div className="absolute inset-0 bg-[#002f2f]/40 mix-blend-multiply" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/90 text-white rounded-full p-3 md:p-4 transition-all duration-300 border border-white/40 shadow-2xl"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/90 text-white rounded-full p-3 md:p-4 transition-all duration-300 border border-white/40 shadow-2xl"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10 text-white" />
      </button>

      {/* Main Content Overlay */}
      <div className="relative z-20 flex items-center justify-center h-full w-full pointer-events-none px-4">
        <div className="flex items-center space-x-2 md:space-x-8 pointer-events-auto">
          {/* Left Logo Box */}
          {/* <div className="bg-white p-3 md:p-6 w-24 h-24 md:w-40 md:h-40 flex items-center justify-center shadow-2xl z-30">
           
            <div className="text-center font-bold text-blue-800 text-xs md:text-sm">
              <img src="assets/img/example.img" alt="GACL" className="w-full max-h-full object-contain mb-1 hidden" />
              GACL
            </div>
          </div> */}

          {/* Middle Circle Logo & Animated Arrows */}
          <div className="relative w-64 h-64 md:w-[380px] md:h-[380px] rounded-full bg-white/20 backdrop-blur-md shadow-2xl flex items-center justify-center border border-white/30 z-30">
            {/* Spinning Arrows SVG Background */}
            <div className="absolute inset-0 animate-[spin_10s_linear_infinite] z-0 pointer-events-none flex items-center justify-center p-2">
              <svg className="w-full h-full drop-shadow-md" viewBox="0 0 200 200">
                {/* Single continuous circular path for the spinner. Starts at Left (12,100), clockwise. */}
                <path id="circlePath" d="M 12,100 A 88,88 0 1,1 188,100 A 88,88 0 1,1 12,100" fill="none" stroke="none" />
                
                <text fill="#FB9417" fontSize="18" fontWeight="800" letterSpacing="5">
                  <textPath href="#circlePath" startOffset="25%" textAnchor="middle">
                    DELIVERING
                  </textPath>
                </text>

                <text fill="#18C4F2" fontSize="18" fontWeight="800" letterSpacing="5">
                  <textPath href="#circlePath" startOffset="75%" textAnchor="middle">
                    SUCCESS
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Core Solid White Circle Container */}
            <div className="w-[160px] h-[160px] md:w-[280px] md:h-[280px] bg-white rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] border-4 md:border-8 border-white/60 relative z-10 p-2 md:p-6">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-4">
                {/* Three Eye Logo */}
                <img src="/assets/img/three-eye-up-logo.jpg" alt="Three Eye Logo" className="w-[85%] h-[85%] object-contain" />
              </div>
            </div>
          </div>

          {/* Right Logo Box */}
          {/* <div className="bg-white p-3 md:p-6 w-24 h-24 md:w-40 md:h-40 flex items-center justify-center shadow-2xl z-30">
         
            <div className="text-center font-bold text-red-700 text-xs md:text-sm">
              <img src="assets/img/example.img" alt="NALCO" className="w-full max-h-full object-contain mb-1 hidden" />
              NALCO
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;