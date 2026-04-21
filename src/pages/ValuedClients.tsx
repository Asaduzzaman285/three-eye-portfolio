import React, { useState, useEffect } from 'react';
import { Star, Users, TrendingUp } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const clients = [
  { id: 1, logo: "/assets/img/clients/islamibank.jpeg", name: "Islami Bank" },
  { id: 2, logo: "/assets/img/clients/one-bank.png", name: "One Bank" },
  { id: 3, logo: "/assets/img/clients/SE-Bank.jpg", name: "SE Bank" },
  { id: 4, logo: "/assets/img/clients/IDLC.png", name: "IDLC" },
  { id: 5, logo: "/assets/img/clients/shwapno.jpg", name: "Shwapno" },
  { id: 6, logo: "/assets/img/clients/meena.png", name: "Meena" },
  { id: 7, logo: "/assets/img/clients/foodi.jpg", name: "Foodi" },
  { id: 8, logo: "/assets/img/clients/unicef.png", name: "UNICEF" },
  { id: 9, logo: "/assets/img/clients/robi.png", name: "Robi" },
  { id: 10, logo: "/assets/img/clients/BL.png", name: "BL" },
  { id: 11, logo: "/assets/img/clients/Airtel.png", name: "Airtel" },
  { id: 12, logo: "/assets/img/clients/TeleTalk.jpg", name: "TeleTalk" },
  { id: 13, logo: "/assets/img/clients/MGI-new.png", name: "MGI" },
  { id: 14, logo: "/assets/img/clients/aci.jpg", name: "ACI" },
  { id: 15, logo: "/assets/img/clients/sq-group.png", name: "SQ Group" },
  { id: 16, logo: "/assets/img/clients/nitol-niloy.jpg", name: "Nitol Niloy" },
  { id: 17, logo: "/assets/img/clients/rangs.jpg", name: "Rangs" },
  { id: 18, logo: "/assets/img/clients/cartup.png", name: "CartUp" },
  { id: 19, logo: "/assets/img/clients/reve-next.png", name: "Reve Next" },
  { id: 20, logo: "/assets/img/clients/ICP.png", name: "ICP" },
  { id: 21, logo: "/assets/img/clients/Circle.png", name: "Circle" },
  { id: 22, logo: "/assets/img/clients/NuPort-Logo-Orange-Grey.jpg", name: "NuPort" },
  { id: 23, logo: "/assets/img/clients/garibook.png", name: "Garibook" },
  { id: 24, logo: "/assets/img/clients/infobip-updated.png", name: "Infobip" },
  { id: 25, logo: "/assets/img/clients/marvel.jpg", name: "Marvel" },
  { id: 26, logo: "/assets/img/clients/centili.jpg", name: "Centili" },
  { id: 27, logo: "/assets/img/clients/eskima.PNG", name: "Eskima" },
  { id: 28, logo: "/assets/img/clients/ssd.png", name: "SSD" },
  { id: 29, logo: "/assets/img/clients/6D_Technologies.jpg", name: "6D Technologies" },
  { id: 30, logo: "/assets/img/clients/UC Logo.jpg", name: "UC" },
  { id: 31, logo: "/assets/img/clients/Grameenphone.png", name: "Grameenphone" },
  { id: 32, logo: "/assets/img/clients/Samsung.png", name: "Samsung" },
  { id: 33, logo: "/assets/img/clients/fresh.png", name: "Fresh" },
  { id: 34, logo: "/assets/img/clients/north.png", name: "North" },
  { id: 35, logo: "/assets/img/clients/screen.png", name: "Screen" },
  { id: 36, logo: "/assets/img/clients/artisan-modified.PNG", name: "Artisan" },
  { id: 37, logo: "/assets/img/clients/premier.jpg", name: "Premier" },
  { id: 38, logo: "/assets/img/clients/bay.png", name: "Bay" },
  { id: 39, logo: "/assets/img/clients/confidence.png", name: "Confidence" },
  { id: 40, logo: "/assets/img/clients/best.jpg", name: "Best" },
  { id: 41, logo: "/assets/img/clients/ifad.jpg", name: "IFAD" },
  { id: 42, logo: "/assets/img/clients/ssg.jpg", name: "SSG" },
  { id: 43, logo: "/assets/img/clients/talent.png", name: "Talent" },
  { id: 44, logo: "/assets/img/clients/AMISHEE.jpg", name: "AMISHEE" }
];

const ValuedClients = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute('data-id');
            if (cardId) {
              setVisibleCards(prev => new Set([...Array.from(prev), cardId]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.client-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, label: "Trusted Clients", value: "44+" },
    { icon: Star, label: "Years of Excellence", value: "23+" },
    { icon: TrendingUp, label: "Success Rate", value: "98%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative text-center py-20 px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-[#1d9ce0] via-[#39BBEF] to-[#67d4ff] bg-clip-text text-transparent">Valued</span>
              <br />
              <span className="bg-gradient-to-r from-[#1d9ce0] via-[#39BBEF] to-[#67d4ff] bg-clip-text text-transparent">Clients</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ">
              Building success stories with industry leaders across banking, telecom, retail, and technology sectors
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 text-center">{stat.value}</h3>
              <p className="text-gray-600 text-center mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clients Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted by Industry Leaders</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={client.id}
              data-id={client.id}
              className={`client-card group relative bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 p-6 flex items-center justify-center cursor-pointer overflow-hidden ${
                visibleCards.has(String(client.id)) 
                  ? 'animate-slide-up opacity-100' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animationDelay: `${index * 50}ms`,
                transform: hoveredCard === client.id ? 'scale(1.05) translateY(-5px)' : ''
              }}
              onMouseEnter={() => setHoveredCard(client.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-blue-400/10 group-hover:via-purple-400/10 group-hover:to-pink-400/10 transition-all duration-500"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              {/* Logo */}
              <div className="relative z-10 w-full h-16 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const fallback = target.parentNode?.querySelector('.fallback-text') as HTMLElement;
                    target.style.display = 'none';
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
                />

                {/* Fallback for broken images */}
                <div className="fallback-text hidden w-full h-12 items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 rounded text-sm font-medium text-gray-600">
                  {client.name}
                </div>
              </div>

              {/* Hover Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-gray-800 text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap">
                  {client.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>

              {/* Floating particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 20}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '3s'
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#1d9ce0] via-[#39BBEF] to-[#67d4ff] rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-black mb-6 max-w-2xl mx-auto">
              Partner with us and experience the excellence that these industry leaders trust.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <Footer />
      
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ValuedClients;