import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { 
  Smartphone, 
  Music, 
  Video, 
  Gamepad2, 
  MessageSquare, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Globe,
  TrendingUp,
  Play,
  Download,
  Heart,
  Gift,
  Sparkles,
  Building2,
  Crown,
  Phone,
  Mail,
  Calendar,
  Trophy
} from 'lucide-react';

const EntertainmentVAS = () => {
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const vasServices = [
    // {
    //   icon: <MessageSquare className="w-8 h-8" />,
    //   title: "SMS Services",
    //   description: "Premium SMS solutions including bulk messaging, promotional campaigns, and interactive text services",
    //   features: ["Bulk SMS", "Premium SMS", "SMS Gateway", "Two-way SMS"],
    //   color: "from-blue-500 to-cyan-500",
    //   bgImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
    // },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Entertainment Content",
      description: "Rich multimedia content including music, videos, games, and interactive entertainment services",
      features: ["Music Streaming", "Video Content", "Mobile Games", "Ringtones"],
      color: "from-purple-500 to-pink-500",
      bgImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Corporate Solutions",
      description: "Tailored VAS solutions for enterprises including bulk messaging, corporate top-up, and business communications",
      features: ["Corporate Bulk SMS", "Enterprise Top-up", "Business Communications", "Custom Solutions"],
      color: "from-green-500 to-emerald-500",
      bgImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    // {
    //   icon: <Gift className="w-8 h-8" />,
    //   title: "Bundle Packs",
    //   description: "Comprehensive entertainment bundles combining multiple services for enhanced user experience",
    //   features: ["Music + Video Packs", "Gaming Bundles", "Premium Content", "Exclusive Offers"],
    //   color: "from-orange-500 to-red-500",
    //   bgImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    // }
  ];

  const corporatePartners = [
  { name: "Grameenphone", logoUrl: "/assets/img/clients/Grameenphone.png", },
  { name: "Robi", logoUrl: "/assets/img/clients/robi.png",  },
  { name: "Banglalink", logoUrl: "/assets/img/clients/BL.png",  },
  { name: "Teletalk", logoUrl: "/assets/img/clients/TeleTalk.jpg",  },
  { name: "Airtel", logoUrl: "/assets/img/clients/Airtel.png",  },
  { name: "Samsung", logoUrl: "/assets/img/clients/samsung.png", },
  { name: "Huawei", logoUrl: "/assets/img/clients/Huawei.png",  },
  { name: "Nokia", logoUrl: "/assets/img/clients/nokia.png",  }
];

const topUpPartners = [
  { name: "bKash", logoUrl: "/assets/img/clients/bkash.png", color: "" },
  { name: "Nagad", logoUrl: "/assets/img/clients/nagad.png", color: "" },
  { name: "Rocket", logoUrl: "/assets/img/clients/unnamed.png", color: "" },
  { name: "City Bank", logoUrl: "/assets/img/clients/citybank.png", color: "" },
  { name: "Eastern Bank", logoUrl: "/assets/img/clients/esternbank.jpg", color: "" },
  { name: "Premier Bank", logoUrl: "/assets/img/clients/Premier Bank.png", color: "" },
  { name: "MTB", logoUrl: "/assets/img/clients/mtb.png", color: "" },
  { name: "DBBL Mobile", logoUrl: "/assets/img/clients/DBBL.png", color: "" }
];


  const stats = [
    { number: "20M+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Content Partners", icon: <Building2 className="w-6 h-6" /> },
    { number: "24/7", label: "Service Availability", icon: <Globe className="w-6 h-6" /> },
    { number: "99.9%", label: "Service Uptime", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const entertainmentCategories = [
    {
      title: "Music & Audio",
      items: ["Latest Songs", "Caller Tunes", "Music Videos", "Podcasts"],
      icon: <Music className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Video Content",
      items: ["Movie Trailers", "TV Shows", "Live Sports", "Music Videos"],
      icon: <Video className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Gaming",
      items: ["Mobile Games", "Trivia", "Puzzles", "Sports Games"],
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Interactive Services",
      items: ["Contests", "Voting", "Surveys", "Quiz Shows"],
      icon: <Trophy className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section with Carousel */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10" />
        
        {/* Floating Entertainment Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[Music, Video, Gamepad2, MessageSquare, Heart, Star].map((Icon, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.2}s`
              }}
            >
              <Icon className="w-4 h-4 text-purple-400/40" />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Smartphone className="w-8 h-8 text-purple-600 mr-3" />
              <span className="text-purple-600 font-semibold uppercase tracking-wider">VAS Entertainment</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
              Entertainment
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                VAS Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Delivering premium value-added services that entertain, engage, and connect millions of users. 
              From multimedia content to corporate solutions, we power the digital entertainment ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                <Play className="w-5 h-5" />
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 font-bold rounded-full text-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50"
              >
                <div className="flex justify-center mb-4 text-purple-600 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VAS Services Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">VAS Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive value-added services designed to enhance user experience 
              and drive engagement across all mobile platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {vasServices.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white border border-gray-100"
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="absolute inset-0">
                  <img 
                    src={service.bgImage} 
                    alt={service.title}
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>

                <div className="relative z-10 p-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entertainment Categories */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1d9ce0] via-[#39BBEF] text-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Entertainment Categories
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Diverse content categories designed to entertain and engage users across all demographics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {entertainmentCategories.map((category, index) => (
              <div key={index} className="group text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-center gap-2">
                      <Star className="w-3 h-3" />
                      <span className="text-sm opacity-90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partners Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Partners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with leading telecom operators and financial institutions 
              to deliver seamless VAS experiences.
            </p>
          </div>

          {/* Mobile Operators */}
          <div className="mb-16">
  <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Mobile Operators</h3>
  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
    {corporatePartners.map((partner, index) => (
      <div
        key={index}
        className="group text-center p-4 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-110 bg-gray-50"
      >
        <div className={`${partner} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
          {partner.logoUrl ? (
            <img
              src={partner.logoUrl}
              alt={partner.name}
              className="w-16 h-16 object-contain"
            />
          ) : (
            <span className="text-xs text-gray-400">No Logo</span>
          )}
        </div>
        <span className="text-sm font-semibold text-gray-700">{partner.name}</span>
      </div>
    ))}
  </div>
</div>


          {/* Top-up Partners */}
          <div>
  <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Top-up & Payment Partners</h3>
  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
    {topUpPartners.map((partner, index) => (
      <div
        key={index}
        className="group text-center p-4 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-110 bg-gray-50"
      >
        <div className={`${partner.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
          {partner.logoUrl ? (
            <img
              src={partner.logoUrl}
              alt={partner.name}
              className="w-16 h-16 object-contain"
            />
          ) : (
            <span className="text-xs text-gray-400">No Logo</span>
          )}
        </div>
        <span className="text-sm font-semibold text-gray-700">{partner.name}</span>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>

      {/* Bundle Packs Showcase */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premium Bundle Packs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive entertainment bundles combining multiple services for enhanced user experience and value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Entertainment Plus", 
                price: "৳99/month", 
                features: ["Unlimited Music", "HD Videos", "Premium Games", "SMS Package"],
                color: "from-pink-500 to-purple-500",
                popular: false
              },
              { 
                name: "Ultimate Pack", 
                price: "৳149/month", 
                features: ["All Entertainment Plus", "Live TV", "Sports Content", "Priority Support"],
                color: "from-blue-500 to-indigo-500",
                popular: true
              },
              { 
                name: "Corporate Bundle", 
                price: "Custom", 
                features: ["Bulk SMS", "Corporate Top-up", "Business Tools", "Dedicated Support"],
                color: "from-green-500 to-teal-500",
                popular: false
              }
            ].map((pack, index) => (
              <div key={index} className={`relative p-8 rounded-3xl shadow-xl border-2 transition-all duration-300 hover:scale-105 ${pack.popular ? 'border-yellow-400 bg-gradient-to-b from-yellow-50 to-white' : 'border-gray-200 bg-white'}`}>
                {pack.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${pack.color} text-white mb-6 shadow-lg`}>
                  <Gift className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pack.name}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-6">{pack.price}</div>

                <div className="space-y-3 mb-8">
                  {pack.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${pack.color} text-white font-bold hover:shadow-lg transition-all duration-300`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#39BBEF] via-[#1d9ce0] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Enhance Your VAS Experience?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Join millions of users enjoying premium entertainment and value-added services. 
            Discover endless possibilities with our comprehensive VAS solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-white text-black font-bold rounded-full text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              <Download className="w-5 h-5" />
              Get Started Today
            </button>
            <button className="px-10 py-4 border-2 border-white text-black font-bold rounded-full text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EntertainmentVAS;