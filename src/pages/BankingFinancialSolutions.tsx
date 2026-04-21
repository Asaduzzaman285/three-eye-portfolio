import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { 
  CreditCard, 
  Shield, 
  Smartphone, 
  Globe, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Lock,
  Zap,
  QrCode,
  Link,
  Banknote
} from 'lucide-react';

const BankingFinancialSolutions = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Multiple Payment Methods",
      description: "Accept payments from bKash, Nagad, MCash, Rocket, VISA, MasterCard, AmEx, and more",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <QrCode className="w-8 h-8" />,
      title: "QR Based Solutions",
      description: "Modern QR code payment solutions for seamless transactions",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "Payment Link Generation",
      description: "Generate secure payment links for easy customer transactions",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure Transactions",
      description: "Bank-grade security with advanced encryption and fraud protection",
      color: "from-orange-500 to-red-600"
    }
  ];

  const stats = [
    { number: "20+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "7", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "2012", label: "Since Operating", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "100%", label: "Secure Payments", icon: <Lock className="w-6 h-6" /> }
  ];

  // 🔄 Updated Payment Methods (lucide icons, no emojis, no colors)
 const paymentMethods = [
  { name: "bKash", img: "/assets/img/clients/bkash.png" },
  { name: "Nagad", img: "/assets/img/clients/nagad.png" },
  { name: "MCash", img: "/assets/img/clients/mcash.png" },
  { name: "Rocket", img: "/assets/img/clients/unnamed.png" },
  { name: "VISA", img: "/assets/img/clients/visa.png" },
  { name: "MasterCard", img: "/assets/img/clients/mastercard.png" },
  { name: "AmEx", img: "/assets/img/clients/AmEx.png" },
  { name: "Diners Club", img: "/assets/img/clients/dinnersclus.jpg" }
];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${15 + i * 20}%`,
                top: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            >
              <div className="w-3 h-3 bg-blue-400/30 rounded-full" />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Banknote className="w-8 h-8 text-blue-600 mr-3" />
              <span className="text-blue-600 font-semibold uppercase tracking-wider">Financial Innovation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-8 leading-tight">
              Banking &<br />
              <span className="bg-gradient-to-r from-[#1d9ce0] via-[#39BBEF] to-[#67d4ff] bg-clip-text text-transparent">
                Financial Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Empowering businesses with comprehensive payment solutions through our flagship platform
              <strong className="text-blue-600 font-bold"> EPS</strong>. Experience seamless transactions 
              with cutting-edge technology backed by 20+ years of expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://winfinbd.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-[#1d9ce0] via-[#39BBEF] text-black font-bold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                Explore EPS Platform
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-full text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-blue-100">
                  <div className="flex justify-center mb-4 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WinPay Feature Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Introducing <span className="bg-gradient-to-r from-[#1d9ce0] via-[#39BBEF] to-[#67d4ff] bg-clip-text text-transparent"
>EPS Strategic Partnered With Wintel</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your comprehensive payment gateway solution, backed by Wintel Limited's 20 years of excellence 
              in mobile value-added services across multiple international markets.
            </p>
          </div>

          {/* Interactive Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  activeFeature === index ? 'shadow-2xl' : 'shadow-lg hover:shadow-xl'
                } bg-white border border-gray-100`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-5 rounded-3xl transition-opacity duration-300 ${
                  activeFeature === index ? 'opacity-10' : ''
                }`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white mb-6 shadow-lg`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Methods Showcase */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
  {paymentMethods.map((method, index) => (
    <div
      key={index}
      className="group text-center p-4 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-110"
    >
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gray-100 mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
        <img 
          src={method.img} 
          alt={method.name} 
          className="max-w-full max-h-full object-contain" 
        />
      </div>
      <span className="text-sm font-semibold text-gray-700">{method.name}</span>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
                <h2 className="text-4xl font-bold text-gray-900">Global Reach</h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Wintel Limited operates across multiple international markets, delivering comprehensive 
                content and services to customers worldwide. Our expertise spans from Bangladesh to 
                Pakistan, Nepal, Egypt, Malaysia, Middle East, and Canadian markets.
              </p>

              <div className="space-y-4">
                {[
                  "Leading mobile value-added service provider",
                  "20+ years of industry experience",
                  "Operating with all mobile operators",
                  "Continuous service upgrades and innovations"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 px-8 py-4 bg-gradient-to-r from-[#1d9ce0] via-[#39BBEF] text-black font-bold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                Explore Our Services
                <Zap className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl" />
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Countries We Serve</h3>
                  <div className="grid grid-cols-2 gap-4 text-left">
                    {['🇧🇩 Bangladesh', '🇵🇰 Pakistan', '🇳🇵 Nepal', '🇪🇬 Egypt', '🇲🇾 Malaysia', '🏢 Middle East', '🇨🇦 Canada', '🌍 Expanding...'].map((country, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                        <span className="font-medium text-gray-700">{country}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1d9ce0] via-[#39BBEF] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Payment Experience?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join thousands of merchants who trust EPS for their payment processing needs.
            Experience the future of financial transactions today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://winfinbd.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get Started with EPS
            </a>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default BankingFinancialSolutions;
