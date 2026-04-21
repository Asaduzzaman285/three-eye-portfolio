import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, UserPlus, Lock, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Using new specified image links
const products = [
  { id: 'caustic-soda', name: 'Caustic Soda', image: 'https://www.gnal.co.in/writereaddata/Portal/Images/product-1.jpg' },
  { id: 'chlorine', name: 'Chlorine', image: 'https://www.gnal.co.in/writereaddata/Portal/Images/product-2.jpg' },
  { id: 'hydrogen', name: 'Hydrogen', image: 'https://www.gnal.co.in/writereaddata/Portal/Images/product-3.jpg' },
  { id: 'hydrochloric-acid', name: 'Hydrochloric Acid', image: 'https://www.gnal.co.in/writereaddata/Portal/Images/product-4.jpg' },
  { id: 'sodium-hypochlorite', name: 'Sodium Hypochlorite', image: 'https://www.gnal.co.in/writereaddata/Portal/Images/product-5.jpg' },
];

    // Categories moved to Products Page
const Partners: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  // Determine which 4 products to show
  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
        visible.push(products[(currentSlide + i) % products.length]);
    }
    return visible;
  };

  return (
    <section className="py-12 bg-white">
      {/* Container for intro */}
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Products Title */}
        <h2 className="text-center text-[#B92025] text-2xl md:text-3xl font-bold mb-3">
          Products
        </h2>

        {/* Tagline & Intro */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-lg font-semibold text-gray-800 mb-2">Quality Materials, Trusted Delivery.</p>
          <p className="text-sm md:text-base text-gray-600">We offer a comprehensive range of industrial materials and chemicals sourced from trusted global suppliers.</p>
        </div>
      </div>

      {/* Fluid width slider */}
      <div className="w-full relative mb-20 px-2 lg:px-4">
        {/* Left Arrow */}
        <button 
          onClick={prevSlide} 
          className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        {/* Inline CSS for sweeping shine hover effect */}
        <style dangerouslySetInnerHTML={{__html: `
          .shine-figure {
            position: relative;
            overflow: hidden;
          }
          .shine-figure::before {
            content: '';
            position: absolute;
            top: 0;
            left: -75%;
            z-index: 2;
            display: block;
            width: 50%;
            height: 100%;
            background: linear-gradient(
              to right,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.4) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            transform: skewX(-25deg);
            pointer-events: none;
          }
          .shine-figure:hover::before {
            animation: shine-sweep 0.75s ease-in-out;
          }
          @keyframes shine-sweep {
            0%   { left: -75%; }
            100% { left: 125%; }
          }
        `}} />

        {/* Grid of 4 Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10">
          {getVisibleProducts().map((p, idx) => (
            <div
              key={`${p.id}-${idx}`}
              className="relative group rounded-md shadow-sm border border-gray-100 aspect-[4/3] bg-gray-50 cursor-pointer"
            >
              {/* Inner image wrapper: this one gets overflow:hidden + shine */}
              <div className="shine-figure absolute inset-0 rounded-md overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent pointer-events-none z-10" />

                {/* Product name — slides up on hover */}
                <div className="absolute bottom-5 left-0 w-full text-center px-2 z-20 pointer-events-none transition-all duration-300 group-hover:bottom-12">
                  <h3 className="text-white font-bold text-sm md:text-base drop-shadow-md">
                    {p.name}
                  </h3>
                </div>
              </div>

              {/* Button lives OUTSIDE the overflow:hidden div */}
              <div className="absolute -bottom-5 group-hover:bottom-4 left-0 w-full flex justify-center transition-all duration-300 z-30 opacity-0 group-hover:opacity-100">
                <Link
                  to={`/products#${p.id}`}
                  className="bg-[#B92025] hover:bg-white hover:text-[#B92025] text-white text-xs md:text-sm font-semibold flex items-center gap-1.5 px-4 py-1.5 rounded shadow pointer-events-auto"
                >
                  Know More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide} 
          className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Container for lower content */}
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Expandable Categories removed per user request */}

        {/* Bottom Section: News & Tenders */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 relative">
            
          {/* News Column */}
          <div className="flex flex-col h-full">
            <h3 className="text-[#B92025] font-bold text-xl md:text-2xl mb-4 border-b border-gray-100 pb-3">
              News
            </h3>
            <div className="flex-grow pt-4 min-h-[120px]">
              <p className="text-sm text-gray-800">No Record Found</p>
            </div>
            <div className="flex justify-end items-center gap-4 border-t border-gray-100 pt-4 mt-auto">
              <button className="flex items-center text-sm text-gray-500 hover:text-gray-800 transition gap-1.5">
                Pause <Pause className="w-3.5 h-3.5" />
              </button>
              <button className="text-blue-800 text-sm font-medium border border-blue-800 px-4 py-1 hover:bg-blue-50 transition">
                View All
              </button>
            </div>
          </div>

          {/* Tenders Column */}
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-4">
              <h3 className="text-[#B92025] font-bold text-xl md:text-2xl">
                Tenders
              </h3>
              <div className="flex gap-4 text-xs font-semibold">
                <button className="flex items-center gap-1.5 text-blue-800 hover:opacity-80 transition">
                  <UserPlus className="w-4 h-4" /> Registration
                </button>
                <span className="text-gray-300">|</span>
                <button className="flex items-center gap-1.5 text-[#B92025] hover:opacity-80 transition">
                  <Lock className="w-4 h-4" /> Login
                </button>
              </div>
            </div>
            
            <div className="flex-grow pt-4">
              <p className="text-sm text-gray-800 mb-8">
                There is no tenders available right now
              </p>
              
              <ul className="text-[11px] md:text-xs space-y-3 leading-relaxed">
                <li className="flex items-start gap-2 text-[#B92025]">
                  <span className="mt-0.5 text-[8px]">▶</span>
                  <span>These tenders will be available for the registered vendors approved by GNAL.</span>
                </li>
                <li className="flex items-start gap-2 text-blue-500">
                  <span className="mt-0.5 text-[8px]">▶</span>
                  <span>These tenders will be available to all users, no registration OR approval required from GNAL.</span>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-end items-center gap-4 border-t border-gray-100 pt-4 mt-8">
              <button className="flex items-center text-sm text-gray-500 hover:text-gray-800 transition gap-1.5">
                Pause <Pause className="w-3.5 h-3.5" />
              </button>
              <button className="text-blue-800 text-sm font-medium border border-blue-800 px-4 py-1 hover:bg-blue-50 transition">
                View All
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;
