import React, { useEffect, useState } from 'react';

const Clients: React.FC = () => {
  const clients = [
    { id: 1, logo: "/assets/img/clients/islamibank.jpeg" },
    { id: 2, logo: "/assets/img/clients/one-bank.png" },
    { id: 3, logo: "/assets/img/clients/SE-Bank.jpg" },
    { id: 4, logo: "/assets/img/clients/IDLC.png" },
    { id: 5, logo: "/assets/img/clients/shwapno.jpg" },
    { id: 6, logo: "/assets/img/clients/meena.png" },
    { id: 7, logo: "/assets/img/clients/foodi.jpg" },
    { id: 8, logo: "/assets/img/clients/unicef.png" },
    { id: 9, logo: "/assets/img/clients/robi.png" },
    { id: 10, logo: "/assets/img/clients/BL.png" },
    { id: 11, logo: "/assets/img/clients/Airtel.png" },
    { id: 12, logo: "/assets/img/clients/TeleTalk.jpg" },
    { id: 13, logo: "/assets/img/clients/MGI-new.png" },
    { id: 14, logo: "/assets/img/clients/aci.jpg" },
    { id: 15, logo: "/assets/img/clients/sq-group.png" },
    { id: 16, logo: "/assets/img/clients/nitol-niloy.jpg" },
    { id: 17, logo: "/assets/img/clients/rangs.jpg" },
    { id: 18, logo: "/assets/img/clients/cartup.png" },
    { id: 19, logo: "/assets/img/clients/reve-next.png" },
    { id: 20, logo: "/assets/img/clients/ICP.png" },
    { id: 21, logo: "/assets/img/clients/Circle.png" },
    { id: 22, logo: "/assets/img/clients/NuPort-Logo-Orange-Grey.jpg" },
    { id: 23, logo: "/assets/img/clients/garibook.png" },
    { id: 24, logo: "/assets/img/clients/infobip-updated.png" },
    { id: 25, logo: "/assets/img/clients/marvel.jpg" },
    { id: 26, logo: "/assets/img/clients/centili.jpg" },
    { id: 27, logo: "/assets/img/clients/eskima.PNG" },
    { id: 28, logo: "/assets/img/clients/ssd.png" },
    { id: 29, logo: "/assets/img/clients/6D_Technologies.jpg" },
    { id: 30, logo: "/assets/img/clients/UC Logo.jpg" },
    { id: 31, logo: "/assets/img/clients/Grameenphone.png" },
    { id: 32, logo: "/assets/img/clients/Samsung.png" },
    { id: 33, logo: "/assets/img/clients/fresh.png" },
    { id: 34, logo: "/assets/img/clients/north.png" },
    { id: 35, logo: "/assets/img/clients/screen.png" },
    { id: 36, logo: "/assets/img/clients/artisan-modified.PNG" },
    { id: 37, logo: "/assets/img/clients/premier.jpg" },
    { id: 38, logo: "/assets/img/clients/bay.png" },
    { id: 39, logo: "/assets/img/clients/confidence.png" },
    { id: 40, logo: "/assets/img/clients/best.jpg" },
    { id: 41, logo: "/assets/img/clients/ifad.jpg" },
    { id: 42, logo: "/assets/img/clients/ssg.jpg" },
    { id: 43, logo: "/assets/img/clients/talent.png" },
    { id: 44, logo: "/assets/img/clients/AMISHEE.jpg" }
  ];

  const totalDots = 5;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(6);

  // Track screen size for responsive behavior
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(2); // Mobile: 2 slides
      } else if (window.innerWidth < 768) {
        setSlidesPerView(3); // Small tablet: 3 slides
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(4); // Tablet: 4 slides
      } else {
        setSlidesPerView(6); // Desktop: 6 slides (keep original)
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  // Extended array for infinite loop effect (triplicated)
  const extendedClients = [...clients, ...clients, ...clients];
  const startIndex = clients.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex >= clients.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(clients.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    } else if (currentIndex < clients.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(clients.length * 2 - 1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    }
  }, [currentIndex, clients.length]);

  // Dot click
  const goToSlide = (dotIndex: number) => {
    setCurrentIndex(startIndex + dotIndex);
  };

  // Active dot based on currentIndex mod totalDots
  const activeDot = (currentIndex % totalDots);

  // Get responsive width classes
  const getResponsiveClasses = () => {
    return {
      container: 'w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6',
      // For mobile (default): w-1/2 (50% width = 2 per row)
      // For sm and above: w-1/6 (original desktop behavior)
    };
  };

  return (
    <section id="clients" className="py-8 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            Our Valued <span className="text-blue-600 font-bold"> Clients</span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
          >
            {extendedClients.map((client, idx) => (
              <div 
                key={`${client.id}-${idx}`} 
                className="flex-shrink-0 px-1 sm:px-2"
                style={{ width: `${100 / slidesPerView}%` }}
              >
                <div className="bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center aspect-[3/2] p-2 sm:p-3">
                  <img
                    src={client.logo}
                    alt={`Partner Logo ${client.id}`}
                    className="max-h-[60%] max-w-[90%] w-auto h-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                activeDot === i ? 'bg-red-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;