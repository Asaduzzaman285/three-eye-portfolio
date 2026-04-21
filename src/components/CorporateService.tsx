import React, { useEffect, useState } from 'react';
import { ArrowRight, Smartphone, MessageCircle, CreditCard, Zap, Trophy } from 'lucide-react';

const fallbackData = [
  {
    id: 1,
    title: "Wintext",
    description: "Bulk SMS messaging platform designed for businesses to reach thousands of customers instantly. Our service ensures high delivery rates and provides detailed analytics for your messaging campaigns.",
    link: "https://wintext.example.com/",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop&auto=format",
    icon: MessageCircle,
    gradient: "from-blue-500 to-emerald-400"
  },
  {
    id: 2,
    title: "Winfin",
    description: "We provide comprehensive mobile payment solutions that make paying your mobile phone bills quick, secure, and convenient. Our platform offers seamless integration with multiple carriers and payment methods.",
    link: "https://winfin.example.com/",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format",
    icon: Smartphone,
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    id: 3,
    title: "EPS",
    description: "EPS is a comprehensive internet-based payment gateway for e-commerce merchants. Since 2012, we've been providing secure, reliable payment processing solutions for businesses of all sizes.",
    link: "https://winpay.example.com/",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format",
    icon: CreditCard,
    gradient: "from-purple-500 to-pink-400"
  },
  {
    id: 4,
    title: "Omnichannel Services",
    description: "Our CPaaS (Communications Platform-as-a-Service) offers cloud-based communication solutions that integrate voice, video, messaging, and data across all channels for seamless customer experiences.",
    link: "https://omnichannel.example.com/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
    icon: Zap,
    gradient: "from-orange-500 to-red-400"
  },
  {
    id: 5,
    title: "Gamification and Loyalty",
    description: "Transform your customer engagement with our state-of-the-art loyalty and gamification platform. Increase retention, boost engagement, and reward your most valued customers effectively.",
    link: "https://loyalty.example.com/",
    image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop&auto=format",
    icon: Trophy,
    gradient: "from-indigo-500 to-purple-400"
  },
];

const CorporateService = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [currentProductId, setCurrentProductId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProducts(fallbackData);
      setCurrentProductId(fallbackData[0].id);
      setIsLoading(false);
    }, 500);
  }, []);

  const current = products.find((p) => p.id === currentProductId);

  if (isLoading) {
    return (
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded mb-8 w-1/2 mx-auto"></div>
            <div className="flex gap-4 mb-8 justify-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-10 bg-gray-200 rounded w-24"></div>
              ))}
            </div>
            <div className="h-80 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 font-poppins">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 leading-relaxed">
            <span className="text-[#2eb7f3]">Our</span>{" "}
            Best{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Corporate Services</span>
          </h2>
          <p className="text-center text-gray-600 mt-4 text-base max-w-2xl mx-auto">
            Discover our comprehensive suite of digital solutions designed to transform your business operations
          </p>
        </div>

        {/* Original Tab Design */}
        <div className="flex flex-wrap justify-center md:justify-center mb-8 border-b border-gray-300">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setCurrentProductId(product.id)}
              className={`text-xs md:text-sm font-semibold uppercase px-4 md:px-6 py-2.5 transition-all duration-300 focus:outline-none whitespace-nowrap ${
                currentProductId === product.id
                  ? "text-white bg-[#2eb7f3]"
                  : "text-gray-800 hover:text-[#2eb7f3]"
              }`}
              style={{
                borderBottom:
                  currentProductId === product.id
                    ? "3px solid #2eb7f3"
                    : "3px solid transparent",
              }}
            >
              {product.title.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Enhanced Content Card */}
        {current && (
          <div
            key={current.id}
            className="max-w-5xl mx-auto animate-fadeInUp"
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left side - Content */}
                <div className="p-5 md:p-7 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className={`inline-flex p-2.5 rounded-full bg-gradient-to-r ${current.gradient} mr-3`}>
                      <current.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                      {current.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                    {current.description}
                  </p>

                  <div>
                    <a
                      href={current.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r ${current.gradient} text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 group text-sm`}
                    >
                      Visit Service
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Right side - Custom Visual */}
                <div className="relative h-auto md:h-52 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${current.gradient} opacity-10`}></div>
                  
                  {/* Custom Visual for each service */}
                  {current.id === 1 && (
                    // Wintext - Bulk SMS Visual
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Message bubbles */}
                        <div className="space-y-3">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                              <div className={`px-4 py-2 rounded-2xl max-w-xs animate-fadeIn shadow-lg ${
                                i % 2 === 0 ? 'bg-white text-gray-800' : 'bg-gradient-to-r from-green-500 to-emerald-400 text-white'
                              }`} style={{ animationDelay: `${i * 0.3}s` }}>
                                <div className="flex items-center space-x-2">
                                  <MessageCircle className="w-3 h-3" />
                                  <div className={`h-2 ${i % 2 === 0 ? 'bg-gray-300' : 'bg-white/50'} rounded w-16`}></div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* Signal waves */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className={`w-${4 + i * 2} h-${4 + i * 2} border-2 border-green-400 rounded-full absolute animate-ping`} 
                                 style={{ animationDelay: `${i * 0.2}s` }}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {current.id === 2 && (
                    // Winfin - Mobile Payment Visual
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Phone mockup */}
                        <div className="w-32 h-56 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                          <div className="w-full h-full bg-white rounded-2xl relative overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-b ${current.gradient} opacity-20`}></div>
                            <div className="p-4 relative z-10">
                              <div className="text-center mb-4">
                                <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                                  <Smartphone className="w-4 h-4 text-white" />
                                </div>
                                <div className="text-xs font-bold text-gray-800">WinFin</div>
                              </div>
                              <div className="space-y-2">
                                <div className="h-2 bg-blue-200 rounded animate-pulse"></div>
                                <div className="h-2 bg-blue-300 rounded w-3/4 animate-pulse"></div>
                                <div className="h-8 bg-blue-500 rounded text-white flex items-center justify-center text-xs mt-4">
                                  Top Up
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Floating payment icons */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  )}
                  
                  {current.id === 3 && (
                    // Winpay - Payment Gateway Visual
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Credit card */}
                        <div className="w-48 h-30 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-2xl p-4 text-white relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                          <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                              <CreditCard className="w-6 h-6" />
                              <div className="text-xs font-bold">EPS</div>
                            </div>
                            <div className="space-y-2">
                              <div className="w-8 h-6 bg-yellow-400 rounded"></div>
                              <div className="text-xs tracking-wider">**** **** **** 1234</div>
                              <div className="flex justify-between text-xs">
                                <span>12/25</span>
                                <span>SECURE</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Transaction indicators */}
                        <div className="absolute -top-3 -right-3">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="absolute -bottom-3 -left-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {current.id === 4 && (
                    // Omnichannel - Communication Hub Visual
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Central hub */}
                        <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-400 rounded-full flex items-center justify-center shadow-2xl">
                          <Zap className="w-8 h-8 text-white" />
                        </div>
                        {/* Orbiting communication channels */}
                        {[
                          { icon: '📱', angle: 0, delay: 0 },
                          { icon: '💬', angle: 72, delay: 0.2 },
                          { icon: '📧', angle: 144, delay: 0.4 },
                          { icon: '📞', angle: 216, delay: 0.6 },
                          { icon: '🌐', angle: 288, delay: 0.8 }
                        ].map((item, i) => (
                          <div key={i} className="absolute w-12 h-12 animate-orbit" 
                               style={{ 
                                 ['--angle' as any]: `${item.angle}deg`,
                                 animationDelay: `${item.delay}s`,
                                 transformOrigin: '50% 60px'
                               }}>
                            <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center text-lg border-2 border-orange-200">
                              {item.icon}
                            </div>
                          </div>
                        ))}
                        {/* Connection lines */}
                        <div className="absolute inset-0 animate-pulse">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="absolute w-px h-12 bg-gradient-to-t from-orange-300 to-transparent"
                                 style={{ 
                                   transform: `rotate(${i * 72}deg)`,
                                   transformOrigin: 'bottom center',
                                   top: '10px',
                                   left: '50%'
                                 }}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {current.id === 5 && (
                    // Gamification & Loyalty Visual
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Trophy */}
                        <div className="w-24 h-32 relative">
                          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center shadow-2xl">
                            <Trophy className="w-8 h-8 text-white" />
                          </div>
                          <div className="w-20 h-12 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-lg mx-auto flex items-center justify-center text-white font-bold text-sm">
                            LEVEL UP!
                          </div>
                        </div>
                        {/* Floating rewards */}
                        {[
                          { icon: '⭐', x: -30, y: -20, delay: 0 },
                          { icon: '🏆', x: 35, y: -15, delay: 0.3 },
                          { icon: '🎯', x: -35, y: 25, delay: 0.6 },
                          { icon: '💎', x: 30, y: 30, delay: 0.9 },
                          { icon: '🔥', x: 0, y: -35, delay: 1.2 }
                        ].map((reward, i) => (
                          <div key={i} className="absolute text-2xl animate-float"
                               style={{ 
                                 left: `50%`,
                                 top: `50%`,
                                 transform: `translate(${reward.x}px, ${reward.y}px)`,
                                 animationDelay: `${reward.delay}s`
                               }}>
                            {reward.icon}
                          </div>
                        ))}
                        {/* Progress rings */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className={`absolute w-${32 + i * 8} h-${32 + i * 8} border-2 border-purple-300 rounded-full animate-spin-slow opacity-30`}
                                 style={{ animationDelay: `${i * 0.5}s` }}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Service badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${current.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                      <current.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                      <span className="text-sm font-semibold text-gray-800">{current.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { 
              opacity: 0; 
              transform: translateY(40px) scale(0.95); 
            }
            100% { 
              opacity: 1; 
              transform: translateY(0) scale(1); 
            }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateX(-10px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes orbit {
            0% { transform: rotate(var(--angle, 0deg)) translateX(60px) rotate(calc(-1 * var(--angle, 0deg))); }
            100% { transform: rotate(calc(var(--angle, 0deg) + 360deg)) translateX(60px) rotate(calc(-1 * (var(--angle, 0deg) + 360deg))); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(5deg); }
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards !important;
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s ease forwards;
          }
          .animate-orbit {
            animation: orbit 8s linear infinite;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default CorporateService;